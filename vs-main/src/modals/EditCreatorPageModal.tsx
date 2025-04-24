import { Dialog } from '@headlessui/react';
import useSession from 'src/hooks/useSession';
import Image from 'next/image';
import { useState } from 'react';
import { toast } from 'react-hot-toast';
import { BsArrowLeft } from 'react-icons/bs';
import { HiPencil } from 'react-icons/hi';
import { useMutation, useQueryClient } from 'react-query';
import { updateCreatorHeader } from 'services/creator.service';
import {
  UpdateCreatorHeaderMutation,
  UpdateCreatorHeaderMutationVariables,
  VirtuosoCreators,
} from 'services/types/generated';
import Loading from 'src/common/Loading';
import ErrorMessage from 'src/common/message/ErrorMessage';
import EditCropper from 'src/cropper/EditCropper';
import { useRouter } from 'next/navigation';

type ModalProps = {
  isOpen: boolean;
  data: VirtuosoCreators;
  setIsOpen: (e: boolean) => void;
};

const EditCreatorPageModal = ({ isOpen, setIsOpen, data }: ModalProps) => {
  const [editCover, setEditCover] = useState<boolean>(false);
  const [editAvatar, setEditAvatar] = useState<boolean>(false);
  const [image, setImage] = useState(data?.CreatorImage || '');
  const [cover, setCover] = useState(data?.CreatorCover || '');
  const [name, setName] = useState(data?.CreatorName || '');
  const [bio, setBio] = useState(data?.CreatorBio || '');
  const [coverImageError, setCoverImageError] = useState<string | undefined>(
    undefined
  );
  const [imageError, setImageError] = useState<string | undefined>(undefined);

  const { session } = useSession();
  const queryClient = useQueryClient();
  const router = useRouter();

  const onSuccess = (data: UpdateCreatorHeaderMutation) => {
    // console.log({ creatorUpdateData: data });
    queryClient.setQueryData(
      ['creator', data?.update?.CreatorID, session?.user?.sub],
      (old: any) => {
        // console.log({ old });
        return {
          creator: {
            ...old?.creator,
            ...data?.update,
          },
        };
      }
    );
    setIsOpen(false);
    toast.success('Creator details updated');
    router.refresh();
  };

  const onError = (err: any) => {
    // console.log({ err });
  };

  const { mutate, isLoading } = useMutation<
    UpdateCreatorHeaderMutation,
    unknown,
    UpdateCreatorHeaderMutationVariables
  >(updateCreatorHeader, {
    mutationKey: 'update-creator-header',
    onSuccess,
    onError,
  });

  const handleSave = (e: React.MouseEvent) => {
    e.preventDefault();
    mutate({
      CreatorID: data.CreatorID,
      CreatorName: name,
      CreatorImage: image,
      CreatorCover: cover,
      CreatorBio: bio,
    });
  };

  return (
    <Dialog
      open={isOpen}
      onClose={() => setIsOpen(false)}
      className="relative z-50"
    >
      <div
        className="fixed inset-0 bg-black/20 backdrop-blur-sm dark:bg-black/60"
        aria-hidden="true"
      />
      <div
        data-testid="edit-profile-modal"
        className="fixed inset-0 flex items-center justify-center p-4 shadow-2xl"
      >
        <Dialog.Panel className="w-full max-w-4xl p-6 space-y-4 c-box">
          {(editAvatar || editCover) && (
            <>
              <Dialog.Title>
                <div className="flex items-center gap-3 color-heading">
                  <BsArrowLeft
                    className="text-xl font-bold cursor-pointer"
                    onClick={
                      editCover
                        ? () => setEditCover(false)
                        : () => setEditAvatar(false)
                    }
                  />
                  <h1 className="text-xl font-semibold">
                    {editCover ? 'Edit Cover' : 'Edit Avatar'}
                  </h1>
                </div>
              </Dialog.Title>
              {!editAvatar && editCover && (
                <EditCropper
                  onSave={() => setEditCover(false)}
                  imgUrl={cover}
                  type="CREATOR"
                  setImgUrl={setCover}
                />
              )}
              {!editCover && editAvatar && (
                <EditCropper
                  onSave={() => setEditAvatar(false)}
                  imgUrl={image}
                  type="CREATOR"
                  setImgUrl={setImage}
                  aspect={1}
                />
              )}
            </>
          )}
          {!editCover && !editAvatar && (
            <form data-testid="edit-creator-page-form">
              <Dialog.Title>
                <div className="flex items-center gap-3 color-heading">
                  <BsArrowLeft
                    className="text-xl font-bold cursor-pointer"
                    onClick={() => setIsOpen(false)}
                  />
                  <h1 className="text-xl font-semibold">Edit Page</h1>
                </div>
              </Dialog.Title>
              <section className="pt-4">
                <div className="relative">
                  <div className="relative rounded-lg aspect-w-4 aspect-h-1 bg-base-100 dark:bg-dark-base-100">
                    <div className="absolute inset-0 z-0">
                      <Image
                        src={cover || '/assets/images/temp-cover.png'}
                        layout="fill"
                        alt="cover"
                        className="rounded-lg"
                      />
                      <button
                        onClick={() => setEditCover(true)}
                        className="absolute inset-0 z-10 flex items-center justify-center rounded-lg cursor-pointer bg-black/20 dark:bg-black/70"
                      >
                        <HiPencil className="mr-2 text-base" />
                        Edit
                      </button>
                    </div>
                  </div>
                  <div
                    id="creator_edit_avatar"
                    className="absolute z-40 overflow-hidden transform -translate-x-1/2 -translate-y-1/2 rounded-full top-full left-1/2"
                  >
                    <div className="relative z-40 flex rounded-full ring-box h-28 w-28 ring-4">
                      <img
                        src={image || 'https://placeimg.com/192/192/people'}
                        alt="virtuoso"
                        className="block w-full h-full"
                      />
                      <button
                        onClick={() => setEditAvatar(true)}
                        className="absolute inset-0 z-10 flex items-center justify-center rounded-lg cursor-pointer bg-black/20 dark:bg-black/70"
                      >
                        <HiPencil className="mr-2 text-base" />
                        Edit
                      </button>
                    </div>
                  </div>
                </div>
                <div className="relative pt-20">
                  <div className="space-y-4">
                    {coverImageError && (
                      <ErrorMessage
                        errorText={coverImageError}
                        onCloseClick={() => setCoverImageError(undefined)}
                      />
                    )}
                    {imageError && (
                      <ErrorMessage
                        errorText={imageError}
                        onCloseClick={() => setImageError(undefined)}
                      />
                    )}
                    <div className="space-y-2">
                      <label className="block color-heading">
                        <span className="">Page Title</span>
                      </label>
                      <input
                        type="text"
                        value={name}
                        data-testid="edit-profile-name"
                        onChange={(e) => setName(e.target.value)}
                        className="c-input"
                        placeholder="Eg. Red Rocks"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="block color-heading">
                        <span className="">About</span>
                      </label>
                      <textarea
                        value={bio}
                        data-testid="edit-profile-bio"
                        onChange={(e) => setBio(e.target.value)}
                        className="h-40 c-textarea"
                        placeholder="Eg. Red Rocks"
                      />
                    </div>
                  </div>
                </div>
              </section>
              <section className="flex items-center justify-end pt-8">
                <button
                  onClick={handleSave}
                  data-testid="edit-profile-save-btn"
                  className="capitalize c-btn-primary"
                >
                  <Loading alt="save profile" isLoading={isLoading} />
                </button>
              </section>
            </form>
          )}
        </Dialog.Panel>
      </div>
    </Dialog>
  );
};

export default EditCreatorPageModal;
