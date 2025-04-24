'use client';

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { HiOutlineEye } from 'react-icons/hi';
import { MdOutlineShoppingCart } from 'react-icons/md';
import { UserAsset } from 'services/types/generated';
import { price } from 'src/utils/formatting';

type MarketplaceItemProps = {
  img?: string;
  asset?: UserAsset;
  hidePrice?: Boolean;
  assetType: 'stage' | 'avatar-clothing' | 'in-game-item' | 'sitemap' | 'stage';
};

const MarketplaceItem = React.forwardRef(function MarketplaceItem(
  {
    img = '/assets/images/page-card-cover.png',
    asset = {} as UserAsset,
    hidePrice = false,
    assetType,
  }: MarketplaceItemProps,
  ref
) {
  if (!asset) return <></>;

  return (
    <>
      <div>
        <Link
          href={`/product/${asset?.id}`}
          className="block overflow-hidden cursor-pointer h-52 rounded-xl bg-base-300 hover:bg-slate-400 dark:bg-dark-base-300 "
        >
          <Image
            width={400}
            height={300}
            src={
              (Array.isArray(asset?.image) ? asset.image[0] : asset?.image) ??
              img
            }
            className="block object-cover w-full h-full"
            alt="marketplace-item"
          />
        </Link>
        <div className="py-4" id="content">
          <div className="space-y-1">
            <h3 className="text-xl color-heading">
              {asset?.productName ?? 'Lorem, ipsum dolor.'}
            </h3>
            {ref ? (
              <p ref={ref as any} className="line-clamp-2">
                {asset?.description ??
                  'Lorem ipsum, dolor sit amet consectetur adipisicing elit.'}
              </p>
            ) : (
              <p className="line-clamp-2">
                {asset?.description ??
                  'Lorem ipsum, dolor sit amet consectetur adipisicing elit.'}
              </p>
            )}
          </div>
          <div className="flex items-center justify-between mt-4">
            <Link
              href={`/vendor/${asset?.vendor?.VendorID}`}
              className="flex items-center gap-x-1"
            >
              <span className="block w-8 h-8 overflow-hidden border rounded-full border-border">
                <Image
                  height={50}
                  width={50}
                  quality={60}
                  className="block object-cover w-full h-full"
                  src={asset?.vendor?.VendorImage || ''}
                  alt={asset?.vendor?.VendorName || ''}
                />
              </span>
              <span className="flex-1 inline-block ml-1 font-semibold">
                {asset?.vendor?.VendorName ?? 'Razer'}
              </span>
            </Link>

            {!hidePrice && (
              <>
                {asset.isOwnedByUser ? (
                  <Link
                    href={`/product/${asset.id}`}
                    className="flex items-center justify-center c-btn gap-x-2"
                  >
                    <HiOutlineEye className="text-xl" />
                    <span>View </span>
                  </Link>
                ) : (
                  <Link
                    href={`/buy?id=${asset.id}&type=asset&assetType=${assetType}`}
                    className="flex items-center justify-center c-btn-primary gap-x-2"
                  >
                    <MdOutlineShoppingCart className="text-xl" />
                    <span>{price(asset?.price)}</span>
                  </Link>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
});

export default MarketplaceItem;
