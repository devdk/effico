import React, { useEffect } from 'react';
import { DirectMessage } from 'services/types/generated';
import Message from './Message';
import { useScrollToBottom, useSticky } from 'react-scroll-to-bottom';
import { HiChevronDown } from 'react-icons/hi';
import useSession from 'src/hooks/useSession';
import { Socket } from 'socket.io-client';

let prevSender: string | null = null;

interface IMessageListProps {
  socket: Socket;
  type?: 'room' | 'chat';
  typing: string;
  messages: DirectMessage[];
  receiverProfilePic: string;
}

export default function MessageList({
  socket,
  type,
  typing,
  messages,
  receiverProfilePic,
}: IMessageListProps) {
  const scrollToBottom = useScrollToBottom();
  const [sticky] = useSticky();
  const { session } = useSession();

  const receiver = {
    avatar: session?.user?.avatar || '',
    sub: session?.user?.sub || '',
  };

  return (
    <div className="p-4 px-4 pb-4 space-y-4 md:p-4 md:pb-8 lg:p-4 md:px-6 lg:px-6">
      {messages.map((message) => {
        let adjacentSender = !(prevSender === null)
          ? prevSender === message.senderId
          : false;

        if (messages[0] === message) {
          adjacentSender = false;
        }

        prevSender = message.senderId;
        return (
          <div key={message.id} className={`${adjacentSender ? '!mt-3' : ''}`}>
            <Message
              socket={socket}
              user={receiver}
              payload={message}
              adjacentSender={adjacentSender}
              receiverProfilePic={receiverProfilePic}
            />
          </div>
        );
      })}
      <div>
        {typing && (
          <div className="flex items-center gap-2 pl-12 c-typing">
            {type === 'room' && <p className="pl-3 text-[10px]">{typing}</p>}
            <div className="flex items-center gap-1">
              <span className="c-typing-dot"></span>
              <span className="c-typing-dot"></span>
              <span className="c-typing-dot"></span>
            </div>
          </div>
        )}
      </div>
      {!sticky && (
        <button
          onClick={scrollToBottom as any}
          className="fixed p-2 rounded-full right-5 bottom-20 animate-bounce bg-primary md:sticky md:bottom-8"
        >
          <HiChevronDown />
        </button>
      )}
    </div>
  );
}
