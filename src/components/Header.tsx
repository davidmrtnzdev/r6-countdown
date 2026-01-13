'use client';
import { Link } from '@/i18n/routing';
import { usePathname } from 'next/navigation';
import { clsx } from 'clsx';
import { useTranslations } from 'next-intl';

export default function Header() {
    const t = useTranslations('Header');
    const pathname = usePathname();

    const isActive = (path: string) => {
        // Check if the current pathname ends with the given path (handling locales)
        return pathname.endsWith(path) || (path === '/' && pathname.split('/').length <= 2);
    };

    return (
        <header className="w-full border-b border-white/5 bg-black/50 backdrop-blur-md sticky top-0 z-50">
            <div className="max-w-[1600px] mx-auto px-4 h-16 flex items-center justify-between">
                {/* Logo / Home */}
                <Link href="/" className="flex items-center gap-2 font-bold text-xl hover:text-r6-orange transition-colors">
                    <span className="text-r6-orange">R6</span>
                    <span className="text-white">COUNTDOWN</span>
                </Link>

                {/* Navigation */}
                <nav className="flex items-center gap-6">
                    <Link
                        href="/"
                        className={clsx(
                            "text-sm font-medium transition-colors hover:text-white",
                            isActive('/') ? "text-white" : "text-gray-400"
                        )}
                    >
                        {t('home')}
                    </Link>
                    <Link
                        href="/updates"
                        className={clsx(
                            "text-sm font-medium transition-colors hover:text-white",
                            isActive('/updates') ? "text-white" : "text-gray-400"
                        )}
                    >
                        {t('updates')}
                    </Link>
                    <Link
                        href="/about"
                        className={clsx(
                            "text-sm font-medium transition-colors hover:text-white",
                            isActive('/about') ? "text-white" : "text-gray-400"
                        )}
                    >
                        {t('about')}
                    </Link>
                </nav>
            </div>
        </header>
    );
}
