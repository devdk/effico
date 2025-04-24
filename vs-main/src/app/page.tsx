import Home from 'src/home';

export const metadata = {
  title: 'Virtuoso',
  metadataBase: 'https://app.virtuoso.live',
  description: 'Virtual Events, Community & Marketplace',
  icons: {
    icon: [
      { url: '/favicon-32x32.png', type: 'image/png', sizes: '32x32' },
      { url: '/favicon-16x16.png', type: 'image/png', sizes: '16x16' },
      { url: '/favicon-192x192.png', type: 'image/png', sizes: '192x192' },
      { url: '/favicon-512x512.png', type: 'image/png', sizes: '512x512' },
    ],
    apple: '/apple-touch-icon.png',
  },
  manifest: '/manifest.webmanifest',
  openGraph: {
    url: 'https://app.virtuoso.live',
    type: 'website',
    title: 'Virtuoso',
    description: 'Virtual Events, Community & Marketplace',
    images: [
      {
        url: 'https://cdn.virtuoso.live/assets/virtuoso.png',
        width: 1200,
        height: 630,
        alt: 'Virtuoso',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Virtuoso',
    description: 'Virtual Events, Community & Marketplace',
    images: ['https://cdn.virtuoso.live/assets/virtuoso.png'],
  },
};

export default async function HomePage() {
  return <Home />;
}
