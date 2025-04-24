'use client';

import ScrollToBottom from 'react-scroll-to-bottom';
import MessageList from './MessageList';
import MessageInput from './MessageInput';
import { Socket } from 'socket.io-client';
import useChat from 'src/hooks/useChat';
import { useEffect, useRef } from 'react';

interface IChatAreaProps {
  dmId: string;
  socket: Socket;
  type?: 'room' | 'chat';
}

export interface IDirectMessage {
  senderId: string;
  receiverId: string;
  content: string;
}

const DMPopup = ({ dmId, socket, type }: IChatAreaProps) => {
  const bottomRef = useRef<HTMLDivElement>(null);

  const { isLoading, messages, typing, room, receiver } = useChat({
    socket,
    dmId,
    type,
  });

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <>
      <div className="relative flex flex-col flex-1 h-full">
        <ScrollToBottom
          scrollViewClassName="c-scrollbar"
          className="flex-1 pb-8 overflow-y-auto md:pb-0 max-h-[800px]"
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
          <div ref={bottomRef} />
        </ScrollToBottom>
      </div>
      {room && <MessageInput socket={socket} dmId={room} />}
    </>
  );
};

export default DMPopup;
