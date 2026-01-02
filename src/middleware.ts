import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';

export default createMiddleware(routing);

export const config = {
    // Match all pathnames except for
    // - /_next/ (Next.js internals)
    // - /_vercel (Vercel internals)
    // - /... (likely static files like .css, .png, .ico, etc.)
    // - /robots.txt, /sitemap.xml (SEO files)
    matcher: ['/((?!api|_next|_vercel|.*\\..*).*)']
};
