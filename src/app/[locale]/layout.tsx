import { NextIntlClientProvider } from 'next-intl';
import GoogleAdSense from "@/components/GoogleAdSense";
import { GoogleTagManager } from '@next/third-parties/google';

import { getMessages, getTranslations } from 'next-intl/server';
import { Geist, Geist_Mono } from "next/font/google";
import { notFound } from "next/navigation";
import { routing, Link } from '../../i18n/routing';

import "../globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: 'swap',
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: 'swap',
});

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Metadata' });

  return {
    title: t('title'),
    description: t('description'),
    keywords: ["Rainbow Six Siege", "R6 Countdown", "Season End Date", "R6 Timer", "Rainbow 6 Season"],
    metadataBase: new URL('https://r6countdown.com'),
    alternates: {
      canonical: '/',
      languages: {
        'en': '/en',
        'es': '/es',
        'fr': '/fr',
        'de': '/de',
        'pt': '/pt',
      },
    },
  };
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}>
        <GoogleTagManager gtmId="GTM-P6XC5D6L" />
        <NextIntlClientProvider messages={messages}>
          <GoogleAdSense pId={process.env.NEXT_PUBLIC_ADSENSE_ID || ""} />
          {children}

          <footer className="w-full max-w-[1600px] mx-auto p-6 md:py-12 flex flex-col items-center gap-6 mt-12 border-t border-white/5">
            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-400">
              <Link href="/about" className="hover:text-r6-orange transition-colors">
                {messages.Footer.about}
              </Link>
              <Link href="/contact" className="hover:text-r6-orange transition-colors">
                {messages.Footer.contact}
              </Link>
              <Link href="/legal/privacy" className="hover:text-r6-orange transition-colors">
                {messages.Footer.privacy}
              </Link>
              <Link href="/legal/terms" className="hover:text-r6-orange transition-colors">
                {messages.Footer.terms}
              </Link>
            </div>
            <p className="text-xs text-gray-600 text-center max-w-lg">
              Rainbow Six Siege is a registered trademark of Ubisoft. This site is a fan-made tool and is not affiliated with Ubisoft.
            </p>
          </footer>

        </NextIntlClientProvider>
      </body>
    </html>
  );
}
