"use client";

import Script from 'next/script';
import { useState, useEffect } from 'react';

type Props = {
    pId: string;
};

export default function GoogleAdSense({ pId }: Props) {
    const [load, setLoad] = useState(false);

    useEffect(() => {
        // Wait for user interaction or 2 seconds delay
        const trigger = () => setLoad(true);

        // User interactions
        window.addEventListener('scroll', trigger, { once: true });
        window.addEventListener('mousemove', trigger, { once: true });
        window.addEventListener('touchstart', trigger, { once: true });

        // Fallback timer (2 seconds)
        const timer = setTimeout(trigger, 2000);

        return () => {
            window.removeEventListener('scroll', trigger);
            window.removeEventListener('mousemove', trigger);
            window.removeEventListener('touchstart', trigger);
            clearTimeout(timer);
        };
    }, []);

    if (!pId || !load) return null;

    return (
        <Script
            id="google-adsense"
            src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${pId}`}
            strategy="afterInteractive"
            crossOrigin="anonymous"
        />
    );
}
