import React from 'react'
import {motion} from 'motion/react';
import {fadeIn, textVariant} from "../utils/motion.js";

const Footer = () => {
    const footerLinks = {
        Company: [
            { name: 'About Us', href: '#' },
            { name: 'Careers', href: '#' },
            { name: 'Press Kit', href: '#' },
            { name: 'Contact', href: '#' },
        ],
        Resources: [
            { name: 'Blog', href: '#' },
            { name: 'Newsletter', href: '#' },
            { name: 'Help Center', href: '#' },
            { name: 'Support', href: '#' },
        ],
        Legal: [
            { name: 'Privacy', href: '#' },
            { name: 'Terms', href: '#' },
            { name: 'Cookie Policy', href: '#' },
            { name: 'Licenses', href: '#' },
        ],
        Social: [
            { name: 'Twitter', href: '#' },
            { name: 'LinkedIn', href: '#' },
            { name: 'Facebook', href: '#' },
            { name: 'Instagram', href: '#' },
        ],
    };

    return (
        <footer className="relative bg-gradient-to-b from-gray-900 to-black pt-24 pb-12 overflow-hidden">
            {/* Premium gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-violet-900/20 via-purple-900/10 to-transparent"></div>

            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-violet-500/50 to-transparent"></div>

            <div className="container mx-auto px-6 md:px-8 relative z-10">
                <motion.div
                    variants={fadeIn('up', 0.2)}
                    initial="hidden"
                    whileInView="show"
                    className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16"
                >
                    {/* Brand section */}
                    <motion.div
                        variants={fadeIn('up', 0.3)}
                        className="lg:col-span-4 space-y-6"
                    >
                        {/* Logo */}
                        <div className="flex items-center gap-4">
                            <div className="relative group">
                                <div className="absolute inset-0 bg-gradient-to-r from-violet-600 to-purple-600 rounded-2xl blur-xl opacity-50 group-hover:opacity-70 transition-opacity"></div>
                                <div className="relative w-14 h-14 bg-gradient-to-br from-violet-600 via-purple-600 to-indigo-600 rounded-2xl flex items-center justify-center">
                                    <span className="text-2xl font-black text-white">N</span>
                                </div>
                            </div>
                            <div>
                                <h1 className="text-2xl font-black text-white">NextDesign</h1>
                                <p className="text-xs text-gray-400 tracking-widest uppercase">Premium Studio</p>
                            </div>
                        </div>

                        <p className="text-gray-400 leading-relaxed max-w-sm">
                            Crafting digital experiences that inspire, engage, and deliver extraordinary results for ambitious brands.
                        </p>

                        {/* Social links */}
                        <div className="flex gap-3">
                            {['twitter', 'linkedin', 'facebook', 'instagram'].map((social, i) => (
                                <motion.a
                                    key={i}
                                    whileHover={{ scale: 1.1, y: -2 }}
                                    href="#"
                                    className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/20 transition-all"
                                >
                                    <span className="text-xs font-medium uppercase">{social[0]}</span>
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>

                    {/* Links grid */}
                    <motion.div
                        variants={fadeIn('up', 0.4)}
                        className="lg:col-span-8"
                    >
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                            {Object.entries(footerLinks).map(([category, links], categoryIndex) => (
                                <motion.div
                                    key={category}
                                    variants={fadeIn('up', 0.1 * (categoryIndex + 1))}
                                >
                                    <h3 className="text-white font-semibold mb-4">
                                        {category}
                                    </h3>
                                    <ul className="space-y-3">
                                        {links.map((link, linkIndex) => (
                                            <motion.li
                                                key={linkIndex}
                                                variants={fadeIn('up', 0.05 * (linkIndex + 1))}
                                            >
                                                <a
                                                    href={link.href}
                                                    className="text-gray-400 hover:text-white transition-colors"
                                                >
                                                    {link.name}
                                                </a>
                                            </motion.li>
                                        ))}
                                    </ul>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </motion.div>

                {/* Newsletter section */}
                <motion.div
                    variants={fadeIn('up', 0.5)}
                    initial="hidden"
                    whileInView="show"
                    className="py-12 border-t border-gray-800"
                >
                    <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                        <div>
                            <h3 className="text-white font-semibold mb-2">Subscribe to our newsletter</h3>
                            <p className="text-gray-400 text-sm">Get the latest updates and exclusive offers</p>
                        </div>
                        <div className="flex gap-3">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-violet-500 transition-all"
                            />
                            <button className="px-6 py-3 bg-gradient-to-r from-violet-600 to-purple-600 text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-violet-500/25 transition-all">
                                Subscribe
                            </button>
                        </div>
                    </div>
                </motion.div>

                {/* Bottom section */}
                <motion.div
                    variants={fadeIn('up', 0.6)}
                    initial="hidden"
                    whileInView="show"
                    className="pt-8 border-t border-gray-800"
                >
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-gray-400 text-sm">
                            © {new Date().getFullYear()} NextDesign Studio. All rights reserved.
                        </p>
                        <div className="flex items-center gap-6 text-sm text-gray-400">
                            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                            <a href="#" className="hover:text-white transition-colors">Cookies</a>
                        </div>
                    </div>
                </motion.div>
            </div>
        </footer>
    )
}

export default Footer