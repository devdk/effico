'use client';

import { Skeleton } from 'src/components/ui/skeleton';

export default function LoginSkeleton() {
  return (
    <div className="flex items-center justify-center p-4 min-h-dvh">
      <div className="flex flex-col w-full max-w-5xl mx-auto border rounded-3xl border-border bg-primary lg:flex-row">
        <div className="relative w-full h-40 lg:h-full lg:w-2/5">
          <Skeleton className="object-cover w-full h-full rounded-lg lg:rounded-l-3xl" />
          <div className="absolute w-2/3 space-y-2 -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
            <Skeleton className="w-full h-8" />
            <Skeleton className="w-1/2 h-4 mx-auto" />
          </div>
        </div>

        <div className="flex flex-col items-center justify-center w-full p-6 translate-x-0.5 bg-base-200 dark:bg-dark-base-200 lg:w-3/5 lg:rounded-r-3xl lg:p-16">
          <Skeleton className="w-40 h-8 mb-6" />

          <div className="w-full max-w-md space-y-6">
            <Skeleton className="w-full h-12" />
            <Skeleton className="w-full h-12" />
            <Skeleton className="w-full h-10" />

            <div className="mt-10 space-y-2">
              <Skeleton className="w-3/4 h-4" />
              <Skeleton className="w-2/3 h-4" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
