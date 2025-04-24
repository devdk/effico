'use client';

import useSession from 'src/hooks/useSession';
import Link from 'next/link';
import { useParams, useRouter } from 'next/navigation';
import React, { ChangeEvent, useMemo, useState } from 'react';
import { toast } from 'react-hot-toast';
import { AiOutlineDelete } from 'react-icons/ai';
import { MdOutlineChevronLeft, MdOutlineFileUpload } from 'react-icons/md';
import { useMutation } from 'react-query';
import { createVenueSiteMap, updateSitemap } from 'services/sitemap.service';
import {
  CreateVenueSiteMapMutation,
  CreateVenueSiteMapMutationVariables,
  VirtuosoSiteMaps,
  VirtuosoVenueDetailsFragment,
} from 'services/types/generated';
import Loading from 'src/common/Loading';
import usePublicUpload from 'src/hooks/usePublicUpload';
import ChooseOS from 'src/venue/create/ChooseOS';
import { v4 as uuid } from 'uuid';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
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

type osTypes = {
  linux?: string;
  windows?: string;
  mac?: string;
  ios?: string;
  android?: string;
  linux_dedicated?: string;
};

export interface ISitemapUpload {
  id: string;
  os: string;
  url?: string;
  filename: string | null;
  state: 'UPLOADED' | 'UPLOADING' | 'ERROR' | 'NULL';
  size: number | null;
  progress?: number | null;
}

export interface IS3Params {
  Body: File | null;
  Bucket: string;
  Key: string;
}

export const uploadSitemapSchema = z.object({
  sitemapName: z.string().nonempty('Name is a required field'),
  description: z.string().nonempty('Description is required'),
  image: z.string().nonempty('Image is required'),
  umapname: z.string().nonempty('UMAP Name is required'),
  price: z.preprocess(
    (val) => Number(val),
    z.number().min(0, 'Price cannot be negative')
  ),
});

export type UploadSitemapSchema = z.infer<typeof uploadSitemapSchema>;

interface IUploadSitemapFormProps {
  handleSetStep: (i: number) => void;
  data: VirtuosoVenueDetailsFragment | undefined;
  sitemap?: VirtuosoSiteMaps | undefined;
}

