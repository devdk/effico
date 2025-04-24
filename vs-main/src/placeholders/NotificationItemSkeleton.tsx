export default function NotificationItemSkeleton() {
  return (
    <div>
      <div className="flex gap-x-5 p-2 py-3 md:py-4">
        <div className="relative h-10 w-10 animate-pulse rounded-full bg-base-100 dark:bg-dark-base-100"></div>
        <div className="flex-1 space-y-1">
          <span className="block h-4 w-2/3 animate-pulse bg-base-100 dark:bg-dark-base-100"></span>
          <span className="block h-4 w-20 animate-pulse bg-base-100 dark:bg-dark-base-100"></span>
        </div>
      </div>
    </div>
  );
}
