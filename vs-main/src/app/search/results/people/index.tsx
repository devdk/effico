import React, { Suspense } from 'react';
import PeopleSearchResults from './PeopleSearchResults';

export default function Page() {
  return (
    <Suspense>
      <PeopleSearchResults />
    </Suspense>
  );
}
