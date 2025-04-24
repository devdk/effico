'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { MdOutlineShoppingCart } from 'react-icons/md';

type MarketplaceItemProps = { data?: any };

export default function SearchMarketplaceItem({ data }: MarketplaceItemProps) {
  const router = useRouter();

  return (
    <>
      <div>
        <div
          className="overflow-hidden cursor-pointer h-52 rounded-xl bg-base-300 hover:bg-slate-400 dark:bg-dark-base-300 "
          onClick={() => {
            router.push(`/product/${data?.id}`);
          }}
        >
          <img
            src={
              data?.fields?.image?.[0] || '/assets/images/page-card-cover.png'
            }
            className="block object-cover w-full h-full"
            alt=""
          />
        </div>
        <div className="py-4" id="content">
          <div className="space-y-1">
            <h3 className="text-xl color-heading">
              {data?.fields?.name?.[0] ?? 'Product'}
            </h3>
            <p className="line-clamp-1">
              {data?.fields?.description?.[0] ??
                'Lorem ipsum, dolor sit amet consectetur adipisicing elit.'}
            </p>
          </div>
          <div className="flex items-center justify-between mt-4">
            <Link href={`/vendor/${data?.fields?.vendorid?.[0]}`} className="">
              By
              <span className="ml-1 text-primary">
                {data?.fields?.vendorname?.[0] ?? 'Vendor'}
              </span>
            </Link>
            <button
              className="flex items-center justify-center c-btn-primary gap-x-2"
              onClick={() => {
                router.push(
                  `/payment?assetId=${data?.id}&amount=${data?.fields?.price?.[0]}&assetType=${data.fields?.type?.[0]}`
                );
              }}
            >
              <MdOutlineShoppingCart className="text-xl" />
              <span>${data?.fields?.price?.[0] ?? ' --'}</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
