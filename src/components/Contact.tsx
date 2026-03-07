import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import { GlowingEffect } from './ui/glowing-effect';

const Contact: React.FC = () => {
    return (
        <section style={{
            width: '100%',
            position: 'relative',
            padding: '200px 0 100px',
            backgroundColor: '#000'
        }}>
            <div className="container grid grid-cols-1 md:grid-cols-[1fr_1.2fr]" style={{
                position: 'relative',
                zIndex: 2,
                gap: '60px',
            }}>
                {/* Info Card */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="glass-card"
                    style={{
                        padding: '60px',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '40px',
                    }}
                >
                    <div>
                        <span className="subtitle">GET IN TOUCH</span>
                        <h2 style={{ fontSize: '3rem', fontWeight: 800, marginTop: '8px' }}>Visit Our Shop</h2>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
                        <ContactItem
                            icon={<MapPin />}
                            title="Location"
                            text="5939 W Park Rd, Hollywood, FL 33021"
                        />
                        <ContactItem
                            icon={<Phone />}
                            title="Phone"
                            text="(954) 964-3955"
                            link="tel:+19549643955"
                        />
                        <ContactItem
                            icon={<Mail />}
                            title="Email"
                            text="tintmasterjon@gmail.com"
                            link="mailto:tintmasterjon@gmail.com"
                        />
                        <ContactItem
                            icon={<Clock />}
                            title="Hours"
                            text="Mon - Sat: 9am - 5pm | Sun: Closed"
                        />
                    </div>

                    <div style={{ marginTop: 'auto' }}>
                        <p style={{ color: 'var(--secondary-text)', fontSize: '0.9rem' }}>
                            Located at the same Hollywood location for over 20 years. Stop by and see why we're South Florida's #1 choice for window tinting.
                        </p>
                    </div>
                </motion.div>

                {/* Contact Form Card */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="glass-card"
                    style={{
                        padding: '60px',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '32px',
                    }}
                >
                    <h2 style={{ fontSize: '2.5rem', fontWeight: 800 }}>Schedule Appointment</h2>
                    <form style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                            <FormInput placeholder="Your Name" />
                            <FormInput placeholder="Your Email" type="email" />
                        </div>
                        <FormInput placeholder="Phone Number" />
                        <select style={{
                            background: 'rgba(255,255,255,0.03)',
                            border: '1px solid var(--glass-border)',
                            padding: '16px',
                            borderRadius: '12px',
                            color: '#fff',
                            fontSize: '16px',
                            outline: 'none',
                        }}>
                            <option value="">Select Service</option>
                            <option value="automotive">Automotive Tinting</option>
                            <option value="residential">Residential Tinting</option>
                            <option value="commercial">Commercial Tinting</option>
                        </select>
                        <textarea
                            placeholder="Tell us about your vehicle or project"
                            rows={4}
                            style={{
                                background: 'rgba(255,255,255,0.03)',
                                border: '1px solid var(--glass-border)',
                                padding: '16px',
                                borderRadius: '12px',
                                color: '#fff',
                                fontSize: '16px',
                                resize: 'none',
                                outline: 'none',
                            }}
                        />
                        <button
                            className="primary-btn"
                            style={{
                                marginTop: '10px',
                                justifyContent: 'center',
                                width: '100%'
                            }}
                            onClick={(e) => e.preventDefault()}
                        >
                            <GlowingEffect spread={40} glow={true} disabled={false} proximity={64} inactiveZone={0.01} borderWidth={2} />
                            <span style={{ position: 'relative', zIndex: 10, width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>SUBMIT REQUEST</span>
                        </button>
                    </form>
                </motion.div>
            </div>
        </section>
    );
};

const ContactItem = ({ icon, title, text, link }: { icon: React.ReactNode; title: string; text: string; link?: string }) => (
    <div style={{ display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
        <div style={{
            width: '48px',
            height: '48px',
            background: 'var(--accent-glow)',
            borderRadius: '14px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'var(--accent-color)',
            flexShrink: 0
        }}>
            {icon}
        </div>
        <div>
            <div style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--secondary-text)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{title}</div>
            {link ? (
                <a href={link} style={{ fontSize: '1.2rem', fontWeight: 600, color: '#fff', transition: 'var(--transition-smooth)' }} onMouseEnter={(e) => e.currentTarget.style.color = 'var(--accent-color)'} onMouseLeave={(e) => e.currentTarget.style.color = '#fff'}>
                    {text}
                </a>
            ) : (
                <div style={{ fontSize: '1.2rem', fontWeight: 600, color: '#fff' }}>{text}</div>
            )}
        </div>
    </div>
);

const FormInput = ({ placeholder, type = "text" }: { placeholder: string; type?: string }) => (
    <input
        type={type}
        placeholder={placeholder}
        style={{
            background: 'rgba(255,255,255,0.03)',
            border: '1px solid var(--glass-border)',
            padding: '16px',
            borderRadius: '12px',
            color: '#fff',
            fontSize: '16px',
            outline: 'none',
            transition: 'var(--transition-smooth)',
        }}
    />
);

export default Contact;
