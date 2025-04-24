'use client';

import useSession from 'src/hooks/useSession';
import { useEffect, useState } from 'react';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import {
  deleteStream,
  GenerateStreamInputs,
  getStream,
  IStreamData,
  listStreams,
} from 'services/livestream.service';
import {
  ListStreamsQuery,
  StreamConfigurations,
} from 'services/types/generated';
import Loading from 'src/common/Loading';
import StreamDetail from './StreamDetail';
import { toast } from 'react-hot-toast';
import { HiOutlineClipboard } from 'react-icons/hi';
import { FiRadio } from 'react-icons/fi';
import { RiArrowLeftRightLine } from 'react-icons/ri';
import { clipboard } from 'src/utils/clipboard';
import NoSearchResults from 'src/placeholders/NoPostsSkeleton';
import Link from 'next/link';
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
import { Button } from 'src/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from 'src/components/ui/select';

import {
  generateStreamSchema,
  GenerateStreamSchema,
} from 'src/validators/stream.validator';
import { HiArrowLongLeft } from 'react-icons/hi2';

function ErrorWithLink({
  msg,
  link,
  linkText,
}: {
  msg: string;
  link: string;
  linkText: string;
}) {
  return (
    <div className="flex flex-col items-center justify-center">
      <span className="text-center">{msg}</span>
      <Link className="inline text-blue-500" href={link}>
        {linkText}
      </Link>
    </div>
  );
}

const errorDescriptions: any = {
  inactive_subscription: (
    <ErrorWithLink
      msg="You need an active subscription to access this feature."
      link="/settings/subscription"
      linkText="Click here to activate!"
    />
  ),
  creator_program_not_opted: (
    <ErrorWithLink
      msg="You need to be part of creator program to access this feature."
      link="/settings/creator"
      linkText="Click here to activate!"
    />
  ),
};

