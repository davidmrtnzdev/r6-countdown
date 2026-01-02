"use client";

import { useEffect } from 'react';

export function AdPlaceholder({
    slot,
    format = "auto",
    className,
}: {
    slot: string;
    format?: "auto" | "rectangle" | "vertical";
    className?: string;
}) {
    useEffect(() => {
        try {
            // @ts-ignore
            (window.adsbygoogle = window.adsbygoogle || []).push({});
        } catch (err) {
            console.error(err);
        }
    }, []);

    // If no AdSense ID is present (e.g. dev without env), show placeholder
    if (!process.env.NEXT_PUBLIC_ADSENSE_ID) {
        return (
            <div className={`relative w-full overflow-hidden bg-r6-darker/50 border border-white/5 rounded-lg flex items-center justify-center ${className}`}>
                <div className="text-xs text-gray-600 uppercase tracking-widest p-4">
                    Advertisement Space
                </div>
            </div>
        );
    }

    return (
        <div className={`relative w-full overflow-hidden min-h-[100px] flex items-center justify-center ${className}`}>
            <ins className="adsbygoogle"
                style={{ display: 'block', width: '100%' }}
                data-ad-client={process.env.NEXT_PUBLIC_ADSENSE_ID}
                data-ad-slot={slot}
                data-ad-format={format}
                data-full-width-responsive="true"></ins>
        </div>
    );
}
