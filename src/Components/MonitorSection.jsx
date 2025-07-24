import React from 'react'
import monitorCardImg from "../assets/monitor-card.webp";
import { motion } from "motion/react"
import {fadeIn, textVariant} from "../utils/motion.js";

const MonitorSection = () => {
    return (
        <section className="relative py-24 overflow-hidden">
            {/* Premium background */}
            <div className="absolute inset-0 bg-gradient-to-br from-white via-violet-50/20 to-white -z-10"></div>

            {/* Animated orbs */}
            <div className="absolute top-20 right-10 w-96 h-96 bg-green-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
            <div className="absolute bottom-20 left-10 w-80 h-80 bg-emerald-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>

            <div className="container mx-auto px-6 md:px-8">
                <motion.div
                    variants={fadeIn("up", 0.2)}
                    initial="hidden"
                    whileInView="show"
                    className="grid lg:grid-cols-2 gap-16 items-center"
                >
                    {/* Left Content */}
                    <motion.div
                        variants={fadeIn("right", 0.3)}
                        className="space-y-6"
                    >
                        {/* Premium Badge */}
                        <motion.div variants={fadeIn("up", 0.4)}>
                            <span className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-full text-sm font-semibold text-green-700">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                                </span>
                                REAL-TIME MONITORING
                            </span>
                        </motion.div>

                        {/* Heading */}
                        <motion.h2
                            variants={textVariant(0.5)}
                            className="text-4xl lg:text-5xl font-black leading-tight"
                        >
                            <span className="text-gray-900">Introducing Best</span>
                            <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600">
                                Mobile Carousels
                            </span>
                        </motion.h2>

                        {/* Description */}
                        <motion.p
                            variants={fadeIn("up", 0.6)}
                            className="text-lg text-gray-600 leading-relaxed"
                        >
                            Experience the future of mobile engagement with our cutting-edge carousel technology. Seamlessly integrated, beautifully designed, and optimized for maximum conversion.
                        </motion.p>

                        {/* Feature List */}
                        <motion.div
                            variants={fadeIn("up", 0.7)}
                            className="space-y-4"
                        >
                            {[
                                "Real-time analytics dashboard",
                                "Customizable carousel templates",
                                "Mobile-first responsive design"
                            ].map((feature, index) => (
                                <motion.div
                                    key={index}
                                    variants={fadeIn("up", 0.1 * (index + 1))}
                                    className="flex items-center gap-3"
                                >
                                    <div className="w-6 h-6 rounded-lg bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center">
                                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <span className="text-gray-700 font-medium">{feature}</span>
                                </motion.div>
                            ))}
                        </motion.div>

                        {/* CTA Link */}
                        <motion.div variants={fadeIn("up", 0.8)}>
                            <a href="#" className="group inline-flex items-center gap-3 text-green-600 font-semibold hover:text-green-700 transition-all">
                                <span className="relative">
                                    Learn more about monitoring
                                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-green-600 to-emerald-600 group-hover:w-full transition-all duration-300"></span>
                                </span>
                                <div className="relative w-10 h-10 rounded-xl bg-gradient-to-r from-green-100 to-emerald-100 flex items-center justify-center group-hover:scale-110 transition-transform">
                                    <svg className="w-5 h-5 text-green-600 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                    </svg>
                                </div>
                            </a>
                        </motion.div>
                    </motion.div>

                    {/* Right Image */}
                    <motion.div
                        variants={fadeIn("left", 0.4)}
                        className="relative"
                    >
                        {/* Decorative elements */}
                        <div className="absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-br from-green-200 to-emerald-200 rounded-full blur-2xl opacity-60"></div>
                        <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-gradient-to-br from-emerald-200 to-green-200 rounded-full blur-2xl opacity-60"></div>

                        {/* Main image container */}
                        <motion.div
                            whileHover={{ scale: 1.02 }}
                            transition={{ duration: 0.3 }}
                            className="relative"
                        >
                            <div className="glass-card rounded-3xl p-2 shadow-premium">
                                <img
                                    src={monitorCardImg}
                                    alt="Monitor Dashboard"
                                    className="w-full h-auto rounded-2xl"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/5 via-transparent to-transparent rounded-2xl pointer-events-none"></div>
                            </div>
                        </motion.div>

                        {/* Floating metric card */}
                        <motion.div
                            animate={{ y: [0, -15, 0] }}
                            transition={{ duration: 3, repeat: Infinity }}
                            className="absolute -bottom-6 -right-6 glass-card rounded-2xl p-4 shadow-premium"
                        >
                            <div className="flex items-center gap-3">
                                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center">
                                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-sm text-gray-600">Performance</p>
                                    <p className="text-2xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">98.5%</p>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}

export default MonitorSection