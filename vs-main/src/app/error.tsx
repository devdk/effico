'use client';

export default function error({ error }: { error: Error }) {
  console.log({ error });

  return (
    <div className="flex items-center justify-center flex-col gap-6 h-[calc(100dvh-60px)] bg-base-200 dark:bg-dark-base-200 ">
      <p className="text-base font-extrabold">An error occurred!</p>
    </div>
  );
}
