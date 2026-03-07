import React from 'react';
import { AnimatedTestimonials } from "./ui/animated-testimonials";

const testimonialsData = [
    {
        quote:
            "Got the ceramic premium tint on my Model 3. The heat rejection is unbelievable, and my car finally stays cool sitting in the Florida sun all day. Flawless install, not a single bubble.",
        name: "David Reynolds",
        designation: "Tesla Model 3 Owner",
        src: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=800&auto=format&fit=crop",
    },
    {
        quote:
            "Brian's team tinted the massive floor-to-ceiling windows in our condo. We immediately noticed the AC isn't running constantly anymore, and the glare on our TVs is completely gone. Best investment ever.",
        name: "Sarah Jenkins",
        designation: "Residential Client",
        src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=800&auto=format&fit=crop",
    },
    {
        quote:
            "Took my F-150 in for a full wrap around. They perfectly matched the factory tint on the rear windows to the front doors. Cleanest computer-cut edges I've ever seen.",
        name: "Marcus Thorne",
        designation: "F-150 Raptor Owner",
        src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop",
    },
    {
        quote:
            "They applied privacy mirror film to our entire downtown startup office over the weekend. Professional crew, totally transformed the look of our building from the outside.",
        name: "Elena Rodriguez",
        designation: "Office Manager",
        src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=800&auto=format&fit=crop",
    },
    {
        quote:
            "I've brought three different Porsches to Brian over the years. I wouldn't trust anyone else. They treat your vehicle with extreme care and use top-tier materials.",
        name: "Jameson Clarke",
        designation: "Porsche 911 Enthusiast",
        src: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800&auto=format&fit=crop",
    },
];

const Testimonials: React.FC = () => {
    return (
        <div className="w-full bg-black py-24 relative overflow-hidden">
            <div className="container mx-auto px-4 z-10 relative">
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tight">
                        What Our Clients Say
                    </h2>
                    <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
                        Don't just take our word for it. Here's what car enthusiasts, homeowners, and business managers have to say about our precision tinting work.
                    </p>
                </div>

                <AnimatedTestimonials testimonials={testimonialsData} autoplay={true} />
            </div>

            {/* Background elements for depth */}
            <div className="absolute top-1/2 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[100px] -translate-y-1/2 -translate-x-1/2" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-900/10 rounded-full blur-[100px] translate-y-1/2 translate-x-1/2" />
        </div>
    );
};

export default Testimonials;
