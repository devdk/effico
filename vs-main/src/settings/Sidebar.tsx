'use client';

import { Listbox } from '@headlessui/react';
import Link from 'next/link';
import React, { forwardRef } from 'react';
import { sidebarLinks } from 'src/config/settings.config';
import { HiChevronUpDown } from 'react-icons/hi2';
import { usePathname } from 'next/navigation';

// eslint-disable-next-line react/display-name
const MyLink = forwardRef((props: any, ref: any) => {
  let { href, children, className, ...rest } = props;
  return (
    <Link href={href} legacyBehavior>
      <a ref={ref} {...rest} className={className}>
        {children}
      </a>
    </Link>
  );
});

export default function Sidebar() {
  const pathname = usePathname();
  const selectedTab = sidebarLinks.filter((i) => i.link === pathname);

  return (
    <>
      <div className="pt-4 md:hidden">
        <Listbox value={null} onChange={() => {}}>
          <Listbox.Button className="flex items-center justify-between w-full h-10 px-4 rounded-xl bg-base-200 dark:bg-dark-base-200">
            <span>{selectedTab?.[0]?.identifier}</span>
            <HiChevronUpDown className="text-xl" />
          </Listbox.Button>
          <Listbox.Options className="absolute left-0 right-0 z-20 p-4 mx-4 mt-2 divide-y rounded-lg divide-quarternary bg-base-200 dark:divide-dark-quarternary/40 dark:bg-dark-base-200">
            {sidebarLinks.map((i) => (
              <MyLink href={i.link} key={i.id}>
                <Listbox.Option value={i.identifier} className="py-1.5">
                  {i.identifier}
                </Listbox.Option>
              </MyLink>
            ))}
          </Listbox.Options>
        </Listbox>
      </div>
      <div
        className="hidden h-full w-80 md:block"
        id="sidebar_placeholder"
      ></div>
      <div className="fixed bottom-0 left-0 top-[60px] hidden w-80 space-y-8 p-6 py-8 md:block">
        <ul className="mx-auto max-w-[240px] space-y-4">
          {sidebarLinks?.map((i) => (
            <li key={i.id}>
              <Link
                href={i?.link}
                className={`${
                  i?.link === pathname
                    ? 'bg-base-200 text-primary dark:bg-dark-base-200'
                    : ''
                } flex gap-x-2 rounded-full p-4 px-6 font-semibold hover:bg-base-200 hover:dark:bg-dark-base-200`}
              >
                <span>
                  <i.icon className="text-xl" />
                </span>
                <span className="">{i?.identifier}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
