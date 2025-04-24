import dynamic from 'next/dynamic';
const EmojiModal = dynamic(() => import('src/modals/EmojiModal'));
const ChatImagesModal = dynamic(() => import('src/modals/ChatImagesModal'));

import { useState } from 'react';
import useSession from 'src/hooks/useSession';
import { MdSend } from 'react-icons/md';
import { EmojiClickData } from 'emoji-picker-react';
import { Socket } from 'socket.io-client';
import {
  HiOutlineCamera,
  HiOutlineChevronDown,
  HiOutlineEmojiHappy,
} from 'react-icons/hi';
import { IconType } from 'react-icons';

interface IMessageInputProps {
  dmId: string;
  socket: Socket;
}

export const sendMsg = (
  socket: Socket,
  room: string,
  content: string,
  sender: {
    sub: string;
    avatar: string;
  },
  receiverId: string,
  images?: string[]
) => {
  socket.emit('c2s_dm', {
    room,
    payload: {
      content,
      sender,
      receiverId,
      images,
    },
  });
};

export default function MessageInput({ dmId, socket }: IMessageInputProps) {
  const [input, setInput] = useState('');
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [showImageUploadModal, setShowImageUploadModal] = useState(false);

  const { session } = useSession();
  const name = session?.user?.name;
  const sub = session?.user?.sub;
  const avatar = session?.user?.avatar || '';

  const handleChatSend = () => {
    if (!input || !sub) return;
    sendMsg(
      socket,
      dmId,
      input,
      {
        sub,
        avatar,
      },
      dmId
    );
    setInput('');
  };

  function handleKeyDown(event: React.KeyboardEvent<HTMLInputElement>) {
    if (!input || !sub) return;
    if (event.key === 'Enter') {
      event.preventDefault();
      sendMsg(
        socket,
        dmId,
        input,
        {
          sub,
          avatar,
        },
        dmId
      );
      setInput('');
    }
  }

  const handleInputFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    e.preventDefault();
    // console.log('handleInputFocus');

    socket.emit('c2s_dm_typing', {
      room: dmId,
      payload: {
        name: name,
      },
    });
  };

  const handleInputBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    e.preventDefault();
    socket.emit('c2s_dm_stopped_typing', {
      room: dmId,
      payload: {
        name: name,
      },
    });
  };

  const handleOnEmojiClick = (obj: EmojiClickData) => {
    setInput((prev) => prev + obj.emoji);
    setShowEmojiPicker(false);
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 flex items-center gap-2 p-2 border-t border-quarternary bg-base-200 dark:border-dark-quarternary/20 dark:bg-dark-base-200 md:static md:gap-4 md:border-t-0 md:px-4">
      <div className="flex items-center gap-1 md:gap-2">
        {showImageUploadModal && sub && (
          <ChatImagesModal
            socket={socket}
            isOpen={showImageUploadModal}
            setIsOpen={setShowImageUploadModal}
            room={dmId}
            sender={{ sub, avatar }}
            dmId={dmId}
          />
        )}
        {!showImageUploadModal ? (
          <Icon
            Icon={HiOutlineCamera}
            onClick={() => setShowImageUploadModal(true)}
          />
        ) : (
          <Icon
            Icon={HiOutlineChevronDown}
            onClick={() => setShowImageUploadModal(false)}
          />
        )}
        {showEmojiPicker && (
          <EmojiModal
            isOpen={showEmojiPicker}
            setIsOpen={setShowEmojiPicker}
            handleOnEmojiClick={handleOnEmojiClick}
          />
        )}
        {!showEmojiPicker ? (
          <Icon
            Icon={HiOutlineEmojiHappy}
            onClick={() => setShowEmojiPicker(true)}
          />
        ) : (
          <Icon
            Icon={HiOutlineChevronDown}
            onClick={() => setShowEmojiPicker(false)}
          />
        )}
      </div>
      <div className="flex-1">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          type="text"
          onBlur={handleInputBlur}
          onFocus={handleInputFocus}
          onKeyDown={handleKeyDown}
          className="block w-full rounded-lg c-input h-9 focus:border-quarternary dark:focus:border-dark-quarternary"
        />
      </div>
      <div className="flex gap-2">
        <button onClick={handleChatSend}>
          <MdSend className="w-6 h-6 text-primary" />
        </button>
      </div>
    </div>
  );
}

function Icon({ Icon, onClick }: { Icon: IconType; onClick: any }) {
  return (
    <Icon
      onClick={onClick}
      className="w-6 h-6 text-base-content dark:text-dark-base-content/60 md:block"
    />
  );
}
