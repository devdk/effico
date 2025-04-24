'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

export default function SidearTab({
  link,
  identifier,
}: {
  link: string;
  identifier: string;
}) {
  const path = usePathname();

  return (
    <Link
      href={link}
      className={`${
        link === path ? 'bg-base-200 text-primary dark:bg-dark-base-200' : ''
      } flex gap-x-2 rounded-full p-4 px-6 font-semibold hover:bg-base-200 hover:dark:bg-dark-base-200`}
    >
      {identifier}
    </Link>
  );
}
