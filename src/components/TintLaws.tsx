import React from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, Info } from 'lucide-react';
import { GlowingEffect } from './ui/glowing-effect';

const TintLaws: React.FC = () => {
    return (
        <div style={{ padding: '200px 0 80px', minHeight: '100vh' }}>
            <div className="container">
                <header style={{ textAlign: 'center', marginBottom: '80px' }}>
                    <span className="subtitle">LEGAL GUIDELINES</span>
                    <h1 style={{ fontSize: '3.5rem', fontWeight: 800, marginTop: '8px' }} className="text-gradient">
                        Florida Tint Laws
                    </h1>
                    <p style={{ maxWidth: '600px', margin: '20px auto 0', color: 'var(--secondary-text)' }}>
                        Stay legal and stay safe. Here are the current window tinting regulations for the state of Florida.
                    </p>
                </header>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px' }}>
                    {/* Passenger Cars */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="glass-card group relative overflow-hidden"
                        style={{ padding: '40px' }}
                    >
                        <GlowingEffect spread={40} glow={true} disabled={false} proximity={64} inactiveZone={0.01} borderWidth={2} className="opacity-0 group-hover:opacity-100 transition-opacity z-20 pointer-events-none" />
                        <h2 className="relative z-10" style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '12px' }}>
                            Passenger Cars
                        </h2>
                        <div className="relative z-10" style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                            <LawRow label="Windshield" value="Non-reflective tint allowed above the AS-1 line" />
                            <LawRow label="Front Side Windows" value="Must allow more than 28% of light in" />
                            <LawRow label="Back Side Windows" value="Must allow more than 15% of light in" />
                            <LawRow label="Rear Window" value="Must allow more than 15% of light in" />
                        </div>
                    </motion.div>

                    {/* SUV & Vans */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="glass-card group relative overflow-hidden"
                        style={{ padding: '40px' }}
                    >
                        <GlowingEffect spread={40} glow={true} disabled={false} proximity={64} inactiveZone={0.01} borderWidth={2} className="opacity-0 group-hover:opacity-100 transition-opacity z-20 pointer-events-none" />
                        <h2 className="relative z-10" style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '24px' }}>Multi-Purpose Vehicles</h2>
                        <div className="relative z-10" style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                            <LawRow label="Windshield" value="Non-reflective tint allowed above the AS-1 line" />
                            <LawRow label="Front Side Windows" value="Must allow more than 28% of light in" />
                            <LawRow label="Back Side Windows" value="Must allow more than 6% of light in" />
                            <LawRow label="Rear Window" value="Must allow more than 6% of light in" />
                        </div>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="glass-card group relative overflow-hidden"
                    style={{
                        marginTop: '40px',
                        padding: '40px',
                        background: 'rgba(59, 130, 246, 0.05)',
                        borderColor: 'rgba(59, 130, 246, 0.2)'
                    }}
                >
                    <GlowingEffect spread={40} glow={true} disabled={false} proximity={64} inactiveZone={0.01} borderWidth={2} className="opacity-0 group-hover:opacity-100 transition-opacity z-20 pointer-events-none" />
                    <div className="relative z-10" style={{ display: 'flex', gap: '24px', alignItems: 'flex-start' }}>
                        <div style={{ color: 'var(--accent-color)' }}><Info size={32} /></div>
                        <div>
                            <h3 style={{ fontSize: '1.3rem', fontWeight: 700, marginBottom: '8px' }}>Other Florida Tint Regulations</h3>
                            <ul style={{ color: 'var(--secondary-text)', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                                <li>• <strong>Reflection:</strong> Front side windows must not be more than 25% reflective. Back side windows must not be more than 35% reflective.</li>
                                <li>• <strong>Restricted Colors:</strong> Florida law does not explicitly ban any tint colors, but some colors may interfere with visibility.</li>
                                <li>• <strong>Side Mirrors:</strong> Dual side mirrors are required if the rear window is tinted.</li>
                                <li>• <strong>Medical Exemptions:</strong> Florida allows medical exemptions for special tint. Contact the DMV for details.</li>
                            </ul>
                        </div>
                    </div>
                </motion.div>

                <div style={{ marginTop: '40px', display: 'flex', alignItems: 'center', gap: '12px', justifyContent: 'center', color: 'rgba(255,255,255,0.4)', fontSize: '0.9rem' }}>
                    <AlertTriangle size={16} />
                    <span>Laws are subject to change. Always consult with a professional.</span>
                </div>
            </div>
        </div>
    );
};

const LawRow = ({ label, value }: { label: string; value: string }) => (
    <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingBottom: '16px',
        borderBottom: '1px solid rgba(255,255,255,0.05)'
    }}>
        <span style={{ fontWeight: 600, color: 'rgba(255,255,255,0.8)' }}>{label}</span>
        <span style={{ color: 'var(--accent-color)', fontWeight: 500 }}>{value}</span>
    </div>
);

export default TintLaws;
