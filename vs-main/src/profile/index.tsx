'use client';

import Link from 'next/link';
import { useParams } from 'next/navigation';
import React, { useState } from 'react';
import {
  HiOutlineDotsVertical,
  HiOutlineInbox,
  HiOutlinePencil,
  HiOutlineShare,
} from 'react-icons/hi';
import { HiOutlineUserMinus, HiOutlineUserPlus } from 'react-icons/hi2';
import { useMutation } from 'react-query';
import { deleteFriend, sendFriendRequest } from 'services/friend.service';
import {
  DeleteFriendMutation,
  DeleteFriendMutationVariables,
  SendFriendRequestMutation,
  SendFriendRequestMutationVariables,
  User,
} from 'services/types/generated';
import Loading from 'src/common/Loading';
import { Avatar } from 'src/components/custom/avatar';
import Timeline from 'src/fragments/Timeline';
import useIsLoggedIn from 'src/hooks/useIsLoggedIn';
import useIsPageAdmin from 'src/hooks/useIsPageAdmin';
import EditProfileModal from 'src/modals/EditProfileModal';
import ShareModal from 'src/modals/ShareModal';
import NoPostsTimeLineSkeleton from 'src/placeholders/NoPostsTimelineSkeleton';

export type Friend = {
  friendId: string;
  friendDetails: {
    sub: string;
    name: string;
    avatar: string;
    username: string;
  };
};

