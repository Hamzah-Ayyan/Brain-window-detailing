import React from 'react';
import { motion } from 'framer-motion';
import { History, Award, Users, MapPin } from 'lucide-react';
import { GlowingEffect } from './ui/glowing-effect';

const About: React.FC = () => {
    return (
        <div style={{ padding: '200px 0 80px', minHeight: '100vh' }}>
            <div className="container">
                <header style={{ textAlign: 'center', marginBottom: '80px' }}>
                    <span className="subtitle">OUR STORY</span>
                    <h1 style={{ fontSize: '3.5rem', fontWeight: 800, marginTop: '8px' }} className="text-gradient">
                        Legacy of Quality
                    </h1>
                    <p style={{ maxWidth: '600px', margin: '20px auto 0', color: 'var(--secondary-text)' }}>
                        Serving Hollywood, Florida since 1982 with unmatched precision and customer care.
                    </p>
                </header>

                <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '60px', alignItems: 'center' }}>
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '24px' }}>
                            Over 35 Years of <br />
                            <span style={{ color: 'var(--accent-color)' }}>Professional Excellence</span>
                        </h2>
                        <div style={{ color: 'var(--secondary-text)', fontSize: '1.1rem', display: 'flex', flexDirection: 'column', gap: '20px' }}>
                            <p>
                                We specialize in automotive tinting and have been in business since 1982. We also offer residential and commercial services. Come see us in Hollywood, at the same location for over 20 years, so we can take care of you and your car.
                            </p>
                            <p>
                                All of our films come with a nationwide manufacturer warranty. Meaning after you pay for tint once, you never have to pay again as long as you own your car. We are proud to offer computer-cut window tinting so you don't have to worry about cut rubbers or scratched glass.
                            </p>
                            <p>
                                Our shop has two large bays accommodating even the largest trucks and duallys. We can also work on two cars at a time ensuring that you get in and out of here in an hour. We know you are busy and we are here to provide fast service done right.
                            </p>
                        </div>

                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px', marginTop: '40px' }}>
                            <Stat icon={<History />} label="Years in Business" value="40+" />
                            <Stat icon={<Users />} label="Cars Tinted" value="50,000+" />
                            <Stat icon={<Award />} label="Warranty" value="Lifetime" />
                            <Stat icon={<MapPin />} label="Location" value="Hollywood, FL" />
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="glass-card group relative overflow-hidden"
                        style={{ padding: '0', height: '600px', border: '1px solid rgba(255,255,255,0.05)' }}
                    >
                        <GlowingEffect spread={40} glow={true} disabled={false} proximity={64} inactiveZone={0.01} borderWidth={2} className="opacity-0 group-hover:opacity-100 transition-opacity z-20 pointer-events-none" />
                        <div className="relative z-10 w-full h-full">
                            <img
                                src="/assets/services_automotive.png"
                                alt="Workshop"
                                loading="lazy"
                                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                            />
                        </div>
                        <div style={{
                            position: 'absolute',
                            inset: 0,
                            background: 'linear-gradient(to top, var(--bg-color) 0%, transparent 100%)'
                        }} />
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

const Stat = ({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) => (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
        <div style={{
            width: '48px',
            height: '48px',
            background: 'var(--accent-glow)',
            borderRadius: '12px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'var(--accent-color)'
        }}>
            {icon}
        </div>
        <div>
            <div style={{ fontSize: '1.2rem', fontWeight: 700 }}>{value}</div>
            <div style={{ fontSize: '0.85rem', color: 'var(--secondary-text)' }}>{label}</div>
        </div>
    </div>
);

export default About;
