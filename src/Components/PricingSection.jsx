import React, {useState} from 'react'
import { motion } from "motion/react"
import {fadeIn, textVariant} from "../utils/motion.js";

const PricingSection = () => {
    const [productCount, setProductCount] = useState(25);
    const [billingCycle, setBillingCycle] = useState('monthly');

    const starterPrice = Math.round(4000 * (productCount / 50));
    const businessPrice = Math.round(8000 * (productCount / 50));

    return (
        <section className="relative py-32 overflow-hidden">
            {/* Premium gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-violet-50 via-white to-indigo-50 -z-10"></div>

            {/* Animated background elements */}
            <div className="absolute top-20 left-20 w-96 h-96 bg-violet-300 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
            <div className="absolute bottom-20 right-20 w-96 h-96 bg-indigo-300 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse"></div>

            <div className="container mx-auto px-6 md:px-8">
                {/* Premium header */}
                <motion.div
                    variants={fadeIn("up", 0.2)}
                    initial="hidden"
                    whileInView="show"
                    className="text-center mb-20"
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
                        className="text-5xl md:text-6xl font-black mb-6"
                    >
                        <span className="text-gray-900">Choose Your</span>
                        <span className="text-gradient-premium"> Perfect Plan</span>
                    </motion.h2>

                    <motion.p
                        variants={fadeIn("up", 0.5)}
                        className="text-xl text-gray-600 max-w-2xl mx-auto"
                    >
                        Transparent pricing that scales with your business. No hidden fees, no surprises.
                    </motion.p>

                    {/* Billing toggle */}
                    <motion.div
                        variants={fadeIn("up", 0.6)}
                        className="mt-8 inline-flex items-center gap-4 glass-card rounded-full p-2"
                    >
                        <button
                            onClick={() => setBillingCycle('monthly')}
                            className={`px-6 py-2.5 rounded-full font-semibold transition-all ${
                                billingCycle === 'monthly'
                                    ? 'bg-gradient-to-r from-violet-600 to-indigo-600 text-white shadow-lg'
                                    : 'text-gray-600 hover:text-gray-900'
                            }`}
                        >
                            Monthly
                        </button>
                        <button
                            onClick={() => setBillingCycle('yearly')}
                            className={`px-6 py-2.5 rounded-full font-semibold transition-all ${
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
                    className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto mb-20"
                >
                    {/* Starter Plan */}
                    <motion.div
                        variants={fadeIn("right", 0.8)}
                        whileHover={{ y: -10 }}
                        className="relative group"
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-violet-600 to-indigo-600 rounded-3xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity"></div>
                        <div className="relative glass-card rounded-3xl p-8 h-full hover:shadow-premium transition-all">
                            <div className="flex justify-between items-start mb-8">
                                <div>
                                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Starter</h3>
                                    <p className="text-gray-600">Perfect for growing teams</p>
                                </div>
                                <div className="w-12 h-12 bg-gradient-to-br from-violet-100 to-indigo-100 rounded-2xl flex items-center justify-center">
                                    <svg className="w-6 h-6 text-violet-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                    </svg>
                                </div>
                            </div>

                            <div className="mb-8">
                                <div className="flex items-baseline gap-2">
                                    <span className="text-5xl font-black text-gradient-premium">
                                        ${billingCycle === 'yearly' ? Math.round(starterPrice * 0.8) : starterPrice}
                                    </span>
                                    <span className="text-gray-600 font-medium">/month</span>
                                </div>
                                {billingCycle === 'yearly' && (
                                    <p className="text-sm text-green-600 mt-2">
                                        Billed ${Math.round(starterPrice * 0.8 * 12)} yearly
                                    </p>
                                )}
                            </div>

                            <ul className="space-y-4 mb-8">
                                {[
                                    "Up to 50 products",
                                    "Advanced analytics",
                                    "24/7 email support",
                                    "API access",
                                    "Custom integrations"
                                ].map((feature, i) => (
                                    <li key={i} className="flex items-center gap-3">
                                        <div className="w-5 h-5 rounded-full bg-gradient-to-r from-violet-500 to-indigo-500 flex items-center justify-center">
                                            <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                            </svg>
                                        </div>
                                        <span className="text-gray-700">{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <button className="w-full btn-premium-outline py-3 group/btn">
                                <span className="relative z-10">Start Free Trial</span>
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
                        <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                            <span className="bg-gradient-to-r from-violet-600 to-indigo-600 text-white px-4 py-1.5 rounded-full text-sm font-semibold shadow-lg">
                                MOST POPULAR
                            </span>
                        </div>

                        <div className="absolute inset-0 bg-gradient-to-r from-violet-600 to-indigo-600 rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
                        <div className="relative glass-card rounded-3xl p-8 h-full border-2 border-violet-200 hover:shadow-premium transition-all">
                            <div className="flex justify-between items-start mb-8">
                                <div>
                                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Business</h3>
                                    <p className="text-gray-600">For scaling enterprises</p>
                                </div>
                                <div className="w-12 h-12 bg-gradient-to-br from-violet-500 to-indigo-500 rounded-2xl flex items-center justify-center shadow-lg">
                                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                    </svg>
                                </div>
                            </div>

                            <div className="mb-8">
                                <div className="flex items-baseline gap-2">
                                    <span className="text-5xl font-black text-gradient-premium">
                                        ${billingCycle === 'yearly' ? Math.round(businessPrice * 0.8) : businessPrice}
                                    </span>
                                    <span className="text-gray-600 font-medium">/month</span>
                                </div>
                                {billingCycle === 'yearly' && (
                                    <p className="text-sm text-green-600 mt-2">
                                        Billed ${Math.round(businessPrice * 0.8 * 12)} yearly
                                    </p>
                                )}
                            </div>

                            <ul className="space-y-4 mb-8">
                                {[
                                    "Unlimited products",
                                    "Advanced AI analytics",
                                    "Priority 24/7 support",
                                    "Dedicated account manager",
                                    "Custom enterprise features",
                                    "99.9% uptime SLA"
                                ].map((feature, i) => (
                                    <li key={i} className="flex items-center gap-3">
                                        <div className="w-5 h-5 rounded-full bg-gradient-to-r from-violet-500 to-indigo-500 flex items-center justify-center">
                                            <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                            </svg>
                                        </div>
                                        <span className="text-gray-700">{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <button className="w-full btn-premium py-3 shadow-lg group/btn">
                                <span className="relative z-10 flex items-center justify-center gap-2">
                                    Get Started Now
                                    <svg className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                    </svg>
                                </span>
                            </button>
                        </div>
                    </motion.div>
                </motion.div>

                {/* Premium slider section */}
                <motion.div
                    variants={fadeIn("up", 0.9)}
                    initial="hidden"
                    whileInView="show"
                    className="max-w-2xl mx-auto"
                >
                    <div className="glass-card rounded-3xl p-8">
                        <h3 className="text-2xl font-bold text-center mb-8">
                            Customize Your Plan
                        </h3>

                        <div className="space-y-6">
                            <div>
                                <div className="flex justify-between items-center mb-4">
                                    <span className="text-lg font-semibold text-gray-900">Products</span>
                                    <span className="text-3xl font-bold text-gradient-premium">{productCount}</span>
                                </div>

                                <div className="relative">
                                    <input
                                        className="w-full h-3 bg-gray-200 rounded-full appearance-none cursor-pointer slider-premium"
                                        type="range"
                                        min="1"
                                        max="50"
                                        value={productCount}
                                        onChange={(e) => setProductCount(parseInt(e.target.value))}
                                        style={{
                                            background: `linear-gradient(to right, #7c3aed 0%, #7c3aed ${productCount * 2}%, #e5e7eb ${productCount * 2}%, #e5e7eb 100%)`
                                        }}
                                    />
                                    <div className="flex justify-between mt-2">
                                        <span className="text-sm text-gray-500">1</span>
                                        <span className="text-sm text-gray-500">50</span>
                                    </div>
                                </div>
                            </div>

                            <div className="text-center pt-6 border-t border-gray-200">
                                <p className="text-lg text-gray-600 mb-2">Questions about pricing?</p>
                                <a href="#" className="text-violet-600 font-semibold hover:text-violet-700 transition-colors">
                                    Talk to our sales team →
                                </a>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Enterprise CTA */}
                <motion.div
                    variants={fadeIn("up", 1.0)}
                    initial="hidden"
                    whileInView="show"
                    className="text-center mt-20"
                >
                    <div className="inline-flex flex-col items-center gap-4 glass-card px-12 py-8 rounded-3xl">
                        <h3 className="text-2xl font-bold text-gray-900">Need a custom enterprise solution?</h3>
                        <p className="text-gray-600">Get tailored features, dedicated support, and custom pricing.</p>
                        <button className="btn-premium px-8 py-3 shadow-lg">
                            <span className="relative z-10">Contact Sales</span>
                        </button>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default PricingSection