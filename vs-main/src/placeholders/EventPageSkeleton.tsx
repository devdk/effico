export default function EventPageSkeleton() {
  return (
    <div className="">
      <section className="bg-base-300 dark:bg-dark-base-300 h-60 md:h-96 animate-pulse"></section>
      <div className="c-container -my-20 pb-28 md:my-0 md:py-20 md:pt-60">
        <div className="p-6 divide-y divide-base-300 dark:divide-dark-base-300 md:grid md:grid-cols-12 md:divide-x md:divide-y-0 md:p-0">
          <div className="space-y-10 md:col-span-6 md:col-start-2 md:pr-20">
            <div className="space-y-6">
              <div className="h-6 w-32 bg-base-300 dark:bg-dark-base-300 animate-pulse"></div>
              <div className="space-y-3">
                <div className="h-4 w-full bg-base-300 dark:bg-dark-base-300 animate-pulse"></div>
                <div className="h-4 w-5/6 bg-base-300 dark:bg-dark-base-300 animate-pulse"></div>
                <div className="h-4 w-4/6 bg-base-300 dark:bg-dark-base-300 animate-pulse"></div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="h-6 w-32 bg-base-300 dark:bg-dark-base-300 animate-pulse"></div>
              <div className="grid grid-cols-2 gap-4">
                <div className="h-40 w-full bg-base-300 dark:bg-dark-base-300 rounded-xl animate-pulse"></div>
                <div className="h-40 w-full bg-base-300 dark:bg-dark-base-300 rounded-xl animate-pulse"></div>
              </div>
            </div>
          </div>
          <div className="pt-10 md:col-span-4 md:pt-0 md:pl-20">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-quarternary dark:bg-dark-quarternary rounded-full animate-pulse"></div>
              <div className="space-y-2 flex-1">
                <div className="h-4 w-24 bg-base-300 dark:bg-dark-base-300 animate-pulse"></div>
                <div className="h-4 w-32 bg-base-300 dark:bg-dark-base-300 animate-pulse"></div>
              </div>
            </div>
            <div className="mt-10 space-y-6">
              <div className="space-y-2">
                <div className="h-4 w-24 bg-base-300 dark:bg-dark-base-300 animate-pulse"></div>
                <div className="h-4 w-40 bg-base-300 dark:bg-dark-base-300 animate-pulse"></div>
              </div>
              <div className="space-y-2">
                <div className="h-4 w-24 bg-base-300 dark:bg-dark-base-300 animate-pulse"></div>
                <div className="h-4 w-40 bg-base-300 dark:bg-dark-base-300 animate-pulse"></div>
              </div>
              <div className="space-y-2">
                <div className="h-4 w-24 bg-base-300 dark:bg-dark-base-300 animate-pulse"></div>
                <div className="h-4 w-40 bg-base-300 dark:bg-dark-base-300 animate-pulse"></div>
              </div>
            </div>
            <div className="mt-10 p-4 space-y-4 bg-base-300 dark:bg-dark-base-300 rounded-xl animate-pulse"></div>
          </div>
        </div>
      </div>
      <section className="c-container pb-40">
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12 h-40 bg-base-300 dark:bg-dark-base-300 rounded-xl animate-pulse"></div>
        </div>
      </section>
    </div>
  );
}
