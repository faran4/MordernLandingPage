import React, {useState} from 'react'
import { motion } from "motion/react"
import {fadeIn, textVariant} from "../utils/motion.js";

const PricingSection = () => {
    const [billingCycle, setBillingCycle] = useState('monthly');

    const starterPrice = billingCycle === 'yearly' ? 32 : 40;
    const businessPrice = billingCycle === 'yearly' ? 80 : 100;

    return (
        <section className="relative min-h-screen flex items-center overflow-hidden">
            {/* Premium gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-violet-50 via-white to-indigo-50 -z-10"></div>

            {/* Animated background elements */}
            <div className="absolute top-20 left-20 w-80 h-80 bg-violet-300 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
            <div className="absolute bottom-20 right-20 w-80 h-80 bg-indigo-300 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>

            <div className="container mx-auto px-4 sm:px-6 md:px-8 py-16">
                {/* Premium header */}
                <motion.div
                    variants={fadeIn("up", 0.2)}
                    initial="hidden"
                    whileInView="show"
                    className="text-center mb-12 lg:mb-16"
                >
                    <motion.div variants={fadeIn("up", 0.3)} className="mb-6">
                        <span className="badge-premium inline-flex mb-4">
                            <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                            PREMIUM PRICING
                        </span>
                    </motion.div>

                    <motion.h2
                        variants={textVariant(0.4)}
                        className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black mb-4 lg:mb-6"
                    >
                        <span className="text-gray-900">Choose Your</span>
                        <span className="text-gradient-premium"> Perfect Plan</span>
                    </motion.h2>

                    <motion.p
                        variants={fadeIn("up", 0.5)}
                        className="text-base lg:text-lg text-gray-600 max-w-2xl mx-auto mb-8"
                    >
                        Transparent pricing that scales with your business. No hidden fees.
                    </motion.p>

                    {/* Billing toggle */}
                    <motion.div
                        variants={fadeIn("up", 0.6)}
                        className="inline-flex items-center gap-1 glass-card rounded-full p-1"
                    >
                        <button
                            onClick={() => setBillingCycle('monthly')}
                            className={`px-6 py-2.5 rounded-full font-semibold transition-all text-sm lg:text-base ${
                                billingCycle === 'monthly'
                                    ? 'bg-gradient-to-r from-violet-600 to-indigo-600 text-white shadow-lg'
                                    : 'text-gray-600 hover:text-gray-900'
                            }`}
                        >
                            Monthly
                        </button>
                        <button
                            onClick={() => setBillingCycle('yearly')}
                            className={`px-6 py-2.5 rounded-full font-semibold transition-all text-sm lg:text-base ${
                                billingCycle === 'yearly'
                                    ? 'bg-gradient-to-r from-violet-600 to-indigo-600 text-white shadow-lg'
                                    : 'text-gray-600 hover:text-gray-900'
                            }`}
                        >
                            Yearly
                            <span className="ml-2 text-xs bg-green-500 text-white px-2 py-0.5 rounded-full">Save 20%</span>
                        </button>
                    </motion.div>
                </motion.div>

                {/* Premium pricing cards */}
                <motion.div
                    variants={fadeIn("up", 0.7)}
                    initial="hidden"
                    whileInView="show"
                    className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto"
                >
                    {/* Starter Plan */}
                    <motion.div
                        variants={fadeIn("right", 0.8)}
                        whileHover={{ y: -10 }}
                        className="relative group"
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-violet-600 to-indigo-600 rounded-3xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity"></div>
                        <div className="relative glass-card rounded-3xl p-8 lg:p-10 h-full hover:shadow-premium transition-all">
                            <div className="flex justify-between items-start mb-8">
                                <div>
                                    <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-2">Starter</h3>
                                    <p className="text-gray-600 text-sm lg:text-base">Perfect for growing teams</p>
                                </div>
                                <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-violet-100 to-indigo-100 rounded-2xl flex items-center justify-center">
                                    <svg className="w-5 h-5 lg:w-6 lg:h-6 text-violet-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                    </svg>
                                </div>
                            </div>

                            <div className="mb-8">
                                <div className="flex items-baseline gap-2">
                                    <span className="text-3xl lg:text-4xl font-black text-gradient-premium">
                                        ${starterPrice}
                                    </span>
                                    <span className="text-gray-600 font-medium text-sm lg:text-base">/month</span>
                                </div>
                                {billingCycle === 'yearly' && (
                                    <p className="text-xs lg:text-sm text-green-600 mt-1">
                                        Billed ${starterPrice * 12} yearly
                                    </p>
                                )}
                            </div>

                            <ul className="space-y-4 mb-8">
                                {[
                                    "Up to 50 products",
                                    "Advanced analytics",
                                    "24/7 email support",
                                    "API access"
                                ].map((feature, i) => (
                                    <li key={i} className="flex items-center gap-3">
                                        <div className="w-4 h-4 lg:w-5 lg:h-5 rounded-full bg-gradient-to-r from-violet-500 to-indigo-500 flex items-center justify-center">
                                            <svg className="w-2.5 h-2.5 lg:w-3 lg:h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                            </svg>
                                        </div>
                                        <span className="text-gray-700 text-sm lg:text-base">{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <button className="w-full btn-premium-outline py-3 group/btn">
                                <span className="relative z-10 text-sm lg:text-base">Start Free Trial</span>
                            </button>
                        </div>
                    </motion.div>

                    {/* Business Plan */}
                    <motion.div
                        variants={fadeIn("left", 0.8)}
                        whileHover={{ y: -10 }}
                        className="relative group"
                    >
                        {/* Popular badge */}
                        <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10">
                            <span className="bg-gradient-to-r from-violet-600 to-indigo-600 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg">
                                MOST POPULAR
                            </span>
                        </div>

                        <div className="absolute inset-0 bg-gradient-to-r from-violet-600 to-indigo-600 rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
                        <div className="relative glass-card rounded-3xl p-8 lg:p-10 h-full border-2 border-violet-200 hover:shadow-premium transition-all">
                            <div className="flex justify-between items-start mb-6">
                                <div>
                                    <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-2">Business</h3>
                                    <p className="text-gray-600 text-sm lg:text-base">For scaling enterprises</p>
                                </div>
                                <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-violet-500 to-indigo-500 rounded-2xl flex items-center justify-center shadow-lg">
                                    <svg className="w-5 h-5 lg:w-6 lg:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                    </svg>
                                </div>
                            </div>

                            <div className="mb-6">
                                <div className="flex items-baseline gap-2">
                                    <span className="text-3xl lg:text-4xl font-black text-gradient-premium">
                                        ${businessPrice}
                                    </span>
                                    <span className="text-gray-600 font-medium text-sm lg:text-base">/month</span>
                                </div>
                                {billingCycle === 'yearly' && (
                                    <p className="text-xs lg:text-sm text-green-600 mt-1">
                                        Billed ${businessPrice * 12} yearly
                                    </p>
                                )}
                            </div>

                            <ul className="space-y-4 mb-8">
                                {[
                                    "Unlimited products",
                                    "Advanced AI analytics",
                                    "Priority 24/7 support",
                                    "Dedicated account manager",
                                    "99.9% uptime SLA"
                                ].map((feature, i) => (
                                    <li key={i} className="flex items-center gap-3">
                                        <div className="w-4 h-4 lg:w-5 lg:h-5 rounded-full bg-gradient-to-r from-violet-500 to-indigo-500 flex items-center justify-center">
                                            <svg className="w-2.5 h-2.5 lg:w-3 lg:h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                            </svg>
                                        </div>
                                        <span className="text-gray-700 text-sm lg:text-base">{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <button className="w-full btn-premium py-3 shadow-lg group/btn">
                                <span className="relative z-10 flex items-center justify-center gap-2 text-sm lg:text-base">
                                    Get Started Now
                                    <svg className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                    </svg>
                                </span>
                            </button>
                        </div>
                    </motion.div>
                </motion.div>

                {/* Simple contact CTA */}
                <motion.div
                    variants={fadeIn("up", 0.9)}
                    initial="hidden"
                    whileInView="show"
                    className="text-center mt-12 lg:mt-16"
                >
                    <p className="text-gray-600 mb-4">Need a custom solution?</p>
                    <a href="#" className="text-violet-600 font-semibold hover:text-violet-700 transition-colors">
                        Contact our sales team →
                    </a>
                </motion.div>
            </div>
        </section>
    )
}

export default PricingSection