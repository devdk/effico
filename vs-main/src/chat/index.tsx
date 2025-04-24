'use client';

import ChatArea from './ChatArea';
import ChatIntro from './ChatIntro';

interface IChatProps {
  dmId?: string;
  type?: 'room' | 'chat';
}

import useSocket from 'src/hooks/useSocket';

export default function Chat({ dmId, type }: IChatProps) {
  const socket = useSocket({ dmId, type });
  return (
    <>
      {dmId && socket ? (
        <ChatArea type={type} showSidebar socket={socket} dmId={dmId || ''} />
      ) : (
        <ChatIntro />
      )}
    </>
  );
}
