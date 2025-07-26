import React, { useState, useEffect } from 'react'
import slack from "../assets/slack.png"
import amazon from "../assets/amazon.png"
import woocommerce from "../assets/woocommerce.png"
import meunndies from "../assets/meundies.png"
import sitepoint from "../assets/sitepoint.png"
import { motion } from "motion/react"
import { fadeIn } from "../utils/motion.js"

// Counter animation hook with slower timing
const useCounter = (end, duration = 4000, start = 0) => {
    const [count, setCount] = useState(start);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        if (!isVisible) return;

        let startTime;
        let animationFrame;

        const animate = (timestamp) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);

            // Easing function for smooth animation
            const easeOutCubic = 1 - Math.pow(1 - progress, 3);
            const currentCount = Math.floor(start + (end - start) * easeOutCubic);

            setCount(currentCount);

            if (progress < 1) {
                animationFrame = requestAnimationFrame(animate);
            }
        };

        animationFrame = requestAnimationFrame(animate);

        return () => {
            if (animationFrame) {
                cancelAnimationFrame(animationFrame);
            }
        };
    }, [end, duration, start, isVisible]);

    return [count, setIsVisible];
};

const CompanyLogo = () => {
    const logos = [slack, amazon, woocommerce, meunndies, sitepoint];

    // Animated counters with slower, staggered timing
    const [activeCompanies, setActiveCompaniesVisible] = useCounter(10000, 4000);
    const [satisfactionRate, setSatisfactionVisible] = useCounter(98, 3500);
    const [countriesServed, setCountriesVisible] = useCounter(150, 3800);

    return (
        <section className="relative py-20 overflow-hidden bg-gradient-to-b from-white to-violet-50/30">
            {/* Background decoration */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute top-0 left-0 w-96 h-96 bg-violet-200 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
            </div>

            <div className="container mx-auto px-6">
                <motion.div
                    variants={fadeIn("up", 0.2)}
                    initial="hidden"
                    whileInView="show"
                    className="flex flex-col sm:flex-row items-center gap-8 sm:gap-12"
                >
                    {/* Premium Badge */}
                    <motion.div
                        variants={fadeIn("right", 0.3)}
                        className="relative group"
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-violet-600 to-purple-600 rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
                        <div className="relative glass-card rounded-2xl p-6 border-l-4 border-violet-600 shadow-premium-hover">
                            <p className="text-sm font-medium text-violet-600 uppercase tracking-wider mb-1">Trusted By</p>
                            <p className="text-xl font-bold text-gray-900">
                                Fortune 500<br />
                                <span className="text-gradient-premium">Leaders Worldwide</span>
                            </p>
                        </div>
                    </motion.div>

                    {/* Logo Marquee */}
                    <motion.div
                        variants={fadeIn("left", 0.4)}
                        className="flex-1 w-full overflow-hidden"
                    >
                        <div className="relative">
                            {/* Gradient masks for fade effect */}
                            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10"></div>
                            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10"></div>

                            {/* Logo container */}
                            <div className="flex animate-marquee-premium">
                                {[...logos, ...logos].map((logo, index) => (
                                    <div
                                        key={index}
                                        className="mx-16 flex items-center justify-center group cursor-pointer"
                                    >
                                        <div className="relative">
                                            <div className="absolute inset-0 bg-gradient-to-r from-violet-600 to-purple-600 rounded-xl blur-lg opacity-0 group-hover:opacity-30 transition-all duration-300 scale-125"></div>
                                            <img
                                                src={logo}
                                                alt="company logo"
                                                className="h-20 w-auto max-w-[200px] object-contain grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-105"
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </motion.div>

                {/* Animated Stats Section */}
                <motion.div
                    variants={fadeIn("up", 0.5)}
                    initial="hidden"
                    whileInView="show"
                    onViewportEnter={() => {
                        // Stagger the counter starts for a more premium feel
                        setTimeout(() => setActiveCompaniesVisible(true), 200);
                        setTimeout(() => setSatisfactionVisible(true), 400);
                        setTimeout(() => setCountriesVisible(true), 600);
                    }}
                    className="mt-12 flex flex-wrap justify-center gap-8 sm:gap-16"
                >
                    <motion.div
                        variants={fadeIn("up", 0.1)}
                        className="text-center"
                    >
                        <p className="text-3xl font-bold text-gradient-premium">
                            {activeCompanies >= 1000 ? `${Math.floor(activeCompanies/1000)}K+` : `${activeCompanies}+`}
                        </p>
                        <p className="text-sm text-gray-600 mt-1">Active Companies</p>
                    </motion.div>

                    <motion.div
                        variants={fadeIn("up", 0.2)}
                        className="text-center"
                    >
                        <p className="text-3xl font-bold text-gradient-premium">{satisfactionRate}%</p>
                        <p className="text-sm text-gray-600 mt-1">Satisfaction Rate</p>
                    </motion.div>

                    <motion.div
                        variants={fadeIn("up", 0.3)}
                        className="text-center"
                    >
                        <p className="text-3xl font-bold text-gradient-premium">{countriesServed}+</p>
                        <p className="text-sm text-gray-600 mt-1">Countries Served</p>
                    </motion.div>

                    <motion.div
                        variants={fadeIn("up", 0.4)}
                        className="text-center"
                    >
                        <p className="text-3xl font-bold text-gradient-premium">24/7</p>
                        <p className="text-sm text-gray-600 mt-1">Premium Support</p>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}

export default CompanyLogo