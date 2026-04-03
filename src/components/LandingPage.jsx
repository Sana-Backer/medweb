import React from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import PromoBanner from './PromoBanner';
import Categories from './Categories';
import FeaturedProducts from './FeaturedProducts';
import ProcessSteps from './ProcessSteps';
import TrustSection from './TrustSection';
import Testimonial from './Testimonial';
import Footer from './Footer';

const LandingPage = () => {
    return (
        <div className="min-h-screen bg-white selection:bg-primary/10 selection:text-primary">
            <Navbar />
            <Hero />
            <PromoBanner />
            <main>
                <Categories />
                <FeaturedProducts />
                <ProcessSteps />
                <TrustSection />
                <Testimonial />
            </main>
            <Footer />
        </div>
    );
};

export default LandingPage;
