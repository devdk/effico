export default function NotFound() {
  return (
    <div className="flex items-center justify-center flex-col gap-6 h-[calc(100dvh-60px)] bg-base-200 dark:bg-dark-base-200 ">
      <p className="text-6xl font-extrabold">404</p>
      <p className="font-extrabold">Resource Not Found!</p>
    </div>
  );
}
