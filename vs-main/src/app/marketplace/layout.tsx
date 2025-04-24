import React from 'react';
import Sidebar from 'src/marketplace/Sidebar';

export default function MarketplaceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 px-4 py-6 pb-16 mx-auto sm:px-5 max-w-7xl">
        {children}
      </div>
    </div>
  );
}
