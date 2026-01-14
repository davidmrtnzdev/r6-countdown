import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import { Analytics } from '@vercel/analytics/react';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: 'Updates' });

    return {
        title: t('meta_title'),
        description: t('meta_description'),
    };
}

export default function UpdatesPage() {
    const t = useTranslations('Updates');

    return (
        <main className="flex-grow flex flex-col items-center justify-start p-6 md:p-12 max-w-4xl mx-auto w-full">
            <h1 className="text-4xl md:text-5xl font-black text-white mb-8 text-center uppercase tracking-tighter">
                {t('title')}
            </h1>

            <div className="space-y-12 w-full">
                {/* Section 1: Balance Changes */}
                <section className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm">
                    <div className="flex items-center gap-4 mb-6">
                        <div className="h-2 w-2 bg-r6-orange rounded-full animate-pulse" />
                        <h2 className="text-2xl font-bold text-r6-orange uppercase tracking-wide">
                            {t('section_1_title')}
                        </h2>
                    </div>

                    <div className="prose prose-invert max-w-none">
                        <p className="text-gray-300 mb-6 leading-relaxed">
                            {t('section_1_desc')}
                        </p>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {/* Change 1 - ACE */}
                            <div className="bg-black/30 p-6 rounded-xl border border-white/5">
                                <h3 className="text-lg font-bold text-white mb-2">{t('change_1_title')}</h3>
                                <ul className="list-disc list-inside text-gray-400 space-y-2 text-sm">
                                    <li>{t('change_1_point_1')}</li>
                                    <li>{t('change_1_point_2')}</li>
                                </ul>
                            </div>

                            {/* Change 2 - MUTE */}
                            <div className="bg-black/30 p-6 rounded-xl border border-white/5">
                                <h3 className="text-lg font-bold text-white mb-2">{t('change_2_title')}</h3>
                                <ul className="list-disc list-inside text-gray-400 space-y-2 text-sm">
                                    <li>{t('change_2_point_1')}</li>
                                    <li>{t('change_2_point_2')}</li>
                                </ul>
                            </div>

                            {/* Change 3 - THATCHER */}
                            <div className="bg-black/30 p-6 rounded-xl border border-white/5">
                                <h3 className="text-lg font-bold text-white mb-2">{t('change_3_title')}</h3>
                                <ul className="list-disc list-inside text-gray-400 space-y-2 text-sm">
                                    <li>{t('change_3_point_1')}</li>
                                    <li>{t('change_3_point_2')}</li>
                                </ul>
                            </div>

                            {/* Change 4 - HIBANA */}
                            <div className="bg-black/30 p-6 rounded-xl border border-white/5">
                                <h3 className="text-lg font-bold text-white mb-2">{t('change_4_title')}</h3>
                                <ul className="list-disc list-inside text-gray-400 space-y-2 text-sm">
                                    <li>{t('change_4_point_1')}</li>
                                    <li>{t('change_4_point_2')}</li>
                                </ul>
                            </div>

                            {/* Change 5 - THERMITE */}
                            <div className="bg-black/30 p-6 rounded-xl border border-white/5">
                                <h3 className="text-lg font-bold text-white mb-2">{t('change_5_title')}</h3>
                                <ul className="list-disc list-inside text-gray-400 space-y-2 text-sm">
                                    <li>{t('change_5_point_1')}</li>
                                    <li>{t('change_5_point_2')}</li>
                                </ul>
                            </div>

                            {/* Change 6 - MAVERICK */}
                            <div className="bg-black/30 p-6 rounded-xl border border-white/5">
                                <h3 className="text-lg font-bold text-white mb-2">{t('change_6_title')}</h3>
                                <ul className="list-disc list-inside text-gray-400 space-y-2 text-sm">
                                    <li>{t('change_6_point_1')}</li>
                                    <li>{t('change_6_point_2')}</li>
                                </ul>
                            </div>

                            {/* Change 7 - ASH */}
                            <div className="bg-black/30 p-6 rounded-xl border border-white/5">
                                <h3 className="text-lg font-bold text-white mb-2">{t('change_7_title')}</h3>
                                <ul className="list-disc list-inside text-gray-400 space-y-2 text-sm">
                                    <li>{t('change_7_point_1')}</li>
                                    <li>{t('change_7_point_2')}</li>
                                </ul>
                            </div>

                            {/* Change 8 - CASTLE & ARUNI */}
                            <div className="bg-black/30 p-6 rounded-xl border border-white/5">
                                <h3 className="text-lg font-bold text-white mb-2">{t('change_8_title')}</h3>
                                <ul className="list-disc list-inside text-gray-400 space-y-2 text-sm">
                                    <li>{t('change_8_point_1')}</li>
                                    <li>{t('change_8_point_2')}</li>
                                </ul>
                            </div>

                            {/* Change 9 - WEAPONS */}
                            <div className="bg-black/30 p-6 rounded-xl border border-white/5">
                                <h3 className="text-lg font-bold text-white mb-2">{t('change_9_title')}</h3>
                                <ul className="list-disc list-inside text-gray-400 space-y-2 text-sm">
                                    <li>{t('change_9_point_1')}</li>
                                    <li>{t('change_9_point_2')}</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Section 2: Future Leaks */}
                <section className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm">
                    <div className="flex items-center gap-4 mb-6">
                        <div className="h-2 w-2 bg-purple-500 rounded-full" />
                        <h2 className="text-2xl font-bold text-white uppercase tracking-wide opacity-90">
                            {t('section_2_title')}
                        </h2>
                    </div>

                    <div className="prose prose-invert max-w-none">
                        <p className="text-gray-300 leading-relaxed">
                            {t('section_2_desc')}
                        </p>

                        <div className="mt-6 p-4 bg-r6-orange/10 border border-r6-orange/20 rounded-lg">
                            <h4 className="font-bold text-r6-orange mb-2">{t('rumor_alert_title')}</h4>
                            <p className="text-sm text-gray-400">{t('rumor_alert_desc')}</p>
                        </div>
                    </div>
                </section>
            </div>

            <Analytics />
        </main>
    );
}
