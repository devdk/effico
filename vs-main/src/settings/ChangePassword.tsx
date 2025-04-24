'use client';

import React, { useState } from 'react';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { HiArrowLongLeft } from 'react-icons/hi2';
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
import ErrorMessage from 'src/common/message/ErrorMessage';
import {
  changePasswordSchema,
  TChangePasswordFormData,
} from 'src/validators/auth.validator';

export default function ChangePassword({
  setTab,
}: {
  setTab: React.Dispatch<React.SetStateAction<number>>;
}) {
  const [error, setError] = useState<{ msg?: string; status?: number }>({});
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const form = useForm<TChangePasswordFormData>({
    resolver: zodResolver(changePasswordSchema),
    mode: 'onChange',
  });
  const onSubmit = () => {
    try {
      toast.success('Feature disabled.');
    } catch (err: any) {
      setError({ msg: err?.message || 'Something went wrong' });
    }
  };
  return (
    <div className="flex-1 py-8 md:mx-auto md:max-w-7xl">
      <div
        className="flex items-center text-lg font-semibold cursor-pointer color-heading"
        onClick={() => setTab(0)}
      >
        <HiArrowLongLeft className="inline mr-2 text-2xl" /> Change Password
      </div>
      <Form {...form}>
        <form className="mt-9" onSubmit={form.handleSubmit(onSubmit)}>
          <div className="w-full max-w-lg gap-8">
            <FormField
              control={form.control}
              name="currentPassword"
              render={({ field }) => (
                <FormItem className="mb-4">
                  <FormLabel className="block mb-2 text-sm font-medium text-gray-300 uppercase">
                    Current Password
                  </FormLabel>
                  <div className="relative">
                    <FormControl>
                      <Input
                        autoComplete="on"
                        type={showCurrentPassword ? 'text' : 'password'}
                        {...field}
                      />
                    </FormControl>
                    <button
                      type="button"
                      onClick={() => setShowCurrentPassword((p) => !p)}
                      className="absolute right-3 top-3"
                    >
                      {showCurrentPassword ? (
                        <AiOutlineEyeInvisible className="text-xl text-primary" />
                      ) : (
                        <AiOutlineEye className="text-xl text-primary" />
                      )}
                    </button>
                  </div>
                  <FormMessage className="text-red-500 text-2xs" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="newPassword"
              render={({ field }) => (
                <FormItem className="mb-4">
                  <FormLabel className="block mb-2 text-sm font-medium text-gray-300 uppercase">
                    New Password
                  </FormLabel>
                  <div className="relative">
                    <FormControl>
                      <Input
                        autoComplete="off"
                        type={showNewPassword ? 'text' : 'password'}
                        {...field}
                      />
                    </FormControl>
                    <button
                      type="button"
                      onClick={() => setShowNewPassword((p) => !p)}
                      className="absolute right-3 top-3"
                    >
                      {showNewPassword ? (
                        <AiOutlineEyeInvisible className="text-xl text-primary" />
                      ) : (
                        <AiOutlineEye className="text-xl text-primary" />
                      )}
                    </button>
                  </div>
                  <FormMessage className="text-red-500 text-2xs" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="confirmPassword"
              render={({ field }) => (
                <FormItem className="mb-4">
                  <FormLabel className="block mb-2 text-sm font-medium text-gray-300 uppercase">
                    Confirm New Password
                  </FormLabel>
                  <div className="relative">
                    <FormControl>
                      <Input
                        autoComplete="off"
                        type={showConfirmPassword ? 'text' : 'password'}
                        {...field}
                      />
                    </FormControl>
                    <button
                      type="button"
                      onClick={() => setShowConfirmPassword((p) => !p)}
                      className="absolute right-3 top-3"
                    >
                      {showConfirmPassword ? (
                        <AiOutlineEyeInvisible className="text-xl text-primary" />
                      ) : (
                        <AiOutlineEye className="text-xl text-primary" />
                      )}
                    </button>
                  </div>
                  <FormMessage className="text-red-500 text-2xs" />
                </FormItem>
              )}
            />
            {error.msg && <ErrorMessage errorText={error.msg} />}
            <div className="flex justify-end pt-4">
              <Button type="submit" className="c-btn-primary">
                Save Password
              </Button>
            </div>
          </div>
        </form>
      </Form>
    </div>
  );
}
