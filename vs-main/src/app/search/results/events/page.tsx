import React, { Suspense } from 'react';
import EventsSearchResults from './EventsSearchResults';

export default function Page() {
  return (
    <Suspense>
      <EventsSearchResults />
    </Suspense>
  );
}
