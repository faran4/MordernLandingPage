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
            description: "Digital experiences that captivate and convert your audience."
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
            description: "Data-driven campaigns that maximize ROI and engagement."
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
            description: "Intelligent workflows that save time and scale your business."
        },
        {
            icon: (
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
            ),
            gradient: "from-cyan-500 to-blue-600",
            title: "Analytics",
            description: "Transform complex data into actionable business insights."
        }
    ];

    return (
        <section className="relative min-h-screen flex items-center overflow-hidden" id="services">
            {/* Premium background */}
            <div className="absolute inset-0 bg-gradient-to-b from-white via-violet-50/30 to-white -z-10"></div>

            {/* Decorative elements */}
            <div className="absolute top-20 right-20 w-80 h-80 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
            <div className="absolute bottom-20 left-20 w-80 h-80 bg-indigo-300 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>

            <div className="container mx-auto px-4 sm:px-6 md:px-8 py-16">
                {/* Header */}
                <motion.div
                    variants={fadeIn("up", 0.2)}
                    initial="hidden"
                    whileInView="show"
                    className="text-center mb-12 lg:mb-16"
                >
                    <motion.div variants={fadeIn("up", 0.3)} className="mb-6">
                        <span className="badge-premium inline-flex mb-4">
                            <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                            </svg>
                            OUR SERVICES
                        </span>
                    </motion.div>

                    <motion.h2
                        variants={textVariant(0.4)}
                        className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black leading-tight mb-4 lg:mb-6"
                    >
                        <span className="text-gray-900">Future of</span>
                        <span className="text-gradient-premium"> Digital</span>
                        <br />
                        <span className="text-gray-900">Excellence</span>
                    </motion.h2>

                    <motion.p
                        variants={fadeIn("up", 0.5)}
                        className="text-base lg:text-lg text-gray-600 max-w-2xl mx-auto"
                    >
                        We create exceptional digital experiences that drive growth and inspire action.
                    </motion.p>
                </motion.div>

                {/* Service Cards Grid */}
                <motion.div
                    variants={fadeIn("up", 0.6)}
                    initial="hidden"
                    whileInView="show"
                    className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-6xl mx-auto mb-12 lg:mb-16"
                >
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            variants={fadeIn("up", 0.2 * (index + 1))}
                            whileHover={{ y: -5 }}
                            className="group relative"
                        >
                            <div className={`absolute inset-0 bg-gradient-to-r ${service.gradient} rounded-3xl blur-xl opacity-0 group-hover:opacity-10 transition-opacity`}></div>
                            <div className="relative glass-card rounded-3xl p-6 lg:p-8 hover:shadow-premium transition-all h-full">
                                <div className="flex items-start gap-4 lg:gap-6">
                                    {/* Icon */}
                                    <motion.div
                                        whileHover={{ rotate: 360 }}
                                        transition={{ duration: 0.6 }}
                                        className="relative flex-shrink-0"
                                    >
                                        <div className={`absolute inset-0 bg-gradient-to-r ${service.gradient} rounded-2xl blur-lg opacity-60 group-hover:opacity-80 transition-opacity`}></div>
                                        <div className={`relative w-14 h-14 lg:w-16 lg:h-16 bg-gradient-to-r ${service.gradient} rounded-2xl flex items-center justify-center shadow-lg`}>
                                            {service.icon}
                                        </div>
                                    </motion.div>

                                    {/* Content */}
                                    <div className="flex-1">
                                        <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-3 group-hover:text-gradient-premium transition-all">
                                            {service.title}
                                        </h3>
                                        <p className="text-gray-600 leading-relaxed text-sm lg:text-base mb-4">
                                            {service.description}
                                        </p>

                                        {/* Learn more link */}
                                        <a href="#" className="inline-flex items-center gap-2 text-violet-600 font-semibold hover:text-violet-700 transition-colors group/link text-sm lg:text-base">
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

                {/* Simple end note */}
                <motion.div
                    variants={fadeIn("up", 0.8)}
                    initial="hidden"
                    whileInView="show"
                    className="text-center"
                >
                    <p className="text-gray-600">
                        Trusted by 10,000+ companies worldwide
                    </p>
                </motion.div>
            </div>
        </section>
    )
}

export default ServicesSection