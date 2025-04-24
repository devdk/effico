import React from 'react';
import Sidebar from 'src/settings/Sidebar';

export default function SettingsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col px-4 pb-20 md:flex-row md:px-4">
      <Sidebar />
      {children}
    </div>
  );
}
