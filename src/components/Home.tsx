import React from 'react';
import Hero from './Hero';
import HomeAbout from './HomeAbout';
import Contact from './Contact';
import { Calendar } from './ui/calendar';
import RadialOrbitalTimeline from './ui/radial-orbital-timeline';
import { LocationMap } from './ui/expand-map';
import { Car, Building2, Home as HomeIcon } from 'lucide-react';

const serviceTimelineData = [
    {
        id: 1,
        title: "Automotive Tinting",
        date: "Est. 1982",
        content: "Our signature service. We use computer-cut patterns for precision and speed, ensuring a perfect fit without ever taking a blade to your glass.",
        category: "Automotive",
        icon: Car,
        relatedIds: [2, 3],
        status: "completed" as const,
        energy: 100,
        link: "services",
    },
    {
        id: 2,
        title: "Residential Tinting",
        date: "Energy Savings",
        content: "Reduce AC costs and protect furniture from UV fading. Our premium residential films provide privacy while preserving your view.",
        category: "Residential",
        icon: HomeIcon,
        relatedIds: [1, 3],
        status: "in-progress" as const,
        energy: 85,
        link: "services",
    },
    {
        id: 3,
        title: "Commercial Tinting",
        date: "Better Workspaces",
        content: "Regulate climate proactively, reduce screen glare, and secure your facilities with our advanced commercial window films.",
        category: "Commercial",
        icon: Building2,
        relatedIds: [1, 2],
        status: "pending" as const,
        energy: 75,
        link: "services",
    }
];

interface HomeProps {
    setPage?: (page: 'home' | 'services' | 'work' | 'virtual' | 'laws' | 'about' | 'contact') => void;
}

const Home: React.FC<HomeProps> = ({ setPage }) => {
    return (
        <div className="flex flex-col w-full">
            <Hero setPage={setPage} />
            <div className="bg-black relative z-10">
                <div className="container mx-auto" style={{ paddingTop: '80px', paddingBottom: '20px' }}>
                    <h2 className="text-4xl md:text-5xl font-black text-white text-center mb-8">Explore Our Services</h2>
                    <RadialOrbitalTimeline timelineData={serviceTimelineData} setPage={setPage} />
                </div>
            </div>

            <div className="py-24 bg-black flex flex-col items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(59,130,246,0.05)_0%,_transparent_70%)]" />

                <div className="container mx-auto flex flex-col items-center z-10">
                    <p className="text-blue-500/80 text-sm font-bold tracking-[0.2em] uppercase mb-12">Find Our Shop</p>
                    <LocationMap
                        location="Brian's Window Tinting"
                        coordinates="5939 W Park Rd, Hollywood, FL 33021"
                    />
                </div>
            </div>

            <div className="py-12 bg-black">
                <Calendar />
            </div>
            <HomeAbout />
            <Contact />
        </div>
    );
};

export default Home;