export default function Profile({ profile }: { profile: User }) {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isFriend, setIsFriend] = useState<boolean>(
    profile?.isFriendOfUser || false
  );
  const [isShareModoalOpen, setIsShareModoalOpen] = useState(
    profile?.hasSentRequestToUser || false
  );
  const [isRequestSent, setisRequestSent] = useState(false);
  const { loggedIn, navigateToLogin } = useIsLoggedIn();
  const params = useParams();
  const id = params?.id;

  const { isAdmin, user } = useIsPageAdmin(id as string);

  const toggleEditProfile = () => {
    setIsEditModalOpen(true);
  };

  // add friend
  const onAddFriendSettled = (data: any, error: any) => {
    if (error) {
      setisRequestSent((val) => !val);
    }
  };

  const { mutate: addFriend, isLoading: isAddFriendLoading } = useMutation<
    SendFriendRequestMutation,
    unknown,
    SendFriendRequestMutationVariables
  >(sendFriendRequest, {
    mutationKey: 'send-friend-request',
    onSettled: onAddFriendSettled,
  });

  // delete friend
  const onDeleteFriendSettled = (data: any, error: any) => {
    if (error) {
      setIsFriend((isFriend) => !isFriend);
    }
  };

  const { mutate: removeFriend, isLoading: isRemoveFriendLoading } =
    useMutation<DeleteFriendMutation, unknown, DeleteFriendMutationVariables>(
      deleteFriend,
      {
        mutationKey: 'delete-friend',
        onSettled: onDeleteFriendSettled,
      }
    );

  const handleAddFriend = (e: React.MouseEvent) => {
    e.preventDefault();
    addFriend({
      data: `@${user?.username} sent you a friend request!`,
      receiverId: profile?.sub || '',
      senderId: user?.sub || '',
    });
    setisRequestSent((val) => !val);
  };

  const handleDeleteFriend = (e: React.MouseEvent) => {
    e.preventDefault();
    removeFriend({
      friendId: id as string,
      userId: user?.sub || '',
    });
    setIsFriend(false);
  };

  return (
    <div data-testid="profile-page" className="pb-10 c-container md:pt-5">
      <div className="grid w-full grid-cols-12 md:gap-x-10">
        <div className="col-span-12 md:px-0">
          <div
            id="cover"
            className="relative aspect-w-4 aspect-h-1 bg-base-200 dark:bg-dark-base-200 md:rounded-t-xl"
          >
            <img
              src={profile?.cover || '/assets/images/temp-cover.png'}
              alt="cover"
              className="block object-cover w-full h-full md:rounded-t-xl"
            />
            <div className="absolute top-full left-1/2 h-[100px] w-[100px] -translate-x-1/2 -translate-y-1/2 transform overflow-hidden rounded-full bg-base-200 dark:bg-dark-base-200">
              <Avatar
                size="xxl"
                name={profile?.name}
                src={profile?.avatar || ''}
              />
            </div>
          </div>
        </div>
        <div className="col-span-12 px-4 md:px-0">
          <div className="relative flex flex-col items-center justify-center py-16 pb-4 md:pb-10">
            <h2
              data-testid="profile-name"
              className="text-2xl text-heading dark:text-dark-heading"
            >
              {profile?.name || 'User'}
            </h2>
            <p>{`@${profile?.username || 'username'}`}</p>
            <div className="right-0 flex justify-center w-full gap-2 pt-4 md:absolute md:top-4 md:justify-end md:pt-0">
              <>
                <>
                  <button
                    onClick={() => setIsShareModoalOpen(true)}
                    className="c-btn-icon"
                  >
                    <HiOutlineShare className="text-lg text-white" />
                  </button>
                  <ShareModal
                    twitterShare={{
                      title: profile?.name,
                      url: `https://app.virtuoso.live/profile/${profile?.sub}`,
                    }}
                    title="Share this Profile"
                    isOpen={isShareModoalOpen}
                    setIsOpen={setIsShareModoalOpen}
                  />
                </>
                {isAdmin && (
                  <>
                    <button className="c-btn-icon" onClick={toggleEditProfile}>
                      <HiOutlinePencil className="" />
                    </button>
                    {profile && (
                      <EditProfileModal
                        isOpen={isEditModalOpen}
                        setIsOpen={setIsEditModalOpen}
                        user={profile}
                      />
                    )}
                  </>
                )}
                {!isAdmin && !isFriend && !isRequestSent && (
                  <button
                    className="c-btn-icon-primary"
                    onClick={loggedIn ? handleAddFriend : navigateToLogin}
                  >
                    <Loading
                      alt={<HiOutlineUserPlus />}
                      isLoading={isAddFriendLoading || isRemoveFriendLoading}
                    />
                  </button>
                )}
                {!isAdmin && !isFriend && isRequestSent && (
                  <button className="c-btn">
                    <Loading
                      alt="Request Sent!"
                      isLoading={isAddFriendLoading || isRemoveFriendLoading}
                    />
                  </button>
                )}
                {!isAdmin && isFriend && (
                  <button
                    className="c-btn-icon-danger"
                    onClick={handleDeleteFriend}
                  >
                    <Loading
                      alt={<HiOutlineUserMinus />}
                      isLoading={isAddFriendLoading || isRemoveFriendLoading}
                    />
                  </button>
                )}
                {isFriend && (
                  <Link
                    href={`/chat/${profile?.sub}`}
                    className="c-btn-icon-primary"
                  >
                    <Loading
                      alt={<HiOutlineInbox />}
                      isLoading={isAddFriendLoading || isRemoveFriendLoading}
                    />
                  </Link>
                )}
              </>
            </div>
          </div>
        </div>
        <div className="col-span-12 px-4 md:col-span-4 md:px-0">
          <div id="sidebar" className="space-y-6">
            <div className="p-4 pb-8 space-y-4 c-box">
              <h3 className="c-title-sm">About</h3>
              <p data-testid="profile-bio">{profile?.about}</p>
            </div>
            <div className="c-box c-divide">
              <div className="p-4 space-y-2">
                <h3 className="c-title-sm">Location</h3>
                <p>United States</p>
              </div>
              <div className="p-4 space-y-2">
                <h3 className="c-title-sm">Location</h3>
                <p>United States</p>
              </div>
            </div>
            <div className="p-4 c-box-flex-jb">
              <h3 className="c-title-sm">Friends</h3>
              <div>
                <HiOutlineDotsVertical className="text-xl" />
              </div>
            </div>
            <div className="c-box c-divide">
              {profile?.friends?.items?.map((friend) => (
                <div key={friend?.friendId} className="flex p-4 gap-x-3">
                  <div className="h-[46px] w-[46px] overflow-hidden rounded-full bg-base-100 dark:bg-dark-base-100">
                    <Avatar
                      name={friend?.friendDetails?.name}
                      link={`/profile/${friend?.friendDetails?.sub}`}
                      src={friend?.friendDetails?.avatar}
                    />
                    <Link href={`/profile/${friend?.friendId}`}>
                      <img
                        src={friend?.friendDetails?.avatar || ''}
                        alt=""
                        className="block w-full h-full"
                      />
                    </Link>
                  </div>
                  <div className="flex-1 text-sm">
                    <h3 className="font-medium text-white">
                      <Link href={`/profile/${friend?.friendId}`}>
                        {friend?.friendDetails?.name || 'David Oshodi'}
                      </Link>
                    </h3>
                    <p>Calgary</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="col-span-12 pt-8 pb-12 space-y-6 md:col-span-8 md:pt-0">
          <div className="space-y-2" id="content">
            {(profile?.posts?.items?.length || 0) > 0 ? (
              profile?.posts?.items?.map((i) => (
                <Timeline
                  key={i?.id}
                  post={i}
                  pageProfileImg={profile?.avatar}
                />
              ))
            ) : (
              <NoPostsTimeLineSkeleton pageProfileImg={profile?.avatar} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
