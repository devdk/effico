import { Dialog } from '@headlessui/react';
import useSession from 'src/hooks/useSession';
import Image from 'next/image';
import { useState } from 'react';
import { BsArrowLeft } from 'react-icons/bs';
import { HiPencil, HiPlus } from 'react-icons/hi';
import { useMutation, useQueryClient } from 'react-query';
import { createChatRoom, updateChatRoom } from 'services/rooms.service';
import {
  ChatRooms,
  CreateChatRoomsMutation,
  CreateChatRoomsMutationVariables,
  UpdateChatRoomMutation,
  UpdateChatRoomMutationVariables,
} from 'services/types/generated';
import Loading from 'src/common/Loading';
import ErrorMessage from 'src/common/message/ErrorMessage';
import EditCropper from 'src/cropper/EditCropper';

type ModalProps = {
  isOpen: boolean;
  setIsOpen: (e: boolean) => void;
  editMode?: boolean;
  data?: ChatRooms;
};

const CreateRoomModal = ({ isOpen, setIsOpen, editMode, data }: ModalProps) => {
  const [editCover, setEditCover] = useState<boolean>(false);
  const [editAvatar, setEditAvatar] = useState<boolean>(false);
  const [image, setImage] = useState(data?.avatar || '');
  const [cover, setCover] = useState(data?.cover || '');
  const [name, setName] = useState(data?.title || '');
  const [bio, setBio] = useState(data?.description || '');
  const [coverImageError, setCoverImageError] = useState<string | undefined>(
    undefined
  );
  const [imageError, setImageError] = useState<string | undefined>(undefined);

  const { session } = useSession();
  const queryClient = useQueryClient();

  const onSuccess = () => {
    setIsOpen(false);
    queryClient.invalidateQueries(['rooms']);
    editMode && queryClient.invalidateQueries(['room', data?.id]);
  };

  const { mutate, isLoading } = useMutation<
    CreateChatRoomsMutation,
    unknown,
    CreateChatRoomsMutationVariables
  >(createChatRoom, {
    mutationKey: 'create-chat-room',
    onSuccess,
  });

  const { mutate: update, isLoading: isUpdateLoading } = useMutation<
    UpdateChatRoomMutation,
    unknown,
    UpdateChatRoomMutationVariables
  >(updateChatRoom, {
    mutationKey: 'update-chat-room',
    onSuccess,
  });

  const handleSave = (e: React.MouseEvent) => {
    e.preventDefault();
    editMode
      ? update({
          id: String(data?.id),
          title: name,
          avatar: image,
          cover: cover,
          description: bio,
        })
      : mutate({
          title: name,
          avatar: image,
          cover: cover,
          createdBy: session?.user?.sub || '',
          description: bio,
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
      <div className="fixed inset-0 flex items-center justify-center p-4 shadow-2xl">
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
            <form>
              <Dialog.Title>
                <div className="flex items-center gap-3 color-heading">
                  <BsArrowLeft
                    className="text-xl font-bold cursor-pointer"
                    onClick={() => setIsOpen(false)}
                  />
                  <h1 className="text-xl font-semibold">
                    {editMode ? 'Edit Room' : 'Create Room'}
                  </h1>
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
                        {editMode ? (
                          <HiPencil className="mr-2 text-base" />
                        ) : (
                          <HiPlus className="mr-2 text-base" />
                        )}
                        {editMode ? 'Change' : 'Add'}
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
                        {editMode ? (
                          <HiPencil className="mr-2 text-base" />
                        ) : (
                          <HiPlus className="mr-2 text-base" />
                        )}
                        {editMode ? 'Change' : 'Add'}
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
                        <span className="">Room Title</span>
                      </label>
                      <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="c-input"
                        placeholder="Eg. Virtuoso Gang"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="block color-heading">
                        <span className="">Description</span>
                      </label>
                      <textarea
                        value={bio}
                        onChange={(e) => setBio(e.target.value)}
                        className="h-40 c-textarea"
                        placeholder="short description of the room.."
                      />
                    </div>
                  </div>
                </div>
              </section>
              <section className="flex items-center justify-end pt-8">
                <button
                  onClick={handleSave}
                  className="capitalize c-btn-primary"
                >
                  <Loading
                    alt="save profile"
                    isLoading={isLoading || isUpdateLoading}
                  />
                </button>
              </section>
            </form>
          )}
        </Dialog.Panel>
      </div>
    </Dialog>
  );
};

export default CreateRoomModal;
