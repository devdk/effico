import { Dialog } from '@headlessui/react';
import Image from 'next/image';
import { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { BsArrowLeft } from 'react-icons/bs';
import { HiPencil } from 'react-icons/hi';
import { useQueryClient, useMutation } from 'react-query';
import {
  UpdateUserMutation,
  UpdateUserMutationVariables,
  User,
} from 'services/types/generated';
import { updateUser } from 'services/user.service';
import Loading from 'src/common/Loading';
import EditCropper from 'src/cropper/EditCropper';

type ModalProps = {
  isOpen: boolean;
  user: User;
  setIsOpen: (e: boolean) => void;
};

type Inputs = {
  profile: string;
};

const EditProfileModal = ({ isOpen, setIsOpen, user }: ModalProps) => {
  const [editCover, setEditCover] = useState<boolean>(false);
  const [editAvatar, setEditAvatar] = useState<boolean>(false);
  const name = user?.name?.split(' ') || ['', ''];
  const [firstName, setFirstName] = useState<string>(name[0]);
  const [lastName, setLastName] = useState<string>(name[1]);
  const [about, setAbout] = useState<string>(user?.about || '');
  const [avatar, setAvatar] = useState(user?.avatar || '');
  const [cover, setCover] = useState(user?.cover || '');
  const {
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const queryClient = useQueryClient();

  const onSuccess = (data: UpdateUserMutation) => {
    // console.log({ updatedUser: data });
    queryClient.invalidateQueries(['get-user', user?.sub]);
    setIsOpen(false);
    location.reload();
  };

  const onError = (err: any) => {
    // console.log({ err });
  };

  const { mutate, isLoading } = useMutation<
    UpdateUserMutation,
    unknown,
    UpdateUserMutationVariables
  >(updateUser, {
    mutationKey: 'update-user',
    onSuccess,
    onError,
  });

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    mutate({
      sub: user?.sub || '',
      name: `${firstName} ${lastName}`,
      about,
      cover,
      avatar,
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
                  setImgUrl={setCover}
                />
              )}
              {!editCover && editAvatar && (
                <EditCropper
                  onSave={() => setEditAvatar(false)}
                  imgUrl={avatar}
                  setImgUrl={setAvatar}
                  aspect={1}
                />
              )}
            </>
          )}
          {!editCover && !editAvatar && (
            <form onSubmit={handleSubmit(onSubmit)}>
              <Dialog.Title>
                <div className="flex items-center gap-3 color-heading">
                  <BsArrowLeft
                    className="text-xl font-bold cursor-pointer"
                    onClick={() => setIsOpen(false)}
                  />
                  <h1 className="text-xl font-semibold">Edit Profile</h1>
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
                    id="profile_edit_avatar"
                    className="absolute z-40 overflow-hidden transform -translate-x-1/2 -translate-y-1/2 rounded-full top-full left-1/2"
                  >
                    <div className="relative z-40 flex rounded-full ring-box h-28 w-28 ring-4">
                      <img
                        src={avatar || 'https://placeimg.com/192/192/people'}
                        alt="virtuoso"
                      />
                      <button
                        onClick={() => setEditAvatar(true)}
                        className="absolute inset-0 flex items-center justify-center cursor-pointer bg-black/20 dark:bg-black/70"
                      >
                        <HiPencil className="mr-2 text-base" />
                        Edit
                      </button>
                    </div>
                  </div>
                </div>
                <div className="relative pt-20">
                  <div className="grid grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="block color-heading">
                        <span className="">First Name</span>
                      </label>
                      <input
                        type="text"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        className="c-input"
                        placeholder="Eg. John"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="block color-heading">
                        <span className="">Last Name</span>
                      </label>
                      <input
                        type="text"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        className="c-input"
                        placeholder="Eg. Doe"
                      />
                    </div>
                    <div className="col-span-2 space-y-2">
                      <label className="block color-heading">
                        <span className="">Bio</span>
                      </label>
                      <textarea
                        className="resize-none c-textarea h-28"
                        value={about}
                        onChange={(e) => setAbout(e.target.value)}
                        placeholder="My name is John Doe and I am.."
                      />
                    </div>
                  </div>
                </div>
              </section>
              <section className="flex items-center justify-end pt-4">
                <button className="capitalize c-btn-primary">
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

export default EditProfileModal;
