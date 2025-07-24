import React, {useState, useEffect} from 'react'
import {HiMenu, HiX} from "react-icons/hi";
import { motion } from "motion/react"
import {fadeIn} from "../utils/motion.js";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeLink, setActiveLink] = useState('#home');
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navlinks = [
        {href: "#home", label: "Home"},
        {href: "#about", label: "About"},
        {href: "#services", label: "Services"},
        {href: "#testimonials", label: "Testimonials"},
    ]

    return (
        <motion.nav
            variants={fadeIn('down', 0.2)}
            initial="hidden"
            whileInView="show"
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
                scrolled ? 'glass-navbar' : 'bg-transparent'
            }`}>
            <div className="container mx-auto flex items-center justify-between px-6 md:px-8 h-20 md:h-24">
                {/* Premium Logo with multiple layers */}
                <motion.div variants={fadeIn('right', 0.3)} className="flex items-center gap-4 group cursor-pointer">
                    <div className="relative">
                        {/* Glow effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-violet-600 to-purple-600 rounded-2xl blur-xl opacity-60 group-hover:opacity-80 transition-opacity animate-glow"></div>

                        {/* Logo container */}
                        <div className="relative w-14 h-14 bg-gradient-to-br from-violet-600 via-purple-600 to-indigo-600 rounded-2xl p-0.5 animate-gradient">
                            <div className="w-full h-full bg-white rounded-2xl flex items-center justify-center">
                                <span className="text-2xl font-black text-gradient-premium">N</span>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h1 className="text-2xl font-black text-gradient-shine">NextDesign</h1>
                        <p className="text-xs text-gray-500 font-medium tracking-widest uppercase">Premium Studio</p>
                    </div>
                </motion.div>

                {/* Mobile Menu Toggle - Premium */}
                <motion.button
                    variants={fadeIn('left', 0.3)}
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="md:hidden relative group">
                    <div className="absolute inset-0 bg-gradient-to-r from-violet-600 to-purple-600 rounded-xl blur opacity-60 group-hover:opacity-80 transition-opacity"></div>
                    <div className="relative glass-card p-3 rounded-xl">
                        {isMenuOpen ? <HiX className="size-6 text-violet-700"/> : <HiMenu className="size-6 text-violet-700"/>}
                    </div>
                </motion.button>

                {/* Desktop Navigation - Ultra Premium */}
                <div className="hidden md:flex items-center gap-2">
                    <div className="glass-card rounded-full px-8 py-3 flex items-center gap-8">
                        {navlinks.map((link, i) => (
                            <motion.a
                                key={i}
                                variants={fadeIn('down', 0.1 * (i + 1))}
                                href={link.href}
                                onClick={() => setActiveLink(link.href)}
                                className={`relative text-sm font-semibold transition-all duration-300 ${
                                    activeLink === link.href
                                        ? "text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-purple-600"
                                        : "text-gray-700 hover:text-gray-900"
                                }`}>
                                {link.label}
                                {activeLink === link.href && (
                                    <motion.div
                                        layoutId="active-nav"
                                        className="absolute -bottom-3 left-0 right-0 h-0.5 bg-gradient-to-r from-violet-600 to-purple-600"
                                    />
                                )}
                                <span className="absolute inset-0 rounded-lg hover:bg-violet-50/50 -z-10 transition-colors" />
                            </motion.a>
                        ))}
                    </div>

                    <motion.button
                        variants={fadeIn('left', 0.4)}
                        whileHover={{scale: 1.05}}
                        whileTap={{scale: 0.95}}
                        className="btn-premium px-8 py-3.5 ml-4 group">
                        <span className="relative z-10 flex items-center gap-2">
                            <span>Get Started</span>
                            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                            </svg>
                        </span>
                    </motion.button>
                </div>
            </div>

            {/* Mobile Menu - Premium Glass */}
            {isMenuOpen && (
                <motion.div
                    variants={fadeIn('down', 0.2)}
                    initial="hidden"
                    animate="show"
                    className="md:hidden absolute top-full left-0 right-0 glass-navbar border-t border-white/10">
                    <div className='container mx-auto px-6 py-6 space-y-2'>
                        {navlinks.map((link, i) => (
                            <motion.a
                                key={i}
                                variants={fadeIn('right', 0.1 * (i + 1))}
                                href={link.href}
                                onClick={() => {setActiveLink(link.href); setIsMenuOpen(false);}}
                                className={`block px-6 py-3 rounded-xl transition-all ${
                                    activeLink === link.href
                                        ? "bg-gradient-to-r from-violet-600 to-purple-600 text-white font-semibold shadow-lg"
                                        : "text-gray-700 hover:bg-violet-50"
                                }`}>
                                {link.label}
                            </motion.a>
                        ))}
                        <motion.button
                            variants={fadeIn('up', 0.5)}
                            className="w-full btn-premium py-4 mt-4">
                            Get Started
                        </motion.button>
                    </div>
                </motion.div>
            )}
        </motion.nav>
    )
}
export default Navbar