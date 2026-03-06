import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Building, Truck } from 'lucide-react';
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

                    {/* Right side Visual/Glass display */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        className="relative w-full aspect-square md:aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl bg-[#0a0a0a]"
                    >
                        {/* Background subtle elements */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/20 to-transparent mix-blend-screen" />
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] bg-[radial-gradient(circle_at_center,rgba(0,100,255,0.1)_0%,transparent_50%)]" />

                        {/* Foreground glass floating card containing location info for visual flair */}
                        <div className="absolute bottom-8 left-8 right-8 z-20 bg-black/40 backdrop-blur-xl border border-white/10 rounded-2xl p-6 flex items-center gap-6 shadow-2xl overflow-hidden group">
                            <GlowingEffect spread={40} glow={true} disabled={false} proximity={64} inactiveZone={0.01} borderWidth={2} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                            <div className="relative z-10 w-16 h-16 rounded-full bg-blue-500/20 flex items-center justify-center border border-blue-500/30 flex-shrink-0">
                                <MapPin className="text-blue-500" size={28} />
                            </div>
                            <div className="relative z-10">
                                <h3 className="text-white font-bold text-xl">Hollywood, FL</h3>
                                <p className="text-gray-400 text-sm mt-1">At the exact same location for over 20 years.</p>
                            </div>
                        </div>

                        {/* Huge background text watermark */}
                        <div className="absolute right-[-10%] top-[-10%] text-[200px] font-black text-white/[0.02] leading-none select-none">
                            1982
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default HomeAbout;
