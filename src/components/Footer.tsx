'use client'

import React from 'react'
import { ArrowRight, ShieldCheck, Mail, Phone, Facebook } from 'lucide-react'

interface FooterProps {
    setPage?: (page: 'home' | 'services' | 'pricing' | 'work' | 'virtual' | 'laws' | 'about' | 'contact') => void;
}

export const Footer: React.FC<FooterProps> = ({ setPage }) => {
    return (
        <footer className="w-full bg-black border-t border-white/5 flex flex-wrap pt-16 pb-8 relative overflow-hidden mt-auto z-[60]">

            {/* Background Tech Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(circle_at_center,black,transparent_80%)]" />

            <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 mb-16">

                    {/* Brand Column - Far Left (Span 6) */}
                    <div className="col-span-1 md:col-span-6 flex flex-col gap-6">
                        <div className="flex items-center gap-2 cursor-pointer" onClick={() => setPage && setPage('home')}>
                            <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
                                <ShieldCheck size={20} className="text-white" />
                            </div>
                            <h2 className="text-2xl font-bold tracking-tighter text-white">
                                Brian's<span className="text-blue-500">.</span>
                            </h2>
                        </div>
                        <p className="text-sm text-gray-400 leading-relaxed max-w-sm">
                            South Florida's premier window tinting experts since 1982. We specialize in precision computer-cut automotive, residential, and commercial window films.
                        </p>

                        {/* Minimal Input */}
                        <div className="flex items-center gap-2 mt-2 group">
                            <div className="relative flex-1 max-w-xs">
                                <input
                                    type="email"
                                    placeholder="Enter your email for updates..."
                                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white placeholder:text-gray-600 focus:outline-none focus:border-blue-500/50 transition-colors"
                                />
                            </div>
                            <button className="p-2.5 bg-blue-500 rounded-lg text-white hover:bg-blue-400 transition-colors">
                                <ArrowRight size={18} />
                            </button>
                        </div>
                    </div>

                    {/* Appointments & Contact Column - Far Right (Span 6) */}
                    <div className="col-span-1 md:col-span-6 flex flex-col items-start md:items-end gap-5">
                        <div className="flex flex-col items-start md:items-end gap-5">
                            <div className="flex items-center gap-3">
                                <div className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse" />
                                <h4 className="text-sm font-bold text-green-500 uppercase tracking-wider">
                                    Accepting Appointments
                                </h4>
                            </div>
                            <div className="flex items-center gap-4 mt-2 justify-start md:justify-end w-full">
                                <a href="tel:+19549643955" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-blue-500/20 transition-colors group" aria-label="Call Us">
                                    <Phone size={18} className="text-blue-500 group-hover:text-white transition-colors" />
                                </a>
                                <a href="mailto:tintmasterjon@gmail.com" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-blue-500/20 transition-colors group" aria-label="Email Us">
                                    <Mail size={18} className="text-blue-500 group-hover:text-white transition-colors" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-8 border-t border-white/5">
                    <p className="text-xs text-gray-600 font-mono">
                        © {new Date().getFullYear()} Brian's Window Tinting. All rights reserved.
                    </p>

                    <div className="flex items-center gap-6">
                        {/* Socials - Integrated Horizontal */}
                        <div className="flex gap-4">
                            <a href="https://www.facebook.com/Brians0425?ref=hl" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-[#1877F2] transition-colors" aria-label="Facebook">
                                <Facebook size={18} />
                            </a>
                            <a href="mailto:tintmasterjon@gmail.com" className="text-gray-600 hover:text-[#EA4335] transition-colors" aria-label="Gmail">
                                <Mail size={18} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
