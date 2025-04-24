import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { MdOutlineShoppingCart } from 'react-icons/md';
import { UserAsset } from 'services/types/generated';
import { price } from 'src/utils/formatting';

type ProductItemProps = { img: string; asset?: UserAsset };

export default function ProductItem({
  img = '/assets/images/page-card-cover.png',
  asset = {} as UserAsset,
}: ProductItemProps) {
  const router = useRouter();

  return (
    <>
      <div>
        <div
          className="overflow-hidden cursor-pointer h-52 rounded-xl bg-base-300 hover:bg-slate-400 dark:bg-dark-base-300 "
          onClick={() => {
            router.push(`/product/${asset.id}`);
          }}
        >
          <img
            src={
              (Array.isArray(asset?.image) ? asset.image[0] : asset?.image) ??
              img
            }
            className="block object-cover w-full h-full"
            alt=""
          />
        </div>
        <div className="py-4" id="content">
          <div className="space-y-1">
            <h3 className="text-xl color-heading">
              {asset?.productName ?? 'Lorem, ipsum dolor.'}
            </h3>
            <p className="line-clamp-2">
              {asset?.description ??
                'Lorem ipsum, dolor sit amet consectetur adipisicing elit.'}
            </p>
          </div>
          <div className="flex items-center justify-between mt-4">
            <Link
              href={`/vendor/${asset?.vendor?.VendorID}`}
              className="flex items-center gap-x-1"
            >
              <span className="block w-8 h-8 overflow-hidden rounded-full">
                <img
                  className="block object-cover w-full h-full "
                  src={asset?.vendor?.VendorImage || ''}
                  alt={asset?.vendor?.VendorName || ''}
                />
              </span>
              <span className="ml-1 font-semibold">
                {asset?.vendor?.VendorName ?? 'Razer'}
              </span>
            </Link>
            <button
              className="flex items-center justify-center c-btn-primary gap-x-2"
              onClick={() => {
                router.push(
                  `/payment?assetId=${asset?.id}&type=asset&amount=${asset?.price}&assetType=${asset?.assetType}`
                );
              }}
            >
              <MdOutlineShoppingCart className="text-xl" />
              <span>{price(asset?.price)}</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
