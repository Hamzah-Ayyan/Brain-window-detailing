import React from "react";
import { Button } from "./button";
import { GlowingEffect } from "./glowing-effect";

const dayNames = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

const CalendarDay: React.FC<{ day: number | string; isHeader?: boolean }> = ({
    day,
    isHeader,
}) => {
    const randomBgWhite =
        !isHeader && Math.random() < 0.3
            ? "bg-blue-500 text-white "
            : "text-gray-400";

    return (
        <div
            className={`col-span-1 row-span-1 flex h-8 w-8 items-center justify-center ${isHeader ? "" : "rounded-xl"
                } ${randomBgWhite}`}
        >
            <span className={`font-medium ${isHeader ? "text-xs" : "text-sm"}`}>
                {day}
            </span>
        </div>
    );
};

export function Calendar() {
    const currentDate = new Date();
    const currentMonth = currentDate.toLocaleString("default", { month: "long" });
    const currentYear = currentDate.getFullYear();
    const firstDayOfMonth = new Date(currentYear, currentDate.getMonth(), 1);
    const firstDayOfWeek = firstDayOfMonth.getDay();
    const daysInMonth = new Date(
        currentYear,
        currentDate.getMonth() + 1,
        0
    ).getDate();

    const bookingLink = `https://cal.com/`; // Default generic link since none was provided for the tint app

    const renderCalendarDays = () => {
        let days: React.ReactNode[] = [
            ...dayNames.map((day) => (
                <CalendarDay key={`header-${day}`} day={day} isHeader />
            )),
            ...Array(firstDayOfWeek).map((_, i) => (
                <div
                    key={`empty-start-${i}`}
                    className="col-span-1 row-span-1 h-8 w-8"
                />
            )),
            ...Array(daysInMonth)
                .fill(null)
                .map((_, i) => <CalendarDay key={`date-${i + 1}`} day={i + 1} />),
        ];

        return days;
    };

    return (
        <BentoCard height="h-auto" linkTo={bookingLink}>
            <div className="flex flex-col md:flex-row h-full gap-8 items-center">
                <div className="flex-1">
                    <h2 className="mb-4 text-2xl md:text-3xl font-bold text-white">
                        Schedule Your Tinting Session
                    </h2>
                    <p className="mb-6 text-sm md:text-base text-gray-400">
                        Select a time that works best for you and secure your appointment with our master installers today.
                    </p>
                    <Button className="rounded-2xl px-8 py-6 text-md bg-blue-600 hover:bg-blue-500 border border-blue-400/30 shadow-[0_0_20px_rgba(37,99,235,0.3)] transition-all">
                        Book Now
                    </Button>
                </div>
                <div className="relative group transition-all duration-500 ease-out flex-shrink-0 w-[400px]">
                    <div>
                        <div className="h-full w-full rounded-[24px] border border-white/10 bg-[#050505] p-2 transition-colors duration-300 group-hover:border-blue-500/50 shadow-2xl">
                            <div
                                className="h-full rounded-2xl border-2 border-white/5 p-4 bg-gradient-to-tr from-white/[0.02] to-transparent"
                                style={{ boxShadow: "0px 2px 1.5px 0px rgba(255,255,255,0.02) inset" }}
                            >
                                <div className="flex items-center space-x-2 text-white">
                                    <p className="text-sm">
                                        <span className="font-semibold">
                                            {currentMonth}, {currentYear}
                                        </span>
                                    </p>
                                    <span className="h-1 w-1 rounded-full bg-blue-500">&nbsp;</span>
                                    <p className="text-xs text-blue-400">1 hour slot</p>
                                </div>
                                <div className="mt-6 grid grid-cols-7 grid-rows-5 gap-y-3 gap-x-2 px-1">
                                    {renderCalendarDays()}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </BentoCard>
    );
}

interface BentoCardProps {
    children: React.ReactNode;
    height?: string;
    className?: string;
    showHoverGradient?: boolean;
    hideOverflow?: boolean;
    linkTo?: string;
}

export function BentoCard({
    children,
    height = "h-auto",
    className = "",
    showHoverGradient = true,
    hideOverflow = true,
    linkTo,
}: BentoCardProps) {
    const cardContent = (
        <div
            className={`group relative flex flex-col rounded-[24px] border border-white/10 bg-[#0a0a0a] p-8 md:p-10 hover:bg-blue-900/10 transition-colors duration-500 ${hideOverflow && "overflow-hidden"
                } ${height} ${className}`}
        >
            <GlowingEffect spread={60} glow={true} disabled={false} proximity={100} inactiveZone={0.01} borderWidth={2} className="opacity-0 group-hover:opacity-100 transition-opacity z-10 pointer-events-none" />
            {linkTo && (
                <div className="absolute top-8 right-8 z-[50] flex h-12 w-12 items-center justify-center rounded-full bg-blue-500/10 opacity-0 transition-all duration-300 ease-in-out group-hover:opacity-100 group-hover:scale-110 border border-blue-500/30">
                    <svg
                        className="h-5 w-5 text-blue-500"
                        width="24"
                        height="24"
                        fill="none"
                        viewBox="0 0 24 24"
                    >
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M17.25 15.25V6.75H8.75"
                        ></path>
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M17 7L6.75 17.25"
                        ></path>
                    </svg>
                </div>
            )}
            {showHoverGradient && (
                <div className="pointer-events-none absolute inset-0 z-30 bg-gradient-to-tr from-blue-500/10 via-transparent to-transparent opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100"></div>
            )}
            {/* Glow dot */}
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-blue-600/20 rounded-full blur-[80px] group-hover:bg-blue-500/30 transition-colors duration-500"></div>

            <div className="relative z-40">
                {children}
            </div>
        </div>
    );

    if (linkTo) {
        return (
            <a
                href={linkTo}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full max-w-5xl mx-auto"
            >
                {cardContent}
            </a>
        );
    }

    return <div className="w-full max-w-5xl mx-auto">{cardContent}</div>;
}
