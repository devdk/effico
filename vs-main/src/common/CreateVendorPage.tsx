'use client';

import useSession from 'src/hooks/useSession';
import { useRouter } from 'next/navigation';
import React from 'react';
import { useMutation } from 'react-query';
import { MdOutlineChevronLeft } from 'react-icons/md';
import {
  CreateVendorPageMutation,
  CreateVendorPageMutationVariables,
} from 'services/types/generated';
import { createVendor } from 'services/vendor.service';
import Loading from './Loading';
import { toast } from 'react-hot-toast';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
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
  createVendorSchema,
  CreateVendorSchema,
} from 'src/validators/page.validator';

interface ICreateVendorProps {
  handleSetStep: (i: number) => void;
}

export default function CreateVendorPage({
  handleSetStep,
}: ICreateVendorProps) {
  const { session } = useSession();
  const router = useRouter();

  const onSuccess = (data: CreateVendorPageMutation) => {
    toast.success('New vendor created!');
    router.push(`/vendor/${data.newVendor?.VendorID}`);
  };

  const onError = (err: any) => {};

  const { mutate, isLoading } = useMutation<
    CreateVendorPageMutation,
    unknown,
    CreateVendorPageMutationVariables
  >(createVendor, {
    mutationKey: 'create-vendor',
    onSuccess,
    onError,
  });

  const form = useForm<CreateVendorSchema>({
    resolver: zodResolver(createVendorSchema),
    mode: 'onChange',
  });

  const onSubmit = (data: CreateVendorSchema) => {
    mutate({
      VendorBio: data.VendorBio,
      VendorName: data.VendorName,
      VendorCreatorID: session?.user?.sub,
      VendorOwnerID: session?.user?.sub,
    });
  };

  return (
    <>
      <button className="text-lg font-bold" onClick={() => handleSetStep(0)}>
        <MdOutlineChevronLeft className="inline text-2xl" /> Go Back
      </button>
      <Form {...form}>
        <form className="pt-20" onSubmit={form.handleSubmit(onSubmit)}>
          <div className="max-w-xl p-6 mx-auto space-y-6 rounded-xl bg-base-200 dark:bg-dark-base-200">
            <FormField
              control={form.control}
              name="VendorName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>PAGE NAME</FormLabel>
                  <FormControl>
                    <Input
                      type="text"
                      className="c-input"
                      data-testid="vendor-name-input"
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
            <FormField
              control={form.control}
              name="VendorBio"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>DESCRIPTION</FormLabel>
                  <FormControl>
                    <Textarea
                      className="c-textarea h-60"
                      data-testid="vendor-bio-input"
                      placeholder=""
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
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
