export default function TicketCardSkeleton() {
  return (
    <div>
      <div className="relative col-span-10 col-start-2 grid grid-cols-12 rounded-xl bg-gray-50 shadow dark:bg-dark-base-200">
        <div className="col-span-7 space-y-5 rounded-l-xl border-r-2 border-dashed border-quarternary bg-base-300 px-10 py-12 dark:border-dark-quarternary/80 dark:bg-dark-base-300">
          <div className="space-y-1">
            <div className="mt-2 h-7 w-4/12 animate-pulse bg-base-300 dark:bg-dark-base-100"></div>
          </div>
          <div>
            <div className="mt-2 h-8 w-10/12 animate-pulse bg-base-300 dark:bg-dark-base-100"></div>
            <div className="mt-2 h-4 w-1/3 animate-pulse bg-base-300 dark:bg-dark-base-100"></div>
          </div>
          <div className="">
            <div className="h-9 w-40 animate-pulse rounded-xl bg-base-300 dark:bg-dark-base-100"></div>
          </div>
        </div>
        <div className="col-span-5 space-y-6 px-10 py-16">
          <div className="space-y-2">
            <div className="h-4 w-1/2 animate-pulse bg-base-300 dark:bg-dark-base-300"></div>
            <div className="h-4 w-10/12 animate-pulse bg-base-300 dark:bg-dark-base-300"></div>
          </div>
          <div className="space-y-2 py-3">
            <div className="h-4 w-1/2 animate-pulse bg-base-300 dark:bg-dark-base-300"></div>
            <div className="h-4 w-10/12 animate-pulse bg-base-300 dark:bg-dark-base-300"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
