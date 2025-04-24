import { formatDistance } from 'date-fns';
import useSession from 'src/hooks/useSession';
import Image from 'next/image';
import Link from 'next/link';
import { useMutation, useQueryClient } from 'react-query';
import { createFriend, deleteFriendRequest } from 'services/friend.service';
import {
  CreateFriendMutation,
  CreateFriendMutationVariables,
  Maybe,
  Notification,
  RejectFriendRequestMutation,
  RejectFriendRequestMutationVariables,
} from 'services/types/generated';
import Loading from 'src/common/Loading';
import NotificationOptionsDropdown from './NotificationOptionsDropdown';

type TNotificationProps = {
  data: Maybe<Notification>;
};

export default function NotificationItem({ data }: TNotificationProps) {
  const { session } = useSession();
  const queryClient = useQueryClient();

  const revalidateNotifications = (data: any, error: any) => {
    queryClient.invalidateQueries(['notifications', session?.user?.sub]);
  };

  const { mutate: addFriend, isLoading: isAddFriendLoading } = useMutation<
    CreateFriendMutation,
    unknown,
    CreateFriendMutationVariables
  >(createFriend, {
    mutationKey: 'add-a-friend',
    onSettled: revalidateNotifications,
  });

  const handleApproveFriendRequest = (
    receiverId: string | undefined,
    senderId: string | undefined,
    requestId: string | undefined
  ) => {
    if (!receiverId || !senderId || !requestId) {
      return;
    }
    addFriend({
      userId: receiverId,
      friendId: senderId,
      requestId: requestId,
      notificationId: data?.id || '',
    });
  };

  const { mutate: deleteRequest, isLoading: isDeleteRequestLoading } =
    useMutation<
      RejectFriendRequestMutation,
      unknown,
      RejectFriendRequestMutationVariables
    >(deleteFriendRequest, {
      mutationKey: 'delete-a-request',
      onSettled: revalidateNotifications,
    });

  const handleRejectFriendRequest = (requestId: string | undefined) => {
    if (!requestId) {
      return;
    }
    deleteRequest({
      id: requestId || '',
      notificationId: data?.id || '',
    });
  };

  // const { isLoading, data: post } = useQuery<
  //   GetPostByIdQuery,
  //   unknown,
  //   PostType
  // >([`post-${data?.postId}`, data?.postId, session?.user?.sub], getPostById, {
  //   select: (data: any) => data.posts?.items?.[0] as PostType,
  //   enabled: !!data?.postId,
  //   onSuccess: (data) => {
  //     console.log({ data }, 'post');
  //   },
  //   onError: (e) => {
  //     console.log(e);
  //   },
  // });

  return (
    <div>
      <div className="flex p-2 py-3 gap-x-5 md:py-4">
        <div className="relative w-10 h-10 transition-all duration-300 rounded-full bg-white/10 hover:scale-105">
          <Link
            href={
              data?.type === 'system'
                ? '/notifications'
                : `/profile/${data?.sender?.sub}`
            }
            className="mr-1 font-bold"
          >
            <Image
              height={60}
              width={60}
              quality={60}
              src={
                data?.senderId === 'virtuoso'
                  ? '/logo.png'
                  : data?.sender?.avatar || '/assets/images/temp-cover.png'
              }
              alt="avatar"
              className={`block w-full h-full ${data?.senderId === 'virtuoso' ? 'rounded-sm' : 'rounded-full'}`}
            />
          </Link>
        </div>
        <div className="w-[600px] flex-1">
          {data?.type === 'request' && (
            <>
              <div className="color-heading">
                <Link
                  href={`/profile/${data?.sender?.sub}`}
                  className="mr-1 font-bold"
                >
                  {`${data?.sender?.name}`}
                </Link>
                sent you a friend request
              </div>
              <p>
                {data?.createdAt
                  ? formatDistance(
                      new Date(data.createdAt),
                      new Date(Date.now())
                    )
                  : '20 mins'}
                <span className="inline-block ml-1">ago</span>
              </p>
              <div className="flex items-center mt-2">
                <button
                  className="mr-2 capitalize c-btn-primary"
                  onClick={() =>
                    handleApproveFriendRequest(
                      data?.receiverId,
                      data?.senderId,
                      data?.requestId || ''
                    )
                  }
                >
                  <Loading alt="accept" isLoading={isAddFriendLoading} />
                </button>
                <button
                  onClick={() =>
                    handleRejectFriendRequest(data.requestId || '')
                  }
                  className="capitalize c-btn "
                >
                  <Loading alt="reject" isLoading={isDeleteRequestLoading} />
                </button>
              </div>
            </>
          )}
          {data?.type === 'system' && (
            <>
              {data?.content}
              <p>
                {data?.createdAt
                  ? formatDistance(
                      new Date(data.createdAt),
                      new Date(Date.now())
                    )
                  : '20 mins'}
                <span className="inline-block ml-1">ago</span>
              </p>
            </>
          )}
          {data?.type === 'notify' && (
            <>
              <div className="color-heading">
                <Link
                  href={`/profile/${data?.sender?.sub}`}
                  className="mr-1 font-bold"
                >
                  {`${data?.sender?.name?.split(' ')?.[0]}`}
                </Link>
                and you are now friends!
              </div>
              <p>
                {data?.createdAt
                  ? formatDistance(
                      new Date(data.createdAt),
                      new Date(Date.now())
                    )
                  : '20 mins'}
                <span className="inline-block ml-1">ago</span>
              </p>
            </>
          )}
          {data?.type === 'post' && (
            <>
              <div className="color-heading">
                Posted! Your creation is public now.
              </div>
              <p>
                {data?.createdAt
                  ? formatDistance(
                      new Date(data.createdAt),
                      new Date(Date.now())
                    )
                  : '20 mins'}
                <span className="inline-block ml-1">ago</span>
              </p>
              <div className="flex gap-2 pt-2">
                <Link
                  href={`/feed/${data.postId}`}
                  className="flex items-center justify-center mr-2 capitalize c-btn-primary"
                >
                  <Loading alt="View Post" isLoading={false} />
                </Link>
              </div>
            </>
          )}
          {data?.type === 'comment' && (
            <>
              <div className="color-heading">
                <Link
                  href={`/profile/${data?.sender?.sub}`}
                  className="mr-1 font-bold"
                >
                  {`${data?.sender?.name}`}
                </Link>
                commented on your post!
              </div>
              <p className="pb-2">
                {data?.createdAt
                  ? formatDistance(
                      new Date(data.createdAt),
                      new Date(Date.now())
                    )
                  : '20 mins'}
                <span className="inline-block ml-1">ago</span>
              </p>
              <div className="p-2 px-3 rounded-md bg-base-200 dark:bg-dark-base-300">
                {data.content}
              </div>
            </>
          )}
        </div>
        <div className="flex justify-end h-full text-xs color-heading md:w-28">
          <NotificationOptionsDropdown notification={data} />
        </div>
      </div>
    </div>
  );
}
