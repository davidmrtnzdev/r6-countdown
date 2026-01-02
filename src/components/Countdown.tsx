"use client";

import { useCountdown } from "@/hooks/useCountdown";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion"; // Will need to install framer-motion or use standard css if not installed. 
// Ah, I didn't install framer-motion. I'll use standard CSS animations or install it. 
// User wants "WOW" factor. Framer Motion is standard for that. I should install it.
// For now I'll write the code assuming I'll install it next.

interface CountdownProps {
    targetDate: string;
    className?: string;
    labels: {
        days: string;
        hours: string;
        minutes: string;
        seconds: string;
        expired_title: string;
        expired_msg: string;
    }
}

const TimeUnit = ({ value, label }: { value: number; label: string }) => (
    <div className="flex flex-col items-center justify-center p-4 md:p-8 backdrop-blur-md bg-glass-bg border border-glass-border rounded-xl shadow-2xl min-w-[100px] md:min-w-[140px]">
        <span className="text-4xl md:text-7xl font-bold text-r6-orange font-mono tabular-nums leading-none tracking-tighter drop-shadow-orange">
            {value.toString().padStart(2, "0")}
        </span>
        <span className="text-xs md:text-sm uppercase tracking-[0.2em] text-gray-400 mt-2 font-semibold">
            {label}
        </span>
    </div>
);

export function Countdown({ targetDate, className, labels }: CountdownProps) {
    const { days, hours, minutes, seconds, isExpired } = useCountdown(targetDate);

    if (isExpired) {
        return (
            <div className={cn("text-center p-10 animate-pulse", className)}>
                <h2 className="text-4xl md:text-6xl font-bold text-r6-orange mb-4">
                    {labels.expired_title}
                </h2>
                <p className="text-gray-400">{labels.expired_msg}</p>
            </div>
        );
    }

    return (
        <div className={cn("grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6", className)}>
            <TimeUnit value={days} label={labels.days} />
            <TimeUnit value={hours} label={labels.hours} />
            <TimeUnit value={minutes} label={labels.minutes} />
            <TimeUnit value={seconds} label={labels.seconds} />
        </div>
    );
}
