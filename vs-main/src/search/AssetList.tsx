import { HiOutlineDotsVertical } from 'react-icons/hi';
import EventCardSkeleton from 'src/placeholders/EventCardSkeleton';
import SearchMarketplaceItem from './SearchMarketplaceItem';
import Link from 'next/link';

interface IAssetsList {
  data?: any;
  link?: any;
  isLoading?: boolean;
}

export function AssetsList({ data, link, isLoading }: IAssetsList) {
  return (
    <div className="col-span-12 space-y-0 md:col-span-6">
      <div className="c-box space-y-5 !rounded-none py-5 pb-2 md:!rounded-xl">
        <div id="header" className="flex justify-between px-5">
          <h2 className="text-sm font-bold color-heading font-heading">
            Marketplace
          </h2>
          <HiOutlineDotsVertical className="text-xl" />
        </div>
        <div className="grid grid-cols-1 px-5 gap-y-4 gap-x-5 md:grid-cols-2">
          {isLoading &&
            Array.from(Array(4).keys()).map((i) => (
              <EventCardSkeleton key={i} />
            ))}
          {!isLoading &&
            data?.map((i: any) => (
              <SearchMarketplaceItem data={i} key={i?.id} />
            ))}
        </div>
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
  );
}
