import { getTranslations } from 'next-intl/server';
import { setRequestLocale } from 'next-intl/server';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'About' });

  return {
    title: t('meta_title'),
    description: t('meta_description'),
  };
}

export default async function AboutPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: 'About' });

  return (
    <main className="flex-grow flex flex-col items-center justify-center min-h-[60vh] p-4 text-white">
      <div className="max-w-3xl w-full bg-black/40 backdrop-blur-sm border border-white/5 rounded-2xl p-8 md:p-12">
        <h1 className="text-4xl font-bold mb-6 text-r6-orange">{t('title')}</h1>
        <div className="prose prose-invert prose-lg max-w-none space-y-6">
          <p>{t('p1')}</p>
          <p>{t('p2')}</p>
          <h2 className="text-2xl font-bold mt-8 mb-4">{t('mission_title')}</h2>
          <p>{t('mission_desc')}</p>
        </div>
      </div>
    </main>
  );
}
