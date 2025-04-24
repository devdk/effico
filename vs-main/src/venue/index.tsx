'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import useSession from 'src/hooks/useSession';
import { Menu, Transition } from '@headlessui/react';
import { FaDumpster } from 'react-icons/fa';
import {
  HiOutlineDotsVertical,
  HiOutlinePencil,
  HiOutlineShare,
} from 'react-icons/hi';
import { HiOutlineUserMinus, HiOutlineUserPlus } from 'react-icons/hi2';
import { MdOutlineShoppingCart } from 'react-icons/md';
import { useMutation } from 'react-query';
import {
  UpdateVenueDeactivatedMutation,
  UpdateVenueDeactivatedMutationVariables,
  VirtuosoVenues,
} from 'services/types/generated';
import { updateVenueDeactivatedStatus } from 'services/venue.service';
import Loading from 'src/common/Loading';
import useFollowPageHook from 'src/hooks/useFollowPageHook';
import useIsPageAdmin from 'src/hooks/useIsPageAdmin';
import useUnfollowPageHook from 'src/hooks/useUnfollowPageHook';
import ConfirmationModal from 'src/modals/ConfirmationModal';
import EditVenuePageModal from 'src/modals/EditVenuePageModal';
import ImageModal from 'src/modals/ImageModal';
import ShareModal from 'src/modals/ShareModal';
import NoPostsTimeLineSkeleton from 'src/placeholders/NoPostsTimelineSkeleton';
import CreatePost from 'src/post/CreatePost';
import useIsLoggedIn from 'src/hooks/useIsLoggedIn';
import Timeline from 'src/fragments/Timeline';
import { price } from 'src/utils/formatting';

interface IVenueProfileProps {
  data: VirtuosoVenues;
}

