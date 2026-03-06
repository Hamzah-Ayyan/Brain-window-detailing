import React from 'react';
import { motion } from 'framer-motion';
import { GlowingEffect } from './ui/glowing-effect';

const Gallery: React.FC = () => {
    const images = [
        { src: "/assets/hero_car.png", title: "Luxury Sedan", description: "35% Ceramic Tint" },
        { src: "/assets/gallery_sports_car.png", title: "Sports Coupe", description: "20% Carbon Tint" },
        { src: "/assets/gallery_suv.png", title: "Premium SUV", description: "5% Limo Tint" },
        { src: "/assets/services_automotive.png", title: "Custom Detailing", description: "Full Window Protection" }
    ];

    return (
        <div style={{ padding: '200px 0 80px', minHeight: '100vh' }}>
            <div className="container">
                <header style={{ textAlign: 'center', marginBottom: '80px' }}>
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="subtitle"
                    >
                        OUR PORTFOLIO
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        style={{ fontSize: '3.5rem', fontWeight: 800, marginTop: '8px' }}
                        className="text-gradient"
                    >
                        Showcase of Excellence
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        style={{ maxWidth: '600px', margin: '20px auto 0', color: 'var(--secondary-text)' }}
                    >
                        Take a look at some of our recent projects. We take pride in every cut and every install.
                    </motion.p>
                </header>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(400px, 1fr))',
                    gap: '30px'
                }}>
                    {images.map((img, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="glass-card group relative"
                            style={{ padding: '0', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.05)' }}
                        >
                            <GlowingEffect spread={40} glow={true} disabled={false} proximity={64} inactiveZone={0.01} borderWidth={2} className="opacity-0 group-hover:opacity-100 transition-opacity z-20 pointer-events-none" />
                            <div style={{ position: 'relative', height: '300px', overflow: 'hidden', zIndex: 10 }}>
                                <img
                                    src={img.src}
                                    alt={img.title}
                                    loading="lazy"
                                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                />
                                <div style={{
                                    position: 'absolute',
                                    inset: 0,
                                    background: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 100%)',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'flex-end',
                                    padding: '30px',
                                    opacity: 0,
                                    transition: 'opacity 0.3s ease',
                                }}
                                    onMouseEnter={(e) => (e.currentTarget.style.opacity = '1')}
                                    onMouseLeave={(e) => (e.currentTarget.style.opacity = '0')}
                                >
                                    <h3 style={{ fontSize: '1.5rem', fontWeight: 700 }}>{img.title}</h3>
                                    <p style={{ color: 'var(--accent-color)', fontWeight: 600 }}>{img.description}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Gallery;
