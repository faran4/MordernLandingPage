import React from 'react'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import {motion} from 'motion/react';
import {fadeIn, textVariant} from "../utils/motion.js";

const testimonials = [
    {
        id: 1,
        name: "Alexander Reid",
        role: "CEO & Founder",
        company: "Reid Enterprises",
        image: "https://randomuser.me/api/portraits/men/77.jpg",
        text: "The transformation has been phenomenal. Our conversion rates increased by 300% within the first quarter.",
        rating: 5
    },
    {
        id: 2,
        name: "Victoria Chen",
        role: "Chief Marketing Officer",
        company: "TechVision Inc",
        image: "https://randomuser.me/api/portraits/women/90.jpg",
        text: "Working with them elevated our brand to new heights. The attention to detail delivered exceptional results.",
        rating: 5
    },
    {
        id: 3,
        name: "Marcus Thompson",
        role: "VP of Operations",
        company: "Global Solutions",
        image: "https://randomuser.me/api/portraits/men/90.jpg",
        text: "Their innovative solutions helped us scale from startup to industry leader. The ROI has been extraordinary.",
        rating: 5
    },
    {
        id: 4,
        name: "Sarah Mitchell",
        role: "Director of Strategy",
        company: "Mitchell & Associates",
        image: "https://randomuser.me/api/portraits/women/45.jpg",
        text: "Exceptional service and results. They didn't just meet our expectations, they redefined them entirely.",
        rating: 5
    },
    {
        id: 5,
        name: "David Park",
        role: "Head of Digital",
        company: "Park Industries",
        image: "https://randomuser.me/api/portraits/men/32.jpg",
        text: "Best investment we've made. The platform's sophistication and their team's expertise are world-class.",
        rating: 5
    },
    {
        id: 6,
        name: "Emma Williams",
        role: "Creative Director",
        company: "Williams Studio",
        image: "https://randomuser.me/api/portraits/women/28.jpg",
        text: "They transformed our vision into reality. Revenue increased by 400% in just one year. Simply outstanding.",
        rating: 5
    },
];

