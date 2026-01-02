"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/routing";
import { ChangeEvent, useTransition } from "react";

export function LanguageSwitcher() {
    const locale = useLocale();
    const router = useRouter();
    const pathname = usePathname();
    const [isPending, startTransition] = useTransition();

    function onSelectChange(event: ChangeEvent<HTMLSelectElement>) {
        const nextLocale = event.target.value;
        startTransition(() => {
            router.replace(pathname, { locale: nextLocale });
        });
    }

    return (
        <div className="absolute top-6 right-6 z-50">
            <div className="relative group">
                <select
                    defaultValue={locale}
                    disabled={isPending}
                    onChange={onSelectChange}
                    className="appearance-none bg-black/60 backdrop-blur-md text-white border border-white/20 hover:border-r6-orange rounded-sm px-4 py-2 pr-10 text-xs font-bold uppercase tracking-widest focus:outline-none focus:border-r6-orange focus:ring-1 focus:ring-r6-orange/50 cursor-pointer transition-all disabled:opacity-50"
                >
                    <option value="en" className="bg-zinc-900 text-gray-300">English</option>
                    <option value="es" className="bg-zinc-900 text-gray-300">Español</option>
                    <option value="fr" className="bg-zinc-900 text-gray-300">Français</option>
                    <option value="de" className="bg-zinc-900 text-gray-300">Deutsch</option>
                    <option value="pt" className="bg-zinc-900 text-gray-300">Português</option>
                </select>

                {/* Custom Arrow Icon */}
                <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none transition-transform group-hover:translate-y-[-40%]">
                    <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1L5 5L9 1" stroke="#FF5500" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </div>
            </div>
        </div>
    );
}
