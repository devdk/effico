/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: false,
    loaderFile: './src/utils/loader.ts',
    deviceSizes: [60, 120, 240, 360, 720, 1080],
    imageSizes: [60, 120, 240, 360, 720, 1080],
    // Uncomment and configure if you want to allow external images
    // remotePatterns: [
    //   {
    //     protocol: 'https',
    //     hostname: 'virtuoso-public.s3.amazonaws.com',
    //     pathname: '/**',
    //   },
    //   {
    //     protocol: 'https',
    //     hostname: 'virtuoso-public.s3.us-east-1.amazonaws.com',
    //     pathname: '/**',
    //   },
    //   {
    //     protocol: 'https',
    //     hostname: 'picsum.photos',
    //     pathname: '/**',
    //   },
    //   {
    //     protocol: 'https',
    //     hostname: 'images.unsplash.com',
    //     pathname: '/**',
    //   },
    //   {
    //     protocol: 'https',
    //     hostname: 'lh3.googleusercontent.com',
    //     pathname: '/**',
    //   },
    //   {
    //     protocol: 'https',
    //     hostname: 'd3imtsiyfqkd7i.cloudfront.net',
    //     pathname: '/**',
    //   },
    //   {
    //     protocol: 'https',
    //     hostname: 'cdn.virtuoso.live',
    //     pathname: '/**',
    //   },
    // ],
  },
  env: {
    STRIPE_SECRET_KEY: process.env.STRIPE_SECRET_KEY,
    MUX_TOKEN_ID: process.env.MUX_TOKEN_ID,
    MUX_TOKEN_SECRET: process.env.MUX_TOKEN_SECRET,
    AWS_ACCESS_KEY_ID: process.env.AWS_ACCESS_KEY_ID,
    AWS_SECRET_ACCESS_KEY: process.env.AWS_SECRET_ACCESS_KEY,

    NEXT_PUBLIC_AUTH_HOST: process.env.NEXT_PUBLIC_AUTH_HOST,
    NEXT_PUBLIC_AWS_APPSYNC_API_ENDPOINT:
      process.env.NEXT_PUBLIC_AWS_APPSYNC_API_ENDPOINT,
    APPSYNC_API_KEY: process.env.APPSYNC_API_KEY,
    NEXT_PUBLIC_PRODUCTION_MODE:
      process.env.NEXT_PUBLIC_PRODUCTION_MODE || true,
    AUTH_SECRET: process.env.AUTH_SECRET,
    AUTH_URL: process.env.AUTH_URL,
    AUTH_TRUST_HOST: process.env.AUTH_TRUST_HOST,
  },
};

module.exports = nextConfig;
