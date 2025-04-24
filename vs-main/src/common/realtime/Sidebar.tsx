'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import { HiOutlineChat, HiOutlineUserGroup } from 'react-icons/hi';
import FriendList from 'src/chat/FriendList';
import RoomList from 'src/rooms/RoomList';

const sidebarTabs = [
  {
    id: 1,
    icon: (
      <HiOutlineChat className="text-lg text-base-content dark:text-dark-base-content md:text-xl" />
    ),
    title: 'Chat',
    link: '/chat',
  },
  {
    id: 2,
    icon: (
      <HiOutlineUserGroup className="text-lg text-base-content dark:text-dark-base-content md:text-xl" />
    ),
    title: 'Rooms',
    link: '/rooms',
  },
];

export default function ChatSidebar() {
  const pathname = usePathname();

  return (
    <>
      <div
        className={`flex-row items-center justify-between bg-base-300 px-4 py-2 dark:bg-dark-base-200 md:h-full md:w-20 md:flex-col md:px-0 md:pt-3`}
      >
        <div className="flex flex-row gap-2 md:flex-col md:items-center">
          {sidebarTabs.map((tab) => (
            <Link
              key={tab.id}
              href={tab.link}
              className={`flex h-8 w-8 items-center justify-center rounded-full md:h-10 md:w-10 ${
                pathname?.includes(tab.link)
                  ? 'bg-primary'
                  : 'bg-base-300 dark:bg-dark-base-300'
              }`}
            >
              {tab.icon}
            </Link>
          ))}
        </div>
      </div>
      {pathname?.includes('chat') && <FriendList />}
      {pathname?.includes('rooms') && <RoomList />}
    </>
  );
}
