import React from 'react';
import { motion } from 'framer-motion';
import { Car, Home, Building2, CheckCircle2 } from 'lucide-react';
import { DottedSurface } from './ui/dotted-surface';
import { GlowingEffect } from './ui/glowing-effect';

const Services: React.FC = () => {
    const services = [
        {
            title: "Automotive Window Tinting",
            description: "Our signature service Since 1982. We use computer-cut patterns for precision and speed, ensuring a perfect fit for your vehicle without ever touching your glass with a blade.",
            icon: <Car size={32} />,
            image: "/assets/services_automotive.png",
            features: ["Heat & UV Protection", "Shatter Resistance", "Lifetime Warranty", "Computer-Cut Precision"]
        },
        {
            title: "Residential Window Tinting",
            description: "Protect your home's interior from fading and reduce your energy bills. Our residential films provide privacy while maintaining your view of the outside world.",
            icon: <Home size={32} />,
            image: "/assets/services_residential.png",
            features: ["Reduce AC Costs", "UV Protection for Furniture", "Enhanced Privacy", "Decorative Options"]
        },
        {
            title: "Commercial Window Tinting",
            description: "Improve the comfort and efficiency of your office building. Our commercial solutions help regulate temperature and reduce glare on screens for a better work environment.",
            icon: <Building2 size={32} />,
            image: "/assets/services_commercial.png",
            features: ["Energy Efficiency", "Employee Comfort", "Safety & Security Film", "Professional Appearance"]
        }
    ];

    return (
        <div style={{ padding: '200px 0 80px', minHeight: '100vh', position: 'relative' }}>
            <DottedSurface />
            <div className="container" style={{ position: 'relative', zIndex: 10 }}>
                <header style={{ textAlign: 'center', marginBottom: '80px' }}>
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="subtitle"
                    >
                        OUR EXPERTISE
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        style={{ fontSize: '3.5rem', fontWeight: 800, marginTop: '8px' }}
                        className="text-gradient"
                    >
                        Precision Tinting Services
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        style={{ maxWidth: '600px', margin: '20px auto 0', color: 'var(--secondary-text)' }}
                    >
                        From your daily driver to your corporate headquarters, Brian's Window Tinting provides industry-leading protection and style.
                    </motion.p>
                </header>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '60px' }}>
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className={`glass-card group relative grid grid-cols-1 ${index % 2 === 0 ? 'md:grid-cols-[1fr_1.2fr]' : 'md:grid-cols-[1.2fr_1fr]'}`}
                            style={{
                                overflow: 'hidden',
                                alignItems: 'center',
                                gap: '40px',
                                padding: 0,
                                border: '1px solid rgba(255,255,255,0.05)'
                            }}
                        >
                            <GlowingEffect spread={40} glow={true} disabled={false} proximity={64} inactiveZone={0.01} borderWidth={2} className="opacity-0 group-hover:opacity-100 transition-opacity z-20 pointer-events-none" />
                            <div
                                style={{
                                    order: index % 2 === 0 ? 1 : 2,
                                    padding: '60px',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: '24px'
                                }}
                            >
                                <div style={{
                                    width: '64px',
                                    height: '64px',
                                    background: 'var(--accent-glow)',
                                    borderRadius: '16px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    color: 'var(--accent-color)'
                                }}>
                                    {service.icon}
                                </div>
                                <h2 style={{ fontSize: '2rem', fontWeight: 700 }}>{service.title}</h2>
                                <p style={{ color: 'var(--secondary-text)', fontSize: '1.1rem' }}>{service.description}</p>
                                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                                    {service.features.map((feature, fIdx) => (
                                        <div key={fIdx} style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'rgba(255,255,255,0.8)' }}>
                                            <CheckCircle2 size={18} color="var(--accent-color)" />
                                            <span style={{ fontSize: '0.95rem' }}>{feature}</span>
                                        </div>
                                    ))}
                                </div>
                                <button className="primary-btn" style={{ marginTop: '20px', width: 'fit-content' }}>
                                    <GlowingEffect spread={40} glow={true} disabled={false} proximity={64} inactiveZone={0.01} borderWidth={2} />
                                    <span style={{ position: 'relative', zIndex: 10 }}>Learn More</span>
                                </button>
                            </div>

                            <div style={{
                                order: index % 2 === 0 ? 2 : 1,
                                height: '100%',
                                minHeight: '500px',
                                position: 'relative'
                            }}>
                                <img
                                    src={service.image}
                                    alt={service.title}
                                    loading="lazy"
                                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                />
                                <div style={{
                                    position: 'absolute',
                                    inset: 0,
                                    background: index % 2 === 0
                                        ? 'linear-gradient(to right, var(--bg-secondary) 0%, transparent 100%)'
                                        : 'linear-gradient(to left, var(--bg-secondary) 0%, transparent 100%)'
                                }} />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Services;
