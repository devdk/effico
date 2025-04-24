import { auth } from 'auth';
import axios from 'axios';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { virtuosoServerUnauth } from 'services/clients/axios';
import { fetchEventSEO } from 'services/events.service';
import Event from 'src/events/Event';

export async function generateMetadata({
  params,
}: any): Promise<Metadata | undefined> {
  try {
    const res = await fetchEventSEO(params.id);
    const event = res?.data?.data;
    const eventURL = `https://app.virtuoso.live/events/${event?.EventID || params.id}`;
    const eventImage = event?.EventImages?.[0] || '';

    return {
      title: `${event?.EventName || 'Event'} - Event`,
      description: event?.EventDescription || '',
      metadataBase: 'https://app.virtuoso.live' as any,

      openGraph: {
        url: eventURL,
        type: 'website',
        title: event?.EventName || '',
        description: event?.EventDescription || '',
        images: eventImage ? [{ url: eventImage }] : [],
      },

      twitter: {
        card: 'summary_large_image',
        site: 'app.virtuoso.live',
        title: event?.EventName || '',
        description: event?.EventDescription || '',
        images: eventImage ? [eventImage] : [],
      },
    };
  } catch (error) {
    console.log({ error });
  }
}

export default async function EventPage({ params }: any) {
  const session = await auth();
  let response;

  try {
    response = await virtuosoServerUnauth.get(
      `/api/public/events/${params.id}`,
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

  return <Event data={response?.data?.data} />;
}
