'use client';

import { useMemo, useRef, useState, ChangeEvent } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { useForm, useFieldArray } from 'react-hook-form';
import { v4 as uuid } from 'uuid';
import { toast } from 'react-hot-toast';
import { useMutation } from 'react-query';
import { HiOutlinePlus } from 'react-icons/hi';
import { MdOutlineChevronLeft } from 'react-icons/md';
import useSession from 'src/hooks/useSession';
import { createUserAsset } from 'services/userasset.service';
import usePublicUploadMutation from 'src/hooks/usePublicUpload';
import {
  CreateUserAssetMutation,
  CreateUserAssetMutationVariables,
} from 'services/types/generated';
import ChooseOS from './ChooseOS';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  Form,
  FormField,
  FormItem,
  FormControl,
  FormLabel,
  FormMessage,
} from 'src/components/ui/form';
import { Input } from 'src/components/ui/input';
import { Textarea } from 'src/components/ui/textarea';
import { Button } from 'src/components/ui/button';
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from 'src/components/ui/select';
import {
  createProductSchema,
  CreateProductSchema,
} from 'src/validators/vendor.validator';

export interface IProductUploads {
  id: string;
  os: string;
  url?: string;
  filename: string | null;
  state: 'UPLOADED' | 'UPLOADING' | 'ERROR' | 'NULL';
  size: number | null;
  progress?: number | null;
}

type osTypes = {
  linux?: string;
  windows?: string;
  mac?: string;
  ios?: string;
  android?: string;
  linux_dedicated?: string;
};

export default function CreateProduct() {
  const { session } = useSession();
  const router = useRouter();
  const params = useParams();
  const id = params?.id;
  const assetID = useMemo(() => uuid(), []);
  const [uploads, setUploads] = useState<IProductUploads[]>([]);
  const [umapConfig, setUmapConfig] = useState({});
  const updateUmapConfig = (config: any) =>
    setUmapConfig((prev) => ({ ...prev, ...config }));

  const form = useForm<CreateProductSchema>({
    resolver: zodResolver(createProductSchema),
    mode: 'onChange',
    defaultValues: {
      images: [],
      assetType: 'avatar-clothing',
    },
  });

  const { control, handleSubmit, watch } = form;
  const { append, fields } = useFieldArray({ name: 'images', control });
  const watchAssetType = watch('assetType');

  const { mutate, isLoading } = useMutation<
    CreateUserAssetMutation,
    unknown,
    CreateUserAssetMutationVariables
  >(createUserAsset, {
    mutationKey: 'create-userasset',
    onSuccess: () => {
      toast.success('Product created successfully!');
      router.push(`/product/${assetID}`);
    },
    onError: () => {
      toast.error('An error occurred!');
    },
  });

  const handleDiscard = (e: React.FormEvent) => {
    e.preventDefault();
    router.back();
  };

  const inputFileRef = useRef<HTMLInputElement>(null);
  const { mutate: mutateProductImage, isLoading: isProductImageUploading } =
    usePublicUploadMutation({
      type: 'PRODUCT',
      onSuccess: (url) => append({ src: url }),
      onError: () => toast.error('Image upload failed!'),
    });

  const handleProductImage = (e: ChangeEvent<HTMLInputElement>) => {
    const { files } = e.target;
    if (!files?.[0]) return;
    mutateProductImage(files[0]);
  };

  const onSubmit = (data: CreateProductSchema) => {
    let pakFiles: osTypes = {};
    uploads
      .filter((i) => i.state === 'UPLOADED')
      .forEach((i) => {
        pakFiles = { ...pakFiles, [i.os]: i.url };
      });
    mutate({
      assetID,
      isNFT: false,
      vendorPageId: id as string,
      creatorId: session?.user?.sub,
      AssetOwnerID: session?.user?.sub,
      accessibility: 'private',
      ...data,
      price: String(data.price),
      images: data.images.map((image) => image.src),
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
      <button className="text-lg font-bold" onClick={handleDiscard}>
        <MdOutlineChevronLeft className="inline text-2xl" /> Add a Product
      </button>
      <Form {...form}>
        <form
          className="space-y-10"
          onSubmit={handleSubmit(onSubmit)}
          data-testid="product-form"
        >
          <div className="pt-6 md:pt-10">
            <div className="p-4 space-y-6 rounded-xl bg-base-200 dark:bg-dark-base-200 md:p-6">
              <FormField
                control={form.control}
                name="productName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>PRODUCT NAME</FormLabel>
                    <FormControl>
                      <Input
                        type="text"
                        className="c-input"
                        data-testid="product-name-input"
                        placeholder="Product name"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="flex-1 space-y-2">
                <label className="custom-label">Add images of product</label>
                <div className="grid flex-wrap grid-cols-2 gap-4 md:flex">
                  <input
                    id="cover"
                    className="hidden cursor-pointer"
                    type="file"
                    ref={inputFileRef}
                    data-testid="product-image-upload"
                    onChange={handleProductImage}
                  />
                  <div
                    id="add_image"
                    className="flex flex-col items-center justify-center w-full gap-3 border rounded-lg cursor-pointer h-28 border-primary md:w-28"
                    onClick={() => inputFileRef.current?.click()}
                  >
                    <HiOutlinePlus className="text-xl" />
                    {isProductImageUploading ? 'Uploading...' : 'Upload'}
                  </div>
                  {fields.map((field, index) => (
                    <div
                      key={field.id + index}
                      className="w-full overflow-hidden rounded-lg h-28 bg-white/10 md:w-32"
                    >
                      <img
                        src={field.src}
                        className="block object-cover w-full h-full"
                        alt="virtuoso"
                      />
                    </div>
                  ))}
                </div>
              </div>
              <FormField
                control={form.control}
                name="assetType"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>ASSET TYPE</FormLabel>
                    <FormControl>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <SelectTrigger data-testid="product-asset-type-select">
                          <SelectValue placeholder="Select an asset type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="avatar-clothing">
                            Avatar Clothing item
                          </SelectItem>
                          <SelectItem value="stage">Stage</SelectItem>
                          <SelectItem value="in-game-item">
                            In-game item
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="price"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>PRICE (IN DOLLARS)</FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        className="c-input"
                        placeholder="$"
                        data-testid="product-price-input"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>DESCRIBE YOUR PRODUCT</FormLabel>
                    <FormControl>
                      <Textarea
                        className="resize-none c-textarea h-36"
                        placeholder="Describe the product in a few words"
                        data-testid="product-description-textarea"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {(watchAssetType === 'stage' ||
                watchAssetType === 'in-game-item') && (
                <>
                  <ChooseOS
                    assetType={watchAssetType}
                    assetID={assetID}
                    type="PRODUCT"
                    setUploads={setUploads}
                    uploads={uploads}
                    setUmapConfig={updateUmapConfig}
                    umapConfig={umapConfig}
                  />
                  <FormField
                    control={form.control}
                    name="AssetUMAP_Name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Asset UMAP Name</FormLabel>
                        <FormControl>
                          <Input
                            type="text"
                            className="c-input"
                            data-testid="product-umap-name-input"
                            placeholder="UMAP name"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </>
              )}
              <div className="flex justify-end gap-3 mt-4">
                <Button
                  variant="secondary"
                  onClick={handleDiscard}
                  data-testid="product-discard-button"
                  type="button"
                >
                  Discard
                </Button>
                <Button
                  data-testid="product-confirm-next-button"
                  type="submit"
                  disabled={isLoading || isProductImageUploading}
                >
                  Confirm & next
                </Button>
              </div>
            </div>
          </div>
        </form>
      </Form>
    </div>
  );
}
