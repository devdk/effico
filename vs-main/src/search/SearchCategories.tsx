'use client';

import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';
import React from 'react';
import { HiOutlineDotsVertical } from 'react-icons/hi';
import { searchCategories, ISearchCategory } from 'src/config/search.config';

export default function SearchCategories() {
  const params = useSearchParams();
  const q = params?.get('q');
  const pathname = usePathname();

  return (
    <section className="hidden col-span-12 md:sticky md:col-span-3 md:block">
      <div className="sticky space-y-6 top-20">
        <div className="overflow-auto divide-y color-divide c-box font-heading">
          <div id="header" className="flex justify-between p-5 pb-4">
            <h2 className="text-sm font-bold color-heading font-heading">
              Categories
            </h2>
            <HiOutlineDotsVertical className="text-xl" />
          </div>
          <div id="search_links">
            {/* Make sure link tag takes the full width. So that we don't have to click on text only for navigation */}
            {/* All the categories will be links */}
            <div className="">
              {searchCategories?.map((i: ISearchCategory) => (
                <div
                  key={i.id}
                  className={`py-3 ${
                    i.link === pathname
                      ? 'border-l-4 border-l-primary px-3'
                      : 'px-4'
                  }`}
                >
                  <Link
                    href={`${i.link}?q=${q}`}
                    className={`block h-full w-full text-sm ${
                      i.link === pathname
                        ? 'font-bold text-primary'
                        : 'font-medium'
                    }
                            `}
                  >
                    {i.identifier}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
