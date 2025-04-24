import React from 'react';
import { inventorySidebarLinks } from 'src/config/inventory.config';
import MobileListBox from './MobileListBox';
import SidebarTab from './SidebarTab';

export default function Sidebar() {
  return (
    <>
      <div className="px-4 pt-4 md:hidden">
        <MobileListBox />
      </div>
      <div
        className="hidden h-full w-80 md:block"
        id="sidebar_placeholder"
      ></div>
      <div className="fixed bottom-0 left-0 top-[60px] hidden w-80 space-y-8 border-t p-6 md:block">
        <h3 className="text-xl font-semibold md:pl-5">Inventory</h3>
        <ul className="space-y-4">
          {inventorySidebarLinks?.map((i) => (
            <li key={i.id}>
              <SidebarTab identifier={i.identifier} link={i.link} />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