const TestimonialsSection = () => {
    return (
        <section className="relative min-h-screen flex items-center overflow-hidden" id="testimonials">
            {/* Premium gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-white via-violet-50/30 to-indigo-50/20 -z-10"></div>

            {/* Animated orbs */}
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
                    <motion.span
                        variants={fadeIn("up", 0.3)}
                        className="badge-premium inline-flex mb-6"
                    >
                        <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        CLIENT TESTIMONIALS
                    </motion.span>

                    <motion.h2
                        variants={textVariant(0.4)}
                        className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black mb-4 lg:mb-6"
                    >
                        <span className="text-gray-900">What Our</span>
                        <span className="text-gradient-premium"> Clients Say</span>
                    </motion.h2>

                    <motion.p
                        variants={fadeIn("up", 0.5)}
                        className="text-base lg:text-lg text-gray-600 max-w-2xl mx-auto"
                    >
                        Join thousands of satisfied clients who have transformed their business
                    </motion.p>
                </motion.div>

                {/* Premium testimonials slider */}
                <motion.div
                    variants={fadeIn("up", 0.6)}
                    initial="hidden"
                    whileInView="show"
                    className="max-w-7xl mx-auto"
                >
                    <Swiper
                        spaceBetween={20}
                        slidesPerView={1}
                        navigation={{
                            nextEl: '.testimonial-next',
                            prevEl: '.testimonial-prev',
                        }}
                        pagination={{
                            clickable: true,
                            dynamicBullets: true,
                        }}
                        autoplay={{
                            delay: 5000,
                            disableOnInteraction: false,
                        }}
                        breakpoints={{
                            640: {
                                slidesPerView: 1,
                                spaceBetween: 20,
                            },
                            768: {
                                slidesPerView: 2,
                                spaceBetween: 24,
                            },
                            1024: {
                                slidesPerView: 3,
                                spaceBetween: 30,
                            },
                        }}
                        modules={[Navigation, Pagination, Autoplay]}
                        className="testimonials-premium pb-12 lg:pb-16"
                    >
                        {testimonials.map((testimonial) => (
                            <SwiperSlide key={testimonial.id}>
                                <motion.div
                                    whileHover={{ y: -8 }}
                                    className="h-full"
                                >
                                    <div className="glass-card rounded-3xl p-6 lg:p-8 h-full hover:shadow-premium transition-all relative group">
                                        {/* Quote mark */}
                                        <div className="absolute -top-3 -left-3 w-12 h-12 lg:w-14 lg:h-14 bg-gradient-to-br from-violet-600 to-indigo-600 rounded-2xl flex items-center justify-center shadow-lg opacity-0 group-hover:opacity-100 transition-opacity">
                                            <svg className="w-6 h-6 lg:w-8 lg:h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                                            </svg>
                                        </div>

                                        {/* Content */}
                                        <div className="flex flex-col h-full">
                                            {/* Profile */}
                                            <div className="flex items-center gap-3 lg:gap-4 mb-6">
                                                <div className="relative">
                                                    <div className="absolute inset-0 bg-gradient-to-r from-violet-600 to-indigo-600 rounded-full blur-md opacity-40"></div>
                                                    <img
                                                        src={testimonial.image}
                                                        alt={testimonial.name}
                                                        className="relative w-16 h-16 lg:w-20 lg:h-20 object-cover rounded-full border-2 border-white"
                                                    />
                                                </div>
                                                <div>
                                                    <h3 className="text-lg lg:text-xl font-bold text-gray-900">{testimonial.name}</h3>
                                                    <p className="text-violet-600 font-medium text-sm lg:text-base">{testimonial.role}</p>
                                                    <p className="text-xs lg:text-sm text-gray-500">{testimonial.company}</p>
                                                </div>
                                            </div>

                                            {/* Rating */}
                                            <div className="flex gap-1 mb-4">
                                                {[...Array(5)].map((_, i) => (
                                                    <svg key={i} className="w-4 h-4 lg:w-5 lg:h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                    </svg>
                                                ))}
                                            </div>

                                            {/* Testimonial */}
                                            <p className="text-gray-600 leading-relaxed flex-grow text-sm lg:text-base">
                                                "{testimonial.text}"
                                            </p>

                                            {/* Verified badge */}
                                            <div className="mt-6 pt-4 border-t border-gray-100">
                                                <div className="flex items-center justify-between">
                                                    <span className="text-xs lg:text-sm text-gray-400">Verified Client</span>
                                                    <div className="flex items-center gap-1">
                                                        <svg className="w-4 h-4 lg:w-5 lg:h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                                                            <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                                        </svg>
                                                        <span className="text-xs text-green-600 font-medium">Verified</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    {/* Navigation buttons */}
                    <div className="flex justify-center gap-3 lg:gap-4 mt-8 lg:mt-12">
                        <button className="testimonial-prev group">
                            <div className="w-12 h-12 lg:w-14 lg:h-14 glass-card rounded-2xl flex items-center justify-center hover:shadow-lg transition-all group-hover:border-violet-200">
                                <svg className="w-5 h-5 lg:w-6 lg:h-6 text-gray-600 group-hover:text-violet-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                </svg>
                            </div>
                        </button>
                        <button className="testimonial-next group">
                            <div className="w-12 h-12 lg:w-14 lg:h-14 glass-card rounded-2xl flex items-center justify-center hover:shadow-lg transition-all group-hover:border-violet-200">
                                <svg className="w-5 h-5 lg:w-6 lg:h-6 text-gray-600 group-hover:text-violet-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </div>
                        </button>
                    </div>
                </motion.div>

                {/* Simple closing */}
                <motion.div
                    variants={fadeIn("up", 0.8)}
                    initial="hidden"
                    whileInView="show"
                    className="text-center mt-8 lg:mt-12"
                >
                    <p className="text-gray-600">
                        ⭐ 4.9/5 rating from 2,000+ verified reviews
                    </p>
                </motion.div>
            </div>
        </section>
    )
}

export default TestimonialsSection