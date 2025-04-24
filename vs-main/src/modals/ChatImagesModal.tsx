import { Dialog } from '@headlessui/react';
import React, { ChangeEvent, useState } from 'react';
import { HiOutlineTrash, HiOutlineUpload } from 'react-icons/hi';
import { MdSend } from 'react-icons/md';
import { Socket } from 'socket.io-client';
import { sendMsg } from 'src/chat/MessageInput';
import Loading from 'src/common/Loading';
import usePublicUpload from 'src/hooks/usePublicUpload';

type TChatImagesModal = {
  sender: {
    sub: string;
    avatar: string;
  };
  dmId: string;
  room: string;
  socket: Socket;
  isOpen: boolean;
  setIsOpen: any;
};

export default function ChatImagesModal({
  sender,
  dmId,
  room,
  socket,
  isOpen,
  setIsOpen,
}: TChatImagesModal) {
  const [images, setImages] = useState<string[]>([]);
  const [input, setInput] = useState('');

  // upload images mutation
  const onImageUploadSuccess = (url: any) => {
    setImages((images) => [...images, url]);
  };

  const onImageUploadError = (error: any) => {
    // console.log(error);
  };

  const { mutate: mutateImageUpload, isLoading: isImageUploadLoading } =
    usePublicUpload({
      type: 'CHAT',
      pageID: room || '',
      onSuccess: onImageUploadSuccess,
      onError: onImageUploadError,
    });

  const handleRemoveImage = async (e: any, url: string) => {
    e.preventDefault();
    setImages((imgs) => imgs.filter((i) => i !== url));
  };

  const handleImageChange = async (e: ChangeEvent<HTMLInputElement>) => {
    const { files } = e.target;
    if (!files) {
      return;
    }
    mutateImageUpload(files[0]);
  };

  function handleKeyDown(event: React.KeyboardEvent<HTMLInputElement>) {
    if (!images.length) return;
    if (event.key === 'Enter') {
      event.preventDefault();
      sendMsg(socket, room, input, sender, dmId, images);
      setInput('');
      setImages([]);
      setIsOpen(false);
    }
  }

  const handleChatSend = () => {
    if (!images.length) return;
    sendMsg(socket, room, input, sender, dmId, images);
    setInput('');
    setImages([]);
    setIsOpen(false);
  };

  return (
    <>
      {isOpen && (
        <Dialog
          className="relative z-50"
          open={isOpen}
          onClose={() => setIsOpen(false)}
        >
          <div
            className="fixed inset-0 bg-black/20 backdrop-blur-sm dark:bg-black/60"
            aria-hidden="true"
          />
          <div className="fixed inset-0 flex items-center justify-center p-4 shadow-2xl">
            <Dialog.Panel className="w-full max-w-2xl p-4 space-y-4 c-scrollbar c-box">
              <div className="h-[calc(100%-140px)] max-h-[400px] min-h-[200px] w-full space-y-4 overflow-y-auto pb-20">
                <div className="space-y-4">
                  <div className="relative grid grid-cols-1 gap-4 sm:grid-cols-2 md:flex md:flex-wrap">
                    <div className="relative flex flex-col items-center justify-center w-full gap-1 text-xs border rounded-lg h-36 border-primary md:h-36 md:w-64">
                      {!isImageUploadLoading && (
                        <>
                          <input
                            className="absolute inset-0 opacity-0 cursor-pointer"
                            type="file"
                            name="myImage"
                            onChange={handleImageChange}
                          />
                          <HiOutlineUpload className="text-xl" />
                          Photo
                        </>
                      )}
                      {isImageUploadLoading && (
                        <Loading alt="" isLoading={isImageUploadLoading} />
                      )}
                    </div>
                    {images.map((i: string) => (
                      <div
                        key={i}
                        className="relative w-full overflow-hidden rounded-lg h-36 bg-white/10 md:h-36 md:w-64"
                      >
                        <img
                          src={i}
                          className="block object-cover w-full h-full"
                          alt="virtuoso"
                        />
                        <div className="absolute flex items-center justify-center w-6 h-6 p-1 rounded-full top-1 right-1 bg-base-100 dark:bg-dark-base-100">
                          <button onClick={(e: any) => handleRemoveImage(e, i)}>
                            <HiOutlineTrash className="text-md text-primary" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex-1">
                  <input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    type="text"
                    placeholder="Caption"
                    onKeyDown={handleKeyDown}
                    className="block w-full rounded-lg c-input h-9 focus:border-quarternary dark:focus:border-dark-quarternary"
                  />
                </div>
                <div className="flex items-center justify-center w-8 h-8 p-1 rounded-full bg-primary">
                  <button onClick={handleChatSend}>
                    <MdSend className="w-5 h-5 text-primary-content" />
                  </button>
                </div>
              </div>
            </Dialog.Panel>
          </div>
        </Dialog>
      )}
    </>
  );
}
