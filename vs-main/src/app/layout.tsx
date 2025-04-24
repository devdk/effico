import React from 'react';
import './globals.css';
import RootProvider from 'src/providers/RootProvider';

export default async function RootLayout({ children }: any) {
  return (
    <html lang="en" className="dark">
      <body className="">
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}
