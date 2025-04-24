export { auth as middleware } from '../auth';

export const config = {
  runtime: 'nodejs',
  matcher: [
    '/chat/:path*',
    '/buy/:path*',
    '/feed/:path*',
    '/inventory/:path*',
    '/marketplace/:path*',
    '/pages/:path*',
    '/payment/:path*',
    '/product/:path*',
    '/search/:path*',
    '/settings/:path*',
    '/sitemap/:path*',
    '/chat',
    '/notifications',
    '/search',
    '/tickets',
  ],
};
