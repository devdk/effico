import { formatDistance } from 'date-fns';
import { useMutation, useQueryClient } from 'react-query';
import { deleteAComment } from 'services/comment.service';
import {
  Comment as CommentType,
  DeleteACommentMutation,
  DeleteACommentMutationVariables,
} from 'services/types/generated';
import CommentOptionsDropdown from 'src/modals/CommentOptionsDropdown';

type TCommentProps = {
  data: CommentType;
  commentId: string | undefined;
  setCommentsCount: React.Dispatch<React.SetStateAction<number>>;
  postId: string | undefined;
  isAdmin: boolean;
};

export default function Reply({
  data,
  setCommentsCount,
  isAdmin,
  postId,
}: TCommentProps) {
  const queryClient = useQueryClient();

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

  const handleDeleteComment = (e: React.MouseEvent) => {
    setCommentsCount((count) => count - 1);
    deleteComment({
      id: data.id,
      postId: postId || '',
    });
  };

  return (
    <div key={data?.id} className="flex gap-x-3" id={`comment-${data?.id}`}>
      <img
        src={data?.authorDetails?.avatar || '/imgs/avatar_feed.png'}
        className="block w-8 h-8 rounded-full bg-white/10"
        alt="avatar"
      />
      <div className="flex-1 space-y-2">
        <div className="p-2 px-3 space-y-1 rounded-lg bg-white/10">
          <div className="flex justify-between">
            <h2 className="font-bold">{data?.authorDetails?.name}</h2>
            <CommentOptionsDropdown />
          </div>
          <p className="text-sm text-white/90">{data?.content}</p>
        </div>
        <div className="flex px-3 gap-x-4">
          {/* <p className="text-xs font-semibold cursor-pointer">Reply</p> */}
          <p className="text-xs text-white/80">
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
      </div>
    </div>
  );
}
