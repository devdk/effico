import React from 'react';

export default function Navigation({ step }: { step: number }) {
  return (
    <section className="">
      <div className="flex gap-x-4">
        <div className="relative hidden w-[46px] md:block">
          <div
            className={`z-10 flex h-[46px] w-[46px] items-center justify-center overflow-hidden rounded-full bg-primary text-xl font-bold text-primary-content ${
              step > 0
                ? 'bg-primary text-primary-content'
                : 'bg-base-300 text-base-content dark:bg-dark-base-300 dark:text-dark-base-content'
            }`}
          >
            1
          </div>
          <span className="absolute top-[50px] left-1/2 -bottom-1 z-0 block w-[2px] -translate-x-1/2 transform bg-quarternary/40 dark:bg-dark-quarternary/40"></span>
        </div>
        <div className="flex-1 space-y-2 pb-20">
          <h2 className="text-xl font-bold text-heading dark:text-dark-heading">
            Billing Address
          </h2>
          <p className="max-w-sm">
            Enter your complete address. This step is required to calculate
            taxes. Optionally you can opt to save your address for future usage.
          </p>
        </div>
      </div>
      <div className="flex gap-x-4">
        <div className="relative hidden w-[46px] md:block">
          <div
            className={`z-10 flex h-[46px] w-[46px] items-center justify-center overflow-hidden rounded-full bg-primary text-xl font-bold text-primary-content ${
              step > 1
                ? 'bg-primary text-primary-content'
                : 'bg-base-300 text-base-content dark:bg-dark-base-300 dark:text-dark-base-content'
            }`}
          >
            2
          </div>
          <span className="absolute top-[50px] left-1/2 -bottom-1 z-0 block w-[2px] -translate-x-1/2 transform bg-quarternary/40 dark:bg-dark-quarternary/40"></span>
        </div>
        <div className="flex-1 space-y-2 pb-20">
          <h2 className="text-xl font-bold text-heading dark:text-dark-heading">
            Payment
          </h2>
          <p className="max-w-sm">
            Securely complete your purchase with our streamlined payment
            process, ensuring a seamless transaction for a hassle-free shopping
            experience. Shop confidently!
          </p>
        </div>
      </div>
      <div className="flex gap-x-4">
        <div className="relative hidden w-[46px] md:block">
          <div
            className={`z-10 flex h-[46px] w-[46px] items-center justify-center overflow-hidden rounded-full bg-primary text-xl font-bold text-primary-content ${
              step > 2
                ? 'bg-primary text-primary-content'
                : 'bg-base-300 text-base-content dark:bg-dark-base-300 dark:text-dark-base-content'
            }`}
          >
            3
          </div>
          <span className="absolute top-[50px] left-1/2 -bottom-1 z-0 block w-[2px] -translate-x-1/2 transform bg-quarternary/40 dark:bg-dark-quarternary/40"></span>
        </div>
        <div className="flex-1 space-y-2">
          <h2 className="text-xl font-bold text-heading dark:text-dark-heading">
            Enjoy your Purchase
          </h2>
          <p className="max-w-sm">
            Your payment has been successfully completed. We invite you to
            relish and enjoy your purchase.
          </p>
        </div>
      </div>
    </section>
  );
}
