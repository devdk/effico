'use client';

import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';
import React from 'react';
import { ISearchCategory, searchCategories } from 'src/config/search.config';

export default function SearchNavigation() {
  const params = useSearchParams();
  const q = params?.get('q');
  const pathname = usePathname();

  return (
    <section
      className="bg-base-200 dark:bg-dark-base-200"
      id="search_category_bar"
    >
      <div className="flex gap-4 px-4 py-2 overflow-x-auto c-container">
        {searchCategories?.map((i: ISearchCategory) => (
          <Link
            key={i?.id}
            href={`${i.link}?q=${q}`}
            className={`${
              i?.link === pathname
                ? 'c-chip-solid-primary order-first md:order-none'
                : 'c-chip-light'
            }`}
          >
            {i?.identifier}
          </Link>
        ))}
      </div>
    </section>
  );
}
