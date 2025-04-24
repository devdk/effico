import Link from 'next/link';
import React from 'react';
import { HiOutlineDotsVertical } from 'react-icons/hi';
import NoSearchResults from 'src/placeholders/NoPostsSkeleton';

interface ISearchPagesListProps {
  title?: string;
  link?: any;
  data?: any[];
}

export default function SearchPagesList({
  title = 'Pages',
  link,
  data,
}: ISearchPagesListProps) {
  if (!data?.length || !(data?.length > 0)) return <NoSearchResults />;

  return (
    <section className="col-span-12 md:col-span-6">
      <div className="space-y-6">
        <div className="color-divide c-box font-heading divide-y !rounded-none md:!rounded-xl">
          <div id="header" className="flex justify-between p-5 pb-4">
            <h2 className="text-sm font-bold color-heading font-heading">
              {title}
            </h2>
            <HiOutlineDotsVertical className="text-xl" />
          </div>
          {data?.map((i) => (
            <div key={i?.id} className="flex px-5 py-4 gap-x-3">
              <div className="h-[46px] w-[46px] overflow-hidden rounded-full bg-base-100 dark:bg-dark-base-100">
                <Link
                  href={`/${i?.fields?.type?.[0]}/${i?.id}`}
                  className="block w-full h-full"
                >
                  <img
                    src={i?.fields?.avatar?.[0] || ''}
                    alt=""
                    className="object-cover w-full h-full"
                  />
                </Link>
              </div>
              <div className="flex-1 text-sm">
                <h3 className="font-medium color-heading">
                  <Link href={`/${i?.fields?.type?.[0]}/${i?.id}`}>
                    {i?.fields?.name?.[0]}
                  </Link>
                </h3>
                <p className="line-clamp-1">{i?.fields?.bio?.[0]}</p>
              </div>
            </div>
          ))}
          {link && (
            <div className="flex items-center justify-center flex-1 p-4 text-sm">
              <h3 className="text-sm font-medium color-heading">
                <Link href={link}>See All</Link>
              </h3>
            </div>
          )}
          {!link && (
            <div className="flex items-center justify-center flex-1 p-4 text-sm">
              <h3 className="text-sm font-medium color-heading">
                <button>See more</button>
              </h3>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
