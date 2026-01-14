import { setRequestLocale, getTranslations } from 'next-intl/server';
import { Metadata } from 'next';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: 'History' });

    return {
        title: t('meta_title'),
        description: t('meta_description'),
    };
}

export default async function HistoryPage({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    setRequestLocale(locale);
    const t = await getTranslations({ locale, namespace: 'History' });

    return (
        <div className="flex flex-col items-center justify-center min-h-[60vh] p-4 lg:p-12">
            <div className="w-full max-w-5xl">
                <h1 className="text-4xl md:text-5xl font-black text-white mb-4 drop-shadow-xl border-l-8 border-r6-orange pl-6">
                    {t('title')}
                </h1>
                <p className="text-gray-400 text-lg mb-12 pl-8 max-w-2xl">
                    {t('subtitle')}
                </p>

                <section className="mb-16">
                    <h2 className="text-2xl font-bold text-r6-orange mb-6 flex items-center gap-2">
                        <span className="w-2 h-8 bg-r6-orange inline-block rounded-sm"></span>
                        {t('year_9_title')}
                    </h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        <SeasonCard title={t('y9s4_name')} desc={t('y9s4_desc')} season="Y9S4" />
                        <SeasonCard title={t('y9s3_name')} desc={t('y9s3_desc')} season="Y9S3" />
                        <SeasonCard title={t('y9s2_name')} desc={t('y9s2_desc')} season="Y9S2" />
                        <SeasonCard title={t('y9s1_name')} desc={t('y9s1_desc')} season="Y9S1" />
                    </div>
                </section>

                <section>
                    <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                        <span className="w-2 h-8 bg-white/20 inline-block rounded-sm"></span>
                        {t('year_8_title')}
                    </h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        <SeasonCard title={t('y8s4_name')} desc={t('y8s4_desc')} season="Y8S4" />
                        <SeasonCard title={t('y8s3_name')} desc={t('y8s3_desc')} season="Y8S3" />
                        <SeasonCard title={t('y8s2_name')} desc={t('y8s2_desc')} season="Y8S2" />
                        <SeasonCard title={t('y8s1_name')} desc={t('y8s1_desc')} season="Y8S1" />
                    </div>
                </section>
            </div>
        </div>
    );
}

function SeasonCard({ title, desc, season }: { title: string, desc: string, season: string }) {
    return (
        <div className="group bg-black/40 backdrop-blur-md border border-white/5 rounded-xl p-6 hover:bg-white/5 transition-all duration-300 hover:border-r6-orange/50 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                <span className="text-6xl font-black text-white">{season}</span>
            </div>
            <div className="relative z-10">
                <div className="text-r6-orange text-xs font-bold uppercase tracking-widest mb-1">{season}</div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:translate-x-1 transition-transform">{title}</h3>
                <p className="text-gray-400 text-sm">{desc}</p>
            </div>
        </div>
    );
}
