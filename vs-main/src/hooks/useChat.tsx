import { useState, useEffect } from 'react';
import { useQuery } from 'react-query';
import { Socket } from 'socket.io-client';
import useSession from 'src/hooks/useSession';
import { listDirectMessages } from 'services/directmessages.service';
import { getProfile } from 'services/user.service';
import {
  DirectMessage,
  GetProfileQuery,
  ListDirectMessagesQuery,
  User,
} from 'services/types/generated';

interface UseChatParams {
  socket: Socket;
  dmId: string;
  type?: 'room' | 'chat';
}

interface UseChatResult {
  messages: DirectMessage[];
  typing: string;
  receiver?: User;
  isLoading: boolean;
  room: string;
}

function useChat({
  socket,
  dmId,
  type = 'chat',
}: UseChatParams): UseChatResult {
  const [typing, setTyping] = useState('');
  const [messages, setMessages] = useState<DirectMessage[]>([]);
  const { session, loading } = useSession();
  const sub = session?.user?.sub;

  // Determine the "room" identifier
  const room = type === 'room' ? dmId : [dmId, sub].sort().join('-');

  // Load receiver profile
  const { data: receiver, isLoading: isReceiverLoading } = useQuery<
    GetProfileQuery,
    unknown,
    User
  >(['get-user', dmId, sub], getProfile, {
    select: (data) => data.user as User,
    enabled: !!dmId && !loading,
  });

  // Load older messages
  const { isLoading } = useQuery<
    ListDirectMessagesQuery,
    unknown,
    DirectMessage[]
  >(['dm', room, type === 'room'], listDirectMessages, {
    select: (data) => data.dms?.items as DirectMessage[],
    onSuccess: (data) => setMessages(data),
    enabled: !loading && !isReceiverLoading,
  });

  useEffect(() => {
    if (!socket || !dmId || !sub) return;

    const handleReaction = ({
      messageId,
      emoji,
    }: {
      messageId: string;
      emoji: string;
    }) => {
      setMessages((prev) =>
        prev.map((msg) =>
          msg.id === messageId
            ? { ...msg, reactions: [...(msg.reactions || []), emoji] }
            : msg
        )
      );
    };

    const handleNewDM = (data: DirectMessage) => {
      setMessages((prev) => [...prev, data]);
    };

    const handleTyping = (payload: { name: string }) => setTyping(payload.name);
    const handleStoppedTyping = () => setTyping('');

    socket.on('s2c_reaction', handleReaction);
    socket.on('s2c_dm', handleNewDM);
    socket.on('s2c_dm_typing', handleTyping);
    socket.on('s2c_dm_stopped_typing', handleStoppedTyping);

    return () => {
      socket.off('s2c_reaction', handleReaction);
      socket.off('s2c_dm', handleNewDM);
      socket.off('s2c_dm_typing', handleTyping);
      socket.off('s2c_dm_stopped_typing', handleStoppedTyping);
    };
  }, [socket, dmId, sub, type]);

  return {
    messages,
    typing,
    receiver,
    isLoading: isLoading || loading || isReceiverLoading,
    room,
  };
}

export default useChat;
