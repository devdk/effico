import React, { Suspense } from 'react';
import SearchResults from './SearchResults';

export default function Page() {
  return (
    <Suspense>
      <SearchResults />
    </Suspense>
  );
}
