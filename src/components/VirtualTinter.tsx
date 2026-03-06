import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GlowingEffect } from './ui/glowing-effect';

const VirtualTinter: React.FC = () => {
    const [tintLevel, setTintLevel] = useState(0); // 0 (None), 5, 20, 35, 50

    const tintOptions = [
        { level: 0, label: "Clear", opacity: 0 },
        { level: 50, label: "50%", opacity: 0.3 },
        { level: 35, label: "35% (Legal Front)", opacity: 0.5 },
        { level: 20, label: "20% (Legal Rear)", opacity: 0.8 },
        { level: 5, label: "5% (Limo)", opacity: 0.95 },
    ];

    return (
        <div style={{ padding: '200px 0 80px', minHeight: '100vh' }}>
            <div className="container">
                <header style={{ textAlign: 'center', marginBottom: '60px' }}>
                    <span className="subtitle">INTERACTIVE SIMULATOR</span>
                    <h1 style={{ fontSize: '3.5rem', fontWeight: 800, marginTop: '8px' }} className="text-gradient">
                        Virtual Tinter
                    </h1>
                    <p style={{ maxWidth: '600px', margin: '20px auto 0', color: 'var(--secondary-text)' }}>
                        Visualize how different tint percentages will look on your vehicle. Use the selector below to adjust the shade.
                    </p>
                </header>

                <div className="glass-card" style={{ padding: '60px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '60px' }}>
                    {/* Car Display */}
                    <div style={{ position: 'relative', width: '100%', maxWidth: '900px' }}>
                        {/* The transparent car profile */}
                        <img
                            src="/assets/virtual_car_side.png"
                            alt="Car Side View"
                            style={{ width: '100%', height: 'auto', display: 'block' }}
                        />

                        {/* The Tint Overlays (Simplified as polygons for window areas) */}
                        {/* Note: In a real app, these would be precise SVG paths or separate images. 
                Here I'll use a CSS-based overlay on top of the image to simulate tinting the whole car 
                but focusing on the windows via mask-image if possible, or just a darkening effect. 
                For the simulation, I'll use a smart overlay. */}
                        <AnimatePresence>
                            <motion.div
                                key={tintLevel}
                                initial={{ opacity: 0 }}
                                animate={{
                                    opacity: tintOptions.find(o => o.level === tintLevel)?.opacity || 0
                                }}
                                transition={{ duration: 0.5 }}
                                style={{
                                    position: 'absolute',
                                    top: '25%', // Roughly window height area
                                    left: '15%',
                                    right: '15%',
                                    bottom: '40%',
                                    background: '#000',
                                    borderRadius: '20px 100px 0 0', // Rough car roof/window shape
                                    pointerEvents: 'none',
                                    filter: 'blur(5px)',
                                }}
                            />
                        </AnimatePresence>
                    </div>

                    {/* Controls */}
                    <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', justifyContent: 'center' }}>
                        {tintOptions.map((option) => (
                            <button
                                key={option.level}
                                onClick={() => setTintLevel(option.level)}
                                style={{
                                    padding: '16px 32px',
                                    borderRadius: '16px',
                                    background: tintLevel === option.level ? 'var(--accent-color)' : 'rgba(255,255,255,0.05)',
                                    color: '#fff',
                                    fontWeight: 600,
                                    border: '1px solid',
                                    borderColor: tintLevel === option.level ? 'var(--accent-color)' : 'rgba(255,255,255,0.1)',
                                    transition: 'var(--transition-smooth)',
                                    position: 'relative',
                                    overflow: 'hidden'
                                }}
                            >
                                {tintLevel === option.level && <GlowingEffect spread={40} glow={true} disabled={false} proximity={64} inactiveZone={0.01} borderWidth={2} />}
                                <span style={{ position: 'relative', zIndex: 10 }}>{option.label}</span>
                            </button>
                        ))}
                    </div>

                    <div style={{ textAlign: 'center', color: 'var(--secondary-text)', maxWidth: '500px' }}>
                        <p style={{ fontSize: '0.9rem', fontStyle: 'italic' }}>
                            Note: Visual representation is for simulation purposes only. Actual film appearance may vary based on glass color and lighting conditions.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VirtualTinter;
