'use client';

import { useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { signIn } from 'next-auth/react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import Link from 'next/link';
import Head from 'next/head';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { loginSchema, TLoginFormData } from 'src/validators/auth.validator';
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

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const router = useRouter();
  const params = useSearchParams();
  const callbackUrl = params?.get('callbackUrl') || '/';

  const form = useForm<TLoginFormData>({
    resolver: zodResolver(loginSchema),
    mode: 'onChange',
    defaultValues: {
      username: '',
      password: '',
    },
  });

  const onSubmit = async (data: TLoginFormData) => {
    setError('');
    const result = await signIn('credentials', {
      username: data.username,
      password: data.password,
      redirect: false,
    });

    console.log({ result });

    if (result?.code === 'UserNotConfirmedException') {
      router.push('/auth/verify-email');
      return;
    }

    if (result?.code === 'NotAuthorizedException') {
      setError('Invalid username or password');
      return;
    }

    if (result?.code === 'UserNotFoundException') {
      setError('User not found');
      return;
    }

    if (result?.error) setError(result?.error);
    if (!result?.error) router.push(callbackUrl);
  };

  return (
    <div className="flex items-center justify-center p-4 min-h-dvh">
      <Head>
        <title>Login - Virtuoso</title>
      </Head>

      <div className="flex flex-col w-full max-w-5xl mx-auto border rounded-3xl border-border bg-primary lg:flex-row">
        <div className="relative w-full h-40 lg:h-full lg:w-2/5">
          <img
            src="/assets/images/register.svg"
            className="object-cover w-full h-full rounded-lg lg:rounded-l-3xl"
            alt="Virtuoso"
          />
          <div className="absolute w-2/3 -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
            <img
              src="/assets/images/hero_logo.png"
              className="w-full"
              alt="Virtuoso"
            />
            <p className="mt-2 text-xs text-center text-white">
              Explore your Imagination!
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center w-full p-6 translate-x-0.5 bg-base-200 dark:bg-dark-base-200 lg:w-3/5 lg:rounded-r-3xl lg:p-16">
          <h2 className="text-2xl font-semibold text-center sm:text-3xl color-heading">
            Login
          </h2>

          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="w-full max-w-md mt-6 space-y-6"
            >
              {error && (
                <div className="p-2 mt-4 text-center text-white bg-red-500 rounded">
                  {error}
                </div>
              )}
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Username or Email</FormLabel>
                    <FormControl>
                      <Input placeholder="Your username" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <div className="relative">
                      <FormControl>
                        <Input
                          type={showPassword ? 'text' : 'password'}
                          placeholder="Your password"
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

              <Button
                type="submit"
                className="w-full"
                disabled={form.formState.isSubmitting}
              >
                {form.formState.isSubmitting ? 'Signing in...' : 'Sign In'}
              </Button>
            </form>
          </Form>

          <div className="w-full max-w-md mt-10 space-y-2 text-sm">
            <p>
              Forgot Password?{' '}
              <Link href="/auth/forgot-password" className="text-primary">
                Reset Password
              </Link>
            </p>
            <p>
              Don&apos;t have an account?{' '}
              <Link href="/auth/register" className="text-primary">
                Sign Up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
