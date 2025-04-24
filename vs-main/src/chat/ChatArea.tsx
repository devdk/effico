'use client';

import ScrollToBottom from 'react-scroll-to-bottom';
import MessageList from './MessageList';
import MessageInput from './MessageInput';
import { Socket } from 'socket.io-client';
import ProfileSidebar from './ProfileSidebar';
import useChat from 'src/hooks/useChat';

interface IChatAreaProps {
  dmId: string;
  socket: Socket;
  type?: 'room' | 'chat';
  showSidebar?: boolean;
}

export interface IDirectMessage {
  senderId: string;
  receiverId: string;
  content: string;
}

const ChatArea = ({ dmId, socket, type, showSidebar }: IChatAreaProps) => {
  const { isLoading, messages, typing, room, receiver } = useChat({
    socket,
    dmId,
    type,
  });

  return (
    <div className="flex flex-1 h-full c-scrollbar">
      <div className="relative flex !h-[calc(100vh-160px)] flex-1 flex-col md:!h-[calc(100vh-60px)]">
        <ScrollToBottom
          scrollViewClassName="c-scrollbar"
          className="flex-1 pb-8 overflow-y-auto md:pb-0"
        >
          {isLoading &&
            Array.from(Array(8).keys()).map((i) => (
              <div key={i} className="flex gap-2 px-4 py-2">
                <span className="block rounded-full h-7 w-7 animate-pulse bg-base-200 dark:bg-dark-base-200 md:h-8 md:w-8" />
                <div className="!mt-0 flex-1 px-4">
                  <div
                    className={`inline-block min-w-[200px] rounded-md rounded-tl-sm bg-base-200 py-12 pb-0 dark:bg-dark-base-200`}
                  ></div>
                </div>
              </div>
            ))}
          {!isLoading && (
            <MessageList
              socket={socket}
              type={type}
              typing={typing}
              receiverProfilePic={receiver?.avatar || ''}
              messages={messages}
            />
          )}
          {!isLoading && messages.length === 0 && (
            <div className="flex flex-col items-center justify-center h-full">
              <p className="text-base-content dark:text-dark-base-content">
                No messages yet
              </p>
              <p className="text-base-content dark:text-dark-base-content">
                Start chatting with {receiver?.name}
              </p>
            </div>
          )}
        </ScrollToBottom>

        {room && <MessageInput socket={socket} dmId={room} />}
      </div>
      {showSidebar && <ProfileSidebar type={type} dmId={dmId} />}
    </div>
  );
};

export default ChatArea;
