import React from 'react'
import scheduleImage from "../assets/stats.webp"
import { motion } from "motion/react"
import {fadeIn, textVariant} from "../utils/motion.js";

const ScheduleSection = () => {
    return (
        <section className="relative min-h-screen flex items-center overflow-hidden">
            {/* Premium background */}
            <div className="absolute inset-0 bg-gradient-to-br from-white via-amber-50/20 to-white -z-10"></div>

            {/* Animated orbs */}
            <div className="absolute bottom-20 left-10 w-80 h-80 bg-amber-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
            <div className="absolute top-20 right-20 w-64 h-64 bg-orange-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>

            <div className="container mx-auto px-4 sm:px-6 md:px-8 py-16">
                <motion.div
                    variants={fadeIn("up", 0.2)}
                    initial="hidden"
                    whileInView="show"
                    className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center max-w-7xl mx-auto"
                >
                    {/* Left Image */}
                    <motion.div
                        variants={fadeIn("right", 0.3)}
                        className="relative order-2 lg:order-1"
                    >
                        {/* Decorative elements */}
                        <div className="absolute -top-10 -left-10 w-32 h-32 bg-gradient-to-br from-orange-200 to-amber-200 rounded-full blur-2xl opacity-60"></div>
                        <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-gradient-to-br from-amber-200 to-orange-200 rounded-full blur-2xl opacity-60"></div>

                        {/* Main image container */}
                        <motion.div
                            whileHover={{ scale: 1.02 }}
                            transition={{ duration: 0.3 }}
                            className="relative"
                        >
                            <div className="glass-card rounded-3xl p-2 shadow-premium">
                                <img
                                    src={scheduleImage}
                                    alt="Schedule Analytics"
                                    className="w-full h-auto rounded-2xl"
                                />
                            </div>
                        </motion.div>

                        {/* Floating schedule card */}
                        <motion.div
                            animate={{ y: [0, 15, 0] }}
                            transition={{ duration: 3.5, repeat: Infinity }}
                            className="absolute -top-4 -right-4 glass-card rounded-2xl p-3 shadow-premium"
                        >
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-amber-600 rounded-xl flex items-center justify-center">
                                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-xs text-gray-600">Scheduled</p>
                                    <p className="text-lg font-bold bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">2,847</p>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Right Content */}
                    <motion.div
                        variants={fadeIn("left", 0.3)}
                        className="space-y-6 order-1 lg:order-2"
                    >
                        {/* Premium Badge */}
                        <motion.div variants={fadeIn("up", 0.4)}>
                            <span className="badge-orange inline-flex">
                                <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                                </svg>
                                SMART SCHEDULING
                            </span>
                        </motion.div>

                        {/* Heading */}
                        <motion.h2
                            variants={textVariant(0.5)}
                            className="text-3xl sm:text-4xl lg:text-5xl font-black leading-tight"
                        >
                            <span className="text-gray-900">Smart</span>
                            <br />
                            <span className="bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">Scheduling</span>
                        </motion.h2>

                        {/* Description */}
                        <motion.p
                            variants={fadeIn("up", 0.6)}
                            className="text-lg text-gray-600"
                        >
                            Take control of your time with intelligent scheduling. Automate appointments and boost productivity.
                        </motion.p>

                        {/* Premium features grid */}
                        <motion.div
                            variants={fadeIn("up", 0.7)}
                            className="grid grid-cols-2 gap-4"
                        >
                            {[
                                { icon: "⚡", title: "Instant Sync" },
                                { icon: "🤖", title: "AI Powered" },
                                { icon: "📊", title: "Analytics" },
                                { icon: "🔒", title: "Secure" }
                            ].map((item, index) => (
                                <motion.div
                                    key={index}
                                    variants={fadeIn("up", 0.1 * (index + 1))}
                                    whileHover={{ scale: 1.05 }}
                                    className="glass-card rounded-2xl p-4 cursor-pointer hover:shadow-lg transition-all"
                                >
                                    <div className="text-2xl mb-2">{item.icon}</div>
                                    <h4 className="font-bold text-gray-900">{item.title}</h4>
                                </motion.div>
                            ))}
                        </motion.div>

                        {/* CTA */}
                        <motion.div variants={fadeIn("up", 0.8)}>
                            <button className="btn-premium px-6 py-3 group">
                                <span className="relative z-10 flex items-center gap-2">
                                    Get Started
                                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                    </svg>
                                </span>
                            </button>
                        </motion.div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}

export default ScheduleSection