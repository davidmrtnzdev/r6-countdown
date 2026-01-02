import { getTranslations } from 'next-intl/server';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
    return {
        title: `Terms of Service - R6 Countdown`,
    };
}

export default async function TermsPage({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;

    return (
        <div className="container mx-auto px-4 py-12 max-w-4xl">
            <h1 className="text-3xl font-bold mb-8 text-r6-orange">
                {locale === 'es' ? 'Términos de Servicio' : 'Terms of Service'}
            </h1>

            <div className="space-y-6 text-gray-300">
                <section>
                    <h2 className="text-xl font-semibold text-white mb-3">1. {locale === 'es' ? 'Aceptación de Términos' : 'Acceptance of Terms'}</h2>
                    <p>
                        {locale === 'es'
                            ? 'Al acceder a R6 Countdown, usted acepta estar sujeto a estos términos de servicio, todas las leyes y regulaciones aplicables.'
                            : 'By accessing R6 Countdown, you agree to be bound by these terms of service, all applicable laws and regulations.'}
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold text-white mb-3">2. {locale === 'es' ? 'Uso de Licencia' : 'Use License'}</h2>
                    <p>
                        {locale === 'es'
                            ? 'Se concede permiso para descargar temporalmente una copia de los materiales en el sitio web de R6 Countdown solo para visualización transitoria personal y no comercial.'
                            : 'Permission is granted to temporarily download one copy of the materials on R6 Countdown\'s website for personal, non-commercial transitory viewing only.'}
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold text-white mb-3">3. {locale === 'es' ? 'Renuncia' : 'Disclaimer'}</h2>
                    <p>
                        {locale === 'es'
                            ? 'Los materiales en el sitio web de R6 Countdown se proporcionan "tal cual". R6 Countdown no ofrece garantías, expresas o implícitas.'
                            : 'The materials on R6 Countdown\'s website are provided on an "as is" basis. R6 Countdown makes no warranties, expressed or implied.'}
                    </p>
                </section>
            </div>
        </div>
    );
}
