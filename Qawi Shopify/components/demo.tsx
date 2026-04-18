import { Navbar } from "@/components/ui/mini-navbar";
import React from "react";

const DemoOne = () => {
  return (
    <div className="relative min-h-screen bg-[#0a0a0a] text-white font-sans overflow-hidden">
      <div className="absolute inset-0">
        <img 
          className="w-full h-full object-cover grayscale opacity-30 mix-blend-overlay" 
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop" 
          alt="Premium Dark Aesthetic Background" 
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-[#0a0a0a]/80 to-[#0a0a0a]"></div>
      </div>

      <Navbar />

      <main className="relative z-10 flex flex-col items-center justify-center h-screen text-center px-4 pt-24">
        <h1 className="text-6xl md:text-9xl font-extrabold text-white mb-6 tracking-tighter drop-shadow-2xl">
          QAWI BRAND
        </h1>
        <p className="text-lg md:text-2xl text-gray-400 max-w-2xl mx-auto mb-10 font-light px-4">
          Experience the intersection of high-performance design and minimal aesthetics.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-base">
          <button className="px-8 py-3.5 border border-[#333] bg-white/5 backdrop-blur-sm rounded-full text-white hover:bg-white/10 hover:border-white/30 transition-all duration-300 cursor-pointer shadow-[0_0_20px_rgba(255,255,255,0.03)] w-full sm:w-auto">
            Discover Collection
          </button>
        </div>
      </main>
    </div>
  );
};

export default DemoOne;
