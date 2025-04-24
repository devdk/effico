import { ChangeEvent, useState } from 'react';
import { AiOutlineDelete } from 'react-icons/ai';
import { HiOutlinePhotograph, HiOutlineUpload } from 'react-icons/hi';
import { MdSend } from 'react-icons/md';
import { useMutation, useQueryClient } from 'react-query';
import { createPost } from 'services/post.service';
import {
  CreatePostMutation,
  CreatePostMutationVariables,
} from 'services/types/generated';
import Loading from 'src/common/Loading';
import { Avatar } from 'src/components/custom/avatar';
import { Button } from 'src/components/ui/button';
import { Textarea } from 'src/components/ui/textarea';
import usePublicUpload from 'src/hooks/usePublicUpload';
import useSession from 'src/hooks/useSession';

import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  Form,
  FormField,
  FormItem,
  FormControl,
  FormMessage,
} from 'src/components/ui/form';
import { PostFormValues, postSchema } from 'src/validators/post.validator';
import { useRouter } from 'next/navigation';

type CreatePostProps = {
  pageId: string;
  type: 'venue' | 'creator' | 'profile';
  avatar?: string;
};

export default function CreatePost({ pageId, type, avatar }: CreatePostProps) {
  const { session } = useSession();
  const [showImageTab, setShowImageTab] = useState(false);
  const queryClient = useQueryClient();
  const router = useRouter();

  // Initialize React Hook Form with onChange mode.
  const form = useForm<PostFormValues>({
    resolver: zodResolver(postSchema),
    mode: 'onChange',
    defaultValues: {
      content: '',
      images: [],
    },
  });

  // When an image is successfully uploaded, update the form's images field.
  const onImageUploadSuccess = (url: string) => {
    const currentImages = form.getValues('images');
    form.setValue('images', [...currentImages, url], { shouldValidate: true });
  };

  const onImageUploadError = (error: any) => {
    // Optionally handle upload errors here
  };

  const { mutate: mutateImageUpload, isLoading: isImageUploadLoading } =
    usePublicUpload({
      type: 'POST',
      pageID: pageId || '',
      onSuccess: onImageUploadSuccess,
      onError: onImageUploadError,
    });

  // When the post is successfully created, reset the form and update queries.
  const onSuccess = (data: any) => {
    if (type === 'profile') {
      queryClient.invalidateQueries(['feed', pageId]);
    } else {
      queryClient.invalidateQueries([type, pageId]);
    }
    form.reset();
    setShowImageTab(false);
    router.refresh();
  };

  const onError = (err: any) => {
    // Optionally handle mutation errors here
  };

  const onSettled = () => {
    // Additional settling logic if needed
  };

  const { mutate, isLoading } = useMutation<
    CreatePostMutation,
    unknown,
    CreatePostMutationVariables
  >(createPost, { mutationKey: 'create-post', onSuccess, onError, onSettled });

  // Toggle the photo upload panel.
  const handlePhotoUpload = (e: React.MouseEvent) => {
    e.preventDefault();
    setShowImageTab((prev) => !prev);
  };

  // Remove an image from the form state.
  const handleRemoveImage = (e: any, url: string) => {
    e.preventDefault();
    const currentImages = form.getValues('images');
    form.setValue(
      'images',
      currentImages.filter((img: string) => img !== url),
      { shouldValidate: true }
    );
  };

  // Handle file input change and trigger the image upload.
  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { files } = e.target;
    if (!files || files.length === 0) return;
    mutateImageUpload(files[0]);
  };

  // Form submit handler.
  const onSubmit: SubmitHandler<PostFormValues> = (data) => {
    mutate({
      pageId,
      author: session?.user?.sub || '',
      content: data.content,
      images: data.images,
    });
  };

  // Watch the images field to display uploaded photos.
  const images = form.watch('images');

  return (
    <div className="flex p-5 border gap-x-3 bg-base-200 dark:bg-dark-base-200 border-border md:rounded-2xl">
      {type === 'profile' && (
        <div className="h-[36px] w-[36px] overflow-hidden rounded-full bg-base-100 dark:bg-dark-base-100">
          <Avatar size="sm" link={`/profile/${pageId}`} src={avatar} />
        </div>
      )}
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="flex-1">
          <FormField
            control={form.control}
            name="content"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Textarea
                    {...field}
                    data-testid="create-post-input"
                    placeholder="What's happening?"
                    className="c-textarea h-24 dark:!bg-dark-base-300"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex mt-3 gap-x-6 text-opacity-70">
            <button
              onClick={handlePhotoUpload}
              className="flex items-center justify-center text-sm gap-x-2"
            >
              <HiOutlinePhotograph className="text-base" />
              <span>Photos</span>
            </button>
          </div>
          {showImageTab && (
            <div className="space-y-4">
              <div className="relative grid grid-cols-2 gap-4 pt-4 md:flex">
                <div className="relative flex flex-col items-center justify-center w-full gap-1 text-xs border rounded-lg h-28 border-primary md:w-28">
                  {!isImageUploadLoading && (
                    <>
                      <input
                        className="absolute inset-0 opacity-0 cursor-pointer"
                        type="file"
                        name="myImage"
                        onChange={handleImageChange}
                      />
                      <HiOutlineUpload className="text-xl" />
                      Photo
                    </>
                  )}
                  {isImageUploadLoading && (
                    <Loading alt="" isLoading={isImageUploadLoading} />
                  )}
                </div>
                {images.map((img: string) => (
                  <div
                    key={img}
                    className="relative w-full overflow-hidden rounded-lg h-28 bg-white/10 md:w-28"
                  >
                    <img
                      src={img}
                      className="block object-cover w-full h-full"
                      alt="uploaded"
                    />
                    <div className="absolute flex items-center justify-center w-6 h-6 p-1 rounded-full top-1 right-1 bg-base-100 dark:bg-dark-base-100">
                      <button onClick={(e) => handleRemoveImage(e, img)}>
                        <AiOutlineDelete className="text-md text-primary" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
          <div className="flex items-end justify-end mt-6">
            <Button
              data-testid="create-post-submit-btn"
              type="submit"
              variant="default"
            >
              <Loading
                alt={
                  <>
                    <span className="mr-2">Post</span>
                    <MdSend className="inline-block" />
                  </>
                }
                isLoading={isLoading}
              />
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
