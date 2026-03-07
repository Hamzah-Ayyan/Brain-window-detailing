import React from 'react';
import PricingSection from './ui/pricing-section';
import Contact from './Contact';

const PricingPage: React.FC = () => {
    return (
        <div className="flex flex-col w-full bg-black min-h-screen">
            {/* The pricing section itself with top padding to account for navbar */}
            <div className="pt-24 pb-12">
                <PricingSection />
            </div>

            {/* Use the exact same contact footer structure as the other pages */}
            <Contact />
        </div>
    );
};

export default PricingPage;
