'use client';

import Link from 'next/link';
import { MdOutlineCelebration, MdOutlineChevronLeft } from 'react-icons/md';
import { useQuery } from 'react-query';
import Slider from 'react-slick';
import { GetUserAssetQueryQuery, UserAsset } from 'services/types/generated';
import { getUserAssetForProductPage } from 'services/userasset.service';
import Loading from 'src/common/Loading';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import { useState } from 'react';
import ShareModal from 'src/modals/ShareModal';
import { HiOutlineShare } from 'react-icons/hi';
import ShareCard from 'src/cards/ShareCard';
import { convertToDollar } from 'src/utils/currency';
import ImageModal from 'src/modals/ImageModal';
import useSession from 'src/hooks/useSession';
import { useParams, useRouter } from 'next/navigation';
import { price } from 'src/utils/formatting';

const settings = {
  dots: true,
  infinite: true,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 3000,
  speed: 500,
};

export default function Product() {
  const { session } = useSession();
  const router = useRouter();
  const [isShareModoalOpen, setIsShareModoalOpen] = useState(false);
  const params = useParams();
  const productId = params?.id;

  const { isLoading, data: asset } = useQuery<
    GetUserAssetQueryQuery,
    unknown,
    UserAsset
  >(
    [`product-detail-${productId}`, productId, session?.user?.sub],
    getUserAssetForProductPage,
    {
      select: (asset) => asset.userasset as UserAsset,
    }
  );

  if (isLoading) {
    return <Loading fullScreen isLoading alt="" />;
  }

  return (
    <div className="py-6 c-container-sm md:py-10">
      <button onClick={() => router.back()} className="text-lg font-bold">
        <MdOutlineChevronLeft className="inline text-2xl" /> Product Details
      </button>
      <div className="flex">
        <div className="grid grid-cols-12 pt-6 pb-20 gap-y-10 md:gap-10 md:pt-10">
          <div className="col-span-12 p-6 space-y-2 rounded-xl bg-base-200 dark:bg-dark-base-200 md:col-span-8">
            <h2 className="text-2xl color-heading">{asset?.productName}</h2>
            <div className="relative py-4">
              <Slider {...settings}>
                {asset?.image?.map((i: any) => (
                  <div
                    className="h-full aspect-w-16 aspect-h-9 rounded-xl bg-base-100 dark:bg-dark-base-100"
                    key={i}
                  >
                    <ImageModal
                      key={i}
                      src={i || '/assets/images/post-image.png'}
                      alt="post"
                      className="block object-cover w-full h-full cursor-pointer rounded-xl"
                    />
                  </div>
                ))}
              </Slider>
            </div>
            <div className="flex py-4">
              <p className="px-4 py-1 text-sm rounded-lg color-heading bg-primary">
                {asset?.assetType}
              </p>
            </div>
            <p className="pb-4 leading-relaxed">{asset?.description}</p>
            <div className="flex items-center justify-between">
              <div className="flex pt-3 gap-x-3">
                <div className="h-[46px] w-[46px] overflow-hidden rounded-full bg-base-100 dark:bg-dark-base-100">
                  <Link href={`/vendor/${asset?.vendor?.VendorID}`}>
                    <img
                      src={
                        asset?.vendor?.VendorImage ||
                        '/assets/images/post-image.png'
                      }
                      alt="author"
                      className="block w-full h-full"
                    />
                  </Link>
                </div>
                <div className="flex-1 text-sm">
                  <h3 className="font-medium capitalize text-heading dark:text-dark-heading">
                    <Link href={`${`/vendor/${asset?.vendor?.VendorID}`}`}>
                      {asset?.vendor?.VendorName || 'Oblivia Gibson'}
                    </Link>
                  </h3>
                  <p className="">Vendor Page</p>
                </div>
              </div>
              <div className="">
                <>
                  <button
                    onClick={() => setIsShareModoalOpen(true)}
                    className="w-10 h-10 p-2 border rounded-full border-quarternary hover:scale-105 dark:border-dark-quarternary"
                  >
                    <HiOutlineShare className="text-lg text-white" />
                  </button>
                  <ShareModal
                    twitterShare={{
                      title: asset?.productName,
                      url: `https://app.virtuoso.live/product/${asset?.id}`,
                    }}
                    title="Share this Product"
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
                  href={`/${`/vendor/${asset?.vendor?.VendorID}`}`}
                  className="font-semibold text-primary"
                >
                  {asset?.vendor?.VendorName}
                </Link>
              </p>
              <div className="flex items-center pt-10 gap-x-4">
                <p className="text-base color-heading">Price</p>
                <p className="text-2xl font-bold text-primary">
                  {price(asset?.price || 0)}
                </p>
              </div>
              <p className="">
                Excludes all taxes and shipping charges (if any)
              </p>
              <div className="pt-10 space-y-4">
                {asset?.isOwnedByUser ? (
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
                        `/payment?assetId=${asset?.id}&amount=${asset?.price}&assetType=${asset?.assetType}`
                      );
                    }}
                  >
                    Buy Product
                  </button>
                )}
              </div>
            </div>
            <ShareCard
              title="Share this Product"
              details={{
                title: asset?.productName,
                url: `https://app.virtuoso.live/product/${asset?.id}`,
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
