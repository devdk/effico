import React from 'react';
import Sidebar from 'src/inventory/Sidebar';

export default function InventoryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col md:flex-row">
      <Sidebar />
      <div className="w-full px-4 py-6 pb-16 mx-auto md:flex-1 md:mx-0 sm:px-5 md:max-w-7xl">
        {children}
      </div>
    </div>
  );
}
