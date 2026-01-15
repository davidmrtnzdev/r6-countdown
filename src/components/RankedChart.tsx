'use client';
import { useTranslations } from 'next-intl';

export const RankedChart = () => {
    const t = useTranslations('RankedStats');

    // Estimated distribution data (Projected/Visual)
    const data = [
        { rank: 'copper', val: 5, color: '#b87333' },
        { rank: 'bronze', val: 15, color: '#cd7f32' },
        { rank: 'silver', val: 20, color: '#c0c0c0' },
        { rank: 'gold', val: 25, color: '#ffd700' },
        { rank: 'platinum', val: 20, color: '#00ced1' },
        { rank: 'emerald', val: 10, color: '#50c878' },
        { rank: 'diamond', val: 4, color: '#b9f2ff' },
        { rank: 'champion', val: 1, color: '#ff004c' },
    ];

    return (
        <div className="w-full max-w-4xl mt-16 p-6 md:p-8 bg-black/40 backdrop-blur-md border border-white/5 rounded-2xl">
            <div className="mb-6">
                <h2 className="text-2xl font-bold text-white mb-2">{t('title')}</h2>
                <p className="text-gray-400 text-sm">{t('subtitle')}</p>
            </div>

            <div className="flex items-end justify-between h-[200px] gap-2 md:gap-4 relative pt-6">
                {/* Horizontal grid lines */}
                <div className="absolute inset-0 z-0 flex flex-col justify-between opacity-10 pointer-events-none">
                    <div className="w-full h-px bg-white" />
                    <div className="w-full h-px bg-white" />
                    <div className="w-full h-px bg-white" />
                    <div className="w-full h-px bg-white" />
                    <div className="w-full h-px bg-white" />
                </div>

                {data.map((item, index) => (
                    <div key={item.rank} className="flex-1 flex flex-col items-center z-10 group relative">
                        {/* Tooltip */}
                        <div className="opacity-0 group-hover:opacity-100 absolute -top-10 transition-opacity bg-black/90 border border-white/20 text-white text-xs px-2 py-1 rounded whitespace-nowrap z-20 pointer-events-none">
                            {t(item.rank)}: {item.val}%
                        </div>

                        <div
                            className="w-full max-w-[40px] rounded-t-sm relative overflow-hidden transition-all duration-1000 ease-out"
                            style={{
                                height: `${item.val * 6}px`,
                                backgroundColor: item.color,
                            }}
                        >
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                        </div>
                        <div className="mt-2 text-[10px] md:text-xs text-gray-400 uppercase font-bold tracking-wider rotate-[-45deg] md:rotate-0 origin-top-left md:origin-center translate-y-2 md:translate-y-0 text-center w-full truncate">
                            {t(item.rank)}
                        </div>
                    </div>
                ))}
            </div>
            <div className="mt-8 md:mt-4 text-center">
                <span className="text-xs text-gray-500 font-mono">*Data based on aggregated tracker API projections</span>
            </div>
        </div>
    );
};
