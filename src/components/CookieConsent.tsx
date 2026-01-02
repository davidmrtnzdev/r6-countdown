'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export function CookieConsent({ locale }: { locale: string }) {
    const [show, setShow] = useState(false);

    useEffect(() => {
        const consent = localStorage.getItem('cookie_consent');
        if (!consent) {
            setShow(true);
        }
    }, []);

    const acceptCookies = () => {
        localStorage.setItem('cookie_consent', 'true');
        setShow(false);
    };

    if (!show) return null;

    return (
        <div className="fixed bottom-0 left-0 right-0 bg-slate-900/95 border-t border-white/10 p-4 backdrop-blur-sm z-50">
            <div className="container mx-auto max-w-4xl flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
                <p className="text-sm text-gray-300">
                    {locale === 'es'
                        ? 'Utilizamos cookies para mejorar su experiencia y mostrar anuncios personalizados. '
                        : 'We use cookies to improve your experience and show personalized ads. '}
                    <Link href={`/${locale}/legal/privacy`} className="text-r6-orange hover:underline">
                        {locale === 'es' ? 'Leer más' : 'Read more'}
                    </Link>
                </p>
                <button
                    onClick={acceptCookies}
                    className="bg-r6-orange hover:bg-r6-orange-hover text-white px-6 py-2 rounded-md text-sm font-medium transition-colors"
                >
                    {locale === 'es' ? 'Aceptar' : 'Accept'}
                </button>
            </div>
        </div>
    );
}
