import React from 'react';
import NoPostsSkeleton from './NoPostsSkeleton';

interface TNoPostsTimeLineSkeletonProps {
  pageProfileImg?: string | null | undefined;
}

export default function NoPostsTimeLineSkeleton({
  pageProfileImg,
}: TNoPostsTimeLineSkeletonProps) {
  return (
    <div className="flex gap-x-4">
      <div className="relative hidden w-[46px] md:block">
        <div className="z-10 h-[46px] w-[46px] overflow-hidden rounded-full bg-quarternary dark:bg-dark-quarternary">
          <img
            src={pageProfileImg || '/assets/images/page-card-avatar.png'}
            className="block h-full w-full object-cover"
            alt=""
          />
        </div>
      </div>
      <div className="flex-1 space-y-6 py-2">
        <NoPostsSkeleton />
      </div>
    </div>
  );
}
