import React from 'react';
import { motion } from 'framer-motion';
import { Building, Truck } from 'lucide-react';
import { GlowingEffect } from './ui/glowing-effect';

const HomeAbout: React.FC = () => {
    return (
        <section className="py-24 bg-[#030303] relative border-t border-white/[0.05]">
            <div className="container mx-auto px-4 max-w-6xl relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Left side text content */}
                    <div className="flex flex-col gap-6">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <span className="text-blue-500 font-semibold tracking-wider text-sm uppercase mb-4 block">About Us</span>
                            <h2 className="text-4xl md:text-5xl font-black text-white leading-[1.1]">
                                Established in <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">1982.</span>
                            </h2>
                            <p className="text-gray-400 text-lg mt-6 leading-relaxed font-sans">
                                Fast service done right for busy customers. Serving Hollywood, FL at the exact same location for over 20 years. We specialize in automotive tinting, but bring our elite precision to residential and commercial projects as well.
                            </p>
                        </motion.div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                                className="relative flex items-start gap-4 p-4 rounded-2xl bg-white/[0.02] border border-white/[0.05] overflow-hidden group"
                            >
                                <GlowingEffect spread={40} glow={true} disabled={false} proximity={64} inactiveZone={0.01} borderWidth={2} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                                <div className="relative z-10 p-3 rounded-xl bg-blue-500/10 text-blue-500 mt-1">
                                    <Truck size={24} />
                                </div>
                                <div>
                                    <h4 className="text-white font-bold mb-1">Large Capacity</h4>
                                    <p className="text-sm text-gray-500 leading-snug">Facilities capable of accommodating even the largest trucks and duallys.</p>
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.3 }}
                                className="relative flex items-start gap-4 p-4 rounded-2xl bg-white/[0.02] border border-white/[0.05] overflow-hidden group"
                            >
                                <GlowingEffect spread={40} glow={true} disabled={false} proximity={64} inactiveZone={0.01} borderWidth={2} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                                <div className="relative z-10 p-3 rounded-xl bg-blue-500/10 text-blue-500 mt-1">
                                    <Building size={24} />
                                </div>
                                <div>
                                    <h4 className="text-white font-bold mb-1">Multi-Discipline</h4>
                                    <p className="text-sm text-gray-500 leading-snug">Experts in automotive, residential, and commercial window tinting.</p>
                                </div>
                            </motion.div>
                        </div>
                    </div>

                    {/* Right side Visual/Glass display - Clean Version */}
                    <div className="relative w-full aspect-[4/3] flex items-center justify-center mt-10 md:mt-0">
                        {/* Huge background text watermark */}
                        <div className="absolute right-[-10%] top-1/4 text-[180px] md:text-[220px] font-black text-white/[0.02] leading-none select-none pointer-events-none">
                            1982
                        </div>

                        {/* Middle layer: 3D Transparent Animated Car */}
                        <motion.div
                            className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none"
                            initial={{ x: 50, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.6, duration: 1, ease: "easeOut" }}
                            style={{ perspective: 1000 }}
                        >
                            <motion.img
                                src="/assets/about_car_animated_transparent.png"
                                alt="Dark Hypercar with Scissor Doors"
                                className="w-[125%] max-w-[125%] object-contain mt-12 md:mt-16 ml-0 md:-ml-8"
                                animate={{
                                    y: [0, -12, 0] // Subtle floating animation
                                }}
                                transition={{
                                    duration: 6,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                                style={{
                                    // Make it look physical and lit correctly
                                    filter: 'drop-shadow(0 40px 50px rgba(0,0,0,0.95)) drop-shadow(0 20px 20px rgba(0,0,0,0.9)) contrast(1.1) saturate(1.05) brightness(1.1)'
                                }}
                            />
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default HomeAbout;
