"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface SeasonProgressProps {
    startDate: string;
    endDate: string;
    labels: {
        start: string;
        complete: string;
        end: string;
    }
}

export function SeasonProgress({ startDate, endDate, labels }: SeasonProgressProps) {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const start = new Date(startDate).getTime();
        const end = new Date(endDate).getTime();
        const totalDuration = end - start;

        const interval = setInterval(() => {
            const now = new Date().getTime();
            const elapsed = now - start;
            const percent = Math.min(100, Math.max(0, (elapsed / totalDuration) * 100));
            setProgress(percent);
        }, 1000);

        return () => clearInterval(interval);
    }, [startDate, endDate]);

    return (
        <div className="w-full max-w-2xl mx-auto mt-8 flex flex-col gap-2">
            <div className="flex justify-between text-xs text-gray-400 font-mono uppercase tracking-wider">
                <span>{labels.start}</span>
                <span>{Math.floor(progress)}% {labels.complete}</span>
                <span>{labels.end}</span>
            </div>
            <div className="h-4 w-full bg-r6-darker/80 border border-white/5 rounded-full overflow-hidden p-[2px]">
                <div
                    className="h-full bg-gradient-to-r from-r6-orange/60 to-r6-orange rounded-full shadow-[0_0_15px_rgba(255,85,0,0.5)] transition-all duration-1000 ease-out relative"
                    style={{ width: `${progress}%` }}
                >
                    <div className="absolute inset-0 bg-white/20 animate-pulse" />
                </div>
            </div>
        </div>
    );
}
