'use client';

import { ReactQueryDevtools } from 'react-query/devtools';
import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import BaseLayoutWrapper from './BaseLayoutProvider';
import { PagesProvider } from './PagesContextProvider';
import { Toaster } from 'react-hot-toast';
import { SessionProvider as NextAuthSessionProvider } from 'next-auth/react';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

export default function RootProvider({ children }: any) {
  return (
    <QueryClientProvider client={queryClient}>
      <NextAuthSessionProvider>
        <PagesProvider>
          <BaseLayoutWrapper>{children}</BaseLayoutWrapper>
          <ReactQueryDevtools position="bottom-left" />
          <Toaster />
        </PagesProvider>
      </NextAuthSessionProvider>
    </QueryClientProvider>
  );
}
