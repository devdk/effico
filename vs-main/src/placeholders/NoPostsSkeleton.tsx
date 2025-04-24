import React from 'react';
import { FaHeartBroken } from 'react-icons/fa';

export default function NoSearchResults({
  filled = true,
  label = 'No posts yet!',
}: {
  filled?: Boolean;
  label?: string;
}) {
  return (
    <div
      className={`col-span-12 py-28 md:col-span-6 md:rounded-xl md:py-60 ${filled ? 'bg-base-200  dark:bg-dark-base-200' : ''}`}
    >
      <div className="flex items-center justify-center gap-6">
        <FaHeartBroken className="rounded-full shadow-2xl text-9xl" />
      </div>
      <p className="pt-8 text-center">{label}</p>
    </div>
  );
}
