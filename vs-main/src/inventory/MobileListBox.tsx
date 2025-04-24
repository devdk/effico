'use client';
import { Listbox } from '@headlessui/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { forwardRef } from 'react';
import { HiChevronUpDown } from 'react-icons/hi2';
import { inventorySidebarLinks } from 'src/config/inventory.config';

export default function MobileListBox() {
  const path = usePathname();

  const selectedTab = inventorySidebarLinks.filter((i) => i.link === path);

  return (
    <Listbox value={null} onChange={() => {}}>
      <Listbox.Button className="flex items-center justify-between w-full h-10 px-4 rounded-xl bg-base-200 dark:bg-dark-base-200">
        <span>{selectedTab?.[0].identifier}</span>
        <HiChevronUpDown className="text-xl" />
      </Listbox.Button>
      <Listbox.Options className="absolute left-0 right-0 z-20 p-4 mx-4 mt-2 divide-y rounded-lg divide-quarternary bg-base-200 dark:divide-dark-quarternary/40 dark:bg-dark-base-200">
        {inventorySidebarLinks.map((i) => (
          <MyLink href={i.link} key={i.id}>
            <Listbox.Option
              as="span"
              value={i.identifier}
              className="block py-1.5"
            >
              {i.identifier}
            </Listbox.Option>
          </MyLink>
        ))}
      </Listbox.Options>
    </Listbox>
  );
}

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
