import { useState } from 'react';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { useMutation, useQueryClient } from 'react-query';
import { likeAPost, removeLikeOnAPost } from 'services/post.service';
import {
  LikeAPostMutation,
  LikeAPostMutationVariables,
  RemoveLikeOnAPostMutation,
  RemoveLikeOnAPostMutationVariables,
} from 'services/types/generated';
import useIsLoggedIn from 'src/hooks/useIsLoggedIn';

type TLikeProps = {
  likedByAuthor?: boolean;
  authorId: string;
  postId: string;
  setLikeCount: React.Dispatch<React.SetStateAction<number>>;
};

export default function Like({
  likedByAuthor = false,
  authorId,
  postId,
  setLikeCount,
}: TLikeProps) {
  const [liked, setLiked] = useState(likedByAuthor);
  const { loggedIn, navigateToLogin } = useIsLoggedIn();

  const queryClient = useQueryClient();

  const onRemoveLikeSettled = (data: any, error: any) => {
    queryClient.invalidateQueries('author-posts');
    queryClient.invalidateQueries('feed');
    queryClient.invalidateQueries('venue');
    queryClient.invalidateQueries('creator');
    if (error) {
      setLiked(true);
      setLikeCount((likeCount) => likeCount + 1);
    }
  };

  const { mutate: removeLike } = useMutation<
    RemoveLikeOnAPostMutation,
    unknown,
    RemoveLikeOnAPostMutationVariables
  >(removeLikeOnAPost, {
    mutationKey: 'remove-like-on-a-post',
    onSettled: onRemoveLikeSettled,
  });

  const onSettled = (data: any, error: any) => {
    queryClient.invalidateQueries('author-posts');
    queryClient.invalidateQueries('feed');
    queryClient.invalidateQueries('venue');
    queryClient.invalidateQueries('creator');
    if (error) {
      setLiked(false);
      setLikeCount((likeCount) => likeCount - 1);
      // console.log({ error });
    }
  };

  const { mutate } = useMutation<
    LikeAPostMutation,
    unknown,
    LikeAPostMutationVariables
  >(likeAPost, { mutationKey: 'like-a-post', onSettled });

  const handleLikeToggle = (e: React.MouseEvent) => {
    if (!authorId || !postId) return;

    if (liked) {
      removeLike({
        author: authorId,
        postId,
      });
      setLiked(false);
      setLikeCount((likeCount) => likeCount - 1);
      return;
    }

    mutate({
      author: authorId,
      postId,
    });

    setLiked(true);
    setLikeCount((likeCount) => likeCount + 1);
  };

  return (
    <div className="flex h-[56px] w-[56px] transform cursor-pointer items-center justify-center border border-border rounded-full bg-base-100 shadow-sm duration-200 hover:scale-105 dark:bg-dark-base-300">
      {liked ? (
        <AiFillHeart
          onClick={handleLikeToggle}
          className="text-3xl text-red-500 cursor-pointer"
        />
      ) : (
        <AiOutlineHeart
          onClick={loggedIn ? handleLikeToggle : navigateToLogin}
          className="text-3xl cursor-pointer"
        />
      )}
    </div>
  );
}
