import TimeLineSkeleton from './TimeLineSkeleton';

export default function ProfileSkeleton() {
  return (
    <div className="c-container pb-10 md:pt-5">
      <div className="grid grid-cols-12 md:gap-x-10">
        <div className="col-span-12">
          <div
            id="cover"
            className="relative h-48 animate-pulse bg-base-200 dark:bg-dark-base-200 md:h-96 md:rounded-t-xl"
          >
            <div className="absolute bottom-0 left-1/2 h-[100px] w-[100px] translate-y-1/2 -translate-x-1/2 transform animate-pulse overflow-hidden rounded-full border-2 border-primary bg-base-100 dark:bg-dark-base-100"></div>
          </div>
        </div>
        <div className="relative col-span-12 flex flex-col items-center justify-center px-4 py-16 pb-10">
          <div className="absolute left-0 bottom-4 font-bold"></div>
        </div>
        <div
          id="sidebar"
          className="col-span-12 space-y-6 px-4 md:col-span-4 md:px-0"
        >
          <div className="c-box col-span-3 h-12 animate-pulse"></div>
          <div className="c-box col-span-3 h-12 animate-pulse"></div>
          <div className="c-box col-span-3 h-12 animate-pulse"></div>
          <div className="c-box col-span-3 h-40 animate-pulse"></div>
        </div>
        <div className="col-span-12 space-y-6 pt-8 md:col-span-8 md:pt-0">
          <div className="space-y-2" id="content">
            <TimeLineSkeleton />
          </div>
        </div>
      </div>
    </div>
  );
}
