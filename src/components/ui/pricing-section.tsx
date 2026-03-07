"use client";
import { useRef, useState } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { TimelineContent } from "@/components/ui/timeline-animation";
import NumberFlow from "@number-flow/react";
import { ShieldCheck, CheckCheck, MapPinned, Building2, Car, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const plans = [
    {
        name: "Automotive Tint",
        description:
            "Precision computer-cut tinting for sedans, SUVs, and large dually trucks.",
        price: 149,
        ceramicPrice: 299,
        buttonText: "Schedule Now",
        buttonVariant: "outline" as const,
        features: [
            { text: "Any Make or Model", icon: <Car size={20} /> },
            { text: "Computer-cut precision", icon: <ShieldCheck size={20} /> },
            { text: "Same-day service", icon: <CheckCheck size={20} /> },
        ],
        includes: [
            "Standard Features:\n",
            "Nationwide lifetime warranty",
            "No bubbling or peeling",
            "99% UV Ray Protection",
        ],
    },
    {
        name: "Residential Tint",
        description:
            "Enhance home privacy, lower AC costs, and protect expensive furniture.",
        price: 350,
        ceramicPrice: 550,
        buttonText: "Get an Estimate",
        buttonVariant: "default" as const,
        popular: true,
        features: [
            { text: "Whole-home coverage", icon: <MapPinned size={20} /> },
            { text: "Immediate energy savings", icon: <CheckCheck size={20} /> },
            { text: "Reduced Screen Glare", icon: <ShieldCheck size={20} /> },
        ],
        includes: [
            "Everything in Automotive, plus:",
            "Custom decorative options",
            "Enhanced glass security",
            "Fading protection",
        ],
    },
    {
        name: "Commercial Tint",
        description:
            "Large scale regulatory glare reduction and security for office buildings.",
        price: 850,
        ceramicPrice: 1400,
        buttonText: "Contact Us",
        buttonVariant: "outline" as const,
        features: [
            { text: "High-rise capabilities", icon: <Building2 size={20} /> },
            { text: "After-hours installation", icon: <ShieldCheck size={20} /> },
            { text: "Volume discounts", icon: <CheckCheck size={20} /> },
        ],
        includes: [
            "Everything in Residential, plus:",
            "Anti-Graffiti layers",
            "Mirror/Privacy finishes",
            "Shatter resistance",
        ],
    },
];

const PricingSwitch = ({ isCeramic, onSwitch }: { isCeramic: boolean, onSwitch: (value: boolean) => void }) => {
    return (
        <div className="flex justify-center">
            <div className="relative z-50 mx-auto flex w-fit rounded-full bg-neutral-900 border border-white/10 p-1">
                <button
                    onClick={() => onSwitch(false)}
                    className={`relative z-10 w-fit sm:h-14 h-12 flex items-center justify-center rounded-full sm:px-8 px-4 sm:py-2 py-1 font-semibold transition-colors ${!isCeramic
                        ? "text-white"
                        : "text-gray-400 hover:text-white"
                        }`}
                >
                    {!isCeramic && (
                        <motion.span
                            layoutId="pricing-switch"
                            className="absolute inset-0 w-full h-full rounded-full border-4 shadow-sm shadow-blue-600/50 border-blue-600 bg-gradient-to-t from-blue-600 via-blue-500 to-blue-700"
                            transition={{ type: "spring", stiffness: 500, damping: 30 }}
                        />
                    )}
                    <span className="relative">Standard Film</span>
                </button>

                <button
                    onClick={() => onSwitch(true)}
                    className={`relative z-10 w-fit sm:h-14 h-12 flex items-center justify-center flex-shrink-0 rounded-full sm:px-8 px-4 sm:py-2 py-1 font-semibold transition-colors ${isCeramic
                        ? "text-white"
                        : "text-gray-400 hover:text-white"
                        }`}
                >
                    {isCeramic && (
                        <motion.span
                            layoutId="pricing-switch"
                            className="absolute inset-0 w-full h-full rounded-full border-4 shadow-sm shadow-blue-600/50 border-blue-600 bg-gradient-to-t from-blue-600 via-blue-500 to-blue-700"
                            transition={{ type: "spring", stiffness: 500, damping: 30 }}
                        />
                    )}
                    <span className="relative flex items-center gap-2">
                        Ceramic Premium
                        <span className="rounded-full bg-blue-500/20 border border-blue-500/50 px-2 py-0.5 text-xs font-bold text-blue-400">
                            Max Heat Rejection
                        </span>
                    </span>
                </button>
            </div>
        </div>
    );
};

export default function PricingSection() {
    const [isCeramic, setIsCeramic] = useState(false);
    const pricingRef = useRef<any>(null);

    const revealVariants = {
        visible: (i: number) => ({
            y: 0,
            opacity: 1,
            filter: "blur(0px)",
            transition: {
                delay: i * 0.2,
                duration: 0.5,
            },
        }),
        hidden: {
            filter: "blur(10px)",
            y: -20,
            opacity: 0,
        },
    };

    const togglePricingPeriod = (value: boolean) =>
        setIsCeramic(value);

    return (
        <div className="px-4 py-24 min-h-screen relative bg-black border-t border-white/5" ref={pricingRef} id="pricing-section">
            <div
                className="absolute top-0 left-[10%] right-[10%] w-[80%] h-full z-0 pointer-events-none"
                style={{
                    backgroundImage: `radial-gradient(circle at center, rgba(32,108,232,0.15) 0%, transparent 60%)`,
                }}
            />

            <div className="text-center mb-12 max-w-3xl mx-auto relative z-10">
                <TimelineContent
                    as="h2"
                    animationNum={0}
                    timelineRef={pricingRef}
                    customVariants={revealVariants}
                    className="md:text-6xl sm:text-4xl text-3xl font-black text-white mb-6 uppercase tracking-tight"
                >
                    Pricing that matches our <br />
                    <TimelineContent
                        as="span"
                        animationNum={1}
                        timelineRef={pricingRef}
                        customVariants={revealVariants}
                        className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600"
                    >
                        Precision Quality
                    </TimelineContent>
                </TimelineContent>

                <TimelineContent
                    as="p"
                    animationNum={2}
                    timelineRef={pricingRef}
                    customVariants={revealVariants}
                    className="sm:text-lg text-base text-gray-400 sm:w-[80%] w-[90%] mx-auto leading-relaxed"
                >
                    Whether you need a quick vehicle tint or a massive commercial installation, our prices scale fairly based on the square footage and premium materials used.
                </TimelineContent>
            </div>

            <TimelineContent
                as="div"
                animationNum={3}
                timelineRef={pricingRef}
                customVariants={revealVariants}
                className="mb-12 relative z-10"
            >
                <PricingSwitch isCeramic={isCeramic} onSwitch={togglePricingPeriod} />
            </TimelineContent>

            <div className="grid md:grid-cols-3 max-w-7xl gap-6 md:gap-8 mx-auto relative z-10">
                {plans.map((plan, index) => (
                    <TimelineContent
                        key={plan.name}
                        as="div"
                        animationNum={4 + index}
                        timelineRef={pricingRef}
                        customVariants={revealVariants}
                    >
                        <Card
                            className={`relative overflow-hidden h-full flex flex-col ${plan.popular
                                ? "border border-blue-500/50 bg-[#0a0f1c]"
                                : "border border-white/10 bg-[#050505]"
                                }`}
                        >
                            {plan.popular && (
                                <div className="absolute top-0 right-0 left-0 h-1 bg-gradient-to-r from-blue-500 via-blue-400 to-blue-600" />
                            )}
                            <CardHeader className="text-left py-8 pb-4">
                                <div className="flex justify-between items-start mb-4">
                                    <h3 className="text-2xl font-bold text-white">
                                        {plan.name}
                                    </h3>
                                    {plan.popular && (
                                        <span className="bg-blue-500/20 text-blue-400 border border-blue-500/30 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                                            Most Popular
                                        </span>
                                    )}
                                </div>
                                <div className="flex items-baseline mb-6 mt-6">
                                    <span className="text-sm text-gray-400 font-medium mr-2">Starting at</span>
                                    <div className="flex items-baseline">
                                        <span className="text-5xl font-black text-white tracking-tighter mr-1">$</span>
                                        <NumberFlow
                                            value={isCeramic ? plan.ceramicPrice : plan.price}
                                            format={{ useGrouping: true }}
                                            className="text-5xl font-black text-white tracking-tighter"
                                        />
                                    </div>
                                </div>
                            </CardHeader>

                            <CardContent className="pt-2 flex flex-col flex-1">
                                <button
                                    className={`w-[90%] mx-auto mb-8 py-3.5 px-6 text-sm font-bold uppercase tracking-wider rounded-xl transition-all duration-300 transform hover:-translate-y-1 active:scale-95 flex items-center justify-center gap-2 ${plan.popular
                                        ? "bg-blue-600 hover:bg-blue-500 text-white shadow-[0_0_20px_rgba(37,99,235,0.4)] hover:shadow-[0_0_30px_rgba(37,99,235,0.6)]"
                                        : "bg-white/5 hover:bg-white/10 text-white border border-white/10"
                                        }`}
                                >
                                    {plan.buttonText}
                                    <ArrowRight className={`w-4 h-4 transition-transform group-hover:translate-x-1 ${plan.popular ? "text-white" : "text-gray-400"}`} />
                                </button>

                                <ul className="space-y-4 font-medium mb-8">
                                    {plan.features.map((feature, featureIndex) => (
                                        <li key={featureIndex} className="flex items-start">
                                            <span className="text-blue-500 mt-0.5 mr-3 flex-shrink-0">
                                                {feature.icon}
                                            </span>
                                            <span className="text-sm text-gray-300">
                                                {feature.text}
                                            </span>
                                        </li>
                                    ))}
                                </ul>

                                <div className="mt-auto space-y-4 pt-6 border-t border-white/10">
                                    <h4 className="font-bold text-sm text-white uppercase tracking-wider">
                                        {plan.includes[0]}
                                    </h4>
                                    <ul className="space-y-3 font-medium">
                                        {plan.includes.slice(1).map((feature, featureIndex) => (
                                            <li key={featureIndex} className="flex items-start">
                                                <span className="h-5 w-5 bg-blue-500/20 border border-blue-500/40 rounded-full flex items-center justify-center mt-0.5 mr-3 flex-shrink-0">
                                                    <CheckCheck className="h-3 w-3 text-blue-400" />
                                                </span>
                                                <span className="text-sm text-gray-400">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </CardContent>
                        </Card>
                    </TimelineContent>
                ))}
            </div>
        </div>
    );
}
