import { useEffect, useState } from 'react';
import io, { Socket } from 'socket.io-client';
import useSession from './useSession';

interface UseSocketOptions {
  dmId?: string;
  type?: 'room' | 'chat';
}

const useSocket = ({ dmId, type }: UseSocketOptions): Socket | undefined => {
  const [socket, setSocket] = useState<Socket>();
  const { session } = useSession();
  const sub = session?.user?.sub;

  // Initialize the socket once on mount
  useEffect(() => {
    const socketInstance = io(`${process.env.NEXT_PUBLIC_AUTH_HOST}/`);
    setSocket(socketInstance);
    return () => {
      socketInstance.close();
    };
  }, []);

  useEffect(() => {
    if (!socket) return;
    if (!dmId || !sub) return;

    const joinChannel = () => {
      if (type === 'room') {
        socket.emit('joinroom', { dmId });
      } else {
        socket.emit('joindm', { sub, dmId });
      }
    };

    socket.on('connect', joinChannel);

    if (socket.connected) {
      joinChannel();
    }

    return () => {
      socket.off('connect', joinChannel);
    };
  }, [socket, dmId, sub, type]);

  return socket;
};

export default useSocket;
