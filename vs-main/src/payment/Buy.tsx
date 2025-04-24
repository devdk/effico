'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { useState } from 'react';
import { useQuery } from 'react-query';
import { getSitemap } from 'services/sitemap.service';
import {
  GetEventQuery,
  GetUserAssetQueryQuery,
  GetVenueQuery,
  GetVirtuosoSitemapQuery,
  UserAsset,
  VirtuosoEvents,
  VirtuosoSiteMaps,
  VirtuosoVenues,
} from 'services/types/generated';
import { getUserAssetForProductPage } from 'services/userasset.service';
import { fetchEventById } from 'services/events.service';
import { getVenue } from 'services/venue.service';
import Loading from 'src/common/Loading';
import useValidatePromocode from 'src/hooks/useValidatePromocode';
import FreePurchase from 'src/payment/FreePurchase';
import { price as formattedPrice } from 'src/utils/formatting';

export default function Buy() {
  const router = useRouter();
  const [promo, setPromo] = useState('');
  const [quantity, setQuantity] = useState(1);

  const params = useSearchParams();
  const id = params?.get('id');
  const type = params?.get('type') || 'asset';
  const assetType = params?.get('assetType') || 'invalid';

  const { isLoading, data, error } = useQuery<
    GetUserAssetQueryQuery,
    unknown,
    UserAsset
  >(['user-asset', id], getUserAssetForProductPage, {
    select: (data) => data.userasset as UserAsset,
    enabled: !(
      type === 'sitemap' ||
      type === 'venue' ||
      type === 'event' ||
      type === 'event-vip'
    ),
  });

  const { isLoading: isVenueLoading, data: venue } = useQuery<
    GetVenueQuery,
    unknown,
    VirtuosoVenues
  >(['venue', id], getVenue, {
    select: (data) => data.venue as VirtuosoVenues,
    enabled: type === 'venue',
  });

  const { isLoading: isSitemapLoading, data: sitemap } = useQuery<
    GetVirtuosoSitemapQuery,
    unknown,
    VirtuosoSiteMaps
  >(['venue', id], getSitemap, {
    select: (data) => data.getVirtuosoSiteMaps as VirtuosoSiteMaps,
    enabled: type === 'sitemap',
  });

  const { isLoading: isEventLoading, data: event } = useQuery<
    GetEventQuery,
    unknown,
    VirtuosoEvents
  >(['event', id], fetchEventById, {
    select: (data) => data.getVirtuosoEvents as VirtuosoEvents,
    enabled: type === 'event' || type === 'event-vip',
  });

  // note: price is a string
  const price =
    Number(
      data?.price ||
        venue?.price ||
        sitemap?.price ||
        (type === 'event-vip' ? event?.vipPrice : event?.Price)
    ) || 0;

  const {
    mutate,
    discount,
    isLoading: isValidatePromoLoading,
    promotioncode,
    error: promoValidationError,
  } = useValidatePromocode({
    promo: promo,
    subTotal: Number(price),
  });

  const handleApplyPromoCode = (e: React.MouseEvent) => {
    e.preventDefault();
    mutate({
      promocode: promo?.toUpperCase(),
    });
  };

  if (isLoading) {
    return <Loading isLoading alt fullScreen />;
  }

  return (
    <div>
      <div className="min-h-screen py-10">
        <div className="grid grid-cols-12 py-8 c-container-sm gap-y-10 md:gap-6 md:py-8">
          <div className="col-span-12 space-y-4 md:col-span-7">
            <div className="p-4 c-box rounded-xl">
              <p className="text-sm font-semibold">Purchase</p>
            </div>
            {!isSitemapLoading && sitemap && (
              <>
                <div className="relative flex gap-4 c-box rounded-xl">
                  <div className="flex-1">
                    <div
                      className="overflow-hidden cursor-pointer aspect-w-16 aspect-h-9 rounded-l-xl bg-base-300 hover:bg-slate-400 dark:bg-dark-base-300 "
                      onClick={() => {
                        router.push(`/sitemap/${sitemap?.SiteMapID}`);
                      }}
                    >
                      <Image
                        width={400}
                        height={300}
                        src={
                          sitemap?.SiteMapImage ||
                          '/assets/images/page-card-cover.png'
                        }
                        className="block object-cover w-full h-full"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="flex-1 py-4" id="content">
                    <div className="space-y-1">
                      <h3 className="text-xl color-heading">
                        {sitemap.SiteMapName ?? 'Lorem, ipsum dolor.'}
                      </h3>
                      <p className="line-clamp-2">
                        {sitemap?.SiteMapDescription ??
                          'Lorem ipsum, dolor sit amet consectetur adipisicing elit.'}
                      </p>
                      <p className="pt-6 text-2xl font-bold text-primary">
                        {formattedPrice(sitemap.price || 0)}
                      </p>
                    </div>
                  </div>
                </div>
              </>
            )}
            {!isVenueLoading && venue && (
              <>
                <div className="relative flex gap-4 c-box rounded-xl">
                  <div className="flex-1">
                    <div
                      className="overflow-hidden cursor-pointer aspect-w-16 aspect-h-9 rounded-l-xl bg-base-300 hover:bg-slate-400 dark:bg-dark-base-300 "
                      onClick={() => {
                        router.push(`/venue/${venue?.VenueID}`);
                      }}
                    >
                      <Image
                        width={400}
                        height={300}
                        src={
                          venue?.VenueProfileImage ||
                          '/assets/images/page-card-cover.png'
                        }
                        className="block object-cover w-full h-full"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="flex-1 py-4" id="content">
                    <div className="space-y-1">
                      <h3 className="text-xl color-heading">
                        {venue.VenueName ?? 'Lorem, ipsum dolor.'}
                      </h3>
                      <p className="line-clamp-2">
                        {venue?.Bio ??
                          'Lorem ipsum, dolor sit amet consectetur adipisicing elit.'}
                      </p>
                      <p className="pt-6 text-2xl font-bold text-primary">
                        {formattedPrice(venue.price || 0)}
                      </p>
                    </div>
                  </div>
                </div>
              </>
            )}
            {!isEventLoading && event && (
              <>
                <div className="relative flex gap-4 c-box rounded-xl">
                  <div className="flex-1">
                    <div
                      className="overflow-hidden cursor-pointer aspect-w-16 aspect-h-9 rounded-l-xl bg-base-300 hover:bg-slate-400 dark:bg-dark-base-300 "
                      onClick={() => {
                        router.push(`/events/${event.EventID}`);
                      }}
                    >
                      <Image
                        width={400}
                        height={300}
                        src={
                          event.EventImages?.[0] ||
                          '/assets/images/page-card-cover.png'
                        }
                        className="block object-cover w-full h-full"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="flex-1 py-4" id="content">
                    <div className="space-y-1">
                      <h3 className="text-xl color-heading">
                        {event.EventName ?? 'Lorem, ipsum dolor.'}
                      </h3>
                      <p className="line-clamp-2">
                        {event?.EventDescription ??
                          'Lorem ipsum, dolor sit amet consectetur adipisicing elit.'}
                      </p>
                      <p className="pt-6 text-2xl font-bold text-primary">
                        {formattedPrice(
                          type === 'event-vip'
                            ? event.vipPrice || 0
                            : event.Price || 0
                        )}
                      </p>
                    </div>
                  </div>
                </div>
              </>
            )}
            {!isLoading && data && (
              <>
                <div className="relative flex gap-4 c-box rounded-xl">
                  <div className="flex-1">
                    <div
                      className="overflow-hidden cursor-pointer aspect-w-16 aspect-h-9 rounded-l-xl bg-base-300 hover:bg-slate-400 dark:bg-dark-base-300 "
                      onClick={() => {
                        router.push(`/product/${data?.id}`);
                      }}
                    >
                      <Image
                        width={400}
                        height={300}
                        src={
                          (Array.isArray(data?.image)
                            ? data?.image[0]
                            : data?.image) ??
                          '/assets/images/page-card-cover.png'
                        }
                        className="block object-cover w-full h-full"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="flex-1 py-4" id="content">
                    <div className="space-y-1">
                      <h3 className="text-xl color-heading">
                        {data?.productName ?? 'Lorem, ipsum dolor.'}
                      </h3>
                      <p className="line-clamp-2">
                        {data?.description ??
                          'Lorem ipsum, dolor sit amet consectetur adipisicing elit.'}
                      </p>
                    </div>
                    <div className="flex items-center justify-between mt-4">
                      <Link
                        href={`/vendor/${data?.vendor?.VendorID}`}
                        className="flex items-center gap-x-1"
                      >
                        <span className="block w-8 h-8 overflow-hidden rounded-full">
                          <Image
                            height={50}
                            width={50}
                            quality={60}
                            className="block object-cover w-full h-full "
                            src={data?.vendor?.VendorImage || ''}
                            alt={data?.vendor?.VendorName || ''}
                          />
                        </span>
                        <span className="ml-1 font-semibold">
                          {data?.vendor?.VendorName ?? 'Razer'}
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
          <div className="col-span-12 space-y-4 md:col-span-5">
            <div className="p-4 c-box rounded-xl">
              <p className="text-sm font-semibold">Price Details</p>
            </div>
            <div className="p-4 space-y-4 c-box rounded-xl">
              <div className="flex items-center justify-between">
                <p>Items ({quantity})</p>
                <p className="font-bold">${(Number(price) * 100) / 100}</p>
              </div>
              {!(discount == 0) && (
                <div className="flex items-center justify-between">
                  <p>Discount: </p>
                  <p className="font-bold text-green-600">
                    - ${Number((Number(discount) * 100) / 100).toFixed(3)}
                  </p>
                </div>
              )}
              <div className="flex items-center justify-between text-xl font-bold">
                <p>Cart Total: </p>
                <p className="font-bold">
                  ${Number((Number(price - discount) * 100) / 100).toFixed(3)}
                </p>
              </div>
              {/* <div className="flex items-center justify-between text-green-600">
            <p>You save ${totalPrice * 0.1} on this order</p>
          </div> */}
              {price > 0 && (
                <div className="space-y-2">
                  <p className="font-semibold">Promocode</p>
                  <div className="flex items-stretch justify-center gap-2 ">
                    <input
                      value={promo}
                      onChange={(e: any) => setPromo(e.target.value)}
                      type="text"
                      className="flex-1 c-input"
                    />
                    <button
                      onClick={handleApplyPromoCode}
                      className="flex-1 c-btn-primary"
                    >
                      <Loading
                        alt="Submit"
                        isLoading={isValidatePromoLoading}
                      />
                    </button>
                  </div>
                  {promoValidationError && (
                    <p className="text-xs text-red-500">
                      {promoValidationError}
                    </p>
                  )}
                </div>
              )}
            </div>
            <div className="space-y-4">
              {!!price && (
                <Link
                  href={{
                    pathname: `/payment`,
                    query: {
                      promocode: promotioncode,
                      id,
                      type,
                      assetType: assetType,
                    },
                  }}
                  className="c-btn-primary !flex !w-full items-center justify-center"
                >
                  Place Order
                </Link>
              )}
              {price === 0 && (
                <FreePurchase
                  assetType={assetType}
                  assetId={id as string}
                  type={type as string}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
