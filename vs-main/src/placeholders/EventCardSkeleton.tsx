import React from 'react';

export default function EventCardSkeleton() {
  return (
    <div>
      <div className="h-40 w-full animate-pulse rounded-xl bg-base-300 dark:bg-dark-base-300"></div>
      <div className="flex gap-x-3 py-2">
        <div className="h-[46px] w-[46px] animate-pulse rounded-full bg-quarternary dark:bg-dark-quarternary"></div>
        <div className="flex-1 space-y-2">
          <div className="h-4 w-1/2 animate-pulse bg-base-300 dark:bg-dark-base-300"></div>
          <div className="h-4 w-2/3 animate-pulse bg-base-300 dark:bg-dark-base-300"></div>
        </div>
      </div>
    </div>
  );
}
