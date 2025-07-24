import React from 'react'
import {motion} from "motion/react";
import { fadeIn, textVariant } from "../utils/motion.js";

const ServicesSection = () => {
    const services = [
        {
            icon: (
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
            ),
            gradient: "from-violet-500 to-purple-600",
            title: "Web Design",
            description: "Crafting digital experiences that captivate, convert, and leave lasting impressions on your audience.",
            features: ["Responsive Design", "User Experience", "Brand Identity"]
        },
        {
            icon: (
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
                </svg>
            ),
            gradient: "from-amber-500 to-orange-600",
            title: "Ad-Creatives",
            description: "Data-driven creative campaigns that resonate with your target audience and maximize ROI.",
            features: ["A/B Testing", "Performance Analytics", "Creative Strategy"]
        },
        {
            icon: (
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
            ),
            gradient: "from-red-500 to-pink-600",
            title: "Automation",
            description: "Streamline your workflow with intelligent automation that saves time and scales your business.",
            features: ["Workflow Optimization", "API Integration", "Process Analytics"]
        },
        {
            icon: (
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
            ),
            gradient: "from-cyan-500 to-blue-600",
            title: "Infographics",
            description: "Transform complex data into visually stunning stories that engage and inform your audience.",
            features: ["Data Visualization", "Interactive Design", "Brand Consistency"]
        }
    ];

    return (
        <section className="relative py-32 overflow-hidden" id="services">
            {/* Premium background */}
            <div className="absolute inset-0 bg-gradient-to-b from-white via-violet-50/30 to-white -z-10"></div>

            {/* Decorative elements */}
            <div className="absolute top-40 right-20 w-80 h-80 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
            <div className="absolute bottom-40 left-20 w-80 h-80 bg-indigo-300 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>

            <div className="container mx-auto px-6 md:px-8">
                <motion.div
                    variants={fadeIn("up", 0.2)}
                    initial="hidden"
                    whileInView="show"
                    className="grid lg:grid-cols-2 gap-20 items-start"
                >
                    {/* Left content */}
                    <motion.div
                        variants={fadeIn("right", 0.3)}
                        className="space-y-8 sticky top-32"
                    >
                        <motion.div variants={fadeIn("up", 0.4)}>
                            <span className="badge-premium inline-flex mb-6">
                                <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                                </svg>
                                OUR SERVICES
                            </span>
                        </motion.div>

                        <motion.h2
                            variants={textVariant(0.5)}
                            className="text-5xl lg:text-6xl font-black leading-tight"
                        >
                            <span className="text-gray-900">Future of</span>
                            <br />
                            <span className="text-gradient-premium">Support</span>
                            <span className="text-gray-900"> with</span>
                            <br />
                            <span className="text-gray-900">New Shape</span>
                        </motion.h2>

                        <motion.p
                            variants={fadeIn("up", 0.6)}
                            className="text-xl text-gray-600 leading-relaxed"
                        >
                            We collaborate with ambitious brands and businesses to create exceptional digital experiences that drive growth and inspire action.
                        </motion.p>

                        <motion.div variants={fadeIn("up", 0.7)} className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-gradient-to-br from-violet-100 to-purple-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                                    <svg className="w-6 h-6 text-violet-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-gray-900 mb-1">Lightning Fast Delivery</h3>
                                    <p className="text-gray-600">From concept to launch in record time without compromising quality.</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-gradient-to-br from-indigo-100 to-blue-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                                    <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-gray-900 mb-1">Enterprise Security</h3>
                                    <p className="text-gray-600">Bank-level security protocols to protect your data and customer information.</p>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div variants={fadeIn("up", 0.8)} className="flex flex-wrap gap-4">
                            <button className="btn-premium px-8 py-4 group shadow-premium">
                                <span className="relative z-10 flex items-center gap-2">
                                    Get Started
                                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                    </svg>
                                </span>
                            </button>
                            <button className="btn-premium-outline px-8 py-4">
                                <span className="relative z-10">View Portfolio</span>
                            </button>
                        </motion.div>
                    </motion.div>

                    {/* Right service cards */}
                    <motion.div
                        variants={fadeIn("left", 0.4)}
                        className="grid gap-6"
                    >
                        {services.map((service, index) => (
                            <motion.div
                                key={index}
                                variants={fadeIn("up", 0.2 * (index + 1))}
                                whileHover={{ x: 10 }}
                                className="group relative"
                            >
                                <div className="absolute inset-0 bg-gradient-to-r from-violet-600 to-purple-600 rounded-3xl blur-xl opacity-0 group-hover:opacity-10 transition-opacity"></div>
                                <div className="relative glass-card rounded-3xl p-8 hover:shadow-premium transition-all">
                                    <div className="flex items-start gap-6">
                                        {/* Icon */}
                                        <motion.div
                                            whileHover={{ rotate: 360 }}
                                            transition={{ duration: 0.6 }}
                                            className="relative flex-shrink-0"
                                        >
                                            <div className={`absolute inset-0 bg-gradient-to-r ${service.gradient} rounded-2xl blur-lg opacity-60 group-hover:opacity-80 transition-opacity`}></div>
                                            <div className={`relative w-16 h-16 bg-gradient-to-r ${service.gradient} rounded-2xl flex items-center justify-center shadow-lg`}>
                                                {service.icon}
                                            </div>
                                        </motion.div>

                                        {/* Content */}
                                        <div className="flex-1">
                                            <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-gradient-premium transition-all">
                                                {service.title}
                                            </h3>
                                            <p className="text-gray-600 mb-4 leading-relaxed">
                                                {service.description}
                                            </p>

                                            {/* Features */}
                                            <div className="flex flex-wrap gap-2 mb-4">
                                                {service.features.map((feature, i) => (
                                                    <span key={i} className="px-3 py-1 bg-gradient-to-r from-violet-50 to-purple-50 text-violet-700 text-sm font-medium rounded-full">
                                                        {feature}
                                                    </span>
                                                ))}
                                            </div>

                                            {/* Learn more link */}
                                            <a href="#" className="inline-flex items-center gap-2 text-violet-600 font-semibold hover:text-violet-700 transition-colors group/link">
                                                <span className="relative">
                                                    Learn More
                                                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-violet-600 to-purple-600 group-hover/link:w-full transition-all duration-300"></span>
                                                </span>
                                                <svg className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                                </svg>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>

                {/* Bottom CTA section */}
                <motion.div
                    variants={fadeIn("up", 0.9)}
                    initial="hidden"
                    whileInView="show"
                    className="mt-32 text-center"
                >
                    <div className="max-w-4xl mx-auto">
                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-r from-violet-600 to-purple-600 rounded-3xl blur-2xl opacity-20"></div>
                            <div className="relative glass-card rounded-3xl p-12 bg-gradient-to-br from-violet-50/50 to-purple-50/50">
                                <h3 className="text-4xl font-black mb-4">
                                    <span className="text-gray-900">Ready to</span>
                                    <span className="text-gradient-premium"> Transform </span>
                                    <span className="text-gray-900">Your Business?</span>
                                </h3>
                                <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                                    Join thousands of companies that trust us to deliver exceptional results and drive their digital transformation.
                                </p>
                                <div className="flex flex-wrap justify-center gap-4">
                                    <button className="btn-premium px-10 py-4 text-lg shadow-premium group">
                                        <span className="relative z-10 flex items-center gap-2">
                                            Start Your Project
                                            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                            </svg>
                                        </span>
                                    </button>
                                    <button className="glass-card px-10 py-4 text-lg font-semibold text-gray-700 hover:text-gray-900 transition-colors">
                                        Schedule a Call
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default ServicesSection