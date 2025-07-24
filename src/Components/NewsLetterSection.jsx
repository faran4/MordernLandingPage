import React from 'react'
import {motion} from 'motion/react';
import {fadeIn, textVariant} from "../utils/motion.js";

const NewsLetterSection = () => {
    return (
        <section className="relative py-32 overflow-hidden" id="newsletter">
            {/* Premium gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-violet-900 via-purple-900 to-indigo-900 -z-10"></div>

            {/* Overlay pattern */}
            <div className="absolute inset-0 opacity-10" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}></div>

            {/* Animated gradient orbs */}
            <div className="absolute top-0 right-1/4 w-96 h-96 bg-violet-500 rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-blob"></div>
            <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>

            <div className="container mx-auto px-6 md:px-8">
                <motion.div
                    variants={fadeIn("up", 0.2)}
                    initial="hidden"
                    whileInView="show"
                    className="max-w-6xl mx-auto"
                >
                    {/* Content wrapper */}
                    <div className="relative">
                        {/* Glow effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-violet-600/20 to-purple-600/20 rounded-3xl blur-3xl"></div>

                        {/* Main content */}
                        <div className="relative bg-white/10 backdrop-blur-2xl rounded-3xl overflow-hidden">
                            <div className="grid lg:grid-cols-2 gap-0">
                                {/* Left content */}
                                <div className="p-12 lg:p-16 space-y-8">
                                    <motion.div variants={fadeIn("up", 0.3)}>
                                        <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold text-white mb-6">
                                            <span className="relative flex h-2 w-2">
                                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                                                <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
                                            </span>
                                            EXCLUSIVE ACCESS
                                        </span>
                                    </motion.div>

                                    <motion.h2
                                        variants={textVariant(0.4)}
                                        className="text-4xl lg:text-5xl font-black text-white leading-tight"
                                    >
                                        Stay Ahead of
                                        <br />
                                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-300 to-purple-300">
                                            The Curve
                                        </span>
                                    </motion.h2>

                                    <motion.p
                                        variants={fadeIn("up", 0.5)}
                                        className="text-lg text-white/80 leading-relaxed"
                                    >
                                        Get exclusive insights, early access to new features, and join a community of forward-thinking leaders.
                                    </motion.p>

                                    {/* Benefits */}
                                    <motion.div
                                        variants={fadeIn("up", 0.6)}
                                        className="space-y-4"
                                    >
                                        {[
                                            "Weekly executive insights",
                                            "Priority feature access",
                                            "Exclusive networking events"
                                        ].map((benefit, i) => (
                                            <div key={i} className="flex items-center gap-3">
                                                <div className="w-6 h-6 rounded-full bg-gradient-to-r from-violet-400 to-purple-400 flex items-center justify-center">
                                                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                                    </svg>
                                                </div>
                                                <span className="text-white/90">{benefit}</span>
                                            </div>
                                        ))}
                                    </motion.div>
                                </div>

                                {/* Right form */}
                                <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl p-12 lg:p-16">
                                    <motion.form
                                        variants={fadeIn("left", 0.4)}
                                        className="space-y-6"
                                    >
                                        <h3 className="text-2xl font-bold text-white mb-8">
                                            Subscribe to Excellence
                                        </h3>

                                        <div className="space-y-4">
                                            <input
                                                type="email"
                                                placeholder="Your email address"
                                                className="w-full px-6 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl text-white placeholder-white/60 focus:outline-none focus:border-white/40 focus:bg-white/20 transition-all"
                                            />

                                            <button
                                                type="submit"
                                                className="w-full bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 text-white font-bold px-8 py-4 rounded-2xl transition-all shadow-2xl hover:shadow-violet-500/25 group"
                                            >
                                                <span className="flex items-center justify-center gap-2">
                                                    Subscribe Now
                                                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                                    </svg>
                                                </span>
                                            </button>
                                        </div>

                                        <p className="text-white/60 text-sm text-center">
                                            Join 50,000+ industry leaders. No spam, ever.
                                        </p>
                                    </motion.form>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default NewsLetterSection