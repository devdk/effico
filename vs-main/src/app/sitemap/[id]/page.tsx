'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { MdOutlineCelebration, MdOutlineChevronLeft } from 'react-icons/md';
import { useQuery } from 'react-query';
import {
  GetVirtuosoSitemapQuery,
  VirtuosoSiteMaps,
} from 'services/types/generated';
import Loading from 'src/common/Loading';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import { useState } from 'react';
import ShareModal from 'src/modals/ShareModal';
import { HiOutlinePencil, HiOutlineShare } from 'react-icons/hi';
import ShareCard from 'src/cards/ShareCard';
import ImageModal from 'src/modals/ImageModal';
import { getSitemap } from 'services/sitemap.service';
import useSession from 'src/hooks/useSession';
import { useParams } from 'next/navigation';
import { price } from 'src/utils/formatting';

export default function Sitemap() {
  const [isShareModoalOpen, setIsShareModoalOpen] = useState(false);
  const { session } = useSession();
  const router = useRouter();
  const params = useParams();
  const id = params?.id;

  const { isLoading, data: sitemap } = useQuery<
    GetVirtuosoSitemapQuery,
    unknown,
    VirtuosoSiteMaps
  >(['sitemap', id, session?.user?.sub], getSitemap, {
    select: (data) => data.getVirtuosoSiteMaps as VirtuosoSiteMaps,
  });

  if (isLoading) {
    return <Loading fullScreen isLoading alt="" />;
  }

  return (
    <div className="py-6 c-container-sm md:py-10">
      <button onClick={() => router.back()} className="text-lg font-bold">
        <MdOutlineChevronLeft className="inline text-2xl" /> Go Back
      </button>
      <div className="grid grid-cols-12 pt-6 pb-20 gap-y-10 md:gap-10 md:pt-10">
        <div className="col-span-12 p-6 space-y-2 rounded-xl bg-base-200 dark:bg-dark-base-200 md:col-span-8">
          <h2 className="text-2xl color-heading">{sitemap?.SiteMapName}</h2>
          <div className="relative py-4">
            <div className="h-full aspect-w-16 aspect-h-9">
              <ImageModal
                src={sitemap?.SiteMapImage || '/assets/images/post-image.png'}
                alt="post"
                className="block object-cover w-full h-full cursor-pointer rounded-xl"
              />
            </div>
          </div>
          <p className="pb-4 leading-relaxed">{sitemap?.SiteMapDescription}</p>
          <div className="flex items-center justify-between">
            <div className="flex pt-3 gap-x-3">
              <div className="h-[46px] w-[46px] overflow-hidden rounded-full bg-base-100 dark:bg-dark-base-100">
                <Link href={`/venue/${sitemap?.venue?.VenueID}`}>
                  <img
                    src={
                      sitemap?.venue?.VenueProfileImage ||
                      '/assets/images/post-image.png'
                    }
                    alt="author"
                    className="block w-full h-full"
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

            <div className="flex gap-2">
              <>
                <Link
                  href={`/sitemap/edit/${sitemap?.SiteMapID}`}
                  className="flex items-center justify-center w-10 h-10 p-2 border rounded-full border-quarternary hover:scale-105 dark:border-dark-quarternary"
                >
                  <HiOutlinePencil className="text-lg text-white" />
                </Link>
              </>
              <>
                <button
                  onClick={() => setIsShareModoalOpen(true)}
                  className="flex items-center justify-center w-10 h-10 p-2 border rounded-full border-quarternary hover:scale-105 dark:border-dark-quarternary"
                >
                  <HiOutlineShare className="text-lg text-white" />
                </button>
                <ShareModal
                  twitterShare={{
                    title: sitemap?.SiteMapName,
                    url: `https://app.virtuoso.live/sitemap/${sitemap?.SiteMapID}`,
                  }}
                  title="Share this Sitemap"
                  isOpen={isShareModoalOpen}
                  setIsOpen={setIsShareModoalOpen}
                />
              </>
            </div>
          </div>
        </div>
        <div className="col-span-12 gap-4 space-y-4 md:col-span-4">
          <div className="p-6 rounded-xl bg-base-200 dark:bg-dark-base-200">
            <p className="text-lg color-heading">
              Sold by{' '}
              <Link
                data-testid="venue-profile-link"
                href={`/${`/venue/${sitemap?.venue?.VenueID}`}`}
                className="font-semibold text-primary"
              >
                {sitemap?.venue?.VenueName}
              </Link>
            </p>
            <div className="flex items-center pt-10 gap-x-4">
              <p className="text-base color-heading">Price</p>
              <p className="text-2xl font-bold text-primary">
                {price(sitemap?.price || 0)}
              </p>
            </div>
            <p className="">Excludes all taxes and shipping charges (if any)</p>
            <div className="pt-10 space-y-4">
              {sitemap?.isOwnedByUser ? (
                <button
                  className="flex items-center justify-center w-full c-btn-primary gap-x-2"
                  disabled
                >
                  <MdOutlineCelebration className="text-2xl" />
                  <span>Purchased</span>
                </button>
              ) : (
                <button
                  className="w-full c-btn-primary"
                  onClick={() => {
                    router.push(
                      `/payment?assetID=${sitemap?.SiteMapID}&amount=${sitemap?.price}&assetType=sitemap`
                    );
                  }}
                >
                  Purchase Sitemap
                </button>
              )}
            </div>
          </div>
          <ShareCard
            title="Share this Sitemap"
            details={{
              title: sitemap?.SiteMapName,
              url: `https://app.virtuoso.live/sitemap/${sitemap?.SiteMapID}`,
            }}
          />
        </div>
      </div>
    </div>
  );
}
