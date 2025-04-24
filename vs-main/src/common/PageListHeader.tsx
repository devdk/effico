'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { HiPlus } from 'react-icons/hi';
import {
  IPageListTab,
  pageFilterTabs,
  IPageFilterTab,
  pageListTabs,
} from 'src/config/pages.config';
import useIsLoggedIn from 'src/hooks/useIsLoggedIn';
import { usePagesContext } from 'src/providers/PagesContextProvider';

export default function PageListHeader() {
  const { loggedIn } = useIsLoggedIn();
  const pathname = usePathname();
  const { activeTab, setActiveTab } = usePagesContext();

  return (
    <>
      <section className="flex items-center justify-between">
        <ul id="navigation" className="flex font-semibold gap-x-6">
          {pageListTabs.map((i: IPageListTab) => {
            return (
              <p
                key={i.id}
                onClick={() => setActiveTab(i.id)}
                className={`cursor-pointer ${
                  activeTab === i.id &&
                  'border-b-2 border-primary pb-2 text-heading dark:text-dark-heading'
                }`}
              >
                {i.identifier}
              </p>
            );
          })}
        </ul>
        <Link
          href={loggedIn ? '/pages/create' : '/auth/login'}
          data-testid="create-page-btn"
          className="c-btn-primary items-center justify-center !px-4 flex gap-1"
        >
          <HiPlus className="inline-block mr-2 text-white" />
          Create <span className="hidden sm:block">Page</span>
        </Link>
      </section>
      <section className="pt-4">
        <ul className="flex gap-x-2 md:gap-x-3">
          {pageFilterTabs.map((i: IPageFilterTab) => (
            <Link
              href={`${i.link}`}
              key={i.key}
              className={`${pathname === i.link ? 'c-chip-primary' : 'c-chip'}`}
            >
              {i.identifier}
            </Link>
          ))}
        </ul>
      </section>
    </>
  );
}
