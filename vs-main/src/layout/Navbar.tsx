'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Suspense } from 'react';
import { MdOutlineNotificationsNone } from 'react-icons/md';
import NavLinks from 'src/common/NavLinks';
import NavbarDropDown from 'src/modals/NavbarDropDown';
import NavbarSearchBox from './NavbarSearchBox';

export default function Navbar() {
  const pathname = usePathname();

  const restrictLayout =
    !!pathname?.match('/marketplace/') ||
    !!pathname?.match('/inventory/') ||
    !!pathname?.match('/chat') ||
    !!pathname?.match('/rooms') ||
    !!pathname?.match('/settings/');

  const hideBottomNav =
    !!pathname?.match('/chat') || !!pathname?.match('/rooms');

  return (
    <>
      <div className="sticky top-0 z-30 h-[60px] border-b border-quarternary bg-base-300 dark:border-dark-quarternary/20 dark:bg-dark-base-200 md:block">
        <div
          className={`h-full ${
            restrictLayout ? 'px-4 md:px-5' : 'c-container px-4 md:px-5'
          }`}
        >
          <section
            className="flex justify-between h-full grid-cols-12 gap-x-4 md:grid"
            id="navbar"
          >
            <div className="flex items-center justify-between col-span-3 gap-x-4 md:gap-x-8">
              <div className="h-[32px] w-[32px] md:h-[34px] md:w-[36px]">
                <Link href="/" className="block w-full h-full">
                  <img
                    src="/assets/logo/logo.png"
                    alt="virtuoso"
                    className=""
                  />
                </Link>
              </div>
              <Suspense>
                <NavbarSearchBox />
              </Suspense>
            </div>
            <div className="items-center justify-center hidden col-span-7 md:flex">
              <NavLinks />
            </div>
            <div className="flex items-center justify-end col-span-2 gap-x-4 md:gap-x-10">
              <div>
                <Link href={`/notifications`} className="relative">
                  <span className="hover:text-color-heading flex flex-col items-center justify-center gap-y-0.5">
                    <span>
                      <MdOutlineNotificationsNone className="text-2xl md:text-xl" />
                    </span>
                    <span className="hidden text-xs font-normal md:block">
                      Notifications
                    </span>
                  </span>
                </Link>
              </div>
              <NavbarDropDown />
            </div>
          </section>
        </div>
      </div>
      {!hideBottomNav && (
        <div
          id="mobile_menu"
          className="fixed bottom-0 left-0 right-0 z-50 p-5 py-4 border-t border-quarternary bg-base-300 dark:border-dark-quarternary/20 dark:bg-dark-base-200 md:hidden"
        >
          <NavLinks />
        </div>
      )}
    </>
  );
}
