import React from 'react';
import Events from 'src/events';

export const metadata = {
  title: 'Upcoming Events | Virtuoso',
  description: 'Discover and join the latest events happening on Virtuoso.',
  metadataBase: 'https://app.virtuoso.live' as any,
  openGraph: {
    title: 'Upcoming Events | Virtuoso',
    description: 'Stay updated with the latest events and experiences.',
    url: 'https://app.virtuoso.live/events',
    type: 'website',
    images: [
      {
        url: 'https://app.virtuoso.live/default-event-banner.jpg',
        width: 1200,
        height: 630,
        alt: 'Upcoming Events on Virtuoso',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Upcoming Events | Virtuoso',
    description: 'Find and join the latest events on Virtuoso.',
    images: ['https://app.virtuoso.live/default-event-banner.jpg'],
  },
};

export default function EventsPage() {
  return <Events />;
}
