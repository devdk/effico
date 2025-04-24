import useSession from 'src/hooks/useSession';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { FaDumpster } from 'react-icons/fa';
import { GiFireworkRocket } from 'react-icons/gi'; //MdDeleteOutline
import { HiOutlineTrash } from 'react-icons/hi';
import { MdOutlineEdit } from 'react-icons/md';
import { useMutation, useQueryClient } from 'react-query';
import {
  DeleteUserAssetMutation,
  DeleteUserAssetMutationVariables,
  PublishUserAssetMutation,
  PublishUserAssetMutationVariables,
  UserAsset,
} from 'services/types/generated';
import { deleteUserAsset, publishUserAsset } from 'services/userasset.service';
import ConfirmationModal from 'src/modals/ConfirmationModal';

type AssetCardProps = { img: string; asset?: UserAsset };

export default function AssetCard({
  img = '/assets/images/page-card-cover.png',
  asset = {} as UserAsset,
}: AssetCardProps) {
  let [isPublishModalOpen, setIsPublishModalOpen] = useState<boolean>(false);
  let [isDeleteModalOpen, setIsDeleteModalOpen] = useState<boolean>(false);
  let [isPublished, setIsPublished] = useState(
    asset?.accessibility === 'public'
  );
  const queryClient = useQueryClient();
  const { session } = useSession();

  const { mutate, isLoading } = useMutation<
    PublishUserAssetMutation,
    unknown,
    PublishUserAssetMutationVariables
  >(publishUserAsset, {
    mutationKey: 'publish-userasset',
    onSuccess: () => {
      setIsPublished(true);
      setIsPublishModalOpen(false);
    },
  });

  const { mutate: deleteAsset, isLoading: isDeleteAssetLoading } = useMutation<
    DeleteUserAssetMutation,
    unknown,
    DeleteUserAssetMutationVariables
  >(deleteUserAsset, {
    mutationKey: 'delete-userasset',
    onSuccess: () => {
      queryClient.invalidateQueries(['market-place', session?.user?.sub]);

      setIsDeleteModalOpen(false);
    },
  });

  return (
    <>
      <div>
        <div
          className="overflow-hidden h-52 rounded-xl bg-base-300 dark:bg-dark-base-300"
          id="cover"
        >
          <Image
            width={400}
            height={200}
            src={
              (Array.isArray(asset?.image) ? asset.image[0] : asset?.image) ??
              img
            }
            className="block object-cover w-full h-full"
            alt=""
          />
        </div>
        <div className="py-4" id="content">
          <div className="space-y-1">
            <h3 className="text-xl color-heading">{asset.productName}</h3>
            <p className="line-clamp-2">{asset.description}</p>
          </div>
          <div className="flex items-center justify-between mt-4">
            <div className="flex gap-x-2">
              <Link
                href={`/product/edit/${asset?.id}`}
                className="c-btn-rounded-icon"
              >
                <MdOutlineEdit className="text-lg" />
              </Link>
              <button
                className="c-btn-rounded-icon"
                onClick={() => {
                  setIsDeleteModalOpen(true);
                }}
              >
                <HiOutlineTrash className="text-lg" />
              </button>
            </div>
            {isPublished ? (
              <button className="flex items-center justify-center c-btn-success gap-x-2 ">
                Published
              </button>
            ) : (
              <button
                className="flex items-center justify-center c-btn-primary gap-x-2"
                onClick={() => {
                  setIsPublishModalOpen(true);
                }}
              >
                <span>Publish Asset</span>
              </button>
            )}
          </div>
        </div>
      </div>
      <ConfirmationModal
        title="Are you sure you really want to publish your asset ?"
        description="This action will make your asset to visible on market place"
        icon={<GiFireworkRocket className="text-green-400" />}
        isOpen={isPublishModalOpen}
        isLoading={isLoading}
        setIsOpen={setIsPublishModalOpen}
        closeOnConfirm={false}
        onConfirm={() => {
          mutate({
            id: asset?.id as string,
            accessibility: 'public',
          });
        }}
      />
      <ConfirmationModal
        isOpen={isDeleteModalOpen}
        icon={<FaDumpster className="text-red-700" />}
        title="Are you sure you really want to delete your asset ?"
        description="This action cannot be undone once confirm"
        setIsOpen={setIsDeleteModalOpen}
        isLoading={isDeleteAssetLoading}
        closeOnConfirm={false}
        onConfirm={() => {
          deleteAsset({
            userId: session?.user?.sub as string,
            id: asset?.id,
          });
        }}
      />
    </>
  );
}
