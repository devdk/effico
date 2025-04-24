import React, { Suspense } from 'react';
import PostSearchResults from './PostSearchResults';

export default function Page() {
  return (
    <Suspense>
      <PostSearchResults />
    </Suspense>
  );
}
