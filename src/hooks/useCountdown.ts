"use client";

import { useEffect, useState } from "react";

export interface TimeLeft {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
    isExpired: boolean;
}

export function useCountdown(targetDate: string | Date | number): TimeLeft {
    const [timeLeft, setTimeLeft] = useState<TimeLeft>({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
        isExpired: false,
    });

    useEffect(() => {
        // Calculate validity immediately
        const target = new Date(targetDate).getTime();

        const calculate = () => {
            const now = new Date().getTime();
            const distance = target - now;

            if (distance < 0) {
                return {
                    days: 0,
                    hours: 0,
                    minutes: 0,
                    seconds: 0,
                    isExpired: true,
                };
            }

            return {
                days: Math.floor(distance / (1000 * 60 * 60 * 24)),
                hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
                minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
                seconds: Math.floor((distance % (1000 * 60)) / 1000),
                isExpired: false,
            };
        };

        // Initial calculation
        setTimeLeft(calculate());

        const interval = setInterval(() => {
            const remaining = calculate();
            setTimeLeft(remaining);

            if (remaining.isExpired) {
                clearInterval(interval);
            }
        }, 1000);

        return () => clearInterval(interval);
    }, [targetDate]);

    return timeLeft;
}