export default function LivestreamSettings() {
  const [tab, setTab] = useState(0);
  const { session } = useSession();
  const queryClient = useQueryClient();

  useEffect(() => {
    reset();
    resetGenerateStreamForm();
  }, [tab]);

  const {
    data: userStreams,
    refetch,
    isLoading: isStreamsLoading,
  } = useQuery<ListStreamsQuery>(['streams', session?.user?.sub], listStreams);

  const onError = (err: any) => {
    const errJsx = errorDescriptions[err?.response?.data?.msg];
    if (errJsx) {
      toast(errJsx, {
        duration: 5000,
      });
      return;
    }
    toast.error(err?.response?.data?.msg || 'An error occurred!');
  };

  const onSuccess = (data: IStreamData) => {
    refetch();
    toast.success('New stream created!');
  };

  const onDeleteStreamSuccess = () => {
    queryClient.invalidateQueries(['streams', session?.user?.sub]);
  };

  const { mutate: mutateStreamDelete, isLoading: isDeleteStreamLoading } =
    useMutation(deleteStream, {
      onSuccess: onDeleteStreamSuccess,
    });

  const {
    mutate,
    isLoading,
    data: generateStreamData,
    reset: resetGenerateStreamForm,
  } = useMutation<
    IStreamData,
    { msg?: string; status?: number },
    GenerateStreamInputs
  >(getStream, {
    mutationKey: 'generate-stream',
    onSuccess,
    onError,
  });

  const form = useForm<GenerateStreamSchema>({
    resolver: zodResolver(generateStreamSchema),
    mode: 'onChange',
  });

  const { handleSubmit, reset, control } = form;

  const onSubmit = (values: GenerateStreamSchema) => {
    mutate({
      streamName: values.streamName,
      streamType: values.streamType,
      creatorID: session?.user?.sub || '',
    });
  };

  return (
    <>
      {tab === 0 && (
        <div className="flex-1 py-8 md:mx-auto md:max-w-7xl">
          <section className="flex items-center justify-between pb-5 border-b border-quarternary dark:border-dark-quarternary">
            <h2 className="flex-1 text-lg font-bold color-heading md:text-2xl">
              Livestream Settings
            </h2>
          </section>
          <section className="flex gap-10 py-6">
            <div className="flex-1">
              <div className="py-4 space-y-6">
                <div
                  className="flex items-center justify-center gap-x-4"
                  onClick={() => setTab(1)}
                  data-testid="generate-stream-tab"
                >
                  <FiRadio className="text-3xl" />
                  <div className="flex-1 cursor-pointer">
                    <div className="text-base font-bold color-heading">
                      Generate Stream
                    </div>
                    <div>Protect account using two-factor authentication</div>
                  </div>
                </div>
                <div
                  className="flex items-center justify-center gap-x-4"
                  onClick={() => setTab(2)}
                  data-testid="my-stream-keys-tab"
                >
                  <RiArrowLeftRightLine className="text-3xl" />
                  <div className="flex-1 cursor-pointer">
                    <div className="text-base font-bold color-heading">
                      My Stream Keys
                    </div>
                    <div>
                      Information about the streams that you created recently
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      )}
      {tab === 1 && (
        <div className="flex-1 py-8 md:mx-auto md:max-w-7xl">
          <div
            className="flex items-center text-lg font-semibold cursor-pointer color-heading"
            data-testid="generate-stream-back-button"
            onClick={() => setTab(0)}
          >
            <HiArrowLongLeft className="inline mr-2 text-2xl" /> Generate
            Livestream
          </div>
          <Form {...form}>
            <form
              className="mt-9"
              onSubmit={handleSubmit(onSubmit)}
              data-testid="generate-stream-form"
            >
              <div className="w-full max-w-lg gap-8 space-y-3">
                <FormField
                  control={control}
                  name="streamName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Stream Name</FormLabel>
                      <FormControl>
                        <Input
                          type="text"
                          placeholder="Stream Name"
                          data-testid="stream-name-input"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={control}
                  name="streamType"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Stream Type</FormLabel>
                      <FormControl>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <SelectTrigger data-testid="stream-type-select">
                            <SelectValue placeholder="Select stream type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="2D AI Background Remover">
                              2D AI Background Remover
                            </SelectItem>
                            <SelectItem value="2D Green Screen">
                              2D Green Screen
                            </SelectItem>
                            <SelectItem value="Kinect 2">Kinect 2</SelectItem>
                            <SelectItem value="Kinect Azure">
                              Kinect Azure
                            </SelectItem>
                            <SelectItem value="Volumetric Capture">
                              Volumetric Capture
                            </SelectItem>
                          </SelectContent>
                        </Select>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="mb-4">
                  <label className="block mb-2 text-sm font-medium text-gray-300 uppercase">
                    Stream Token
                  </label>
                  <div className="flex items-center gap-2">
                    <input
                      readOnly
                      disabled
                      type="text"
                      className="cursor-not-allowed c-input"
                      placeholder="Stream Token"
                      value={generateStreamData?.streamKey || ''}
                    />
                    <button
                      type="button"
                      onClick={() =>
                        clipboard(generateStreamData?.streamKey || '')
                      }
                      className="flex items-center justify-center w-8 h-8 rounded cursor-pointer hover:bg-white/10"
                    >
                      <HiOutlineClipboard className="text-xl text-primary" />
                    </button>
                  </div>
                </div>
                <div className="mb-4">
                  <label className="block mb-2 text-sm font-medium text-gray-300 uppercase">
                    Playback URL
                  </label>
                  <div className="flex items-center gap-2">
                    <input
                      readOnly
                      disabled
                      type="text"
                      className="cursor-not-allowed c-input"
                      value="rtmp://stream.virtuoso.live/app"
                    />
                    <button
                      type="button"
                      onClick={() =>
                        clipboard('rtmp://stream.virtuoso.live/app')
                      }
                      className="flex items-center justify-center w-8 h-8 rounded cursor-pointer hover:bg-white/10"
                    >
                      <HiOutlineClipboard className="text-xl text-primary" />
                    </button>
                  </div>
                </div>
                <div className="flex justify-end">
                  <Button
                    className="c-btn-primary"
                    data-testid="generate-stream-button"
                    type="submit"
                  >
                    <Loading alt="Generate" isLoading={isLoading} />
                  </Button>
                </div>
              </div>
            </form>
          </Form>
        </div>
      )}
      {tab === 2 && (
        <div className="flex-1 py-8 md:mx-auto md:max-w-7xl">
          <div
            className="flex items-center text-lg font-semibold cursor-pointer color-heading"
            onClick={() => setTab(0)}
          >
            <HiArrowLongLeft className="inline mr-2 text-2xl" /> My Stream Keys
            <div className="ml-3">
              <Loading alt="" isLoading={isDeleteStreamLoading} />
            </div>
          </div>
          {!isStreamsLoading && !!userStreams?.streams?.items?.length && (
            <div className="grid grid-cols-1 gap-6 py-6 sm:grid-cols-2 md:grid-cols-3">
              {userStreams?.streams?.items?.map((i) => (
                <StreamDetail
                  isDeleteStreamLoading={isDeleteStreamLoading}
                  key={i?.streamID}
                  stream={i as StreamConfigurations}
                  onDeleteStream={() => {
                    mutateStreamDelete({ streamID: i?.streamID });
                  }}
                />
              ))}
            </div>
          )}
          {!isStreamsLoading && !userStreams?.streams?.items?.length && (
            <div className="">
              <NoSearchResults
                filled={false}
                label="You don't have any stream keys yet!"
              />
            </div>
          )}
        </div>
      )}
    </>
  );
}