export default function UploadSitemapForm({
  sitemap,
  handleSetStep,
  data,
}: IUploadSitemapFormProps) {
  const sitemapID = useMemo<string>(() => uuid(), []);
  const { session } = useSession();
  const router = useRouter();
  const params = useParams();
  const id = params?.id;

  const form = useForm<UploadSitemapSchema>({
    resolver: zodResolver(uploadSitemapSchema),
    mode: 'onChange',
    defaultValues: {
      sitemapName: sitemap?.SiteMapName || '',
      description: sitemap?.SiteMapDescription || '',
      image: sitemap?.SiteMapImage || '',
      umapname: sitemap?.SiteMapUMAP_Name || '',
      price: sitemap?.price || 0,
    },
  });

  const [uploads, setUploads] = useState<ISitemapUpload[]>([]);

  const onUpdateSuccess = () => {
    toast.success('Sitemap uploaded!');
    if (sitemap) {
      return router.push(`/sitemap/${sitemap.SiteMapID}`);
    }
    return router.push(`/sitemap/${sitemapID}`);
    // handleSetStep(1);
  };

  const onUpdateError = () => {
    toast.error('An error occurred!');
  };

  const { mutate: mutateSitemap, isLoading: isAddingSitemap } = useMutation<
    CreateVenueSiteMapMutation,
    unknown,
    CreateVenueSiteMapMutationVariables
  >(createVenueSiteMap, {
    mutationKey: 'create-sitemap-PAK',
    onSuccess: onUpdateSuccess,
    onError: onUpdateError,
  });

  const { mutate: mutateUpdateSitemap, isLoading: isUpdateLoading } =
    useMutation<
      CreateVenueSiteMapMutation,
      unknown,
      CreateVenueSiteMapMutationVariables
    >(updateSitemap, {
      mutationKey: 'update-sitemap',
      onSuccess: onUpdateSuccess,
      onError: onUpdateError,
    });

  const { mutate, isLoading } = usePublicUpload({
    type: 'SITEMAP',
    sitemapID: sitemapID || '',
    venueID: data?.VenueID,
    onSuccess: (url: string) => {
      form.setValue('image', url);
    },
    onError: (error: any) => {
      // console.log(error);
    },
  });

  const onSubmit = (values: UploadSitemapSchema) => {
    let pakFiles: osTypes = {};
    uploads
      .filter((i) => i.state === 'UPLOADED')
      .forEach((i) => {
        pakFiles = {
          ...pakFiles,
          [i.os]: i.url,
        };
      });
    const commonFields = {
      SiteMapName: values.sitemapName,
      Android_PAKURL: pakFiles.android,
      iOS_PAKURL: pakFiles.ios,
      Linux_PAKURL: pakFiles.linux,
      Mac_PAKURL: pakFiles.mac,
      Windows_PAKURL: pakFiles.windows,
      SiteMapDescription: values.description,
      SiteMapImage: values.image,
      SiteMapUMAP_Name: values.umapname,
      price: values.price,
    };
    if (sitemap) {
      mutateUpdateSitemap({
        SiteMapID: sitemap.SiteMapID,
        ...commonFields,
      });
      return;
    }
    mutateSitemap({
      SiteMapID: sitemapID,
      SiteMapCreatorID: session?.user?.sub,
      SiteMapOwnerID: session?.user?.sub,
      SiteMapVenueID: data?.VenueID,
      ...commonFields,
    });
  };

  return (
    <>
      <button
        data-testid="back-to-page-link"
        onClick={() => router.back()}
        className="text-lg font-bold"
      >
        <MdOutlineChevronLeft className="inline text-2xl" /> Go Back
      </button>
      <div className="pt-6 md:pt-10">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="p-4 space-y-6 rounded-xl bg-base-200 dark:bg-dark-base-200 md:p-6"
            data-testid="upload-sitemap-form"
          >
            <h2 className="pb-2 text-base font-bold color-heading">
              Sitemap Details
            </h2>
            <div className="max-w-sm space-y-2">
              <FormField
                control={form.control}
                name="sitemapName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>SITEMAP NAME</FormLabel>
                    <FormControl>
                      <Input
                        type="text"
                        className="block w-full c-input"
                        data-testid="sitemap-name-input"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="max-w-sm space-y-2">
              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>SITEMAP DESCRIPTION</FormLabel>
                    <FormControl>
                      <Textarea
                        className="block h-40 c-textarea"
                        data-testid="sitemap-description-input"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="pt-5 space-y-3">
              <div className="space-y-4">
                <FormField
                  control={form.control}
                  name="image"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>UPLOAD SITEMAP IMAGE</FormLabel>
                      <FormControl>
                        <>
                          {!field.value && (
                            <div
                              data-testid="sitemap-image-upload-box"
                              className={`relative flex h-36 flex-col items-center justify-center overflow-hidden rounded-xl border border-dashed border-primary md:w-36 ${
                                isLoading ? 'animate-pulse' : ''
                              }`}
                            >
                              <input
                                data-testid="sitemap-image-file-input"
                                id="cover"
                                className="absolute inset-0 opacity-0 cursor-pointer"
                                type="file"
                                onChange={(
                                  e: ChangeEvent<HTMLInputElement>
                                ) => {
                                  const { files } = e.target;
                                  if (!files?.[0]) return;
                                  mutate(files[0]);
                                }}
                              />
                              <MdOutlineFileUpload className="text-3xl" />
                              <span className="text-lg font-medium">
                                {isLoading ? 'Uploading...' : 'Upload'}
                              </span>
                            </div>
                          )}
                          {field.value && (
                            <div
                              className="relative flex flex-col items-center justify-center w-full h-32 overflow-hidden rounded-xl border-primary bg-base-100 dark:bg-dark-base-100 md:h-32 md:w-44"
                              data-testid="sitemap-image-preview"
                            >
                              <button
                                onClick={() => form.setValue('image', '')}
                                data-testid="remove-sitemap-image-btn"
                                className="absolute flex items-center justify-center w-6 h-6 rounded-full top-2 right-2 bg-base-100 dark:bg-dark-base-100"
                              >
                                <AiOutlineDelete className="text-red-200" />
                              </button>
                              <img
                                src={field.value}
                                className="block object-cover w-full h-full"
                                alt="virtuoso"
                              />
                            </div>
                          )}
                        </>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <p>Upload only .jpg and .png files</p>
            </div>
            <div className="pt-0 space-y-3 md:pt-6">
              <h2 className="text-base font-bold color-heading">
                Choose your operating system
              </h2>
              <ChooseOS
                data={data || sitemap}
                uploads={uploads}
                setUploads={setUploads}
                VenueID={data?.VenueID}
                SitemapID={sitemapID}
                type="SITEMAP"
              />
            </div>
            <div className="flex-1 max-w-sm pt-4 space-y-2">
              <h2 className="text-base font-bold color-heading">
                SiteMap UMAP Name
              </h2>
              <FormField
                control={form.control}
                name="umapname"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        type="text"
                        className="block c-input"
                        data-testid="sitemap-umap-name-input"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="flex-1 max-w-sm space-y-2">
              <h2 className="text-base font-bold color-heading">Price</h2>
              <FormField
                control={form.control}
                name="price"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        type="number"
                        className="block c-input"
                        data-testid="sitemap-price-input"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="flex justify-end gap-3 mt-4">
              <Button variant="secondary" asChild>
                <Link href={`/venue/${id}`} data-testid="discard-sitemap-btn">
                  Discard
                </Link>
              </Button>
              <Button
                data-testid="upload-sitemap-btn"
                disabled={isAddingSitemap || isUpdateLoading}
                onClick={
                  isAddingSitemap || isUpdateLoading
                    ? () => {}
                    : form.handleSubmit(onSubmit)
                }
              >
                <Loading
                  alt={sitemap ? 'Update Sitemap' : 'Upload Sitemap'}
                  isLoading={isAddingSitemap || isUpdateLoading}
                />
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </>
  );
}
