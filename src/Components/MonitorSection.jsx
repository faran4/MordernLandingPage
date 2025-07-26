import React from 'react'
import monitorCardImg from "../assets/monitor-card.webp";
import { motion } from "motion/react"
import {fadeIn, textVariant} from "../utils/motion.js";

const MonitorSection = () => {
    return (
        <section className="relative min-h-screen flex items-center overflow-hidden">
            {/* Premium background matching main theme */}
            <div className="absolute inset-0 bg-gradient-to-br from-white via-violet-50/30 to-white -z-10"></div>

            {/* Animated orbs - blue/violet theme */}
            <div className="absolute top-20 right-10 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
            <div className="absolute bottom-20 left-10 w-64 h-64 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>

            <div className="container mx-auto px-4 sm:px-6 md:px-8 py-16">
                <motion.div
                    variants={fadeIn("up", 0.2)}
                    initial="hidden"
                    whileInView="show"
                    className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center max-w-7xl mx-auto"
                >
                    {/* Left Content */}
                    <motion.div
                        variants={fadeIn("right", 0.3)}
                        className="space-y-6"
                    >
                        {/* Premium Badge */}
                        <motion.div variants={fadeIn("up", 0.4)}>
                            <span className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-full text-sm font-semibold text-blue-700">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                                </span>
                                REAL-TIME MONITORING
                            </span>
                        </motion.div>

                        {/* Heading */}
                        <motion.h2
                            variants={textVariant(0.5)}
                            className="text-3xl sm:text-4xl lg:text-5xl font-black leading-tight"
                        >
                            <span className="text-gray-900">Smart</span>
                            <br />
                            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Analytics</span>
                        </motion.h2>

                        {/* Description */}
                        <motion.p
                            variants={fadeIn("up", 0.6)}
                            className="text-lg text-gray-600"
                        >
                            Real-time insights with cutting-edge monitoring. Beautifully designed for maximum performance.
                        </motion.p>

                        {/* Feature List */}
                        <motion.div
                            variants={fadeIn("up", 0.7)}
                            className="space-y-3"
                        >
                            {[
                                "Real-time dashboard",
                                "Smart notifications",
                                "Performance insights"
                            ].map((feature, index) => (
                                <motion.div
                                    key={index}
                                    variants={fadeIn("up", 0.1 * (index + 1))}
                                    className="flex items-center gap-3"
                                >
                                    <div className="w-6 h-6 rounded-lg bg-gradient-to-r from-blue-500 to-indigo-500 flex items-center justify-center">
                                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <span className="text-gray-700 font-medium">{feature}</span>
                                </motion.div>
                            ))}
                        </motion.div>

                        {/* CTA Button */}
                        <motion.div variants={fadeIn("up", 0.8)}>
                            <button className="btn-premium px-6 py-3 group">
                                <span className="relative z-10 flex items-center gap-2">
                                    Explore Features
                                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                    </svg>
                                </span>
                            </button>
                        </motion.div>
                    </motion.div>

                    {/* Right Image */}
                    <motion.div
                        variants={fadeIn("left", 0.4)}
                        className="relative"
                    >
                        {/* Decorative elements */}
                        <div className="absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br from-blue-200 to-indigo-200 rounded-full blur-2xl opacity-60"></div>
                        <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-gradient-to-br from-indigo-200 to-blue-200 rounded-full blur-2xl opacity-60"></div>

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
                            </div>
                        </motion.div>

                        {/* Floating metric card */}
                        <motion.div
                            animate={{ y: [0, -15, 0] }}
                            transition={{ duration: 3, repeat: Infinity }}
                            className="absolute -bottom-4 -right-4 glass-card rounded-2xl p-3 shadow-premium"
                        >
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center">
                                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-xs text-gray-600">Performance</p>
                                    <p className="text-lg font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">98.5%</p>
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