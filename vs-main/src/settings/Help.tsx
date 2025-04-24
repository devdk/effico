'use client';

import React from 'react';
import { useMutation } from 'react-query';
import {
  CreateSupportTicketMutation,
  CreateSupportTicketMutationVariables,
} from 'services/types/generated';
import { createSupportTicket } from 'services/support.service';
import toast from 'react-hot-toast';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import useSession from 'src/hooks/useSession';
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from 'src/components/ui/form';
import { Input } from 'src/components/ui/input';
import { Textarea } from 'src/components/ui/textarea';
import { Button } from 'src/components/ui/button';

const supportTicketSchema = z.object({
  subject: z
    .string()
    .min(1, 'Subject is required')
    .max(100, 'Subject is too long'),
  message: z
    .string()
    .min(1, 'Message is required')
    .max(1000, 'Message is too long'),
});

type SupportTicketFormInputs = z.infer<typeof supportTicketSchema>;

export default function Help() {
  const { session } = useSession();
  const form = useForm<SupportTicketFormInputs>({
    resolver: zodResolver(supportTicketSchema),
    mode: 'onChange',
  });

  const onSuccess = (data: CreateSupportTicketMutation) => {
    toast.success('Support ticket created! Expect an email soon.');
    form.reset({ subject: '', message: '' });
  };

  const onError = () => {
    toast.error('Failed to create support ticket. Please try again.');
  };

  const { mutate, isLoading } = useMutation<
    CreateSupportTicketMutation,
    unknown,
    CreateSupportTicketMutationVariables
  >(createSupportTicket, {
    mutationKey: 'create-support-ticket',
    onSuccess,
    onError,
  });

  const onSubmit = (data: SupportTicketFormInputs) => {
    mutate({
      input: {
        userId: session?.user?.sub || 'guest',
        status: 'open',
        priority: 'normal',
        description: data.message,
        title: data.subject,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
    });
  };

  return (
    <div className="flex-1 py-8 md:mx-auto md:max-w-7xl">
      <section className="flex items-center justify-between pb-5 border-b border-quarternary dark:border-dark-quarternary">
        <div className="space-y-2">
          <h2 className="flex-1 text-lg font-bold color-heading md:text-2xl">
            Help
          </h2>
          <p>
            Please create a support ticket if you have any questions or issues.
          </p>
        </div>
      </section>
      <Form {...form}>
        <form className="mt-9" onSubmit={form.handleSubmit(onSubmit)}>
          <div className="w-full max-w-lg gap-8">
            <FormField
              control={form.control}
              name="subject"
              render={({ field }) => (
                <FormItem className="mb-4">
                  <FormLabel className="block mb-2 text-sm font-medium text-gray-300 uppercase">
                    SUBJECT
                  </FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage className="mt-1 text-sm text-red-500" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem className="mb-4">
                  <FormLabel className="block mb-2 text-sm font-medium text-gray-300 uppercase">
                    MESSAGE
                  </FormLabel>
                  <FormControl>
                    <Textarea className="h-40 bg-popover" {...field} />
                  </FormControl>
                  <FormMessage className="mt-1 text-sm text-red-500" />
                </FormItem>
              )}
            />
            <div className="flex justify-end">
              <Button
                type="submit"
                className="c-btn-primary"
                disabled={isLoading}
              >
                {isLoading ? 'Creating...' : 'Create'}
              </Button>
            </div>
          </div>
        </form>
      </Form>
    </div>
  );
}
