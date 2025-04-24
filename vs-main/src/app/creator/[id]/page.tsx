import CreatorProfile from 'src/creator';
import axios from 'axios';
import { notFound } from 'next/navigation';
import { virtuosoServerUnauth } from 'services/clients/axios';
import { Metadata } from 'next';
import { auth } from 'auth';

export async function generateMetadata({
  params,
}: any): Promise<Metadata | undefined> {
  try {
    const res = await virtuosoServerUnauth.get(
      `/api/public/creator/metadata/${params.id}`
    );
    const page = res?.data?.data;
    const url = `https://app.virtuoso.live/creator/${page?.id || params.id}`;

    return {
      title: `${page?.title} - Creator Page`,
      description: page?.desc || '',
      metadataBase: 'https://app.virtuoso.live' as any,

      openGraph: {
        url,
        type: 'website',
        title: `${page?.title} - Virtuoso` || '',
        description: page?.desc || '',
        images: page?.cover ? [{ url: page?.cover }] : [],
      },

      twitter: {
        card: 'summary_large_image',
        site: 'app.virtuoso.live',
        title: `${page?.title} - Virtuoso` || '',
        description: page?.desc || '',
        images: page?.cover ? [{ url: page?.cover }] : [],
      },
    };
  } catch (error) {
    console.log({ error });
  }
}

export default async function CreatorPage({ params }: { params: any }) {
  const session = await auth();
  let response;

  console.log({ session });

  try {
    response = await virtuosoServerUnauth.get(
      `/api/public/creator/${params.id}`,
      {
        headers: {
          authorization: session?.user?.accessToken as string,
        },
      }
    );
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.response?.status === 404) {
        return notFound();
      }
    } else {
      throw error;
    }
  }

  // if (isLoading) return <ProfileSkeleton />;

  return <CreatorProfile data={response?.data?.data} />;
}
