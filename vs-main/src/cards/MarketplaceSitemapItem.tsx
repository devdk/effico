import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react';
import { HiOutlineEye } from 'react-icons/hi';
import { MdOutlineShoppingCart } from 'react-icons/md';
import { VirtuosoSiteMaps } from 'services/types/generated';
import { price } from 'src/utils/formatting';

type MarketplaceSitemapItemProps = { sitemap: VirtuosoSiteMaps };

const MarketplaceSitemapItem = React.forwardRef(function MarketplaceSitemapItem(
  { sitemap }: MarketplaceSitemapItemProps,
  ref
) {
  const router = useRouter();

  return (
    <>
      <Link href={`/sitemap/${sitemap?.SiteMapID}`}>
        <div className="overflow-hidden cursor-pointer h-52 rounded-xl bg-base-300 hover:bg-slate-400 dark:bg-dark-base-300 ">
          <Image
            height={300}
            width={400}
            src={sitemap?.SiteMapImage || '/assets/images/page-card-cover.png'}
            className="block object-cover w-full h-full"
            alt=""
          />
        </div>
        <div className="py-4" id="content">
          <div className="space-y-1">
            <h3 className="text-xl color-heading">
              {sitemap?.SiteMapName ?? 'Venue'}
            </h3>
            {ref ? (
              <p ref={ref as any} className="line-clamp-2">
                {sitemap?.SiteMapDescription ??
                  'Lorem ipsum, dolor sit amet consectetur adipisicing elit.'}
              </p>
            ) : (
              <p className="line-clamp-2">
                {sitemap?.SiteMapDescription ??
                  'Lorem ipsum, dolor sit amet consectetur adipisicing elit.'}
              </p>
            )}
          </div>
          <div className="flex items-center justify-between mt-4">
            <div className="flex pt-3 gap-x-3">
              <div className="h-[36px] w-[36px] overflow-hidden rounded-full bg-base-100 dark:bg-dark-base-100">
                <Link href={`/venue/${sitemap?.venue?.VenueID}`}>
                  <Image
                    height={50}
                    width={50}
                    quality={80}
                    src={
                      sitemap?.venue?.VenueProfileImage ||
                      '/assets/images/post-image.png'
                    }
                    alt="author"
                    className="block w-full h-full bg-base-200 dark:bg-dark-base-200"
                  />
                </Link>
              </div>
              <div className="flex-1 text-sm">
                <h3 className="font-medium capitalize text-heading dark:text-dark-heading">
                  <Link href={`/venue/${sitemap?.venue?.VenueID}`}>
                    {sitemap?.venue?.VenueName || 'Oblivia Gibson'}
                  </Link>
                </h3>
                <p className="">Venue Page</p>
              </div>
            </div>
            <div>
              {sitemap.isOwnedByUser ? (
                <Link
                  href={`/sitemap/${sitemap.SiteMapID}`}
                  className="flex items-center justify-center c-btn gap-x-2"
                >
                  <HiOutlineEye className="text-xl" />
                  <span>View </span>
                </Link>
              ) : (
                <button
                  onClick={(
                    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
                  ) => {
                    e.preventDefault();
                    e.stopPropagation();
                    router.push(`/buy?id=${sitemap.SiteMapID}&type=sitemap`);
                  }}
                  className="flex items-center justify-center c-btn-primary gap-x-2"
                >
                  <MdOutlineShoppingCart className="text-xl" />
                  <span>{price(sitemap?.price)}</span>
                </button>
              )}
            </div>
          </div>
        </div>
      </Link>
    </>
  );
});

export default MarketplaceSitemapItem;
