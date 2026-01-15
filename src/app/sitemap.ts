import { MetadataRoute } from 'next';
import { routing } from '@/i18n/routing';

export default function sitemap(): MetadataRoute.Sitemap {
    // TODO: Replace with your actual domain
    const baseUrl = 'https://r6countdown.com';

    const routes = [
        '',
        '/history',
        '/updates',
        '/about',
        '/contact',
        '/legal/privacy',
        '/legal/terms',
    ];

    return routes.flatMap((route) =>
        routing.locales.map((locale) => ({
            url: `${baseUrl}/${locale}${route}`,
            lastModified: new Date(),
            changeFrequency: 'weekly' as const,
            priority: route === '' ? 1 : 0.5,
        }))
    );
}
