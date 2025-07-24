import React from 'react'
import { motion } from "motion/react"
import {fadeIn, textVariant} from "../utils/motion.js";

const FeatureSection = () => {
    const features = [
        {
            icon: (
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
            ),
            gradient: "from-violet-500 to-purple-600",
            bgColor: "from-violet-50 to-purple-50",
            title: "Find out what you need",
            description: "We present you a proposal and discuss nitty-gritty like pricing, timeline and deliverables"
        },
        {
            icon: (
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
            ),
            gradient: "from-indigo-500 to-blue-600",
            bgColor: "from-indigo-50 to-blue-50",
            title: "Work out the details",
            description: "Communication protocols apart from engagement models, we align our process with your goals"
        },
        {
            icon: (
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
            ),
            gradient: "from-purple-500 to-pink-600",
            bgColor: "from-purple-50 to-pink-50",
            title: "We get to work fast",
            description: "Protocols apart from engage models, pricing billing, we deliver results with lightning speed"
        }
    ];

    return (
        <section className="relative py-24 overflow-hidden">
            {/* Premium background */}
            <div className="absolute inset-0 bg-gradient-to-b from-white via-violet-50/30 to-white -z-10"></div>

            {/* Animated background elements */}
            <div className="absolute top-10 left-10 w-72 h-72 bg-violet-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
            <div className="absolute bottom-10 right-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>

            <div className="container mx-auto px-6 md:px-8">
                {/* Premium heading section */}
                <motion.div
                    variants={fadeIn("up", 0.2)}
                    initial="hidden"
                    whileInView="show"
                    className="text-center mb-16"
                >
                    <motion.div variants={fadeIn("up", 0.3)} className="mb-6">
                        <span className="badge-premium inline-flex mb-4">
                            <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                            HOW WE WORK
                        </span>
                    </motion.div>

                    <motion.h2
                        variants={textVariant(0.4)}
                        className="text-4xl md:text-5xl font-black mb-6 text-gray-900"
                    >
                        How can we help your
                        <span className="text-gradient-premium"> Business?</span>
                    </motion.h2>

                    <motion.p
                        variants={fadeIn("up", 0.5)}
                        className="text-lg text-gray-600 max-w-2xl mx-auto"
                    >
                        When you partner with us, you build trust and unlock exponential growth through our proven three-step process
                    </motion.p>
                </motion.div>

                {/* Premium feature cards */}
                <motion.div
                    variants={fadeIn("up", 0.6)}
                    initial="hidden"
                    whileInView="show"
                    className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
                >
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            variants={fadeIn("up", 0.2 * (index + 1))}
                            whileHover={{ y: -10 }}
                            className="group"
                        >
                            <div className="relative h-full">
                                {/* Card glow effect */}
                                <div className={`absolute inset-0 bg-gradient-to-r ${feature.gradient} rounded-3xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300`}></div>

                                {/* Card content */}
                                <div className="relative glass-card rounded-3xl p-8 h-full hover:shadow-premium transition-all duration-300">
                                    {/* Number badge */}
                                    <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-r from-violet-600 to-purple-600 rounded-2xl flex items-center justify-center text-white font-bold shadow-lg">
                                        {index + 1}
                                    </div>

                                    {/* Icon container */}
                                    <motion.div
                                        whileHover={{ rotate: 360, scale: 1.1 }}
                                        transition={{ duration: 0.6 }}
                                        className="mb-6"
                                    >
                                        <div className="relative inline-block">
                                            <div className={`absolute inset-0 bg-gradient-to-r ${feature.gradient} rounded-2xl blur-lg opacity-60`}></div>
                                            <div className={`relative w-20 h-20 bg-gradient-to-r ${feature.gradient} rounded-2xl flex items-center justify-center shadow-lg`}>
                                                {feature.icon}
                                            </div>
                                        </div>
                                    </motion.div>

                                    {/* Content */}
                                    <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-gradient-premium transition-all">
                                        {feature.title}
                                    </h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        {feature.description}
                                    </p>

                                    {/* Learn more link */}
                                    <motion.div
                                        variants={fadeIn("up", 0.3)}
                                        className="mt-6"
                                    >
                                        <a href="#" className="inline-flex items-center gap-2 text-violet-600 font-semibold hover:text-violet-700 transition-colors group/link">
                                            <span>Learn more</span>
                                            <svg className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                            </svg>
                                        </a>
                                    </motion.div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Premium CTA section */}
                <motion.div
                    variants={fadeIn("up", 0.8)}
                    initial="hidden"
                    whileInView="show"
                    className="text-center mt-16"
                >
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="btn-premium px-10 py-4 group shadow-premium"
                    >
                        <span className="relative z-10 flex items-center gap-3 text-lg font-semibold">
                            Become a Partner
                            <motion.svg
                                className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                            </motion.svg>
                        </span>
                    </motion.button>

                    <motion.p
                        variants={fadeIn("up", 0.9)}
                        className="mt-4 text-sm text-gray-600"
                    >
                        Join 10,000+ companies already growing with us
                    </motion.p>
                </motion.div>
            </div>
        </section>
    )
}

export default FeatureSection