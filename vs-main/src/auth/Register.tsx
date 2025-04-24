'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { registerUser } from 'services/auth.service';
import Loading from 'src/common/Loading';
import ErrorMessage from 'src/common/message/ErrorMessage';
import useIsLoggedIn from 'src/hooks/useIsLoggedIn';
import useSession from 'src/hooks/useSession';
import { signUpSchema, TSignUpFormData } from 'src/validators/auth.validator';
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

export default function Register() {
  const { loggedIn } = useIsLoggedIn();
  const router = useRouter();
  const { session } = useSession();
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const form = useForm<TSignUpFormData>({
    resolver: zodResolver(signUpSchema),
    mode: 'onChange',
  });
  const {
    handleSubmit,
    formState: { isSubmitting },
  } = form;

  useEffect(() => {
    if (session?.user?.accessToken) {
      router.push('/');
    }
  }, [session, router]);

  const onSubmit: SubmitHandler<TSignUpFormData> = async (data) => {
    try {
      await registerUser({
        username: data.username,
        password: data.password,
        email: data.email,
        name: data.firstName + ' ' + data.lastName,
      });

      router.push('/auth/verify-email');
    } catch (e: any) {
      setError(e?.response?.data?.msg);
    }
  };

  useEffect(() => {
    if (loggedIn) {
      router.replace('/');
    }
  }, [loggedIn, router]);

  if (!loggedIn) {
    return (
      <div className="flex items-center justify-center p-4 min-h-dvh">
        <Head>
          <title>Register - Virtuoso</title>
        </Head>
        <div className="flex flex-col justify-center w-full max-w-5xl mx-auto border rounded-3xl border-border bg-primary lg:flex-row">
          <div className="relative w-full h-40 lg:h-full lg:w-2/5">
            <img
              src="/assets/images/register.svg"
              className="object-cover w-full h-full rounded-lg lg:rounded-l-3xl"
              alt="virtuoso"
            />
            <div className="absolute w-2/3 -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
              <img
                src="/assets/images/hero_logo.png"
                className="w-full"
                alt="virtuoso"
              />
              <p className="mt-2 text-xs text-center text-white">
                Explore your Imagination!
              </p>
            </div>
          </div>
          <div className="w-full p-6 -mr-1 space-y-12 bg-base-200 dark:bg-dark-base-200 lg:w-3/5 lg:rounded-r-3xl lg:p-16">
            <h2 className="text-2xl font-semibold text-center sm:text-3xl color-heading">
              Create Account
            </h2>
            <Form {...form}>
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="max-w-md mx-auto space-y-4"
              >
                {error && <ErrorMessage errorText={error} />}
                <div className="flex flex-col w-full gap-4 xs:flex-row">
                  <FormField
                    control={form.control}
                    name="firstName"
                    render={({ field }) => (
                      <FormItem className="flex-1">
                        <FormLabel>First Name</FormLabel>
                        <FormControl>
                          <Input
                            type="text"
                            placeholder="Eg. John"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="lastName"
                    render={({ field }) => (
                      <FormItem className="flex-1">
                        <FormLabel>Last Name</FormLabel>
                        <FormControl>
                          <Input type="text" placeholder="Eg. Doe" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Your Email</FormLabel>
                      <FormControl>
                        <Input
                          type="email"
                          placeholder="name@example.com"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="username"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Username</FormLabel>
                      <FormControl>
                        <Input
                          type="text"
                          placeholder="johnwick0711"
                          {...field}
                        />
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
                      <FormLabel>Your Password</FormLabel>
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
                          onClick={(e) => {
                            e.preventDefault();
                            setShowPassword((v) => !v);
                          }}
                          className="absolute flex items-center justify-center transform -translate-y-1/2 top-1/2 right-2"
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
                <div className="pt-3">
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex justify-center w-full"
                  >
                    {isSubmitting ? (
                      <Loading isLoading alt="Create Account" />
                    ) : (
                      'Create Account'
                    )}
                  </Button>
                </div>
              </form>
            </Form>
            <div className="flex items-center justify-between max-w-md mx-auto">
              <p className="text-sm">
                Already have an account?{' '}
                <Link href="/auth/login">
                  <span className="cursor-pointer text-primary hover:underline">
                    Sign in
                  </span>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return <div>Loading</div>;
}
