'use client';

import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { z } from 'zod';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from 'src/components/ui/form';
import { Input } from 'src/components/ui/input';
import { Button } from 'src/components/ui/button';
import { forgotPassword } from 'services/auth.service';
import ErrorMessage from 'src/common/message/ErrorMessage';

const forgotPasswordSchema = z.object({
  user: z.string().min(1, 'invalid field value'),
});

type TForgotPasswordForm = z.infer<typeof forgotPasswordSchema>;

type TErrorType = {
  msg?: string;
  status?: number;
};

export default function ForgotPassword() {
  const [error, setError] = useState<TErrorType>({});
  const router = useRouter();

  const form = useForm<TForgotPasswordForm>({
    resolver: zodResolver(forgotPasswordSchema),
    defaultValues: {
      user: '',
    },
  });

  const {
    handleSubmit,
    watch,
    formState: { isSubmitting },
  } = form;

  const onSubmit: SubmitHandler<TForgotPasswordForm> = async (data) => {
    try {
      await forgotPassword(data.user);
      router.push(`/auth/reset-password?username=${data.user}`);
    } catch (err: any) {
      setError(err?.response?.data || { msg: 'Unknown error' });
    }
  };

  useEffect(() => {
    const subscription = watch(() => setError({}));
    return () => subscription.unsubscribe();
  }, [watch]);

  useEffect(() => {
    return () => setError({});
  }, []);

  return (
    <div className="relative flex items-center justify-center min-h-screen px-4">
      <Head>
        <title>Forgot Password - Virtuoso</title>
      </Head>
      <Link href="/">
        <img
          src="/assets/images/hero_logo.png"
          alt="Logo"
          className="absolute -translate-x-1/2 top-6 left-1/2"
        />
      </Link>
      <div className="p-8 space-y-6 border rounded-2xl border-border bg-base-200 dark:bg-dark-base-200 lg:p-16">
        <h1 className="text-xl font-semibold color-heading">
          Forgot your password ?
        </h1>
        <p className="max-w-sm">
          Just type your email or username and we will send you a confirmation
          code to reset your password!
        </p>
        {error.msg && <ErrorMessage errorText={error.msg} />}

        <Form {...form}>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 mt-9">
            <FormField
              control={form.control}
              name="user"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Username or Email</FormLabel>
                  <FormControl>
                    <Input placeholder="username or email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? 'Recovering...' : 'Recover Password'}
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
}
