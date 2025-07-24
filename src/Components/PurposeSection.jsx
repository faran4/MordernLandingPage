import React from 'react'
import { motion } from "motion/react"
import {fadeIn, textVariant} from "../utils/motion.js";

const PurposeSection = () => {
    const features = [
        {
            icon: (
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
            ),
            gradient: "from-violet-500 to-purple-600",
            title: "Built for Impact",
            description: "We identify and nurture a truly diverse team of designers, developers and marketers who create exceptional results."
        },
        {
            icon: (
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            ),
            gradient: "from-indigo-500 to-blue-600",
            title: "In Sync With You",
            description: "We adapt to your workflows and rhythm, integrating seamlessly into your processes for maximum efficiency."
        }
    ];

    return (
        <section className="relative py-24 overflow-hidden" id="about">
            {/* Premium background */}
            <div className="absolute inset-0 bg-gradient-to-br from-violet-50/50 via-white to-purple-50/50 -z-10"></div>

            {/* Decorative elements */}
            <div className="absolute top-20 right-20 w-64 h-64 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
            <div className="absolute bottom-20 left-20 w-64 h-64 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>

            <div className='container mx-auto px-6 md:px-8'>
                <motion.div
                    variants={fadeIn("up", 0.2)}
                    initial="hidden"
                    whileInView="show"
                    className="grid lg:grid-cols-5 gap-12 items-start"
                >
                    {/* Left heading section */}
                    <motion.div
                        variants={fadeIn("right", 0.3)}
                        className="lg:col-span-2 space-y-6"
                    >
                        <motion.div variants={fadeIn("up", 0.4)}>
                            <span className="badge-premium inline-flex mb-4">
                                <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zM12 2a1 1 0 01.967.744L14.146 7.2 17.5 9.134a1 1 0 010 1.732l-3.354 1.935-1.18 4.455a1 1 0 01-1.933 0L9.854 12.8 6.5 10.866a1 1 0 010-1.732l3.354-1.935 1.18-4.455A1 1 0 0112 2z" clipRule="evenodd" />
                                </svg>
                                ACHIEVE MORE
                            </span>
                        </motion.div>

                        <motion.h2
                            variants={textVariant(0.5)}
                            className="text-4xl lg:text-5xl font-black leading-tight"
                        >
                            <span className="text-gray-900">Purpose of a</span>
                            <br />
                            <span className="text-gradient-premium">Convoy</span>
                            <span className="text-gray-900"> is to</span>
                            <br />
                            <span className="text-gray-900">Keep Your Team</span>
                        </motion.h2>

                        <motion.p
                            variants={fadeIn("up", 0.6)}
                            className="text-lg text-gray-600"
                        >
                            Together, we accelerate your journey to success with unified strategies and seamless execution.
                        </motion.p>

                        {/* Premium CTA */}
                        <motion.button
                            variants={fadeIn("up", 0.7)}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="btn-premium-outline px-6 py-3 group"
                        >
                            <span className="relative z-10 flex items-center gap-2">
                                Learn Our Approach
                                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </span>
                        </motion.button>
                    </motion.div>

                    {/* Right features section */}
                    <motion.div
                        variants={fadeIn("left", 0.3)}
                        className="lg:col-span-3 grid md:grid-cols-2 gap-8"
                    >
                        {features.map((feature, index) => (
                            <motion.div
                                key={index}
                                variants={fadeIn("up", 0.3 * (index + 1))}
                                whileHover={{ y: -5 }}
                                className="group"
                            >
                                <div className="card-premium-border h-full">
                                    <div className="flex items-start gap-4">
                                        {/* Premium icon */}
                                        <motion.div
                                            whileHover={{ rotate: 360 }}
                                            transition={{ duration: 0.5 }}
                                            className="relative"
                                        >
                                            <div className={`absolute inset-0 bg-gradient-to-r ${feature.gradient} rounded-2xl blur-lg opacity-60 group-hover:opacity-80 transition-opacity`}></div>
                                            <div className={`relative w-14 h-14 bg-gradient-to-r ${feature.gradient} rounded-2xl flex items-center justify-center shadow-lg`}>
                                                {feature.icon}
                                            </div>
                                        </motion.div>

                                        <div className="flex-1">
                                            <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-gradient-premium transition-all">
                                                {feature.title}
                                            </h3>
                                            <p className="text-gray-600 leading-relaxed">
                                                {feature.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>

                {/* Bottom decorative element */}
                <motion.div
                    variants={fadeIn("up", 0.8)}
                    initial="hidden"
                    whileInView="show"
                    className="mt-20 text-center"
                >
                    <div className="inline-flex items-center gap-4 glass-card px-8 py-4 rounded-full">
                        <span className="text-sm font-medium text-gray-600">Ready to transform your business?</span>
                        <button className="text-violet-600 font-semibold hover:text-violet-700 transition-colors">
                            Get Started →
                        </button>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default PurposeSection