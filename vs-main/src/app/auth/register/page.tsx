import React, { Suspense } from 'react';
import Register from 'src/auth/Register';
import LoginSkeleton from 'src/placeholders/AuthSkeleton';

export default function RegisterPage() {
  return (
    <Suspense fallback={<LoginSkeleton />}>
      <Register />
    </Suspense>
  );
}
