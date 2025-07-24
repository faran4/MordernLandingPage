import {useState} from 'react';
import Navbar from "./Components/Navbar.jsx";
import Hero from "./Components/Hero.jsx";
import CompanyLogo from "./Components/CompanyLogo.jsx";
import PurposeSection from "./Components/PurposeSection.jsx";
import FeatureSection from "./Components/FeatureSection.jsx";
import ScheduleSection from "./Components/ScheduleSection.jsx";
import MonitorSection from "./Components/MonitorSection.jsx";
import PricingSection from "./Components/PricingSection.jsx";
import ServicesSection from "./Components/ServicesSection.jsx";
import TestimonialsSection from "./Components/TestimonialsSection.jsx";
import NewsLetterSection from "./Components/NewsLetterSection.jsx";
import Footer from "./Components/Footer.jsx";

function App() {

    return (
        <main className="relative min-h-screen overflow-x-hidden">
            <div className="absolute -top-28 -left-28 w-[500px] h-[500px] bg-gradient-to-tr from-indigo-500/20
            to-pink-500/20 rounded-full blur-[80px] -z-10"></div>
            <div className="overflow-hidden">
                <Navbar />
                <Hero />
                <CompanyLogo />
                <PurposeSection />
                <FeatureSection />
                <ScheduleSection />
                <MonitorSection />
                <PricingSection />
                <ServicesSection />
                <TestimonialsSection />
                <NewsLetterSection />
                <Footer />
            </div>

        </main>
    )
}

export default App
