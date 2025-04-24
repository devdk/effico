import React from 'react';

export default function PageCardSkeleton() {
  return (
    <div className="overflow-hidden rounded-xl bg-base-300 dark:bg-dark-base-300">
      <div className="h-52 animate-pulse bg-black/20 dark:bg-black/80"></div>
      <div className="flex items-center gap-4 p-5">
        <div className="h-16 w-16 animate-pulse overflow-hidden rounded-full bg-base-100 dark:bg-dark-base-100"></div>
        <div className="flex-1 space-y-2">
          <div className="h-5 w-1/2 animate-pulse bg-primary/50"></div>
          <div className="h-5 w-2/3 animate-pulse bg-base-100 dark:bg-dark-base-100"></div>
        </div>
      </div>
    </div>
  );
}
