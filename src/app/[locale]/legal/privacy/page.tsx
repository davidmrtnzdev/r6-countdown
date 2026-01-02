import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: 'Metadata' });
    return {
        title: `Privacy Policy - R6 Countdown`,
    };
}

export default async function PrivacyPage({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;

    return (
        <div className="container mx-auto px-4 py-12 max-w-4xl">
            <h1 className="text-3xl font-bold mb-8 text-r6-orange">
                {locale === 'es' ? 'Política de Privacidad' : 'Privacy Policy'}
            </h1>

            <div className="space-y-6 text-gray-300">
                <section>
                    <h2 className="text-xl font-semibold text-white mb-3">1. {locale === 'es' ? 'Introducción' : 'Introduction'}</h2>
                    <p>
                        {locale === 'es'
                            ? 'Bienvenido a R6 Countdown. Nos comprometemos a proteger su privacidad. Esta política explica cómo recopilamos, usamos y salvaguardamos su información.'
                            : 'Welcome to R6 Countdown. We are committed to protecting your privacy. This policy explains how we collect, use, and safeguard your information.'}
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold text-white mb-3">2. {locale === 'es' ? 'Información que recopilamos' : 'Information We Collect'}</h2>
                    <p>
                        {locale === 'es'
                            ? 'Actualmente no recopilamos información personal identificable. Podemos utilizar cookies de terceros para analizar el tráfico del sitio y mostrar anuncios.'
                            : 'We do not currently collect personally identifiable information. We may use third-party cookies to analyze site traffic and serve advertisements.'}
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold text-white mb-3">3. Cookies</h2>
                    <p>
                        {locale === 'es'
                            ? 'Utilizamos cookies para mejorar su experiencia. Al utilizar nuestro sitio, usted acepta el uso de cookies de acuerdo con nuestra política.'
                            : 'We use cookies to improve your experience. By using our site, you consent to the use of cookies in accordance with our policy.'}
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold text-white mb-3">4. Google AdSense</h2>
                    <p>
                        {locale === 'es'
                            ? 'Este sitio utiliza Google AdSense para mostrar anuncios. Google utiliza cookies para publicar anuncios basados en sus visitas anteriores a este y otros sitios web.'
                            : 'This site uses Google AdSense to display ads. Google uses cookies to serve ads based on your prior visits to this and other websites.'}
                    </p>
                </section>
            </div>
        </div>
    );
}
