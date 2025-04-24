'use client';

import React from 'react';
import { MdOutlineChevronLeft } from 'react-icons/md';
import Loading from './Loading';
import useSession from 'src/hooks/useSession';
import { useRouter } from 'next/navigation';
import { useMutation } from 'react-query';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import {
  CreateVenuePageMutation,
  CreateVenuePageMutationVariables,
} from 'services/types/generated';
import { createVenue } from 'services/venue.service';
import { toast } from 'react-hot-toast';
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
  createVenueSchema,
  CreateVenueSchema,
} from 'src/validators/page.validator';

interface ICreateVenueProps {
  handleSetStep: (i: number) => void;
}

export default function CreateVenuePage({ handleSetStep }: ICreateVenueProps) {
  const { session } = useSession();
  const router = useRouter();

  const onSuccess = (data: CreateVenuePageMutation) => {
    toast.success('New venue created!');
    router.push(`/venue/${data.newVenue?.VenueID}`);
  };

  const onError = (err: any) => {};

  const { mutate, isLoading } = useMutation<
    CreateVenuePageMutation,
    unknown,
    CreateVenuePageMutationVariables
  >(createVenue, { mutationKey: 'create-creator', onSuccess, onError });

  const form = useForm<CreateVenueSchema>({
    resolver: zodResolver(createVenueSchema),
    mode: 'onChange',
    defaultValues: {
      IsVenueReal: 'false',
    },
  });

  const onSubmit = (data: CreateVenueSchema) => {
    mutate({
      VenueName: data.VenueName,
      IsRealWorldVenue: 'false',
      Bio: data.VenueBio,
      VenueOwnerID: session?.user?.sub,
      VenueAuthor: session?.user?.username,
      VenueCreatorID: session?.user?.sub || '',
    });
  };

  return (
    <>
      <button className="text-lg font-bold" onClick={() => handleSetStep(0)}>
        <MdOutlineChevronLeft className="inline text-2xl" /> Go Back
      </button>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="pt-20">
          <div className="max-w-xl p-6 mx-auto space-y-6 rounded-xl bg-base-200 dark:bg-dark-base-200">
            <FormField
              control={form.control}
              name="VenueName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>PAGE NAME</FormLabel>
                  <FormControl>
                    <Input
                      type="text"
                      className="c-input"
                      data-testid="venue-name-input"
                      placeholder="Eg. Red Rocks"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <p>
              Use the name of your buisness brand organization or a name that
              explains what page is all about.
            </p>
            {/* <FormField
              control={form.control}
              name="IsVenueReal"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Is it a real or a virtual Venue?</FormLabel>
                  <FormControl>
                    <div className="flex gap-x-6">
                      <div className="flex items-center gap-2">
                        <input
                          type="radio"
                          value="true"
                          id="real"
                          onChange={field.onChange}
                          checked={field.value === 'true'}
                          className="border-border"
                        />
                        <label
                          htmlFor="real"
                          className="text-sm cursor-pointer"
                        >
                          Real Venue
                        </label>
                      </div>
                      <div className="flex items-center gap-2">
                        <input
                          type="radio"
                          value="false"
                          id="virtual"
                          onChange={field.onChange}
                          checked={field.value === 'false'}
                          className="border-border"
                        />
                        <label
                          htmlFor="virtual"
                          className="text-sm cursor-pointer"
                        >
                          Virtual Venue
                        </label>
                      </div>
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            /> */}
            <div className="space-y-2">
              <FormField
                control={form.control}
                name="VenueBio"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>DESCRIPTION</FormLabel>
                    <FormControl>
                      <Textarea
                        className="c-textarea h-60"
                        placeholder=""
                        data-testid="venue-bio-input"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <p>Write discription about your page in 200 - 300 words limit.</p>
          </div>
          <div className="flex justify-end max-w-xl mx-auto mt-4">
            <Button
              data-testid="create-page-btn"
              type="submit"
              disabled={isLoading}
            >
              <Loading alt="Create Page" isLoading={isLoading} />
            </Button>
          </div>
        </form>
      </Form>
    </>
  );
}
