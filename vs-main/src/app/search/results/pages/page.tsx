import React, { Suspense } from 'react';
import PagesSearchResults from './PagesSearchResults';

export default function Page() {
  return (
    <Suspense>
      <PagesSearchResults />
    </Suspense>
  );
}
