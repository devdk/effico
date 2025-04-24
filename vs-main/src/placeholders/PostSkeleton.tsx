import React from 'react';

export default function PostSkeleton() {
  return (
    <div className="space-y-4 bg-base-200 p-5 pb-6 dark:bg-dark-base-200 md:rounded-xl">
      <div className="flex justify-between">
        <div className="flex gap-x-3">
          <div className="h-[46px] w-[46px] animate-pulse overflow-hidden rounded-full bg-base-100 dark:bg-dark-base-100"></div>
          <div className="flex flex-1 flex-col justify-center space-y-1 text-sm">
            <h3 className="h-4 w-20 bg-primary/50 font-medium capitalize"></h3>
            <p className="h-4 w-40 animate-pulse bg-base-100 dark:bg-dark-base-100"></p>
          </div>
        </div>
      </div>
      <div className="space-y-1 pb-4 text-sm">
        <p className="h-5 w-40 animate-pulse bg-base-100 dark:bg-dark-base-100"></p>
        <p className="h-5 w-1/2 animate-pulse bg-base-100 dark:bg-dark-base-100"></p>
        <p className="h-5 w-1/2"></p>
        <p className="h-60 w-full animate-pulse rounded-xl bg-base-100 dark:bg-dark-base-100"></p>
        <p className="h-12 w-40"></p>
        <div className="relative">
          <div className="grid grid-cols-1"></div>
          <div className="absolute bottom-0 flex translate-y-1/3 transform items-center gap-x-2">
            <div className="flex h-[56px] w-[56px] transform animate-pulse cursor-pointer items-center justify-center rounded-full bg-quarternary duration-200 hover:scale-105 dark:bg-dark-quarternary"></div>
            <div className="h-11 w-11 animate-pulse rounded-full bg-primary/50"></div>
            <div className="h-11 w-11 animate-pulse rounded-full bg-primary/50"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
