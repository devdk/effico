'use client';

import { Menu, Transition } from '@headlessui/react';
import useSession from 'src/hooks/useSession';
import Link from 'next/link';
import { useState } from 'react';
import { FaDumpster } from 'react-icons/fa';
import {
  HiOutlineDotsVertical,
  HiOutlinePencil,
  HiOutlineShare,
} from 'react-icons/hi';
import { HiOutlineUserMinus, HiOutlineUserPlus } from 'react-icons/hi2';
import { useMutation } from 'react-query';
import {
  updateCreatorDeactivatedStatus,
  updateCreatorDisabilityStatus,
} from 'services/creator.service';
import {
  UpdateCreatorDeactivatedMutation,
  UpdateCreatorDeactivatedMutationVariables,
  UpdateCreatorDisabilityMutation,
  UpdateCreatorDisabilityMutationVariables,
  VirtuosoCreators,
} from 'services/types/generated';
import Loading from 'src/common/Loading';
import Timeline from 'src/fragments/Timeline';
import useFollowPageHook from 'src/hooks/useFollowPageHook';
import useIsPageAdmin from 'src/hooks/useIsPageAdmin';
import useUnfollowPageHook from 'src/hooks/useUnfollowPageHook';
import ConfirmationModal from 'src/modals/ConfirmationModal';
import EditCreatorPageModal from 'src/modals/EditCreatorPageModal';
import ShareModal from 'src/modals/ShareModal';
import NoPostsTimeLineSkeleton from 'src/placeholders/NoPostsTimelineSkeleton';
import CreatePost from 'src/post/CreatePost';
import useIsLoggedIn from 'src/hooks/useIsLoggedIn';

interface ICreatorProfileProps {
  data: VirtuosoCreators | undefined;
}

