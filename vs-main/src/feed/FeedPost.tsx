import { format } from 'date-fns';
import useSession from 'src/hooks/useSession';
import Link from 'next/link';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { AiFillHeart } from 'react-icons/ai';
import { FaRegComment } from 'react-icons/fa';
import { MdOutlineShare } from 'react-icons/md';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import Slider from 'react-slick';
import { commentOnAPost, listCommentsOnAPost } from 'services/comment.service';
import {
  Comment as CommentType,
  CommentOnAPostMutation,
  CommentOnAPostMutationVariables,
  ListCommentsOnAPostQuery,
  Maybe,
  Post as PostType,
} from 'services/types/generated';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import useIsPageAdmin from 'src/hooks/useIsPageAdmin';
import PostOptionsDropdown from 'src/modals/PostOptionsDropdown';
import useIsLoggedIn from 'src/hooks/useIsLoggedIn';
import Like from 'src/post/Like';
import Comment from 'src/post/Comment';
import ShareModal from 'src/modals/ShareModal';
import ImageModal from 'src/modals/ImageModal';
import { Avatar } from 'src/components/custom/avatar';

type PostProps = {
  data?: Maybe<PostType>;
  rounded?: boolean;
};

type Inputs = {
  comment: string;
};

const settings = {
  dots: true,
  infinite: true,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 3000,
  speed: 500,
};

