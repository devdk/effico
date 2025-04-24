'use client';

import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from 'src/components/ui/button';
import { Input } from 'src/components/ui/input';
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from 'src/components/ui/form';
import ErrorMessage from 'src/common/message/ErrorMessage';
import { resendVerification } from 'services/auth.service';

const resendVerificationSchema = z.object({
  user: z
    .string()
    .min(1, { message: 'Username is required' })
    .refine((value) => !value.includes('@'), {
      message: 'Your email is not verified yet, use the username',
    }),
});

type Inputs = z.infer<typeof resendVerificationSchema>;

export default function ResendVerification() {
  const [error, setError] = useState<string>('');
  const router = useRouter();

  const form = useForm<Inputs>({
    resolver: zodResolver(resendVerificationSchema),
    mode: 'onChange',
    defaultValues: { user: '' },
  });

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    setError('');
    try {
      await resendVerification({ username: data.user });
      router.push('/auth/verify-email');
    } catch (err: any) {
      setError(err?.response?.data?.msg || 'Something went wrong');
    }
  };

  useEffect(() => {
    const subscription = form.watch(() => {
      setError('');
    });
    return () => subscription.unsubscribe();
  }, [form.watch]);

  return (
    <div className="relative flex items-center justify-center min-h-screen px-4">
      <Head>
        <title>Resend Verification - Virtuoso</title>
      </Head>
      <Link href="/">
        <img
          src="/assets/images/hero_logo.png"
          alt="Logo"
          className="absolute -translate-x-1/2 top-6 left-1/2"
        />
      </Link>

      <div className="p-8 space-y-6 border rounded-lg border-border bg-base-200 dark:bg-dark-base-200 lg:p-16">
        <h1 className="text-xl font-semibold color-heading">
          Resend Verification Link
        </h1>
        <p className="max-w-sm">
          Please enter your username to resend the verification link.
        </p>
        {error && <ErrorMessage errorText={error} />}
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-4 mt-9"
          >
            <FormField
              control={form.control}
              name="user"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Username</FormLabel>
                  <FormControl>
                    <Input placeholder="username" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="w-full">
              Resend Verification
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
}
