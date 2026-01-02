import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
    // TODO: Replace with your actual domain
    const baseUrl = 'https://r6countdown.com';

    return {
        rules: {
            userAgent: '*',
            allow: '/',
            disallow: ['/private/'],
        },
        sitemap: `${baseUrl}/sitemap.xml`,
    };
}
