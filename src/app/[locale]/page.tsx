import { Countdown } from "@/components/Countdown";
import { SeasonProgress } from "@/components/SeasonProgress";
import { AdPlaceholder } from "@/components/AdPlaceholder";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { setRequestLocale, getTranslations } from 'next-intl/server';

// Season dates
const SEASON_START = "2025-12-02T14:00:00Z"; // Y10S4 Launch
const SEASON_END = "2026-03-03T14:00:00Z";   // Y11S1 Approx

export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);

  const tHero = await getTranslations({ locale, namespace: 'Hero' });
  const tProgress = await getTranslations({ locale, namespace: 'Progress' });
  const tCountdown = await getTranslations({ locale, namespace: 'Countdown' });
  const tArticle = await getTranslations({ locale, namespace: 'Article' });
  const tFAQ = await getTranslations({ locale, namespace: 'FAQ' });
  const tNextSeason = await getTranslations({ locale, namespace: 'NextSeason' });

  // JSON-LD Structured Data
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": tFAQ('q1'),
            "acceptedAnswer": { "@type": "Answer", "text": tFAQ.raw('a1') }
          },
          {
            "@type": "Question",
            "name": tFAQ('q2'),
            "acceptedAnswer": { "@type": "Answer", "text": tFAQ.raw('a2') }
          },
          {
            "@type": "Question",
            "name": tFAQ('q3'),
            "acceptedAnswer": { "@type": "Answer", "text": tFAQ.raw('a3') }
          }
        ]
      },
      {
        "@type": "Event",
        "name": tHero('header_suffix') + " End Date",
        "startDate": SEASON_END,
        "eventStatus": "https://schema.org/EventScheduled",
        "eventAttendanceMode": "https://schema.org/OnlineEventAttendanceMode",
        "location": {
          "@type": "VirtualLocation",
          "url": "https://r6countdown.com"
        },
        "description": tHero('subheader')
      }
    ]
  };

  return (
    <main className="flex-grow relative flex flex-col min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Global Background Image (Low Opacity R6 Theme) */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-r6-darker z-0" />
        <div
          className="absolute inset-0 bg-[url('/bg.jpg')] bg-cover bg-center opacity-20"
          style={{ filter: 'grayscale(30%) contrast(1.2)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-r6-darker/60 via-transparent to-r6-darker/90 z-10" />
      </div>

      {/* Language Switcher */}
      <LanguageSwitcher />

      <div className="relative z-10 flex flex-col lg:flex-row w-full max-w-[1600px] mx-auto pt-6 px-4 gap-6 flex-grow">

        {/* Left Sidebar Ad (Desktop Only) */}
        <aside className="hidden lg:flex w-[160px] flex-col gap-4 sticky top-6 h-fit">
          <AdPlaceholder slot="sidebar-left" className="h-[600px] w-full" format="vertical" />
        </aside>

        {/* Main Content Area */}
        <div className="flex-1 flex flex-col items-center">

          {/* Hero / Countdown Section */}
          <section className="w-full flex flex-col items-center justify-center p-6 lg:py-20 text-center">

            <div className="space-y-6 mb-12 animate-in fade-in slide-in-from-bottom-5 duration-700">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-r6-orange/30 bg-r6-orange/10 text-r6-orange text-sm font-semibold tracking-wide uppercase shadow-[0_0_20px_rgba(255,85,0,0.15)]">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-r6-orange opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-r6-orange"></span>
                </span>
                {tHero('status_badge')}
              </div>

              <div>
                <h1 className="text-5xl md:text-8xl font-black tracking-tighter text-white drop-shadow-2xl mb-2">
                  {tHero('header_prefix')} <span className="text-transparent bg-clip-text bg-gradient-to-r from-r6-orange to-red-500">{tHero('header_suffix')}</span>
                </h1>
                <p className="text-xl md:text-2xl text-gray-400 font-light tracking-wide uppercase">
                  {tHero('subheader')}
                </p>
              </div>
            </div>

            <Countdown
              targetDate={SEASON_END}
              className="scale-100 md:scale-110 mb-8"
              labels={{
                days: tCountdown('days'),
                hours: tCountdown('hours'),
                minutes: tCountdown('minutes'),
                seconds: tCountdown('seconds'),
                expired_title: tCountdown('expired_title'),
                expired_msg: tCountdown('expired_msg'),
              }}
            />

            <SeasonProgress
              startDate={SEASON_START}
              endDate={SEASON_END}
              labels={{
                start: tProgress('start'),
                complete: tProgress('complete'),
                end: tProgress('end'),
              }}
            />

            {/* Next Season Preview Section */}
            <div className="w-full max-w-2xl mt-12 grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white/5 border border-white/10 rounded-lg p-4 backdrop-blur-sm">
                <div className="text-r6-orange text-xs uppercase font-bold mb-1">{tNextSeason('operator_label')}</div>
                <div className="text-white font-mono text-sm">{tNextSeason('operator_val')}</div>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-lg p-4 backdrop-blur-sm">
                <div className="text-r6-orange text-xs uppercase font-bold mb-1">{tNextSeason('map_label')}</div>
                <div className="text-white font-mono text-sm">{tNextSeason('map_val')}</div>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-lg p-4 backdrop-blur-sm">
                <div className="text-r6-orange text-xs uppercase font-bold mb-1">{tNextSeason('date_label')}</div>
                <div className="text-white font-mono text-sm">{tNextSeason('date_val')}</div>
              </div>
            </div>

            <div className="w-full max-w-3xl mt-16">
              <AdPlaceholder slot="top-banner" className="h-24 w-full" />
            </div>

          </section>

          {/* SEO Article Section */}
          <section className="w-full max-w-4xl bg-black/40 backdrop-blur-sm border border-white/5 rounded-2xl p-8 md:p-12 mt-8">
            <article className="prose prose-invert prose-lg max-w-none">
              <h2 className="text-3xl font-bold text-white mb-6 border-l-4 border-r6-orange pl-4">{tArticle('title')}</h2>

              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div>
                  <h3 className="text-r6-orange text-lg font-bold uppercase mb-2">{tArticle('completion_title')}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed" dangerouslySetInnerHTML={{ __html: tArticle.raw('completion_desc') }} />
                </div>
                <div>
                  <h3 className="text-r6-orange text-lg font-bold uppercase mb-2">{tArticle('next_title')}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed" dangerouslySetInnerHTML={{ __html: tArticle.raw('next_desc') }} />
                </div>
              </div>

              {/* FAQ Section for Rich Snippets */}
              <div className="space-y-4 mb-12">
                <h3 className="text-2xl font-bold text-white mb-4">{tFAQ('title')}</h3>

                <details className="group bg-white/5 rounded-lg border border-white/5 open:bg-white/10 transition-all">
                  <summary className="flex cursor-pointer items-center justify-between p-4 font-medium text-white hover:text-r6-orange">
                    {tFAQ('q1')}
                    <span className="text-r6-orange transition group-open:rotate-180">▼</span>
                  </summary>
                  <div className="p-4 pt-0 text-gray-400 border-t border-white/5 mt-2">
                    <p dangerouslySetInnerHTML={{ __html: tFAQ.raw('a1') }} />
                  </div>
                </details>

                <details className="group bg-white/5 rounded-lg border border-white/5 open:bg-white/10 transition-all">
                  <summary className="flex cursor-pointer items-center justify-between p-4 font-medium text-white hover:text-r6-orange">
                    {tFAQ('q2')}
                    <span className="text-r6-orange transition group-open:rotate-180">▼</span>
                  </summary>
                  <div className="p-4 pt-0 text-gray-400 border-t border-white/5 mt-2">
                    <p dangerouslySetInnerHTML={{ __html: tFAQ.raw('a2') }} />
                  </div>
                </details>

                <details className="group bg-white/5 rounded-lg border border-white/5 open:bg-white/10 transition-all">
                  <summary className="flex cursor-pointer items-center justify-between p-4 font-medium text-white hover:text-r6-orange">
                    {tFAQ('q3')}
                    <span className="text-r6-orange transition group-open:rotate-180">▼</span>
                  </summary>
                  <div className="p-4 pt-0 text-gray-400 border-t border-white/5 mt-2">
                    <p dangerouslySetInnerHTML={{ __html: tFAQ.raw('a3') }} />
                  </div>
                </details>
              </div>

              <div className="bg-r6-darker/50 p-6 rounded-lg border border-white/5">
                <h3 className="text-white text-lg font-bold mb-4">{tArticle('checklist_title')}</h3>
                <ul className="grid md:grid-cols-3 gap-4">
                  <li className="flex items-center gap-3 text-sm text-gray-300">
                    <div className="w-2 h-2 bg-r6-orange rounded-full" />
                    {tArticle('checklist_1')}
                  </li>
                  <li className="flex items-center gap-3 text-sm text-gray-300">
                    <div className="w-2 h-2 bg-r6-orange rounded-full" />
                    {tArticle('checklist_2')}
                  </li>
                  <li className="flex items-center gap-3 text-sm text-gray-300">
                    <div className="w-2 h-2 bg-r6-orange rounded-full" />
                    {tArticle('checklist_3')}
                  </li>
                </ul>
              </div>
            </article>
          </section>

        </div>

        {/* Right Sidebar Ad (Desktop Only) */}
        <aside className="hidden lg:flex w-[160px] flex-col gap-4 sticky top-6 h-fit">
          <AdPlaceholder slot="sidebar-right" className="h-[600px] w-full" format="vertical" />
        </aside>

      </div>
    </main>
  );
}
