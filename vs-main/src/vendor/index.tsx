'use client';

import { Menu, Transition } from '@headlessui/react';
import Link from 'next/link';
import { useParams, useRouter } from 'next/navigation';
import { useState } from 'react';
import { FaDumpster } from 'react-icons/fa';
import { HiOutlineDotsVertical, HiOutlineShare } from 'react-icons/hi';
import { useMutation, useQuery } from 'react-query';
import {
  GetVendorPageQuery,
  GetVendorProductsQuery,
  UpdateVendorDeactivatedMutation,
  UpdateVendorDeactivatedMutationVariables,
  UserAsset,
  UserAssetDatasetFragment,
  VirtuosoVendors,
} from 'services/types/generated';
import {
  getVendorProducts,
  updateVendorDeactivatedStatus,
} from 'services/vendor.service';
import ProductItem from 'src/cards/ProductItem';
import useIsPageAdmin from 'src/hooks/useIsPageAdmin';
import ConfirmationModal from 'src/modals/ConfirmationModal';
import EditVendorPageModal from 'src/modals/EditVendorPageModal';
import ShareModal from 'src/modals/ShareModal';

interface IVendorProfileProps {
  data: VirtuosoVendors | undefined;
}

interface IVendorPageAdminPanelProps {
  pageId: string;
}

export default function VendorProfile({ data: vendor }: IVendorProfileProps) {
  const router = useRouter();
  const [isShareModoalOpen, setIsShareModoalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  let [isDeactivatedModalOpen, setIsDeactivatedModalOpen] =
    useState<boolean>(false);
  const { isAdmin } = useIsPageAdmin(vendor?.VendorOwnerID);
  let [isPageDeactivated, setIsPageDeactivated] = useState<boolean>(
    vendor?.isDeactivated ?? false
  );

  const toggleEditProfile = () => {
    setIsEditModalOpen(true);
  };

  const naviagteToAddProduct = () => {
    router.push(`/vendor/create/${vendor?.VendorID}`);
  };

  const { mutate: mutateCreatorDeactivatedStatus } = useMutation<
    UpdateVendorDeactivatedMutation,
    unknown,
    UpdateVendorDeactivatedMutationVariables
  >(updateVendorDeactivatedStatus, {
    mutationKey: 'update-deactivated-vendor-page',
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
              src={vendor?.VendorCover || '/assets/images/temp-cover.png'}
              alt="cover"
              className="block object-cover w-full h-full md:rounded-t-xl"
            />
            <div className="absolute bottom-0 left-1/2 h-[100px] w-[100px] translate-y-1/2 -translate-x-1/2 transform overflow-hidden rounded-full bg-base-200 dark:bg-dark-base-200">
              <img
                src={
                  vendor?.VendorImage || '/assets/images/page-card-avatar.png'
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
                  {vendor?.followerCount}
                </p>
                <p>FOLLOWERS</p>
              </div>
              <h2
                data-testid="profile-name"
                className="text-2xl capitalize text-heading dark:text-dark-heading"
              >
                {vendor?.VendorName}
              </h2>
              <p>Vendor Page</p>
              <div className="right-0 flex justify-center w-full pt-4 gap-x-4 md:absolute md:top-4 md:justify-end md:pt-0">
                <button
                  onClick={() => setIsShareModoalOpen(true)}
                  className="w-10 h-10 p-2 border rounded-full border-quarternary hover:scale-105 dark:border-dark-quarternary"
                >
                  <HiOutlineShare className="text-lg text-white" />
                </button>
                <ShareModal
                  twitterShare={{
                    title: vendor?.VendorName,
                    url: `https://app.virtuoso.live/vendor/${vendor?.VendorID}`,
                  }}
                  title="Share this Page"
                  isOpen={isShareModoalOpen}
                  setIsOpen={setIsShareModoalOpen}
                />
                {isAdmin && (
                  <>
                    <button
                      className="c-btn disabled:cursor-not-allowed"
                      onClick={naviagteToAddProduct}
                      disabled={isPageDeactivated}
                    >
                      Add Product
                    </button>
                    <button
                      className="c-btn"
                      data-testid="edit-profile-btn"
                      onClick={toggleEditProfile}
                    >
                      Edit Page
                    </button>
                    {vendor && (
                      <EditVendorPageModal
                        isOpen={isEditModalOpen}
                        setIsOpen={setIsEditModalOpen}
                        data={vendor as VirtuosoVendors}
                      />
                    )}
                  </>
                )}
              </div>
            </div>
          </div>
          {/* TODO: where this admin options will come */}
          {/* <div id="sidebar" className="col-span-4 space-y-6">
           {isAdmin && <VendorPageAdminPanel pageId={vendor?.VendorID || ''} />} 
           </div> */}
        </div>
        <div className="px-4 md:px-0">
          <div className="flex justify-between p-4 c-box">
            <h3 className="c-title-sm">Products</h3>
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
        </div>
        <div className="grid grid-cols-1 gap-10 px-4 py-10 md:grid-cols-3 md:px-0">
          {vendor?.products?.items?.map((asset) => (
            <ProductItem
              key={asset?.id}
              img="/assets/images/temp-event.png"
              asset={asset as UserAsset}
            />
          ))}
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
            VendorID: vendor?.VendorID as string,
            isDeactivated: !isPageDeactivated,
          });
        }}
      />
    </>
  );
}

function VendorPageAdminPanel({ pageId }: IVendorPageAdminPanelProps) {
  return (
    <>
      <div className="flex justify-between col-span-3 p-4 c-box">
        <h3 className="c-title-sm">Admin</h3>
        <div>
          <HiOutlineDotsVertical className="text-xl" />
        </div>
      </div>
      <div className="p-4 pb-8 space-y-4 c-box">
        <h3 className="c-title-sm">Manage Page</h3>
        <Link
          href={`/vendor/create/${pageId}`}
          className="flex items-center justify-center w-full c-btn-primary"
        >
          Add Product
        </Link>
      </div>
    </>
  );
}
