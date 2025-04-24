import React from 'react';
import { TbMoodEmpty } from 'react-icons/tb';

export default function NoPostsSkeleton() {
  return (
    <div className="bg-base-200 py-20 dark:bg-dark-base-200 md:rounded-xl">
      <div className="flex items-center justify-center gap-6">
        <TbMoodEmpty className="animate-pulse animate-bounce text-7xl text-primary opacity-20" />
        <TbMoodEmpty className="rounded-full text-9xl shadow-2xl" />
        <TbMoodEmpty className="animate-pulse animate-bounce text-7xl text-primary opacity-20" />
      </div>
      <p className="pt-8 text-center">No Posts to Show!</p>
    </div>
  );
}
