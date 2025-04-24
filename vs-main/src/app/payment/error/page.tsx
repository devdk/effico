'use client';

import { useRouter } from 'next/navigation';
import { MdError } from 'react-icons/md';

export default function PaymentError() {
  const router = useRouter();

  return (
    <>
      <section id="payment-error" className="py-10 c-container">
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
              <MdError className="text-6xl text-orange-500" />
            </div>
            <div className="py-4 pb-6 space-y-2 border-b border-quarternary dark:border-dark-quarternary/40">
              <h2 className="text-xl text-center color-heading">
                There was an error with your payment.
              </h2>
              <p className="text-center">
                Unfortunately, your payment could not be processed. Please try
                again or contact our support team.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
