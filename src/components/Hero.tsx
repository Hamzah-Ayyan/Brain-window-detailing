import React, { type MouseEvent } from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { ArrowRight, Star } from 'lucide-react';
import { BackgroundGradientAnimation } from './ui/background-gradient-animation';
import { FloatingPaths } from './ui/background-paths';
import { GlowingEffect } from './ui/glowing-effect';

interface HeroProps {
    setPage?: (page: 'home' | 'services' | 'work' | 'virtual' | 'laws' | 'about' | 'contact') => void;
}

const Hero: React.FC<HeroProps> = ({ setPage }) => {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const handleMouseMove = (e: MouseEvent<HTMLElement>) => {
        const { clientX, clientY, currentTarget } = e;
        const { left, top, width, height } = currentTarget.getBoundingClientRect();
        const x = (clientX - left - width / 2) / 30;
        const y = (clientY - top - height / 2) / 30;
        mouseX.set(x);
        mouseY.set(y);
    };

    const handleMouseLeave = () => {
        mouseX.set(0);
        mouseY.set(0);
    };

    const springConfig = { damping: 30, stiffness: 100 };
    const rotateX = useSpring(useTransform(mouseY, [-20, 20], [10, -10]), springConfig);
    const rotateY = useSpring(useTransform(mouseX, [-20, 20], [-10, 10]), springConfig);

    return (
        <section
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                minHeight: '100vh',
                width: '100%',
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '200px 0 80px',
                overflow: 'hidden',
            }}>

            {/* === Layer 0: Animated Gradient Background === */}
            <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
                <BackgroundGradientAnimation
                    gradientBackgroundStart="rgb(0, 0, 0)"
                    gradientBackgroundEnd="rgb(5, 5, 5)"
                    firstColor="30, 30, 30"
                    secondColor="15, 15, 15"
                    thirdColor="45, 45, 45"
                    fourthColor="25, 25, 25"
                    fifthColor="10, 10, 10"
                    pointerColor="55, 55, 55"
                    containerClassName="!h-full !w-full"
                    interactive={false}
                />
            </div>

            {/* === Layer 0.25: Animated SVG Paths === */}
            <div style={{ position: 'absolute', inset: 0, zIndex: 0, opacity: 0.4 }}>
                <FloatingPaths position={1} />
                <FloatingPaths position={-1} />
            </div>

            {/* === Layer 0.5: Video Background from TuringLanding === */}
            <video
                autoPlay
                muted
                loop
                playsInline
                style={{
                    position: 'absolute',
                    top: '-20%',
                    left: 0,
                    width: '100%',
                    height: '120%',
                    objectFit: 'cover',
                    zIndex: 0,
                    opacity: 0.3,
                    mixBlendMode: 'lighten',
                    background: '#111',
                }}
            >
                <source
                    src="https://mybycketvercelprojecttest.s3.sa-east-1.amazonaws.com/animation-bg.mp4"
                    type="video/mp4"
                />
            </video>

            {/* === Layer 1: Blue gradient overlays from TuringLanding === */}
            <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 1 }}>
                <div style={{
                    position: 'absolute', inset: 0,
                    background: 'linear-gradient(to right, rgba(0,132,255,0.15), transparent, transparent)',
                    opacity: 0.5,
                }} />
                <div style={{
                    position: 'absolute', inset: 0,
                    background: 'linear-gradient(to bottom left, rgba(0,132,255,0.1), transparent, transparent)',
                    opacity: 0.5,
                }} />
                {/* Fade to black at bottom for smooth transition to next section */}
                <div style={{
                    position: 'absolute', bottom: 0, left: 0, right: 0,
                    height: '250px',
                    background: 'linear-gradient(to bottom, transparent, #000000)',
                }} />
            </div>

            {/* === Layer 2: Main Content Grid === */}
            <div className="container" style={{
                position: 'relative',
                zIndex: 2,
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                alignItems: 'center',
                gap: '40px',
                maxWidth: '1400px',
                width: '100%',
            }}>

                {/* Left Column: Car Image with 3D parallax */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    style={{
                        position: 'relative',
                        zIndex: 10,
                        width: '120%',
                        marginLeft: '-10%',
                        rotateX,
                        rotateY,
                        transformPerspective: 1000
                    }}
                >
                    <img
                        src="/assets/hero_car_true_transparent.png"
                        alt="High-end tinted luxury car"
                        style={{
                            width: '100%',
                            height: 'auto',
                            objectFit: 'contain',
                            filter: 'drop-shadow(0 40px 80px rgba(0,0,0,0.9)) contrast(1.15) saturate(1.1)',
                        }}
                    />
                </motion.div>

                {/* Right Column: Glass Panel */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    style={{
                        zIndex: 5,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        textAlign: 'center',
                        background: 'rgba(255, 255, 255, 0.03)',
                        backdropFilter: 'blur(24px)',
                        WebkitBackdropFilter: 'blur(24px)',
                        border: '1px solid rgba(255, 255, 255, 0.08)',
                        borderRadius: '24px',
                        padding: '36px 28px',
                        boxShadow: '0 30px 60px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.1)'
                    }}
                >
                    {/* Stars */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '16px' }}>
                        <div style={{ display: 'flex', color: '#fbbf24' }}>
                            {[1, 2, 3, 4, 5].map((s) => <Star key={s} size={12} fill="#fbbf24" stroke="none" />)}
                        </div>
                        <span style={{ fontSize: '11px', fontWeight: 600, color: 'var(--secondary-text)' }}>Over 500+ Five Star Reviews</span>
                    </div>

                    {/* Heading */}
                    <h1 style={{
                        fontSize: 'clamp(28px, 3.5vw, 48px)',
                        fontWeight: 900,
                        lineHeight: 1.05,
                        marginBottom: '16px',
                        color: '#fff',
                        letterSpacing: '-0.02em'
                    }}>
                        WINDOW TINTING<br />DONE RIGHT.
                    </h1>

                    {/* Subtitle */}
                    <p style={{
                        marginBottom: '24px',
                        fontSize: '0.85rem',
                        lineHeight: 1.5,
                        color: 'var(--secondary-text)',
                        whiteSpace: 'nowrap',
                        fontFamily: "'Solitreo', cursive",
                    }}>
                        Hollywood's premier window tinting specialists. Computer-cut precision, lifetime warranty, and 40+ years of experience.
                    </p>

                    {/* Buttons */}
                    <div style={{ display: 'flex', gap: '12px' }}>
                        <button className="primary-btn" style={{ padding: '10px 20px', fontSize: '13px' }} onClick={() => setPage?.('contact')}>
                            <GlowingEffect spread={40} glow={true} disabled={false} proximity={64} inactiveZone={0.01} borderWidth={2} />
                            <span style={{ position: 'relative', zIndex: 10, display: 'flex', alignItems: 'center', gap: '8px' }}>Book Appointment <ArrowRight size={15} /></span>
                        </button>
                        <button className="secondary-btn" style={{ padding: '10px 20px', fontSize: '13px' }} onClick={() => setPage?.('services')}>
                            <GlowingEffect spread={40} glow={true} disabled={false} proximity={64} inactiveZone={0.01} borderWidth={2} />
                            <span style={{ position: 'relative', zIndex: 10 }}>Our Services</span>
                        </button>
                    </div>
                </motion.div>

            </div>
        </section>
    );
};

export default Hero;