export default function CreatorProfile({
  data: creator,
}: ICreatorProfileProps) {
  const [isShareModoalOpen, setIsShareModoalOpen] = useState(false);
  const { loggedIn, navigateToLogin } = useIsLoggedIn();
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const { isAdmin } = useIsPageAdmin(creator?.CreatorOwnerID);
  const [followed, setFollowed] = useState(creator?.isFollowedByUser || false);
  const { session } = useSession();

  // FOLLOW UNFOLLOW MUTATIONS
  const onFollowPageSettled = (data: any, error: any) => {
    if (error) {
      setFollowed((val) => !val);
    }
  };

  const onUnfollowPageSettled = (data: any, error: any) => {
    if (error) {
      setFollowed((val) => !val);
    }
  };

  const { mutate: followPage, isLoading: isFollowing } = useFollowPageHook({
    onSettled: onFollowPageSettled,
  });

  const { mutate: unfollowPage, isLoading: isUnfollowing } =
    useUnfollowPageHook({
      onSettled: onUnfollowPageSettled,
    });

  const handleFollowPage = () => {
    followPage({
      pageId: creator?.CreatorID || '',
      pageType: 'venue',
      userId: session?.user?.sub || '',
    });
    setFollowed((val) => !val);
  };

  const handleUnfollowPage = () => {
    unfollowPage({
      pageId: creator?.CreatorID || '',
      userId: session?.user?.sub || '',
    });
    setFollowed((val) => !val);
  };

  const toggleEditProfile = () => {
    setIsEditModalOpen(true);
  };

  return (
    <div className="pb-10 c-container md:pt-5">
      <div className="grid grid-cols-12 md:gap-x-10">
        <div
          id="cover"
          className="relative h-40 col-span-12 bg-base-200 dark:bg-dark-base-200 md:h-96"
        >
          <img
            src={creator?.CreatorCover || '/assets/images/temp-cover.png'}
            alt="cover"
            className="block object-cover w-full h-full md:rounded-t-xl"
          />
          <div className="absolute bottom-0 left-1/2 h-[100px] w-[100px] translate-y-1/2 -translate-x-1/2 transform overflow-hidden rounded-full bg-base-200 dark:bg-dark-base-200">
            <img
              src={
                creator?.CreatorImage || '/assets/images/page-card-avatar.png'
              }
              className="block object-cover w-full h-full"
              alt=""
            />
          </div>
        </div>
        <div className="col-span-12 px-4 md:px-0">
          <div className="relative flex flex-col items-center justify-center py-16 pb-8 md:pb-10">
            <h2
              data-testid="profile-name"
              className="text-2xl capitalize text-heading dark:text-dark-heading"
            >
              {creator?.CreatorName}
            </h2>
            <p>Creator Page</p>
            <div className="right-0 flex justify-center w-full pt-4 gap-x-2 md:absolute md:top-4 md:justify-end md:pt-0">
              <button
                onClick={() => setIsShareModoalOpen(true)}
                className="c-btn-icon"
              >
                <HiOutlineShare className="text-lg text-white" />
              </button>
              <ShareModal
                twitterShare={{
                  title: creator?.CreatorName,
                  url: `https://app.virtuoso.live/creator/${creator?.CreatorID}`,
                }}
                title="Share this Page"
                isOpen={isShareModoalOpen}
                setIsOpen={setIsShareModoalOpen}
              />
              <button
                onClick={
                  loggedIn
                    ? !followed
                      ? handleFollowPage
                      : handleUnfollowPage
                    : navigateToLogin
                }
                className={
                  !followed ? 'c-btn-icon-primary' : 'c-btn-icon-danger'
                }
              >
                <Loading
                  alt={
                    followed ? (
                      <HiOutlineUserMinus data-testid="followed" />
                    ) : (
                      <HiOutlineUserPlus data-testid="unfollowed" />
                    )
                  }
                  isLoading={isFollowing || isUnfollowing}
                />
              </button>
              {isAdmin && (
                <>
                  <button
                    data-testid="edit-profile-btn"
                    className="c-btn-icon-primary"
                    onClick={toggleEditProfile}
                  >
                    <HiOutlinePencil className="" />
                  </button>
                  {creator && (
                    <EditCreatorPageModal
                      isOpen={isEditModalOpen}
                      setIsOpen={setIsEditModalOpen}
                      data={creator as VirtuosoCreators}
                    />
                  )}
                </>
              )}
            </div>
            {/* <div className="font-bold md:absolute md:left-0 md:bottom-4">
              <p className="text-3xl text-heading dark:text-dark-heading">
                {creator?.followerCount}
              </p>
              <p>FOLLOWERS</p>
            </div> */}
          </div>
        </div>
        <div className="col-span-12 px-4 md:col-span-4 md:px-0">
          <div id="sidebar" className="space-y-6">
            {isAdmin && (
              <CreatorPageAdminPanel data={creator as VirtuosoCreators} />
            )}
            <div className="p-4 pb-8 space-y-4 c-box">
              <h3 className="c-title-sm">About</h3>
              <p data-testid="profile-bio">{creator?.CreatorBio}</p>
            </div>
            <div className="p-4 c-box-flex-jb">
              <h3 className="c-title-sm">Photos</h3>
              <div>
                <HiOutlineDotsVertical className="text-xl" />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {creator?.posts?.items
                ?.slice(0, 5)
                .map((i) => (
                  <>
                    {i?.images?.map((i) => (
                      <img
                        key={i}
                        src={i || '/assets/images/temp-photos-tab.png'}
                        alt="photo"
                        className="block w-full rounded-xl"
                      />
                    ))}
                  </>
                ))}
            </div>
          </div>
        </div>
        <div className="col-span-12 pt-8 pb-12 space-y-6 md:col-span-8 md:pt-0">
          <div className="space-y-2" id="content">
            {isAdmin && (
              <div className="flex gap-x-4">
                <div className="relative hidden w-[46px] md:block">
                  <div className="z-10 h-[46px] w-[46px] overflow-hidden rounded-full bg-quarternary dark:bg-dark-quarternary">
                    <img
                      src={
                        creator?.CreatorImage ||
                        '/assets/images/page-card-avatar.png'
                      }
                      className="block object-cover w-full h-full"
                      alt=""
                    />
                  </div>
                  <span className="absolute top-[50px] left-1/2 -bottom-1 z-0 block w-[2px] -translate-x-1/2 transform bg-quarternary/40 dark:bg-dark-quarternary/40"></span>
                </div>
                <div className="flex-1 py-2">
                  <CreatePost
                    pageId={creator?.CreatorID || ''}
                    type="creator"
                  />
                </div>
              </div>
            )}
            {(creator?.posts?.items?.length || 0) > 0 ? (
              creator?.posts?.items?.map((i: any) => (
                <Timeline
                  key={i?.id}
                  post={i}
                  pageProfileImg={creator?.CreatorImage}
                />
              ))
            ) : (
              <NoPostsTimeLineSkeleton pageProfileImg={creator?.CreatorImage} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

interface ICreatorPageAdminPanelProps {
  data: VirtuosoCreators;
}

function CreatorPageAdminPanel({ data }: ICreatorPageAdminPanelProps) {
  let [isDeleteModalOpen, setIsDeleteModalOpen] = useState<boolean>(false);
  let [isDeactivatedModalOpen, setIsDeactivatedModalOpen] =
    useState<boolean>(false);
  let [isPageDisabled, setIsPageDisabled] = useState<boolean>(
    data.isDisabled ?? false
  );
  let [isPageDeactivated, setIsPageDeactivated] = useState<boolean>(
    data?.isDeactivated ?? false
  );

  const { mutate } = useMutation<
    UpdateCreatorDisabilityMutation,
    unknown,
    UpdateCreatorDisabilityMutationVariables
  >(updateCreatorDisabilityStatus, {
    mutationKey: 'update-disability-creator-page',
    onSuccess: (data) => {
      setIsPageDisabled(!isPageDisabled);
    },
  });

  const { mutate: mutateCreatorDeactivatedStatus } = useMutation<
    UpdateCreatorDeactivatedMutation,
    unknown,
    UpdateCreatorDeactivatedMutationVariables
  >(updateCreatorDeactivatedStatus, {
    mutationKey: 'update-deactivated-creator-page',
    onSuccess: (data) => {
      setIsPageDeactivated(!isPageDeactivated);
    },
  });

  return (
    <>
      <div className="flex justify-between col-span-3 p-4 c-box">
        <h3 className="c-title-sm">Admin</h3>
        <div>
          <Menu>
            {({ open }) => (
              <div className="relative z-20">
                <Menu.Button className="">
                  <HiOutlineDotsVertical className="text-xl" />
                </Menu.Button>
                <Transition
                  show={open}
                  enter="transition duration-100 ease-out"
                  enterFrom="transform scale-95 opacity-0"
                  enterTo="transform scale-100 opacity-100"
                  leave="transition duration-75 ease-out"
                  leaveFrom="transform scale-100 opacity-100"
                  leaveTo="transform scale-95 opacity-0"
                >
                  <Menu.Items
                    static
                    className="c-divide-300 c-box absolute top-full right-0 mt-4 w-full min-w-[240px] overflow-hidden rounded-xl border border-base-300 bg-base-100 shadow-2xl dark:border-dark-base-300 dark:bg-dark-base-100"
                  >
                    <Menu.Item>
                      <div
                        className={`
                      block px-5 py-3 hover:bg-base-300 dark:hover:bg-dark-base-300 
                      ${
                        isPageDeactivated
                          ? 'cursor-not-allowed'
                          : 'cursor-pointer'
                      }
                      `}
                        onClick={() => {
                          !isPageDeactivated && setIsDeactivatedModalOpen(true);
                        }}
                      >
                        <h3 className="font-medium color-heading ">
                          Deactivate Page
                        </h3>
                      </div>
                    </Menu.Item>
                    <Menu.Item>
                      <div
                        className={`
                      block px-5 py-3 hover:bg-base-300 dark:hover:bg-dark-base-300 
                      ${
                        isPageDisabled ? 'cursor-not-allowed' : 'cursor-pointer'
                      }
                      `}
                        onClick={() => {
                          !isPageDisabled && setIsDeleteModalOpen(true);
                        }}
                      >
                        <h3 className="font-medium color-heading ">
                          Delete Page
                        </h3>
                      </div>
                    </Menu.Item>
                  </Menu.Items>
                </Transition>
              </div>
            )}
          </Menu>
        </div>
      </div>
      <div className="p-4 pb-8 space-y-4 c-box">
        <h3 className="c-title-sm">Manage Page</h3>
        <Link
          href={`/events/create/${data?.CreatorID}`}
          data-testid="create-event-btn"
          className="flex items-center justify-center w-full c-btn-primary"
        >
          Create Event
        </Link>
      </div>
      <ConfirmationModal
        isOpen={isDeleteModalOpen}
        icon={<FaDumpster className="text-red-700" />}
        title="Are you sure you really want to delete your page ?"
        description="This action cannot be undone once confirm"
        setIsOpen={setIsDeleteModalOpen}
        onConfirm={() => {
          mutate({
            CreatorID: data.CreatorID,
            isDisabled: !isPageDisabled,
          });
        }}
      />
      <ConfirmationModal
        isOpen={isDeactivatedModalOpen}
        icon={<FaDumpster className="text-red-700" />}
        title="Are you sure you really want to deactivate your page ?"
        description="This action cannot be undone once confirm"
        setIsOpen={setIsDeactivatedModalOpen}
        onConfirm={() => {
          mutateCreatorDeactivatedStatus({
            CreatorID: data.CreatorID,
            isDeactivated: !isPageDeactivated,
          });
        }}
      />
    </>
  );
}
