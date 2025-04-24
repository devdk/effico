'use client';

import useSession from 'src/hooks/useSession';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import React, { useId, useState } from 'react';
import { AiOutlineDelete } from 'react-icons/ai';
import { MdOutlineChevronLeft, MdOutlineFileUpload } from 'react-icons/md';
import { useMutation, useQueryClient } from 'react-query';
import { toast } from 'react-hot-toast';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import {
  UpdateVenuePakMutation,
  UpdateVenuePakMutationVariables,
  VirtuosoVenueDetailsFragment,
} from 'services/types/generated';
import { updateVenuePAK } from 'services/venue.service';
import Loading from 'src/common/Loading';
import usePublicUpload from 'src/hooks/usePublicUpload';
import ChooseOS from './ChooseOS';
import {
  Form,
  FormField,
  FormItem,
  FormControl,
  FormMessage,
} from 'src/components/ui/form';
import { Input } from 'src/components/ui/input';
import { Button } from 'src/components/ui/button';
import {
  editVenueSchema,
  EditVenueSchema,
} from 'src/validators/venue.validator';

export type osTypes = {
  linux?: string;
  windows?: string;
  mac?: string;
  ios?: string;
  android?: string;
  linux_dedicated?: string;
};

export interface IVenueUploads {
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

interface IEditVenueFormProps {
  handleSetStep: (i: number) => void;
  data: VirtuosoVenueDetailsFragment | undefined;
}

export default function EditVenueForm({
  handleSetStep,
  data,
}: IEditVenueFormProps) {
  const keyID = useId();
  const { session } = useSession();
  const queryClient = useQueryClient();
  const params = useParams();
  const id = params?.id;

  const form = useForm<EditVenueSchema>({
    resolver: zodResolver(editVenueSchema),
    mode: 'onChange',
    defaultValues: {
      images: data?.VenueImages || ([] as any),
      stageNames: data?.StageNames || ([] as any),
      umapname: data?.VenueUMAP_Name || '',
      price: data?.price || 0,
    },
  });

  const uploadsState = useState<IVenueUploads[]>([]);
  const [uploads, setUploads] = uploadsState;

  const { mutate: uploadImage, isLoading: isUploadingImage } = usePublicUpload({
    type: 'VENUE',
    venueID: data?.VenueID || '',
    onSuccess: (url) => {
      const currentImages = form.getValues('images');
      if (currentImages.length < 5) {
        form.setValue('images', [...currentImages, url]);
      }
    },
    onError: () => {},
  });

  const { mutate: mutateVenue, isLoading: isUpdateLoading } = useMutation<
    UpdateVenuePakMutation,
    unknown,
    UpdateVenuePakMutationVariables
  >(updateVenuePAK, {
    mutationKey: 'update-venue-PAK',
    onSuccess: (res) => {
      toast.success('Venue updated!');
      queryClient.setQueryData(
        ['venue', res.update?.VenueID, session?.user?.sub],
        (old: any) => {
          return {
            venue: {
              ...old?.venue,
              ...res.update,
            },
          };
        }
      );
      handleSetStep(1);
    },
    onError: () => {
      toast.error('An error occurred!');
    },
  });

  const handleRemoveImage = (image: string) => {
    const currentImages = form.getValues('images');
    form.setValue(
      'images',
      currentImages.filter((i) => i !== image)
    );
  };

  const onSubmit = (values: EditVenueSchema) => {
    let pakFiles: osTypes = {};
    uploads
      .filter((i) => i.state === 'UPLOADED')
      .forEach((i) => {
        pakFiles = { ...pakFiles, [i.os]: i.url };
      });
    mutateVenue({
      VenueID: data?.VenueID || '',
      iOS_PAKURL: pakFiles.ios,
      Linux_PAKURL: pakFiles.linux,
      Mac_PAKURL: pakFiles.mac,
      Windows_PAKURL: pakFiles.windows,
      Android_PAKURL: pakFiles.android,
      Linux_Dedicated_Server_PAKURL: pakFiles.linux_dedicated,
      NumberOfStages: values.stageNames.length,
      StageNames: values.stageNames,
      VenueUMAP_Name: values.umapname,
      VenueImages: values.images,
      price: values.price,
    });
  };

  return (
    <>
      <Link
        className="text-lg font-bold"
        href={`/venue/${id}`}
        data-testid="back-to-page-link"
      >
        <MdOutlineChevronLeft className="inline text-2xl" /> Back to Page
      </Link>
      <div className="pt-6 pb-20 md:pt-10">
        <Form {...form}>
          <form
            data-testid="edit-venue-form"
            onSubmit={form.handleSubmit(onSubmit)}
            className="p-4 space-y-6 rounded-xl bg-base-200 dark:bg-dark-base-200 md:p-6"
          >
            <div className="pt-2 space-y-3 md:pt-6">
              <h2 className="text-base font-bold color-heading">
                Choose your operating system
              </h2>
              {data?.VenueID && (
                <ChooseOS
                  data={data}
                  uploads={uploads}
                  setUploads={setUploads}
                  VenueID={data.VenueID}
                />
              )}
            </div>
            <div className="pt-5 space-y-3">
              <div className="space-y-4">
                <label className="block">
                  <span>UPLOAD IMAGES OF YOUR VENUE</span>
                </label>
                <div
                  className="grid flex-wrap grid-cols-2 gap-6 md:flex"
                  data-testid="venue-image-upload-container"
                >
                  <div
                    className="relative flex flex-col items-center justify-center overflow-hidden border border-dashed h-36 rounded-xl border-primary md:w-36"
                    data-testid="venue-image-upload-item"
                  >
                    <input
                      id="cover"
                      className="absolute inset-0 opacity-0 cursor-pointer"
                      type="file"
                      data-testid="venue-image-file-input"
                      onChange={(e) => {
                        const { files } = e.target;
                        if (files?.[0]) uploadImage(files[0]);
                      }}
                    />
                    <MdOutlineFileUpload className="text-3xl" />
                    <span className="text-lg font-medium">Upload</span>
                  </div>
                  {form.watch('images').map((image) => (
                    <div
                      key={image}
                      data-testid="venue-image-preview"
                      className="relative flex flex-col items-center justify-center w-full overflow-hidden h-36 rounded-xl border-primary bg-base-100 dark:bg-dark-base-100 md:h-36 md:w-44"
                    >
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          handleRemoveImage(image);
                        }}
                        data-testid="remove-image-btn"
                        className="absolute flex items-center justify-center w-6 h-6 rounded-full top-2 right-2 bg-base-100 dark:bg-dark-base-100"
                      >
                        <AiOutlineDelete className="text-red-200" />
                      </button>
                      <img
                        src={image}
                        className="block object-cover w-full h-full"
                        alt="virtuoso"
                      />
                    </div>
                  ))}
                </div>
              </div>
              <p>Upload only .jpg and .png files</p>
            </div>
            <div className="flex-1 max-w-sm pt-6 space-y-2">
              <h2 className="text-base font-bold color-heading">Stages</h2>
              <label className="block">
                <span>ENTER THE STAGE NAMES</span>
              </label>
              <div className="space-y-4" data-testid="stage-names-container">
                {form.watch('stageNames').map((stageName, stageIndex) => (
                  <div
                    key={`${keyID}-${stageIndex}`}
                    className="flex flex-row items-center gap-4"
                  >
                    <Input
                      type="text"
                      data-testid="stage-name-input"
                      value={stageName}
                      onChange={(e) => {
                        const newStages = [...form.getValues('stageNames')];
                        newStages[stageIndex] = e.target.value;
                        form.setValue('stageNames', newStages);
                      }}
                    />
                    <AiOutlineDelete
                      className="w-6 h-6 text-red-400 cursor-pointer"
                      data-testid="remove-stage-btn"
                      onClick={() => {
                        const newStages = [...form.getValues('stageNames')];
                        newStages.splice(stageIndex, 1);
                        form.setValue('stageNames', newStages);
                      }}
                    />
                  </div>
                ))}
              </div>
              <p
                onClick={() => {
                  form.setValue('stageNames', [
                    ...form.getValues('stageNames'),
                    '',
                  ]);
                }}
                className="inline-block pt-2 text-sm cursor-pointer text-primary"
                data-testid="add-stage-btn"
              >
                + Add Stage
              </p>
            </div>
            <div className="flex-1 max-w-sm pt-4 space-y-2">
              <h2 className="text-base font-bold color-heading">
                Venue UMAP Name
              </h2>
              <FormField
                control={form.control}
                name="umapname"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        type="text"
                        data-testid="umap-name-input"
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
                        data-testid="venue-price-input"
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
                <Link href={`/venue/${id}`} data-testid="discard-venue-btn">
                  Discard
                </Link>
              </Button>
              <Button
                type="submit"
                data-testid="update-venue-btn"
                disabled={isUpdateLoading || isUploadingImage}
              >
                <Loading alt="Update Venue" isLoading={isUpdateLoading} />
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </>
  );
}
