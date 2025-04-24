import Link from 'next/link';
import React from 'react';
import { HiOutlineDotsVertical } from 'react-icons/hi';

export default function SearchSuggestions() {
  return (
    <section className="col-span-12 md:sticky md:col-span-3">
      <div className="sticky top-20 space-y-6">
        <div className="color-divide c-box font-heading divide-y !rounded-none md:!rounded-xl">
          <div id="header" className="flex justify-between p-5 pb-4">
            <h2 className="color-heading font-heading text-sm font-bold">
              People also Viewed
            </h2>
            <HiOutlineDotsVertical className="text-xl" />
          </div>
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="flex gap-x-3 px-5 py-4">
              <div className="h-[46px] w-[46px] rounded-full bg-base-100 dark:bg-dark-base-100">
                <Link href="/profile" className="block h-full w-full"></Link>
              </div>
              <div className="flex-1 text-sm">
                <h3 className="color-heading font-medium">
                  <Link href="/profile">David Oshodi</Link>
                </h3>
                <p>Calgary</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