export default function Post(props: PostProps) {
  const { data, rounded = true } = props;
  const [showCommentBox, setShowCommentBox] = useState<boolean>(true);
  const [showComments, setShowComments] = useState<boolean>(true);
  const [isShareModoalOpen, setIsShareModoalOpen] = useState(false);
  const [likeCount, setLikeCount] = useState(data?.likesCount || 0);
  const [commentsCount, setCommentsCount] = useState<number>(
    data?.commentsCount || 0
  );
  const queryClient = useQueryClient();
  const { isAdmin } = useIsPageAdmin(data?.author);
  const { loggedIn, navigateToLogin } = useIsLoggedIn();
  const { session } = useSession();

  // query comments
  const onSuccess = (data: ListCommentsOnAPostQuery) => {
    // console.log({ commentsList: data });
  };

  const { isLoading, data: commentsData } = useQuery<
    ListCommentsOnAPostQuery,
    unknown
  >(['comments', data?.id], listCommentsOnAPost, {
    onSuccess,
    enabled: showComments,
  });

  const { register, handleSubmit, reset } = useForm<Inputs>();

  const onCreateCommentSuccess = (newCommentData: CommentOnAPostMutation) => {
    queryClient.setQueryData(['comments', data?.id], (old: any) => {
      const oldItems = old?.comments?.items || [];
      const items = [{ ...newCommentData.newComment }, ...oldItems];
      // console.log({ newCommentData, oldItems, items });
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

  const onCreateCommentError = (err: any) => {
    setCommentsCount((count) => count - 1);
    // console.log({ err }, 'create post err');
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
      postId: data?.id || '',
      postAuthor: data?.author || '',
    });
  };

  const toggleShowComment = (e: React.MouseEvent) => {
    e.preventDefault();
    setShowComments((showComments) => !showComments);
  };

  const toggleShowCommentBox = (e: React.MouseEvent) => {
    e.preventDefault();
    setShowCommentBox((val) => !val);
  };

  return (
    <div
      id={`post-${data?.id}`}
      className={`space-y-4 bg-base-200 p-4 pb-6 border border-border dark:bg-dark-base-200 ${
        rounded ? 'md:rounded-xl' : ''
      } md:p-5`}
    >
      <div id="header" className="flex justify-between">
        <div className="flex gap-x-3">
          <div className="h-[46px] w-[46px] overflow-hidden rounded-full bg-base-100 dark:bg-dark-base-100">
            <Avatar
              size="sm"
              name={data?.authorDetails?.name}
              link={`/${
                (data?.creatorPage?.CreatorID &&
                  `/creator/${data?.creatorPage.CreatorID}`) ||
                (data?.venuePage?.VenueID &&
                  `/venue/${data?.venuePage?.VenueID}`) ||
                `/profile/${data?.authorDetails?.sub}`
              }`}
              src={
                data?.creatorPage?.CreatorImage ||
                data?.venuePage?.VenueProfileImage ||
                data?.authorDetails?.avatar
              }
            />
          </div>
          <div className="flex-1 text-sm">
            <h3 className="font-medium capitalize text-heading dark:text-dark-heading">
              <Link
                href={`/${
                  (data?.creatorPage?.CreatorID &&
                    `/creator/${data?.creatorPage.CreatorID}`) ||
                  (data?.venuePage?.VenueID &&
                    `/venue/${data?.venuePage?.VenueID}`) ||
                  `/profile/${data?.authorDetails?.sub}`
                }`}
              >
                {data?.creatorPage?.CreatorName ||
                  data?.venuePage?.VenueName ||
                  data?.authorDetails?.name ||
                  'Oblivia Gibson'}
              </Link>
            </h3>
            <p className="">
              {data?.createdAt
                ? format(new Date(data.createdAt), 'MMM dd y, hh:mm aaa')
                : '__'}
            </p>
          </div>
        </div>
        <div>
          <PostOptionsDropdown post={data} />
        </div>
      </div>
      <div id="body" className="space-y-4 text-sm">
        <p>{data?.content || ''}</p>
        <div className="relative">
          <div className="grid grid-cols-1">
            {!data?.images?.length ? (
              <div className="py-6"></div>
            ) : data.images.length === 1 ? (
              <div className="h-full aspect-w-16 aspect-h-9">
                <ImageModal
                  src={data.images?.[0] || '/assets/images/post-image.png'}
                  alt="post"
                  className="block object-cover w-full rounded-xl"
                />
              </div>
            ) : (
              <Slider {...settings}>
                {data?.images?.map((i: any) => (
                  <div className="h-full aspect-w-16 aspect-h-9" key={i}>
                    <ImageModal
                      src={i || '/assets/images/post-image.png'}
                      alt="post"
                      className="block object-cover w-full rounded-xl"
                    />
                  </div>
                ))}
              </Slider>
            )}
          </div>
          <div className="absolute bottom-0 flex items-center transform translate-y-1/3 gap-x-1">
            <Like
              setLikeCount={setLikeCount}
              authorId={session?.user?.sub || ''}
              postId={data?.id || ''}
              likedByAuthor={data?.isLikedByUser || false}
            />
            <button
              onClick={loggedIn ? toggleShowCommentBox : navigateToLogin}
              className="flex items-center justify-center duration-200 transform rounded-full cursor-pointer h-11 w-11 bg-primary hover:scale-105"
            >
              <FaRegComment className="text-xl text-primary-content" />
            </button>
            <button
              onClick={() => setIsShareModoalOpen(true)}
              className="flex items-center justify-center duration-200 transform rounded-full cursor-pointer h-11 w-11 bg-primary hover:scale-105"
            >
              <MdOutlineShare className="text-xl text-primary-content" />
            </button>
            <ShareModal
              sharesData={{
                id: data?.id,
                pageId: data?.pageId,
                shares: data?.shares || 0,
              }}
              isOpen={isShareModoalOpen}
              setIsOpen={setIsShareModoalOpen}
              title={'Share this Post'}
              twitterShare={{
                title: data?.content,
                url: `https://app.virtuoso.live/feed/${data?.id}`,
              }}
            />
          </div>
        </div>
        <div className="flex justify-between pt-4">
          <div className="flex items-center gap-x-5" id="post_stats">
            <div className="flex items-center gap-x-2">
              <AiFillHeart className="text-xl" />
              <span className="text-base font-medium font-heading">
                {likeCount}
              </span>
            </div>
            <button
              className="flex items-center gap-x-2"
              // onClick={toggleShowComment}
            >
              <FaRegComment className="text-lg" />
              <span className="text-base font-medium font-heading">
                {commentsCount}
              </span>
            </button>
            <div className="flex items-center gap-x-2">
              <MdOutlineShare className="text-xl" />
              <span className="text-base font-medium font-heading">
                {data?.shares || 0}
              </span>
            </div>
          </div>
          <div id="">
            <div className="flex gap-x-4">
              <div className="flex flex-1">
                {data?.likes?.slice(0, 5).map((i) => (
                  <div
                    key={i?.authorDetails?.sub}
                    className="w-8 h-8 -ml-2 overflow-hidden transform rounded-full cursor-pointer bg-base-100 outline outline-1 outline-offset-1 outline-base-300 hover:scale-105 dark:bg-dark-base-100 dark:outline-dark-base-300"
                  >
                    <Avatar
                      size="xs"
                      name={i?.authorDetails?.name}
                      link={`/profile/${i?.authorDetails?.sub || ''}`}
                      src={i?.authorDetails?.avatar}
                    />
                  </div>
                ))}
              </div>
              <div className="flex-1 hidden text-sm md:block">
                {data?.likesCount ? (
                  <>
                    <h3 className="font-medium capitalize cursor-pointer color-heading whitespace-nowrap">
                      {data?.likes?.slice(0, 1).map((i) => (
                        <Link
                          key={i?.authorDetails?.sub}
                          href={`/profile/${i?.authorDetails?.sub}`}
                        >
                          {i?.authorDetails?.name || 'Oblivia'}
                        </Link>
                      ))}
                    </h3>
                    <p className="whitespace-nowrap">
                      {data?.likesCount - 1 === 0
                        ? `liked this`
                        : `And ${data?.likesCount - 1} more liked this`}
                    </p>
                  </>
                ) : null}
              </div>
            </div>
          </div>
        </div>
        {showCommentBox && (
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex items-center justify-center gap-x-3"
          >
            <img
              src={session?.user?.avatar || '/imgs/avatar_feed.png'}
              className="block rounded-full h-9 w-9"
              alt="avatar"
            />
            <input
              {...register('comment')}
              className="c-input"
              placeholder="Write a Comment"
            />
          </form>
        )}
        {(isLoading || (!isLoading && isCreateCommentLoading)) && (
          <div className="">
            <div className="pt-4">
              <div className="flex space-x-2 comment-bouncing-loader">
                <div className="w-2 h-2 bg-primary/60"></div>
                <div className="w-2 h-2 bg-primary/60"></div>
                <div className="w-2 h-2 bg-primary/60"></div>
              </div>
            </div>
          </div>
        )}
        {!showComments &&
          !isLoading &&
          (data?.topComments?.items?.length || 0) > 0 && (
            <>
              <div className="py-2 space-y-5">
                {data?.topComments?.items?.map((i) => (
                  <Comment
                    isAdmin={isAdmin}
                    key={i?.id}
                    data={i as CommentType}
                    postId={data?.id}
                    setCommentsCount={setCommentsCount}
                  />
                ))}
              </div>
              <div className="flex items-center justify-center">
                <button
                  onClick={toggleShowComment}
                  className="block text-xs text-center transition-all duration-300 hover:text-primary"
                >
                  See More
                </button>
              </div>
            </>
          )}
        {showComments && !isLoading ? (
          <div className="">
            {commentsData?.comments?.items?.length ? (
              <div className="py-2 space-y-5">
                {commentsData?.comments?.items?.map((i) => (
                  <Comment
                    isAdmin={isAdmin}
                    setCommentsCount={setCommentsCount}
                    data={i as CommentType}
                    postId={data?.id}
                    key={i?.id}
                  />
                ))}
              </div>
            ) : (
              <div className="pt-4">
                <p className="flex items-center justify-center text-xs">
                  no comments on this post yet
                </p>
              </div>
            )}
          </div>
        ) : null}
      </div>
    </div>
  );
}
