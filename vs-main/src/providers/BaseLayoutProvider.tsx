'use client';

import { usePathname } from 'next/navigation';
import { useEffect } from 'react';
import { useQueryClient } from 'react-query';
import { graphQLClient } from 'services/clients/graphql.client';
import {
  subscribeToGraphQL,
  unsubscribeFromGraphQL,
} from 'services/clients/ws.client';
import ChatPopup from 'src/chat/ChatPopup';
import useSession from 'src/hooks/useSession';
import Navbar from 'src/layout/Navbar';

const NOTIFICATION_SUBSCRIPTION = `
subscription MySubscription ($receiverId: String!) {
  notification: onCreateNotification(
    receiverId: $receiverId
  ) {
    content
    createdAt
    id
    postId
    read
    receiverId
    requestId
    senderId
    type
    sender {
      name
      sub
      avatar
      username
    }
  }
}
`;

export default function BaseLayoutWrapper({ children }: any) {
  const { session } = useSession();
  const pathname = usePathname();
  const queryClient = useQueryClient();

  useEffect(() => {
    if (!session?.user?.sub) {
      return;
    }

    const subscriptionIdPromise = subscribeToGraphQL(
      NOTIFICATION_SUBSCRIPTION,
      { receiverId: session?.user?.sub },
      (data) => {
        console.log('permission', Notification.permission);
        if (Notification.permission === 'granted') {
          new Notification(data?.notification?.content, {
            // body: ,
            icon: '/logo.png',
          });
        }
        queryClient.invalidateQueries(['notifications', session?.user?.sub]);
        console.log('Received subscription data:', data);
      }
    );

    let subscriptionId: string;
    subscriptionIdPromise.then((id) => {
      subscriptionId = id;
    });

    return () => {
      if (subscriptionId) {
        unsubscribeFromGraphQL(subscriptionId);
      }
    };
  }, [session?.user?.sub, queryClient]);

  useEffect(() => {
    console.log('permission', Notification.permission);

    if (localStorage.getItem('color-theme') !== 'light') {
      document.documentElement.classList.add('dark');
      localStorage.setItem('color-theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  useEffect(() => {
    if (!session?.user?.accessToken) return;
    graphQLClient.setHeader(
      `authorization`,
      `Bearer ${session.user.accessToken}`
    );
  }, [session, pathname, graphQLClient]);

  const showMenu =
    (pathname !== '/welcome' &&
      pathname !== '/auth/login' &&
      pathname !== '/auth/forgot-password' &&
      pathname !== '/auth/verify-email' &&
      pathname !== '/auth/reset-password' &&
      pathname !== '/auth/resend-verification' &&
      pathname !== '/auth/register') ||
    false;

  const showChat =
    (pathname !== '/welcome' &&
      pathname !== '/auth/login' &&
      pathname !== '/auth/forgot-password' &&
      pathname !== '/auth/verify-email' &&
      pathname !== '/auth/reset-password' &&
      !pathname.includes('/chat') &&
      pathname !== '/auth/resend-verification' &&
      pathname !== '/auth/register') ||
    false;

  return (
    <>
      {showMenu && <Navbar />}
      <main>{children}</main>
      {showChat && session?.user?.sub && <ChatPopup />}
    </>
  );
}
