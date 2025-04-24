import React, { Suspense } from 'react';
import Buy from 'src/payment/Buy';

export default function BuyPage() {
  return (
    <Suspense>
      <Buy />
    </Suspense>
  );
}
