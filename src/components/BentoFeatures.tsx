import React from 'react';
import { motion } from 'framer-motion';
import { Award, Clock, Scissors, ShieldCheck, SunMedium } from 'lucide-react';
import { GlowingEffect } from './ui/glowing-effect';

const features = [
    {
        title: "35+ Years Experience",
        description: "Decades of mastering the art of window tinting.",
        icon: <Award className="w-8 h-8 text-blue-500" />,
        className: "md:col-span-2 md:row-span-1",
    },
    {
        title: "Computer-Cut Precision",
        description: "Absolute precision and speed. No cut rubbers or scratched glass ever.",
        icon: <Scissors className="w-8 h-8 text-blue-500" />,
        className: "md:col-span-1 md:row-span-2",
    },
    {
        title: "Fast 1-Hour Wait Times",
        description: "Two large installation bays allow us to work on multiple cars, getting you in and out quickly.",
        icon: <Clock className="w-8 h-8 text-blue-500" />,
        className: "md:col-span-1 md:row-span-1",
    },
    {
        title: "Lifetime Quality Products",
        description: "Premium films that aggressively cut the heat and are guaranteed to last a lifetime.",
        icon: <SunMedium className="w-8 h-8 text-blue-500" />,
        className: "md:col-span-1 md:row-span-1",
    },
    {
        title: "Nationwide Warranty",
        description: "Pay once, never pay again as long as you own your car. Backed by manufacturer warranty.",
        icon: <ShieldCheck className="w-8 h-8 text-blue-500" />,
        className: "md:col-span-2 md:row-span-1",
    },
];

const BentoFeatures: React.FC = () => {
    return (
        <section className="py-24 relative overflow-hidden bg-black">
            <div className="container mx-auto px-4 sm:px-6 relative z-10 max-w-6xl">
                <header className="text-center mb-16">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-blue-500 font-semibold tracking-wider text-sm uppercase mb-4 block"
                    >
                        Why Choose Us
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl font-black text-white"
                    >
                        The Ultimate Standard
                    </motion.h2>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 auto-rows-[220px]">
                    {features.map((feature, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1, duration: 0.5 }}
                            className={`relative group rounded-[24px] overflow-hidden border border-white/[0.08] bg-white/[0.02] p-8 flex flex-col justify-between ${feature.className}`}
                        >
                            <GlowingEffect
                                spread={60}
                                glow={true}
                                disabled={false}
                                proximity={100}
                                inactiveZone={0}
                                borderWidth={2}
                            />
                            <div className="relative z-10 h-full flex flex-col">
                                <div className="w-14 h-14 rounded-2xl bg-blue-500/10 flex items-center justify-center mb-6 border border-blue-500/20 group-hover:scale-110 transition-transform duration-500">
                                    {feature.icon}
                                </div>
                                <div className="mt-auto">
                                    <h3 className="text-2xl font-bold text-white mb-2 tracking-tight">{feature.title}</h3>
                                    <p className="text-gray-400 leading-relaxed text-sm md:text-base">
                                        {feature.description}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BentoFeatures;
