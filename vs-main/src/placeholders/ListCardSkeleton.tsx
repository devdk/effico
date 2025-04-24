import React from 'react';

interface IListCardSkeletonProps {
  items?: number;
}

export default function ListCardSkeleton({
  items = 5,
}: IListCardSkeletonProps) {
  return (
    <section className="col-span-12 md:col-span-6">
      <div className="space-y-6">
        <div className="color-divide c-box font-heading divide-y !rounded-none md:!rounded-xl">
          <div id="header" className="flex justify-between p-5 pb-4">
            <h3 className="h-4 w-20 bg-primary/20 font-medium capitalize"></h3>
          </div>
          {Array.from(Array(items).keys())?.map((i) => (
            <div key={i} className="flex gap-x-3 px-5 py-4">
              <div className="h-[46px] w-[46px] animate-pulse overflow-hidden rounded-full bg-base-100 dark:bg-dark-base-100"></div>
              <div className="flex flex-1 flex-col justify-center space-y-1 text-sm">
                <h3 className="h-4 w-20 bg-primary/20 font-medium capitalize"></h3>
                <p className="h-4 w-40 animate-pulse bg-base-100 dark:bg-dark-base-100"></p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
