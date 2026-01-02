"use client";

import Script from 'next/script';

type Props = {
    pId: string;
};

export default function GoogleAdSense({ pId }: Props) {
    if (!pId) return null;

    return (
        <Script
            id="google-adsense"
            src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${pId}`}
            strategy="afterInteractive"
            crossOrigin="anonymous"
        />
    );
}
