import Link from 'next/link';
import React from 'react';
import { HiOutlineDotsVertical } from 'react-icons/hi';
import NoSearchResults from 'src/placeholders/NoPostsSkeleton';

interface ISearchListViewProps {
  title?: string;
  link?: any;
  data?: any[];
}

export default function SearchListView({
  title = 'People',
  link,
  data,
}: ISearchListViewProps) {
  if (!data) return <NoSearchResults />;
  return (
    <section className="col-span-12 md:col-span-6">
      <div className="space-y-6">
        <div className="color-divide c-box font-heading divide-y !rounded-none md:!rounded-xl">
          <div id="header" className="flex justify-between p-5 pb-4">
            <h2 className="color-heading font-heading text-sm font-bold">
              {title}
            </h2>
            <HiOutlineDotsVertical className="text-xl" />
          </div>
          {data?.map((i) => (
            <div key={i?.id} className="flex gap-x-3 px-5 py-4">
              <div className="h-[46px] w-[46px] overflow-hidden rounded-full bg-base-100 dark:bg-dark-base-100">
                <Link
                  href={`/profile/${i?.id}`}
                  className="block h-full w-full"
                >
                  <img
                    src={i?.fields?.avatar?.[0] || ''}
                    alt=""
                    className="h-full w-full object-cover"
                  />
                </Link>
              </div>
              <div className="flex-1 text-sm">
                <h3 className="color-heading font-medium">
                  <Link href={`/profile/${i?.id}`}>{i?.fields?.name?.[0]}</Link>
                </h3>
                <p>{i?.fields?.username?.[0]}</p>
              </div>
            </div>
          ))}
          {link && (
            <div className="flex flex-1 items-center justify-center p-4 text-sm">
              <h3 className="color-heading text-sm font-medium">
                <Link href={link}>See All</Link>
              </h3>
            </div>
          )}
          {!link && (
            <div className="flex flex-1 items-center justify-center p-4 text-sm">
              <h3 className="color-heading text-sm font-medium">
                <button>See more</button>
              </h3>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