export default function VenueProfile({ data: venue }: IVenueProfileProps) {
  const [isShareModoalOpen, setIsShareModoalOpen] = useState(false);
  const { loggedIn, navigateToLogin } = useIsLoggedIn();
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  let [isDeactivatedModalOpen, setIsDeactivatedModalOpen] =
    useState<boolean>(false);
  const { isAdmin } = useIsPageAdmin(venue?.VenueCreatorID);
  const [followed, setFollowed] = useState(venue?.isFollowedByUser || false);
  const { session } = useSession();
  const router = useRouter();

  let [isPageDeactivated, setIsPageDeactivated] = useState<boolean>(
    venue?.isDeactivated ?? false
  );

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
      pageId: venue?.VenueID || '',
      pageType: 'venue',
      userId: session?.user?.sub || '',
    });
    setFollowed((val) => !val);
  };

  const handleUnfollowPage = () => {
    unfollowPage({
      pageId: venue?.VenueID || '',
      userId: session?.user?.sub || '',
    });
    setFollowed((val) => !val);
  };

  const toggleEditProfile = () => {
    setIsEditModalOpen(true);
  };

  const { mutate: mutateCreatorDeactivatedStatus } = useMutation<
    UpdateVenueDeactivatedMutation,
    unknown,
    UpdateVenueDeactivatedMutationVariables
  >(updateVenueDeactivatedStatus, {
    mutationKey: 'update-deactivated-venue-page',
    onSuccess: (data) => {
      setIsPageDeactivated(!isPageDeactivated);
    },
  });

  return (
    <>
      <div className="pb-10 c-container md:pt-5">
        <div className="grid grid-cols-12 md:gap-x-10">
          <div
            id="cover"
            className="relative h-40 col-span-12 bg-base-200 dark:bg-dark-base-200 md:h-96 md:rounded-t-xl"
          >
            <img
              src={venue?.VenueProfileCover || '/assets/images/temp-cover.png'}
              alt="cover"
              className="block object-cover w-full h-full md:rounded-t-xl"
            />
            <div className="absolute bottom-0 left-1/2 h-[100px] w-[100px] translate-y-1/2 -translate-x-1/2 transform overflow-hidden rounded-full bg-base-200 dark:bg-dark-base-200">
              <img
                src={
                  venue?.VenueProfileImage ||
                  '/assets/images/page-card-avatar.png'
                }
                className="block object-cover w-full h-full"
                alt=""
              />
            </div>
          </div>
          <div className="col-span-12 px-4 md:px-0">
            <div className="relative flex flex-col items-center justify-center py-16 pb-8 md:pb-10">
              <div className="absolute left-0 hidden font-bold bottom-4 md:block">
                <p className="text-3xl text-heading dark:text-dark-heading">
                  {venue?.followerCount}
                </p>
                <p>FOLLOWERS</p>
              </div>
              <h2
                data-testid="profile-name"
                className="text-2xl capitalize text-heading dark:text-dark-heading"
              >
                {venue?.VenueName}
              </h2>
              <p>Venue Page</p>
              <div className="right-0 flex justify-center w-full pt-4 gap-x-2 md:absolute md:top-4 md:justify-end md:pt-0">
                <button
                  onClick={() => setIsShareModoalOpen(true)}
                  className="c-btn-icon"
                >
                  <HiOutlineShare className="text-lg text-white" />
                </button>
                <ShareModal
                  twitterShare={{
                    title: venue?.VenueName,
                    url: `https://app.virtuoso.live/venue/${venue?.VenueID}`,
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
                    {venue && (
                      <EditVenuePageModal
                        isOpen={isEditModalOpen}
                        setIsOpen={setIsEditModalOpen}
                        data={venue as VirtuosoVenues}
                      />
                    )}
                  </>
                )}
              </div>
            </div>
          </div>
          <div className="col-span-12 px-4 md:col-span-4 md:px-0">
            <div id="sidebar" className="col-span-4 space-y-6">
              {isAdmin && (
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
                                      !isPageDeactivated &&
                                        setIsDeactivatedModalOpen(true);
                                    }}
                                  >
                                    <h3 className="font-medium color-heading ">
                                      Deactivate Page
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
                    <h3 className="c-title-sm">Management</h3>
                    <Link
                      href={`/venue/create/${venue?.VenueID}`}
                      className="flex items-center justify-center w-full c-btn-primary"
                    >
                      Upload Venue
                    </Link>
                    <Link
                      href={`/sitemap/upload/${venue?.VenueID}`}
                      className="flex items-center justify-center w-full c-btn-primary"
                    >
                      Upload Sitemap
                    </Link>
                  </div>
                </>
              )}
              {isAdmin && (
                <div className="p-4 pb-8 space-y-4 c-box">
                  <h3 className="c-title-sm">Marketplace</h3>
                  <p>This Venue is listed in the Marketplace</p>
                  <Link
                    href={`/marketplace/venues`}
                    className="flex items-center justify-center w-full c-btn-primary gap-x-2"
                  >
                    <MdOutlineShoppingCart className="text-xl" />
                    <span>{price(venue?.price)}</span>
                  </Link>
                </div>
              )}
              <div className="p-4 pb-8 space-y-4 c-box">
                <h3 className="c-title-sm">About</h3>
                <p data-testid="profile-bio">{venue?.Bio}</p>
              </div>
              {!isAdmin && !venue?.isOwnedByUser && (
                <div className="p-4 pb-8 space-y-4 c-box">
                  <h3 className="c-title-sm">Purchase</h3>
                  <p>
                    Own {venue?.VenueName}. Secure this exceptional venue today!
                  </p>
                  <button
                    className="flex items-center justify-center w-full c-btn-primary gap-x-2"
                    onClick={() => {
                      console.log(`/buy?id=${venue?.VenueID}&type=venue`);
                      router.push(`/buy?id=${venue?.VenueID}&type=venue`);
                    }}
                  >
                    <MdOutlineShoppingCart className="text-xl" />
                    <span>{price(venue?.price)}</span>
                  </button>
                </div>
              )}
              {!isAdmin && venue?.isOwnedByUser && (
                <div className="p-4 pb-8 space-y-4 c-box">
                  <h3 className="c-title-sm">Ownership</h3>
                  <p>You own this Venue!</p>
                </div>
              )}
              <div className="p-4 c-box-flex-jb">
                <h3 className="c-title-sm">Photos</h3>
                <div>
                  <HiOutlineDotsVertical className="text-xl" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {venue?.VenueImages?.map((i) => (
                  <ImageModal
                    key={i}
                    src={i ?? '/assets/images/temp-photos-tab.png'}
                    alt="photo"
                    className="block w-full cursor-pointer rounded-xl bg-base-300 dark:bg-dark-base-300"
                  />
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
                          venue?.VenueProfileImage ||
                          '/assets/images/page-card-avatar.png'
                        }
                        className="block object-cover w-full h-full"
                        alt=""
                      />
                    </div>
                    <span className="absolute top-[50px] left-1/2 -bottom-1 z-0 block w-[2px] -translate-x-1/2 transform bg-quarternary/40 dark:bg-dark-quarternary/40"></span>
                  </div>
                  <div className="flex-1 py-2">
                    <CreatePost pageId={venue?.VenueID || ''} type="venue" />
                  </div>
                </div>
              )}
              {(venue?.posts?.items?.length || 0) > 0 ? (
                venue?.posts?.items?.map((i: any) => (
                  <Timeline
                    key={i?.id}
                    post={i}
                    pageProfileImg={venue?.VenueProfileImage}
                  />
                ))
              ) : (
                <NoPostsTimeLineSkeleton
                  pageProfileImg={venue?.VenueProfileImage}
                />
              )}
            </div>
          </div>
        </div>
      </div>
      <ConfirmationModal
        isOpen={isDeactivatedModalOpen}
        icon={<FaDumpster className="text-red-700" />}
        title="Are you sure you really want to deactivate your page ?"
        description="This action cannot be undone once confirm"
        setIsOpen={setIsDeactivatedModalOpen}
        onConfirm={() => {
          mutateCreatorDeactivatedStatus({
            VenueID: venue?.VenueID as string,
            isDeactivated: !isPageDeactivated,
          });
        }}
      />
    </>
  );
}
