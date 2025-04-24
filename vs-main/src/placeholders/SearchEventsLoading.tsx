import React from 'react';
import EventCardSkeleton from './EventCardSkeleton';

export default function SearchEventsLoading() {
  return (
    <div className="c-box col-span-12 grid grid-cols-2 gap-4 p-4 md:col-span-7">
      {Array.from(Array(6).keys()).map((i) => (
        <EventCardSkeleton key={i} />
      ))}
    </div>
  );
}
