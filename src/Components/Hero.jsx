import React from 'react'
import heroImage from "../assets/hero-image.png"
import {fadeIn, textVariant} from "../utils/motion.js";
import { motion } from "motion/react"

const Hero = () => {
    return (
        <section id='home' className='relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-violet-50 via-white to-purple-50'>
            {/* Animated Background Elements */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute top-20 left-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
                <div className="absolute bottom-20 right-10 w-72 h-72 bg-indigo-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-violet-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
            </div>

            <div className='w-[90%] mx-auto flex flex-col lg:flex-row items-center gap-12 pt-28  pb-20 px-6'>
                {/* Left Content */}
                <motion.div className="flex-1 space-y-4 z-10">
                    {/* Trust Badge */}
                    <motion.div
                        variants={fadeIn('right', 0.2)}
                        initial="hidden"
                        whileInView="show"
                        className="inline-block"
                    >
                        <div className="badge-premium flex items-center gap-3">
                            <span className="relative flex h-3 w-3">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                            </span>
                            <span>Trusted by 10,000+ Companies</span>
                            <div className="flex -space-x-2">
                                {[1,2,3].map(i => (
                                    <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-br from-violet-500 to-purple-500 border-2 border-white"></div>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Heading */}
                    <motion.h1
                        variants={textVariant(0.3)}
                        initial="hidden"
                        whileInView="show"
                        className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight text-gray-900"
                    >
                        Transform Your
                        <span className="text-gradient-premium"> Business DNA </span>
                        With AI Power
                    </motion.h1>

                    {/* Description */}
                    <motion.p
                        variants={fadeIn('up', 0.4)}
                        initial="hidden"
                        whileInView="show"
                        className="text-xl text-gray-600 max-w-xl"
                    >
                        Harness next-generation AI to revolutionize your workflow.
                        <span className="text-violet-600 font-semibold"> 10x faster</span>,
                        <span className="text-purple-600 font-semibold"> 100x smarter</span>.
                    </motion.p>

                    {/* CTA Section */}
                    <motion.div
                        variants={fadeIn('up', 0.5)}
                        initial="hidden"
                        whileInView="show"
                        className="space-y-6"
                    >
                        <div className="flex flex-col sm:flex-row gap-4 max-w-lg">
                            <input
                                type="email"
                                placeholder="Enter your work email"
                                className="input-premium flex-1"
                            />
                            <button className="btn-premium px-8 py-4 group">
                                <span className="relative z-10 flex items-center justify-center gap-2">
                                    Start Free Trial
                                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                    </svg>
                                </span>
                            </button>
                        </div>

                        <div className="flex items-center gap-6 text-sm text-gray-600">
                            <span className="flex items-center gap-2">
                                <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                                No credit card required
                            </span>
                            <span className="flex items-center gap-2">
                                <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                                14-day free trial
                            </span>
                        </div>
                    </motion.div>

                    {/* Social Proof */}
                    <motion.div
                        variants={fadeIn('up', 0.6)}
                        initial="hidden"
                        whileInView="show"
                        className="flex items-center gap-8 pt-4"
                    >
                        <div>
                            <div className="flex text-yellow-400 text-xl">
                                {'★★★★★'}
                            </div>
                            <p className="text-gray-800 font-semibold">4.9/5 Rating</p>
                            <p className="text-sm text-gray-600">2,394 Reviews</p>
                        </div>
                        <div className="h-12 w-px bg-gray-300"></div>
                        <div>
                            <p className="text-3xl font-bold text-gradient-premium">500K+</p>
                            <p className="text-sm text-gray-600">Active Users</p>
                        </div>
                    </motion.div>
                </motion.div>

                {/* Right Visual */}
                <motion.div
                    variants={fadeIn('left', 0.5)}
                    initial="hidden"
                    whileInView="show"
                    className="flex-1 relative"
                >
                    {/* Main Image Container */}
                    <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-violet-600 to-purple-600 rounded-3xl blur-2xl opacity-20"></div>
                        <div className="relative glass-card rounded-3xl p-2">
                            <img
                                src={heroImage}
                                alt="Premium Dashboard"
                                className="w-full rounded-2xl"
                            />
                        </div>
                    </div>

                    {/* Floating Card 1 */}
                    <motion.div
                        animate={{ y: [0, -20, 0] }}
                        transition={{ duration: 4, repeat: Infinity }}
                        className="absolute -top-8 -right-8 glass-card rounded-2xl p-4 shadow-premium"
                    >
                        <div className="flex items-center gap-3">
                            <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center text-white">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                                </svg>
                            </div>
                            <div>
                                <p className="text-sm text-gray-600">Revenue Growth</p>
                                <p className="text-2xl font-bold text-gradient-premium">+342%</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Floating Card 2 */}
                    <motion.div
                        animate={{ y: [0, 20, 0] }}
                        transition={{ duration: 4, repeat: Infinity, delay: 2 }}
                        className="absolute -bottom-0 -left-8 glass-card rounded-2xl p-4 shadow-premium"
                    >
                        <div className="flex items-center gap-3">
                            <div className="w-12 h-12 bg-gradient-to-br from-violet-500 to-purple-600 rounded-xl flex items-center justify-center text-white">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <div>
                                <p className="text-sm text-gray-600">Time Saved</p>
                                <p className="text-2xl font-bold text-gradient-premium">12h/week</p>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2"
            >
                <div className="glass-card hidden px-6 py-3 rounded-full md:flex items-center gap-2 cursor-pointer hover:shadow-lg transition-all">
                    <span className="text-sm font-medium text-gray-600">Scroll to explore</span>
                    <svg className="w-5 h-5 text-violet-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                </div>
            </motion.div>
        </section>
    )
}

export default Hero