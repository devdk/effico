'use client';

import useSession from 'src/hooks/useSession';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useQuery } from 'react-query';
import { getFriendsList } from 'services/friend.service';
import { ListFriendsQuery } from 'services/types/generated';
import { Friend } from 'src/profile';

export default function FriendList() {
  const { session } = useSession();
  const sub = session?.user?.sub;
  const params = useParams();
  const slug = params?.slug;

  // FRIEND LIST
  const { isLoading: isFriendListLoading, data: friendList } = useQuery<
    ListFriendsQuery,
    unknown,
    Array<Friend>
  >(['user-friends', sub], getFriendsList, {
    select: (data) => (data?.friends?.items ?? []) as Array<Friend>,
  });

  return (
    <div
      id="friend_list"
      className={`${
        slug ? 'hidden md:block' : 'block'
      } bg-base-300 pt-3 dark:bg-dark-base-300 md:h-full md:w-60 xl:w-80`}
    >
      <div className="">
        {isFriendListLoading &&
          Array.from(Array(8).keys()).map((i) => (
            <div key={i}>
              <div className="flex px-4 py-3 gap-x-3 scroll-auto">
                <div className="w-10 h-10 overflow-hidden rounded-full animate-pulse bg-base-200 dark:bg-dark-base-200"></div>
                <div className="flex-1 space-y-2">
                  <p className="w-1/2 h-5 animate-pulse bg-base-200 dark:bg-dark-base-200"></p>
                  <p className="w-3/4 h-5 animate-pulse bg-base-200 dark:bg-dark-base-200"></p>
                </div>
              </div>
            </div>
          ))}
        {!isFriendListLoading &&
          friendList?.map((i) => (
            <Link
              href={`/chat/${i?.friendId}`}
              key={i?.friendId}
              className={`flex gap-x-3 scroll-auto px-4 py-3 hover:bg-base-200 dark:hover:bg-dark-base-200 ${
                i?.friendId === slug ? 'bg-base-200 dark:bg-dark-base-200' : ''
              }`}
            >
              <div className="w-10 h-10 overflow-hidden rounded-full bg-base-100 dark:bg-dark-base-100">
                <img
                  src={i?.friendDetails?.avatar}
                  alt=""
                  className="block w-full h-full"
                />
              </div>
              <div className="flex-1 text-sm">
                <h3 className="font-medium text-white">
                  {i?.friendDetails?.name || 'David Oshodi'}
                </h3>
                <p className="text-xs">Last seen 8:45</p>
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
}
