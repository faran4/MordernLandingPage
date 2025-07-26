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
            { name: 'Documentation', href: '#' },
            { name: 'Help Center', href: '#' },
            { name: 'Support', href: '#' },
        ],
        Legal: [
            { name: 'Privacy Policy', href: '#' },
            { name: 'Terms of Service', href: '#' },
            { name: 'Cookie Policy', href: '#' },
            { name: 'Licenses', href: '#' },
        ],
        Connect: [
            { name: 'Twitter', href: '#' },
            { name: 'LinkedIn', href: '#' },
            { name: 'GitHub', href: '#' },
            { name: 'Discord', href: '#' },
        ],
    };

    return (
        <footer className="relative bg-white pt-20 pb-8 overflow-hidden">
            {/* Premium light background */}
            <div className="absolute inset-0 bg-gradient-to-b from-violet-50/30 via-white to-gray-50/50 -z-10"></div>

            {/* Elegant top border */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-violet-300/60 to-transparent"></div>

            {/* Subtle decorative orbs */}
            <div className="absolute top-20 right-20 w-64 h-64 bg-violet-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
            <div className="absolute bottom-20 left-20 w-64 h-64 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>

            <div className="container mx-auto px-4 sm:px-6 md:px-8 relative z-10">
                <motion.div
                    variants={fadeIn('up', 0.2)}
                    initial="hidden"
                    whileInView="show"
                    className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-12"
                >
                    {/* Brand section */}
                    <motion.div
                        variants={fadeIn('up', 0.3)}
                        className="lg:col-span-5 space-y-6"
                    >
                        {/* Logo */}
                        <div className="flex items-center gap-4">
                            <div className="relative group">
                                <div className="absolute inset-0 bg-gradient-to-r from-violet-600 to-purple-600 rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity"></div>
                                <div className="relative w-16 h-16 bg-gradient-to-br from-violet-600 via-purple-600 to-indigo-600 rounded-2xl flex items-center justify-center shadow-lg">
                                    <span className="text-3xl font-black text-white">N</span>
                                </div>
                            </div>
                            <div>
                                <h1 className="text-3xl font-black text-gray-900">NextDesign</h1>
                                <p className="text-sm text-gray-600 tracking-widest uppercase font-medium">Premium Studio</p>
                            </div>
                        </div>

                        <p className="text-gray-600 leading-relaxed text-lg max-w-md">
                            Crafting exceptional digital experiences that inspire, engage, and deliver extraordinary results for ambitious brands.
                        </p>

                        {/* Social links */}
                        <div className="space-y-4">
                            <h3 className="text-gray-900 font-semibold text-lg">Follow Us</h3>
                            <div className="flex gap-4">
                                {[
                                    { name: 'Twitter', icon: 'T' },
                                    { name: 'LinkedIn', icon: 'L' },
                                    { name: 'GitHub', icon: 'G' },
                                    { name: 'Discord', icon: 'D' }
                                ].map((social, i) => (
                                    <motion.a
                                        key={i}
                                        whileHover={{ scale: 1.1, y: -2 }}
                                        href="#"
                                        className="relative group"
                                    >
                                        <div className="absolute inset-0 bg-gradient-to-r from-violet-600 to-purple-600 rounded-xl blur opacity-0 group-hover:opacity-30 transition-opacity"></div>
                                        <div className="relative w-12 h-12 glass-card rounded-xl flex items-center justify-center text-gray-600 hover:text-violet-700 transition-all shadow-sm hover:shadow-lg">
                                            <span className="text-sm font-bold">{social.icon}</span>
                                        </div>
                                    </motion.a>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Links grid */}
                    <motion.div
                        variants={fadeIn('up', 0.4)}
                        className="lg:col-span-7"
                    >
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                            {Object.entries(footerLinks).map(([category, links], categoryIndex) => (
                                <motion.div
                                    key={category}
                                    variants={fadeIn('up', 0.1 * (categoryIndex + 1))}
                                >
                                    <h3 className="text-gray-900 font-bold mb-6 text-lg">
                                        {category}
                                    </h3>
                                    <ul className="space-y-4">
                                        {links.map((link, linkIndex) => (
                                            <motion.li
                                                key={linkIndex}
                                                variants={fadeIn('up', 0.05 * (linkIndex + 1))}
                                            >
                                                <a
                                                    href={link.href}
                                                    className="text-gray-600 hover:text-violet-700 transition-colors relative group inline-block"
                                                >
                                                    {link.name}
                                                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-violet-600 to-purple-600 group-hover:w-full transition-all duration-300"></span>
                                                </a>
                                            </motion.li>
                                        ))}
                                    </ul>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </motion.div>

                {/* Bottom section */}
                <motion.div
                    variants={fadeIn('up', 0.6)}
                    initial="hidden"
                    whileInView="show"
                    className="pt-8 border-t border-gray-200"
                >
                    <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                        <div className="flex flex-col md:flex-row items-center gap-6">
                            <p className="text-gray-600">
                                © {new Date().getFullYear()} NextDesign Studio. All rights reserved.
                            </p>
                            <p className="text-gray-500 text-sm">
                                Trusted by 10,000+ companies worldwide
                            </p>
                        </div>
                        <div className="flex items-center gap-8 text-sm">
                            <a href="#" className="text-gray-600 hover:text-violet-700 transition-colors">Privacy</a>
                            <a href="#" className="text-gray-600 hover:text-violet-700 transition-colors">Terms</a>
                            <a href="#" className="text-gray-600 hover:text-violet-700 transition-colors">Cookies</a>
                        </div>
                    </div>
                </motion.div>
            </div>
        </footer>
    )
}

export default Footer