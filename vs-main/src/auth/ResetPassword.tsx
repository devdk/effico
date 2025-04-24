'use client';

import Head from 'next/head';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { changePassword } from 'services/auth.service';
import ErrorMessage from 'src/common/message/ErrorMessage';
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
import {
  resetPasswordSchema,
  TResetPasswordForm,
} from 'src/validators/auth.validator';

type TErrorType = {
  msg?: string;
  status?: number;
};

export default function ResetPassword() {
  const [error, setError] = useState<TErrorType>({});
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();
  const params = useSearchParams();
  const username = params.get('username');

  const form = useForm<TResetPasswordForm>({
    resolver: zodResolver(resetPasswordSchema),
    mode: 'onChange',
    defaultValues: {
      user: username ?? '',
      code: '',
      newpassword: '',
    },
  });

  const {
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = form;

  const onSubmit: SubmitHandler<TResetPasswordForm> = async (data) => {
    try {
      await changePassword({
        username: data.user,
        code: data.code,
        newPassword: data.newpassword,
      });
      router.push('/auth/login');
    } catch (err: any) {
      setError(err?.response?.data || { msg: 'Unknown error' });
    }
  };

  useEffect(() => {
    const subscription = watch(() => setError({}));
    return () => subscription.unsubscribe();
  }, [watch]);

  return (
    <div className="relative flex items-center justify-center min-h-screen p-4">
      <Head>
        <title>Reset Password - Virtuoso</title>
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
          Reset your password
        </h1>
        <p className="max-w-lg">
          Just type your new Password to reset your password!
        </p>
        {error?.msg && <ErrorMessage errorText={error.msg} />}
        <Form {...form}>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 mt-9">
            <FormField
              control={form.control}
              name="user"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Username or Email</FormLabel>
                  <FormControl>
                    <Input
                      type="text"
                      placeholder="Enter Username/Email"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="code"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Confirmation Code</FormLabel>
                  <FormControl>
                    <Input type="text" placeholder="Enter OTP" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="newpassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>New password</FormLabel>
                  <div className="relative">
                    <FormControl>
                      <Input
                        type={showPassword ? 'text' : 'password'}
                        placeholder="Enter Password"
                        {...field}
                      />
                    </FormControl>
                    <button
                      type="button"
                      onClick={() => setShowPassword((prev) => !prev)}
                      className="absolute -translate-y-1/2 right-2 top-1/2"
                    >
                      {showPassword ? (
                        <AiOutlineEye className="text-xl text-primary" />
                      ) : (
                        <AiOutlineEyeInvisible className="text-xl text-primary" />
                      )}
                    </button>
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? 'Changing Password...' : 'Change Password'}
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
}
