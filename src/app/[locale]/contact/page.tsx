import { getTranslations } from 'next-intl/server';
import { setRequestLocale } from 'next-intl/server';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: 'Contact' });

    return {
        title: t('meta_title'),
        description: t('meta_description'),
    };
}

export default async function ContactPage({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    setRequestLocale(locale);
    const t = await getTranslations({ locale, namespace: 'Contact' });

    return (
        <main className="flex-grow flex flex-col items-center justify-center min-h-[60vh] p-4 text-white">
            <div className="max-w-3xl w-full bg-black/40 backdrop-blur-sm border border-white/5 rounded-2xl p-8 md:p-12">
                <h1 className="text-4xl font-bold mb-6 text-r6-orange">{t('title')}</h1>
                <div className="prose prose-invert prose-lg max-w-none space-y-6">
                    <p>{t('subtitle')}</p>

                    <div className="bg-white/5 p-6 rounded-lg border border-white/5 mt-8">
                        <h3 className="text-xl font-semibold mb-2">{t('email_title')}</h3>
                        <p className="text-gray-300 mb-4">{t('email_desc')}</p>
                        <a
                            href="mailto:contact@r6countdown.com"
                            className="inline-flex items-center gap-2 text-r6-orange hover:text-white transition-colors font-medium"
                        >
                            ✉️ contact@r6countdown.com
                        </a>
                    </div>

                    <p className="text-sm text-gray-400 mt-8">
                        {t('disclaimer')}
                    </p>
                </div>
            </div>
        </main>
    );
}
