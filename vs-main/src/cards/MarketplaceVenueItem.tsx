'use client';

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { HiOutlineEye } from 'react-icons/hi';
import { MdOutlineShoppingCart } from 'react-icons/md';
import { VirtuosoVenues } from 'services/types/generated';
import { price } from 'src/utils/formatting';

type MarketplaceVenueItemProps = {
  venue?: VirtuosoVenues;
  hidePrice?: Boolean;
};

const MarketplaceVenueItem = React.forwardRef(function MarketplaceVenueItem(
  {
    venue = {} as VirtuosoVenues,
    hidePrice = false,
  }: MarketplaceVenueItemProps,
  ref
) {
  return (
    <>
      <div>
        <Link
          href={`/venue/${venue?.VenueID}`}
          className="block overflow-hidden cursor-pointer h-52 rounded-xl bg-base-300 hover:bg-slate-400 dark:bg-dark-base-300 "
        >
          <Image
            height={300}
            width={400}
            src={
              venue?.VenueProfileCover || '/assets/images/page-card-cover.png'
            }
            className="block object-cover w-full h-full"
            alt=""
          />
        </Link>
        <div className="py-4" id="content">
          <div className="space-y-1">
            <h3 className="text-xl color-heading">
              {venue?.VenueName ?? 'Venue'}
            </h3>
            {ref ? (
              <p ref={ref as any} className="line-clamp-2">
                {venue?.Bio ??
                  'Lorem ipsum, dolor sit amet consectetur adipisicing elit.'}
              </p>
            ) : (
              <p className="line-clamp-2">
                {venue?.Bio ??
                  'Lorem ipsum, dolor sit amet consectetur adipisicing elit.'}
              </p>
            )}
          </div>
          {!hidePrice && (
            <div className="flex items-center justify-between mt-4">
              {venue.isOwnedByUser ? (
                <Link
                  href={`/venue/${venue.VenueID}`}
                  className="flex items-center justify-center c-btn gap-x-2"
                >
                  <HiOutlineEye className="text-xl" />
                  <span>View </span>
                </Link>
              ) : (
                <Link
                  href={`/buy?id=${venue.VenueID}&type=venue`}
                  className="flex items-center justify-center c-btn-primary gap-x-2"
                >
                  <MdOutlineShoppingCart className="text-xl" />
                  <span>{price(venue?.price)}</span>
                </Link>
              )}
            </div>
          )}
        </div>
      </div>
    </>
  );
});

export default MarketplaceVenueItem;
