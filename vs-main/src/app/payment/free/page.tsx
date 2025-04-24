'use client';

import { useRouter } from 'next/navigation';

export default function PurchaseComplete() {
  const router = useRouter();

  return (
    <>
      <section id="purchase" className="py-10 c-container">
        <div className="flex justify-between">
          <button
            className="c-btn"
            onClick={() => {
              router.push('/');
            }}
          >
            Home
          </button>
        </div>
        <div className="pt-20">
          <div className="max-w-xl p-6 px-10 py-12 mx-auto space-y-6 rounded-xl bg-base-200 dark:bg-dark-base-200">
            <div className="flex items-center justify-center">
              <img
                src="/assets/logo/tick.png"
                alt="tick"
                className="block w-16 h-16"
              />
            </div>
            <div className="py-4 pb-6 space-y-2 border-b border-quarternary dark:border-dark-quarternary/40">
              <h2 className="text-2xl text-center color-heading">
                Free purchase completed successfully!
              </h2>
              <p className="text-center">
                This was a free purchase supported by Virtuoso. Enjoy the perks!
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
