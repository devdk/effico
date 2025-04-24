import React, { Suspense } from 'react';
import PaymentPage from 'src/payment';

export default function page() {
  return (
    <Suspense>
      <PaymentPage />
    </Suspense>
  );
}
