import Image from 'next/image';
import React, { useEffect } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useMutation, useQueryClient } from 'react-query';
import { commentOnAPost } from 'services/comment.service';
import {
  CommentOnAPostMutation,
  CommentOnAPostMutationVariables,
} from 'services/types/generated';
import useSession from 'src/hooks/useSession';

type Inputs = {
  comment: string;
};

interface ICommentBoxProps {
  setCommentsCount: React.Dispatch<React.SetStateAction<number>>;
  setisCreateCommentLoading: React.Dispatch<React.SetStateAction<boolean>>;
  id: string;
  author: string;
}

export default function CommentBox({
  setCommentsCount,
  setisCreateCommentLoading,
  id,
  author,
}: ICommentBoxProps) {
  const queryClient = useQueryClient();

  const { session } = useSession();

  const { register, handleSubmit, reset } = useForm<Inputs>();

  const onCreateCommentSuccess = (newCommentData: CommentOnAPostMutation) => {
    queryClient.setQueryData(['comments', id], (old: any) => {
      const oldItems = old?.comments?.items || [];
      const items = [{ ...newCommentData.newComment }, ...oldItems];
      return {
        ...old,
        comments: {
          ...old?.comments,
          items,
        },
      };
    });
    reset({
      comment: '',
    });
  };

  const onCreateCommentError = () => {
    setCommentsCount((count) => count - 1);
  };

  const { mutate, isLoading: isCreateCommentLoading } = useMutation<
    CommentOnAPostMutation,
    unknown,
    CommentOnAPostMutationVariables
  >(commentOnAPost, {
    mutationKey: 'create-creator',
    onSuccess: onCreateCommentSuccess,
    onError: onCreateCommentError,
  });

  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    setCommentsCount((count) => count + 1);
    mutate({
      author: session?.user?.sub || '',
      content: formData.comment,
      postId: id || '',
      postAuthor: author || '',
    });
  };

  useEffect(() => {
    setisCreateCommentLoading(isCreateCommentLoading);
  }, [isCreateCommentLoading, setisCreateCommentLoading]);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex items-center justify-center gap-x-3"
    >
      <Image
        src={session?.user?.avatar || '/imgs/avatar_feed.png'}
        className="block rounded-full h-9 w-9"
        alt="avatar"
        quality={80}
        height={100}
        width={100}
      />
      <input
        {...register('comment')}
        className="c-input"
        placeholder="Write a Comment"
      />
    </form>
  );
}
