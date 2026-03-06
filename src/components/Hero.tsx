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

            {/* === Layer 2: Main Content (3D Overlap Composition) === */}
            <div className="container relative z-10 flex flex-row items-center justify-center w-full max-w-[1400px] px-2 md:px-8" style={{ marginTop: '2vh' }}>

                {/* Upper/Left Column: Car Image with 3D parallax & Sculptural Lighting */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9, x: -30 }}
                    animate={{ opacity: 1, scale: 1, x: 0 }}
                    transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                    className="w-[55%] md:w-[60%] lg:w-[60%] relative z-20 -mr-[12%] md:-mr-[10%] lg:-mr-[8%]"
                    style={{
                        rotateX,
                        rotateY,
                        transformPerspective: 1200
                    }}
                >
                    <img
                        src="/assets/hero_car_true_transparent.png"
                        alt="High-end tinted luxury hypercar"
                        fetchPriority="high"
                        loading="eager"
                        style={{
                            width: '100%',
                            height: 'auto',
                            objectFit: 'contain',
                            // More pronounced, sculptural lighting
                            filter: 'drop-shadow(0 40px 60px rgba(0,0,0,0.95)) drop-shadow(0 15px 25px rgba(0,0,0,0.8)) contrast(1.2) saturate(1.15) brightness(1.05)',
                        }}
                    />
                </motion.div>

                {/* Lower/Right Column: Prismatic Glassmorphic Container */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
                    className="w-[55%] md:w-[50%] lg:w-[48%] relative z-10"
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        textAlign: 'center',
                        // High-end glassmorphism background
                        background: 'linear-gradient(145deg, rgba(30, 30, 30, 0.4) 0%, rgba(5, 5, 5, 0.7) 100%)',
                        backdropFilter: 'blur(40px)',
                        WebkitBackdropFilter: 'blur(40px)',
                        // Highly polished prismatic edges creating light refractions
                        borderTop: '1px solid rgba(255, 255, 255, 0.15)',
                        borderLeft: '1px solid rgba(255, 255, 255, 0.08)',
                        borderRight: '1px solid rgba(255, 255, 255, 0.03)',
                        borderBottom: '1px solid rgba(0, 0, 0, 0.9)',
                        borderRadius: '32px',
                        padding: 'clamp(16px, 3vw, 40px) clamp(12px, 2vw, 32px)',
                        paddingLeft: 'clamp(36px, 10vw, 64px)', // Shifts text block safely away from Left Car Overlap
                        boxShadow: '0 50px 100px rgba(0,0,0,0.9), inset 0 2px 15px rgba(255,255,255,0.05), inset 0 -2px 20px rgba(0,0,0,0.5)',
                    }}
                >
                    {/* Stars */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '4px', marginBottom: '12px' }}>
                        <div style={{ display: 'flex', color: '#fbbf24' }}>
                            {[1, 2, 3, 4, 5].map((s) => <Star key={s} size={12} fill="#fbbf24" stroke="none" style={{ filter: 'drop-shadow(0 0 6px rgba(251, 191, 36, 0.4))' }} />)}
                        </div>
                        <span style={{ fontSize: 'clamp(9px, 1vw, 12px)', fontWeight: 600, color: '#e5e7eb', letterSpacing: '0.02em' }}>Over 500+ Five Star Reviews</span>
                    </div>

                    {/* Heading */}
                    <h1 style={{
                        fontSize: 'clamp(20px, 3.5vw, 54px)',
                        fontWeight: 900,
                        lineHeight: 1.05,
                        marginBottom: '12px',
                        color: '#fff',
                        letterSpacing: '-0.03em',
                        textShadow: '0 10px 30px rgba(0,0,0,0.6)'
                    }}>
                        WINDOW TINTING<br />DONE RIGHT.
                    </h1>

                    {/* Subtitle */}
                    <p style={{
                        marginBottom: '24px',
                        fontSize: 'clamp(12px, 1.25vw, 1.05rem)',
                        lineHeight: 1.5,
                        color: 'rgba(255, 255, 255, 0.75)',
                        fontFamily: "'Solitreo', cursive",
                        textShadow: '0 0 12px rgba(255, 255, 255, 0.15)',
                        maxWidth: '92%',
                        marginInline: 'auto',
                        textAlign: 'center'
                    }}>
                        Premium window tinting with computer-cut precision and a lifetime warranty.
                    </p>

                    {/* Buttons */}
                    <div style={{ display: 'flex', gap: '8px', marginTop: '4px', flexWrap: 'wrap', justifyContent: 'center' }}>
                        <button className="primary-btn" onClick={() => setPage?.('contact')} style={{ padding: 'clamp(8px, 1.5vw, 14px) clamp(12px, 2vw, 28px)', borderRadius: '14px' }}>
                            <GlowingEffect spread={40} glow={true} disabled={false} proximity={64} inactiveZone={0.01} borderWidth={2} />
                            <span style={{ position: 'relative', zIndex: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px', fontSize: 'clamp(12px, 1.2vw, 15px)' }}>Book Appointment <ArrowRight size={14} /></span>
                        </button>
                        <button className="secondary-btn" onClick={() => setPage?.('services')} style={{ padding: 'clamp(8px, 1.5vw, 14px) clamp(12px, 2vw, 28px)', borderRadius: '14px' }}>
                            <GlowingEffect spread={40} glow={true} disabled={false} proximity={64} inactiveZone={0.01} borderWidth={2} />
                            <span style={{ position: 'relative', zIndex: 10, fontSize: 'clamp(12px, 1.2vw, 15px)' }}>Our Services</span>
                        </button>
                    </div>
                </motion.div>

            </div>
        </section>
    );
};

export default Hero;

