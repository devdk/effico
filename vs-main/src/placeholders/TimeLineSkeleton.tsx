import React from 'react';
import PostSkeleton from './PostSkeleton';

export default function TimeLineSkeleton() {
  return (
    <div className="flex gap-x-4">
      <div className="relative hidden w-[46px] md:block">
        <div className="h-[46px] w-[46px] animate-pulse overflow-hidden rounded-full bg-quarternary dark:bg-dark-quarternary"></div>
        <span className="absolute top-[50px] left-1/2 -bottom-1 z-0 block w-[2px] -translate-x-1/2 transform bg-quarternary/40 dark:bg-dark-quarternary/40"></span>
      </div>
      <div className="flex-1 space-y-6 py-2">
        {Array.from(Array(4).keys()).map((i) => (
          <PostSkeleton key={i} />
        ))}
      </div>
    </div>
  );
}
