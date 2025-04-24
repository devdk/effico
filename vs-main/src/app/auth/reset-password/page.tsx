import React, { Suspense } from 'react';
import ResetPassword from 'src/auth/ResetPassword';
import LoginSkeleton from 'src/placeholders/AuthSkeleton';

export default function page() {
  return (
    <Suspense fallback={<LoginSkeleton />}>
      <ResetPassword />
    </Suspense>
  );
}
