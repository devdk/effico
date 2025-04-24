import React from 'react';
import Sidebar from 'src/common/realtime/Sidebar';

export default function Layout({ children }: any) {
  return (
    <div className="flex !h-[calc(100vh-160px)] flex-col md:!h-[calc(100vh-60px)] md:flex-row md:justify-start md:overflow-hidden">
      <Sidebar />
      <div className="flex-1">{children}</div>
    </div>
  );
}
