import { setRequestLocale, getTranslations } from 'next-intl/server';
import { Metadata } from 'next';
import { AdPlaceholder } from '@/components/AdPlaceholder';

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

                <section className="mb-16">
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

                <section className="mb-16">
                    <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                        <span className="w-2 h-8 bg-white/20 inline-block rounded-sm"></span>
                        {t('year_7_title')}
                    </h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        <SeasonCard title={t('y7s4_name')} desc={t('y7s4_desc')} season="Y7S4" />
                        <SeasonCard title={t('y7s3_name')} desc={t('y7s3_desc')} season="Y7S3" />
                        <SeasonCard title={t('y7s2_name')} desc={t('y7s2_desc')} season="Y7S2" />
                        <SeasonCard title={t('y7s1_name')} desc={t('y7s1_desc')} season="Y7S1" />
                    </div>
                </section>

                <section className="mb-16">
                    <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                        <span className="w-2 h-8 bg-white/20 inline-block rounded-sm"></span>
                        {t('year_6_title')}
                    </h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        <SeasonCard title={t('y6s4_name')} desc={t('y6s4_desc')} season="Y6S4" />
                        <SeasonCard title={t('y6s3_name')} desc={t('y6s3_desc')} season="Y6S3" />
                        <SeasonCard title={t('y6s2_name')} desc={t('y6s2_desc')} season="Y6S2" />
                        <SeasonCard title={t('y6s1_name')} desc={t('y6s1_desc')} season="Y6S1" />
                    </div>
                </section>

                {/* Mid-Timeline Ad */}
                <div className="w-full flex justify-center py-8 mb-16">
                    <AdPlaceholder slot="in-history" className="h-[250px] w-full max-w-[970px]" format="auto" />
                </div>

                <section className="mb-16">
                    <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                        <span className="w-2 h-8 bg-white/20 inline-block rounded-sm"></span>
                        {t('year_5_title')}
                    </h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        <SeasonCard title={t('y5s4_name')} desc={t('y5s4_desc')} season="Y5S4" />
                        <SeasonCard title={t('y5s3_name')} desc={t('y5s3_desc')} season="Y5S3" />
                        <SeasonCard title={t('y5s2_name')} desc={t('y5s2_desc')} season="Y5S2" />
                        <SeasonCard title={t('y5s1_name')} desc={t('y5s1_desc')} season="Y5S1" />
                    </div>
                </section>

                <section className="mb-16">
                    <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                        <span className="w-2 h-8 bg-white/20 inline-block rounded-sm"></span>
                        {t('year_4_title')}
                    </h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        <SeasonCard title={t('y4s4_name')} desc={t('y4s4_desc')} season="Y4S4" />
                        <SeasonCard title={t('y4s3_name')} desc={t('y4s3_desc')} season="Y4S3" />
                        <SeasonCard title={t('y4s2_name')} desc={t('y4s2_desc')} season="Y4S2" />
                        <SeasonCard title={t('y4s1_name')} desc={t('y4s1_desc')} season="Y4S1" />
                    </div>
                </section>

                <section className="mb-16">
                    <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                        <span className="w-2 h-8 bg-white/20 inline-block rounded-sm"></span>
                        {t('year_3_title')}
                    </h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        <SeasonCard title={t('y3s4_name')} desc={t('y3s4_desc')} season="Y3S4" />
                        <SeasonCard title={t('y3s3_name')} desc={t('y3s3_desc')} season="Y3S3" />
                        <SeasonCard title={t('y3s2_name')} desc={t('y3s2_desc')} season="Y3S2" />
                        <SeasonCard title={t('y3s1_name')} desc={t('y3s1_desc')} season="Y3S1" />
                    </div>
                </section>

                <section className="mb-16">
                    <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                        <span className="w-2 h-8 bg-white/20 inline-block rounded-sm"></span>
                        {t('year_2_title')}
                    </h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        <SeasonCard title={t('y2s4_name')} desc={t('y2s4_desc')} season="Y2S4" />
                        <SeasonCard title={t('y2s3_name')} desc={t('y2s3_desc')} season="Y2S3" />
                        <SeasonCard title={t('y2s2_name')} desc={t('y2s2_desc')} season="Y2S2" />
                        <SeasonCard title={t('y2s1_name')} desc={t('y2s1_desc')} season="Y2S1" />
                    </div>
                </section>

                <section>
                    <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                        <span className="w-2 h-8 bg-white/20 inline-block rounded-sm"></span>
                        {t('year_1_title')}
                    </h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        <SeasonCard title={t('y1s4_name')} desc={t('y1s4_desc')} season="Y1S4" />
                        <SeasonCard title={t('y1s3_name')} desc={t('y1s3_desc')} season="Y1S3" />
                        <SeasonCard title={t('y1s2_name')} desc={t('y1s2_desc')} season="Y1S2" />
                        <SeasonCard title={t('y1s1_name')} desc={t('y1s1_desc')} season="Y1S1" />
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
