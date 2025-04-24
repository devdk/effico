'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { marketplaceSidebarLinks } from 'src/config/marketplace.config';

export default function Sidebar() {
  const path = usePathname();

  return (
    <>
      <div className="hidden h-full w-80 md:block" />
      <div className="fixed bottom-0 left-0 top-[60px] hidden w-80 space-y-8 p-6 md:block">
        <h3 className="text-xl font-semibold text-white md:pl-4">
          Marketplace
        </h3>
        <ul className="space-y-4">
          {marketplaceSidebarLinks
            .filter((link) => !link.separate)
            .map(({ id, identifier, link }) => (
              <li key={id}>
                <Link
                  href={link}
                  className={`${
                    link === path
                      ? 'bg-base-200 text-primary dark:bg-dark-base-200'
                      : ''
                  } flex gap-x-2 rounded-full p-4 px-6 font-semibold hover:bg-base-200 hover:dark:bg-dark-base-200`}
                >
                  {identifier}
                </Link>
              </li>
            ))}
        </ul>
        <div className="pt-8 mt-20 border-t border-border">
          {marketplaceSidebarLinks
            .filter((link) => link.separate)
            .map(({ id, identifier, link }) => (
              <Link
                key={id}
                href={link}
                className={`${
                  link === path
                    ? 'bg-base-200 text-primary dark:bg-dark-base-200'
                    : ''
                } flex gap-x-2 rounded-full p-4 px-6 font-semibold hover:bg-base-200 hover:dark:bg-dark-base-200`}
              >
                {identifier}
              </Link>
            ))}
        </div>
      </div>
    </>
  );
}
