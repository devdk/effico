import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { ChangeEvent, useEffect, useMemo, useRef, useState } from 'react';
import { SubmitHandler, useFieldArray, useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { HiOutlinePlus, HiOutlineX } from 'react-icons/hi';
import { MdOutlineChevronLeft } from 'react-icons/md';
import { useMutation } from 'react-query';
import {
  UpdateUserAssetMutation,
  UpdateUserAssetMutationVariables,
  UserAsset,
} from 'services/types/generated';
import { updateUserAsset } from 'services/userasset.service';
import Loading from 'src/common/Loading';
import usePublicUploadMutation from 'src/hooks/usePublicUpload';
import { price } from 'src/utils/formatting';
import ChooseOS from 'src/vendor/create/ChooseOS';
import { v4 as uuid } from 'uuid';

export interface IProductUploads {
  id: string;
  os: string;
  url?: string;
  filename: string | null;
  state: 'UPLOADED' | 'UPLOADING' | 'ERROR' | 'NULL';
  size: number | null;
  progress?: number | null;
}

type TAddProductFormProps = {
  setStep: React.Dispatch<React.SetStateAction<number>>;
};

type Inputs = {
  price: string;
  description: string;
  productName: string;
  AssetUMAP_Name: string;
  assetType: string;
  images: Array<{ src: string }>;
};

type osTypes = {
  linux?: string;
  windows?: string;
  mac?: string;
  ios?: string;
  android?: string;
  linux_dedicated?: string;
};

interface IEditProductProps {
  product?: UserAsset;
}

export default function EditProduct({ product }: IEditProductProps) {
  const [step, setStep] = useState<number>(0);
  const router = useRouter();
  const assetID = useMemo<string>(() => uuid(), []);

  const [uploads, setUploads] = useState<IProductUploads[]>([]);

  const [umapConfig, setUmapConfig] = useState({});
  const updateUmapConfig = (updatedConfigs: any) =>
    setUmapConfig({
      ...umapConfig,
      ...updatedConfigs,
    });

  const { mutate, isLoading } = useMutation<
    UpdateUserAssetMutation,
    unknown,
    UpdateUserAssetMutationVariables
  >(updateUserAsset, {
    mutationKey: 'update-userasset',
    onSuccess: () => {
      toast.success('Product updated!');
      setStep(1);
    },
    onError: () => {
      toast.error('An error occurred!');
    },
  });

  const handleDiscard = (e: React.FormEvent) => {
    e.preventDefault();
    router.back();
  };

  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors },
  } = useForm<Inputs>();

  const { append, insert, update, remove, fields, replace } =
    useFieldArray<Inputs>({
      name: 'images',
      control,
    });

  useEffect(() => {
    replace(product?.image?.map((i) => ({ src: i || '' })) || []);
  }, []);

  const watchAssetType = watch('assetType', undefined);

  const inputFileRef = useRef<HTMLInputElement>(null);

  const onProductImageUploadSuccess = (url: any) => {
    append({
      src: url,
    });
  };

  const onProductImageUploadError = (error: any) => {
    // console.log(error);
  };

  const { mutate: mutateProductImage, isLoading: isProductImageUploading } =
    usePublicUploadMutation({
      type: 'PRODUCT',
      onSuccess: onProductImageUploadSuccess,
      onError: onProductImageUploadError,
    });

  const handleProductImage = async (e: ChangeEvent<HTMLInputElement>) => {
    const { files } = e.target;
    if (!files) {
      return;
    }
    mutateProductImage(files[0]);
  };

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    let pakFiles: osTypes = {};
    uploads
      .filter((i) => i.state === 'UPLOADED')
      .map((i) => {
        pakFiles = {
          ...pakFiles,
          [i.os]: i.url,
        };
      });

    const formData: UpdateUserAssetMutationVariables = {
      ...data,
      id: product?.id || '',
      images: data.images.map((image) => image.src),
    };

    mutate({
      ...formData,
      Android_PAKURL: pakFiles.android,
      iOS_PAKURL: pakFiles.ios,
      Linux_PAKURL: pakFiles.linux,
      Mac_PAKURL: pakFiles.mac,
      Linux_Dedicated_Server_PAKURL: pakFiles.linux_dedicated,
      Windows_PAKURL: pakFiles.windows,
      umapConfig,
    });
  };

  return (
    <div className="pt-6 c-container-sm pb-28 md:pt-5 md:pb-10">
      {step === 0 && (
        <>
          <button className="text-lg font-bold" onClick={handleDiscard}>
            <MdOutlineChevronLeft className="inline text-2xl" /> Update Product
          </button>
          <form className="space-y-10" onSubmit={handleSubmit(onSubmit)}>
            <div className="pt-6 md:pt-10">
              <div className="p-4 space-y-6 rounded-xl bg-base-200 dark:bg-dark-base-200 md:p-6">
                <div className="flex-1 space-y-2">
                  <label className="block">
                    <span className="">PRODUCT NAME</span>
                  </label>
                  <input
                    type="text"
                    className="c-input"
                    placeholder="product name"
                    {...register('productName', {
                      required: true,
                      value: product?.productName,
                    })}
                  />
                  {errors.productName && (
                    <span className="text-xs text-red-400">
                      Enter a product name
                    </span>
                  )}
                </div>

                <div className="flex-1 space-y-2">
                  <label htmlFor="" className="custom-label">
                    Add images of product
                  </label>
                  <div className="grid flex-wrap grid-cols-2 gap-4 md:flex">
                    <input
                      id="cover"
                      className="hidden cursor-pointer "
                      type="file"
                      name="myImage"
                      ref={inputFileRef}
                      onChange={handleProductImage}
                    />
                    <div
                      id="add_image"
                      className="flex flex-col items-center justify-center w-full gap-3 border rounded-lg cursor-pointer h-28 border-primary md:w-28"
                      onClick={() => {
                        inputFileRef.current?.click();
                      }}
                    >
                      {!isProductImageUploading && (
                        <HiOutlinePlus className="text-xl" />
                      )}
                      <Loading
                        alt="Upload"
                        isLoading={isProductImageUploading}
                      />
                    </div>
                    {fields?.map((field, index) => {
                      return (
                        <div
                          key={field.id + index}
                          className="relative w-full overflow-hidden rounded-lg h-28 bg-white/10 md:w-32"
                        >
                          <button
                            onClick={(e) => remove(index)}
                            className="absolute flex items-center justify-center w-5 h-5 rounded-full shadow top-1 right-1 bg-white/70 backdrop-blur-md hover:bg-white/80"
                          >
                            <HiOutlineX color="black" />
                          </button>
                          <img
                            src={field.src}
                            className="block object-cover w-full h-full"
                            alt="virtuoso"
                          />
                        </div>
                      );
                    })}
                  </div>
                  <p className="text-secondary-content/70">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Natus, earum.
                  </p>
                </div>

                <div className="flex-1 space-y-2">
                  <label className="block">
                    <span className="">ASSET TYPE</span>
                  </label>
                  <select
                    className="c-input"
                    {...register('assetType', {
                      required: true,
                      value: product?.assetType,
                    })}
                  >
                    <option disabled value={''}>
                      select asset type
                    </option>
                    <option key="avatar-clothing" value="avatar-clothing">
                      Avatar Clothing item
                    </option>
                    <option key="stage" value="stage">
                      Stage
                    </option>
                    <option key="in-game-item" value="in-game-item">
                      In-game item
                    </option>
                  </select>
                  {errors.assetType && (
                    <span className="text-xs text-red-400">
                      Select asset type
                    </span>
                  )}
                </div>
                <div className="flex-1 space-y-2">
                  <label className="block">
                    <span className="">PRICE (IN DOLLARS)</span>
                  </label>
                  <input
                    type="number"
                    className="c-input"
                    placeholder="$"
                    {...register('price', {
                      required: true,
                      value: product?.price,
                    })}
                  />
                  {errors.price && (
                    <span className="text-xs text-red-400">
                      price is required
                    </span>
                  )}
                </div>
                <div className="flex-1 space-y-2">
                  <label className="block">
                    <span className="">DESCRIBE YOUR PRODUCT</span>
                  </label>
                  <textarea
                    className="resize-none c-textarea h-36"
                    placeholder="describe the product in few words"
                    {...register('description', {
                      required: true,
                      value: product?.description || '',
                    })}
                  />
                  {errors.description && (
                    <span className="text-xs text-red-400">
                      description is required
                    </span>
                  )}
                </div>

                {watchAssetType && (
                  <div className="space-y-4">
                    <ChooseOS
                      data={product}
                      assetType={watchAssetType}
                      assetID={assetID}
                      type="PRODUCT"
                      setUploads={setUploads}
                      uploads={uploads}
                      setUmapConfig={updateUmapConfig}
                      umapConfig={umapConfig}
                    />
                  </div>
                )}

                {watchAssetType && watchAssetType === 'stage' && (
                  <div className="flex-1 space-y-2">
                    <label className="block">
                      <span className="">Asset UMAP Name</span>
                    </label>
                    <input
                      type="text"
                      className="c-input"
                      placeholder="umap name"
                      {...register('AssetUMAP_Name', {
                        required: true,
                        value: product?.AssetUMAP_Name || '',
                      })}
                    />
                    {errors.AssetUMAP_Name && (
                      <span className="text-xs text-red-400">
                        this field is required
                      </span>
                    )}
                  </div>
                )}
                <div className="flex justify-end mt-4">
                  <button
                    className="c-btn"
                    type="button"
                    onClick={handleDiscard}
                  >
                    Discard
                  </button>
                  <button type="submit" className="c-btn-primary">
                    <Loading alt="Update Asset" isLoading={isLoading} />
                  </button>
                </div>
              </div>
            </div>
          </form>
        </>
      )}

      {step === 1 && (
        <>
          <div className="pt-40">
            <div className="max-w-xl p-6 px-10 py-12 mx-auto space-y-6 rounded-xl bg-base-200 dark:bg-dark-base-200">
              <div className="flex items-center justify-center">
                <img
                  src="/assets/logo/tick.png"
                  alt="tick"
                  className="block w-16 h-16"
                />
              </div>
              <div className="py-4 pb-6 space-y-2 border-b border-quarternary dark:border-dark-quarternary/40">
                <h2 className="text-xl text-center color-heading">
                  Your Product has been sucessfuly updated.
                </h2>
                <p className="text-center">
                  You can check this Product on your page in product list.
                </p>
              </div>
              <div className="py-6 pt-2 space-y-4">
                <h3 className="mb-4 text-xl text-center color-heading">
                  Product Details
                </h3>
                <div className="flex items-center justify-between">
                  <h4>Product Name</h4>
                  <p>{product?.productName}</p>
                </div>
                <div className="flex items-center justify-between">
                  <h4>Product Price</h4>
                  <p>{price(product?.price)}</p>
                </div>
                <div className="flex items-center justify-between">
                  <h4>Asset Type</h4>
                  <p>{product?.assetType}</p>
                </div>
              </div>
              <div>
                <Link
                  href={`/product/${product?.id}`}
                  className="flex items-center justify-center c-btn-primary"
                >
                  Back to Product
                </Link>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
