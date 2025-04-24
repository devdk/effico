import React, { Suspense } from 'react';
import Login from 'src/auth/Login';
import LoginSkeleton from 'src/placeholders/AuthSkeleton';

export default function LoginPage() {
  return (
    <Suspense fallback={<LoginSkeleton />}>
      <Login />
    </Suspense>
  );
}
