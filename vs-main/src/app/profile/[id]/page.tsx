import Profile from 'src/profile';
import axios from 'axios';
import { Metadata } from 'next';
import { virtuosoServerUnauth } from 'services/clients/axios';
import { notFound } from 'next/navigation';
import { auth } from 'auth';

export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata | undefined> {
  try {
    const { data } = await virtuosoServerUnauth.get(
      `/api/public/profile/${params.id}`
    );
    const profile = data?.data;
    const name = profile?.name || 'User';
    const description = profile?.bio || '';
    const image = profile?.avatar || '';
    const url = `https://app.virtuoso.live/profile/${profile?.id || params.id}`;

    return {
      title: `${name} - Profile`,
      metadataBase: 'https://app.virtuoso.live' as any,
      description,
      openGraph: {
        url,
        type: 'website',
        title: name,
        description,
        images: image ? [{ url: image }] : [],
      },
      twitter: {
        card: 'summary_large_image',
        site: 'app.virtuoso.live',
        title: name,
        description,
        images: image ? [image] : [],
      },
    };
  } catch (error) {
    console.log({ error });
  }
}

export default async function ProfilePage({
  params,
}: {
  params: { id: string };
}) {
  const session = await auth();
  let data;
  try {
    const res = await virtuosoServerUnauth.get(
      `/api/public/profile/${params.id}`,
      {
        headers: { authorization: session?.user?.accessToken as string },
      }
    );
    data = res.data?.data;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response?.status === 404) {
      return notFound(); // This now works, because generateMetadata didn't crash first
    }
    throw error;
  }

  return <Profile profile={data} />;
}
