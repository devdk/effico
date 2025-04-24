'use client';

import React from 'react';
import { MdOutlineChevronLeft } from 'react-icons/md';
import useSession from 'src/hooks/useSession';
import { useRouter } from 'next/navigation';
import { useMutation } from 'react-query';
import { toast } from 'react-hot-toast';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import {
  CreateCreatorPageMutation,
  CreateCreatorPageMutationVariables,
} from 'services/types/generated';
import { createCreator } from 'services/creator.service';
import Loading from './Loading';
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
  createCreatorSchema,
  CreateCreatorSchema,
} from 'src/validators/page.validator';

interface ICreateCreatorProps {
  handleSetStep: (i: number) => void;
}

export default function CreateCreatorPage({
  handleSetStep,
}: ICreateCreatorProps) {
  const { session } = useSession();
  const router = useRouter();

  const onSuccess = (data: CreateCreatorPageMutation) => {
    toast.success('New page created!');
    router.push(`/creator/${data.newCreator?.CreatorID}`);
  };

  const onError = (err: any) => {
    // console.log({ err }, "mutation err");
  };

  const { mutate, isLoading } = useMutation<
    CreateCreatorPageMutation,
    unknown,
    CreateCreatorPageMutationVariables
  >(createCreator, { mutationKey: 'create-creator', onSuccess, onError });

  const form = useForm<CreateCreatorSchema>({
    resolver: zodResolver(createCreatorSchema),
    mode: 'onChange',
  });

  const onSubmit = (data: CreateCreatorSchema) => {
    mutate({
      CreatorBio: data.CreatorBio,
      CreatorOwnerID: session?.user?.sub,
      CreatorName: data.CreatorName,
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
              name="CreatorName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>PAGE NAME</FormLabel>
                  <FormControl>
                    <Input
                      data-testid="creator-name-input"
                      className="c-input"
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
              name="CreatorBio"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>DESCRIPTION</FormLabel>
                  <FormControl>
                    <Textarea
                      className="c-textarea h-60"
                      data-testid="creator-bio-input"
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
