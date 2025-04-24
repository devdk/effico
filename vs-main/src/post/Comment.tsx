import { formatDistance } from 'date-fns';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useMutation, useQueryClient } from 'react-query';
import { deleteAComment, replyOnAComment } from 'services/comment.service';
import {
  Comment as CommentType,
  DeleteACommentMutation,
  DeleteACommentMutationVariables,
  ReplyOnACommentMutation,
  ReplyOnACommentMutationVariables,
} from 'services/types/generated';
import CommentOptionsDropdown from 'src/modals/CommentOptionsDropdown';
import Reply from './Reply';
import useSession from 'src/hooks/useSession';
import useIsLoggedIn from 'src/hooks/useIsLoggedIn';
import { Avatar } from 'src/components/custom/avatar';

type TCommentProps = {
  data: CommentType;
  setCommentsCount: React.Dispatch<React.SetStateAction<number>>;
  postId: string | undefined;
  isAdmin: boolean;
};

type Inputs = {
  reply: string;
};

export default function Comment({
  data,
  postId,
  isAdmin,
  setCommentsCount,
}: TCommentProps) {
  const [addReply, setAddReply] = useState(false);
  const { session } = useSession();
  const queryClient = useQueryClient();

  const { loggedIn, navigateToLogin } = useIsLoggedIn();

  const { register, handleSubmit, reset } = useForm<Inputs>();

  // DELETE A COMMENT MUTATION
  const onDeleteCommentSettled = (data: any, error: any) => {
    if (error) {
      return setCommentsCount((count) => count + 1);
    }
    queryClient.invalidateQueries(['comments', postId]);
  };

  const { mutate: deleteComment, isLoading: isDeleteCommentLoading } =
    useMutation<
      DeleteACommentMutation,
      unknown,
      DeleteACommentMutationVariables
    >(deleteAComment, {
      mutationKey: 'delete-a-comment',
      onSettled: onDeleteCommentSettled,
    });

  const handleDeleteComment = () => {
    setCommentsCount((count) => count - 1);
    deleteComment({
      id: data.id,
      postId: postId || '',
    });
  };

  // ADD A REPLY MUTATION
  const handleAddReplyClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setAddReply((addReply) => !addReply);
  };

  const onAddReplySuccess = () => {
    queryClient.invalidateQueries(['comments', postId]);
    // console.log({ postId });

    reset({
      reply: '',
    });
  };

  const onAddReplyError = (err: any) => {
    setCommentsCount((count) => count - 1);
    // console.log({ err }, 'create post err');
  };

  const { mutate, isLoading: isAddReplyLoading } = useMutation<
    ReplyOnACommentMutation,
    unknown,
    ReplyOnACommentMutationVariables
  >(replyOnAComment, {
    mutationKey: 'create-creator',
    onSuccess: onAddReplySuccess,
    onError: onAddReplyError,
  });

  // SUBMIT HANDLER
  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    setCommentsCount((count) => count + 1);
    mutate({
      author: session?.user?.sub || '',
      content: formData.reply,
      parentId: data.id,
      postAuthor: data.author,
      postId: postId || '',
    });
  };

  return (
    <>
      <div key={data?.id} className="flex gap-x-3" id={`comment-${data?.id}`}>
        <Avatar
          size="sm"
          name={data?.authorDetails?.name}
          link={`/profile/${data?.authorDetails?.sub || ''}`}
          src={data?.authorDetails?.avatar}
        />
        <div className="flex-1 space-y-2">
          <div className="p-2 px-3 space-y-1 border rounded-lg border-border bg-base-300 dark:bg-dark-base-300">
            <div className="flex items-center justify-between">
              <h2 className="font-bold capitalize">
                {data?.authorDetails?.name || 'User'}
              </h2>
              <CommentOptionsDropdown />
            </div>
            <p className="text-sm color-heading">{data?.content}</p>
          </div>
          <div className="flex px-3 gap-x-4">
            <button
              onClick={loggedIn ? handleAddReplyClick : navigateToLogin}
              className="text-xs font-semibold cursor-pointer"
            >
              Reply
            </button>
            <p className="text-xs color-heading">
              <span>
                {data?.createdAt
                  ? formatDistance(
                      new Date(data?.createdAt || Date.now()),
                      new Date(Date.now())
                    )
                  : '20 mins'}
              </span>
              <span className="inline-block ml-1">ago</span>
            </p>
          </div>
          {loggedIn && addReply && (
            <>
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex items-center justify-center py-2 gap-x-3"
              >
                <img
                  src={session?.user?.avatar || '/imgs/avatar_feed.png'}
                  className="block rounded-full h-9 w-9"
                  alt="avatar"
                />
                <input
                  {...register('reply')}
                  className="c-input"
                  placeholder="Add your reply"
                />
              </form>
              {isAddReplyLoading && (
                <div className="pt-2">
                  <div className="flex space-x-2 comment-bouncing-loader">
                    <div className="w-2 h-2 rounded bg-white/20"></div>
                    <div className="w-2 h-2 rounded bg-white/20"></div>
                    <div className="w-2 h-2 rounded bg-white/20"></div>
                  </div>
                </div>
              )}
            </>
          )}
          {data.replies?.items?.length ? (
            <div className="pt-4 space-y-4">
              {data.replies?.items?.map((i) => (
                <Reply
                  isAdmin={isAdmin}
                  setCommentsCount={setCommentsCount}
                  data={i as CommentType}
                  commentId={i?.id}
                  postId={postId}
                  key={i?.id}
                />
              ))}
            </div>
          ) : null}
        </div>
      </div>
    </>
  );
}
