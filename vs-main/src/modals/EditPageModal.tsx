import { Dialog } from '@headlessui/react';
import Image from 'next/image';
import { useState } from 'react';
import { BsArrowLeft } from 'react-icons/bs';
import Loading from 'src/common/Loading';

type ModalProps = {
  isOpen: boolean;
  page: any;
  setIsOpen: (e: boolean) => void;
};

type Inputs = {
  profile: string;
};

const EditPageModal = ({ isOpen, setIsOpen, page }: ModalProps) => {
  const [about, setAbout] = useState<string>(page?.about || '');
  const [avatar, setAvatar] = useState(page?.avatar || '');
  const [cover, setCover] = useState(page?.cover || '');
  const [title, setTitle] = useState(page?.title || '');

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
        <Dialog.Panel className="c-box w-full max-w-4xl space-y-4 p-6">
          <form>
            <Dialog.Title>
              <div className="color-heading flex items-center gap-3">
                <BsArrowLeft
                  className="cursor-pointer text-xl font-bold"
                  onClick={() => setIsOpen(false)}
                />
                <h1 className="text-xl font-semibold">Edit Profile</h1>
              </div>
            </Dialog.Title>
            <section className="pt-4">
              <div className="relative h-48 rounded-lg bg-base-100 dark:bg-dark-base-100">
                <div id="avatar_cover" className="relative z-10 h-full w-full">
                  <Image
                    src={cover || '/assets/images/temp-cover.png'}
                    layout="fill"
                    alt="cover"
                    className="rounded-lg"
                  />
                  <label
                    htmlFor="cover"
                    className="absolute inset-0 flex cursor-pointer items-center justify-center rounded-lg bg-black/20 dark:bg-black/70"
                  >
                    <Loading alt="Edit" isLoading={false} />
                  </label>
                  <input
                    id="cover"
                    className="block h-0 w-0 cursor-pointer opacity-0"
                    type="file"
                    name="myImage"
                  />
                </div>
                <div
                  id="avatar"
                  className="absolute bottom-0 left-1/2 z-40 -translate-x-1/2 translate-y-1/2 transform overflow-hidden rounded-full"
                >
                  <div className="ring-box relative z-40 flex w-28 rounded-full ring-4">
                    <img
                      src={avatar || 'https://placeimg.com/192/192/people'}
                      alt="virtuoso"
                    />
                    <label
                      htmlFor="image"
                      className="absolute inset-0 flex cursor-pointer items-center justify-center bg-black/20 dark:bg-black/70"
                    >
                      <Loading alt="Edit" isLoading={false} />
                    </label>
                    <input
                      id="image"
                      className="z-10 block h-0 w-0 cursor-pointer opacity-0"
                      type="file"
                      name="myImage"
                    />
                  </div>
                </div>
              </div>
              <div className="relative pt-20">
                <div className="">
                  <div className="space-y-2">
                    <label className="color-heading block">
                      <span className="">Page Title</span>
                    </label>
                    <input
                      type="text"
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                      className="c-input"
                      placeholder="Eg. Red Rocks"
                    />
                  </div>
                </div>
              </div>
            </section>
            <section className="flex items-center justify-end pt-8">
              <button className="c-btn-primary capitalize">
                <Loading alt="save profile" isLoading={false} />
              </button>
            </section>
          </form>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
};

export default EditPageModal;
