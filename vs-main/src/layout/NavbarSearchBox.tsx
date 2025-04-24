import { useRouter, useSearchParams } from 'next/navigation';
import React, { useEffect, useRef } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';

export default function NavbarSearchBox() {
  const inputRef = useRef<any>(null);
  const search = useSearchParams();
  const router = useRouter();

  const q = search?.get('q');
  useEffect(() => {
    inputRef?.current?.addEventListener('keyup', (event: any) => {
      if (event?.key === 'Enter') {
        router.push(`/search/results?q=${inputRef?.current?.value}`);
      }
    });
  }, []);
  return (
    <div id="search" className="relative flex-1">
      <input
        placeholder={(q as string) || 'Search'}
        type="text"
        className="block h-[38px] w-full rounded-2xl border border-quarternary bg-base-100 pl-10 pr-4 focus:border-primary focus:outline-none dark:border-dark-quarternary/20 dark:bg-dark-base-300"
        ref={inputRef}
      />
      <span className="absolute transform -translate-y-1/2 top-1/2 left-2">
        <AiOutlineSearch className="text-xl" />
      </span>
    </div>
  );
}
