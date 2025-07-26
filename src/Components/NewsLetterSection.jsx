import React from 'react'
import {motion} from 'motion/react';
import {fadeIn, textVariant} from "../utils/motion.js";

const NewsLetterSection = () => {
    return (
        <section className="relative min-h-screen flex items-center overflow-hidden" id="newsletter">
            {/* Ultra premium dark gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-violet-900 to-black -z-10"></div>

            {/* Luxury overlay pattern */}
            <div className="absolute inset-0 opacity-5" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}></div>

            {/* Premium animated orbs */}
            <div className="absolute top-0 right-1/4 w-96 h-96 bg-violet-500 rounded-full mix-blend-screen filter blur-3xl opacity-40 animate-blob"></div>
            <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-screen filter blur-3xl opacity-40 animate-blob animation-delay-2000"></div>
            <div className="absolute top-1/2 right-0 w-64 h-64 bg-indigo-500 rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>

            <div className="container mx-auto px-4 sm:px-6 md:px-8 py-16">
                <motion.div
                    variants={fadeIn("up", 0.2)}
                    initial="hidden"
                    whileInView="show"
                    className="max-w-7xl mx-auto"
                >
                    {/* Luxury content wrapper */}
                    <div className="relative">
                        {/* Ultra premium glow effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-violet-600/30 to-purple-600/30 rounded-3xl blur-3xl"></div>

                        {/* Main luxury card */}
                        <div className="relative bg-white/5 backdrop-blur-3xl rounded-3xl border border-white/10 overflow-hidden shadow-2xl">
                            <div className="grid lg:grid-cols-2 gap-0">
                                {/* Left premium content */}
                                <div className="p-6 lg:p-12 space-y-6">
                                    <motion.div variants={fadeIn("up", 0.3)}>
                                        <span className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full text-sm font-bold text-white mb-8 border border-white/20">
                                            <span className="relative flex h-3 w-3">
                                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                                                <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
                                            </span>
                                            EXCLUSIVE MEMBERSHIP
                                        </span>
                                    </motion.div>

                                    <motion.h2
                                        variants={textVariant(0.4)}
                                        className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight"
                                    >
                                        Join the
                                        <br />
                                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-300 via-purple-300 to-indigo-300">
                                            Elite Circle
                                        </span>
                                    </motion.h2>

                                    <motion.p
                                        variants={fadeIn("up", 0.5)}
                                        className="text-lg text-white/90 leading-relaxed"
                                    >
                                        Access exclusive insights and connect with industry leaders.
                                    </motion.p>

                                    {/* Premium benefits */}
                                    <motion.div
                                        variants={fadeIn("up", 0.6)}
                                        className="space-y-6"
                                    >
                                        {[
                                            {
                                                icon: (
                                                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                                                    </svg>
                                                ),
                                                text: "Executive insights"
                                            },
                                            {
                                                icon: (
                                                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                                    </svg>
                                                ),
                                                text: "Priority access"
                                            },
                                            {
                                                icon: (
                                                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                                    </svg>
                                                ),
                                                text: "Elite networking"
                                            }
                                        ].map((benefit, i) => (
                                            <motion.div
                                                key={i}
                                                variants={fadeIn("up", 0.1 * (i + 1))}
                                                className="flex items-center gap-4"
                                            >
                                                <div className="w-8 h-8 rounded-xl bg-gradient-to-r from-violet-400 to-purple-400 flex items-center justify-center shadow-lg">
                                                    {benefit.icon}
                                                </div>
                                                <span className="text-white/95 font-medium">{benefit.text}</span>
                                            </motion.div>
                                        ))}
                                    </motion.div>

                                    {/* Trust indicators */}
                                    <motion.div
                                        variants={fadeIn("up", 0.7)}
                                        className="flex items-center gap-6 pt-6"
                                    >
                                        <div className="flex -space-x-3">
                                            {[1,2,3,4,5].map(i => (
                                                <div key={i} className="w-12 h-12 rounded-full bg-gradient-to-br from-violet-500 to-purple-600 border-3 border-white/20 shadow-xl"></div>
                                            ))}
                                        </div>
                                        <div>
                                            <p className="text-white font-bold">50K+ Elite Members</p>
                                        </div>
                                    </motion.div>
                                </div>

                                {/* Right premium form */}
                                <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-2xl p-6 lg:p-12 border-l border-white/10">
                                    <motion.div
                                        variants={fadeIn("left", 0.4)}
                                        className="space-y-8"
                                    >
                                        <div className="text-center">
                                            <h3 className="text-2xl font-black text-white mb-4">
                                                Join Elite Circle
                                            </h3>
                                        </div>

                                        <form className="space-y-6">
                                            <div className="space-y-4">
                                                <input
                                                    type="email"
                                                    placeholder="Your executive email"
                                                    className="w-full px-8 py-5 bg-white/10 backdrop-blur-sm border-2 border-white/20 rounded-2xl text-white placeholder-white/60 focus:outline-none focus:border-white/50 focus:bg-white/20 transition-all text-lg font-medium"
                                                />

                                                <button
                                                    type="submit"
                                                    className="w-full bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 hover:from-violet-700 hover:via-purple-700 hover:to-indigo-700 text-white font-bold px-8 py-4 rounded-2xl transition-all shadow-2xl hover:shadow-violet-500/50 group"
                                                >
                                                    <span className="flex items-center justify-center gap-2">
                                                        Subscribe
                                                        <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                                        </svg>
                                                    </span>
                                                </button>
                                            </div>

                                            <div className="text-center">
                                                <p className="text-white/60 text-sm">
                                                    No spam. Unsubscribe anytime.
                                                </p>
                                            </div>
                                        </form>

                                        {/* Premium guarantees */}
                                        <div className="grid grid-cols-2 gap-4 pt-6 border-t border-white/10">
                                            <div className="text-center">
                                                <div className="w-12 h-12 bg-gradient-to-r from-violet-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-3 shadow-lg">
                                                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                                    </svg>
                                                </div>
                                                <p className="text-white/90 font-semibold text-sm">100% Secure</p>
                                                <p className="text-white/60 text-xs">Enterprise Grade</p>
                                            </div>
                                            <div className="text-center">
                                                <div className="w-12 h-12 bg-gradient-to-r from-violet-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-3 shadow-lg">
                                                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                                                    </svg>
                                                </div>
                                                <p className="text-white/90 font-semibold text-sm">Premium Only</p>
                                                <p className="text-white/60 text-xs">No Spam Ever</p>
                                            </div>
                                        </div>
                                    </motion.div>
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