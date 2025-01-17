'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const features = [
    {
        title: "Safe Learning Environment",
        description: "A secure and nurturing space for children to learn and grow.",
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
        )
    },
    {
        title: "Qualified Teachers",
        description: "Experienced educators dedicated to child development.",
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
        )
    },
    {
        title: "Holistic Development",
        description: "Focus on physical, social, emotional, and cognitive growth.",
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
        )
    },
    {
        title: "Affordable Education",
        description: "Quality education accessible to all community members.",
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        )
    }
];

const activities = [
    {
        title: "Creative Arts",
        description: "Engaging in drawing, painting, and crafts to develop fine motor skills and creativity.",
        image: "/images/Food preparation and demonstration sessions.jpg"
    },
    {
        title: "Physical Activities",
        description: "Age-appropriate games and exercises for healthy physical development.",
        image: "/images/Food preparation and demonstration sessions.jpg"
    },
    {
        title: "Language Development",
        description: "Interactive storytelling and vocabulary building activities.",
        image: "/images/Food preparation and demonstration sessions.jpg"
    }
];

export default function EarlyChildhoodPage() {
    return (
        <div className="pt-16">
            {/* Hero Section */}
            <section className="relative h-[60vh] min-h-[500px] bg-gray-900">
                <Image
                    src="/images/Food preparation and demonstration sessions.jpg"
                    alt="Early Childhood Development"
                    fill
                    className="object-cover opacity-40"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/50" />
                <div className="relative h-full container mx-auto px-4">
                    <div className="flex flex-col justify-center h-full max-w-3xl">
                        <div className="flex items-center gap-2 text-white/80 mb-4" data-aos="fade-right">
                            <Link 
                                href="/service" 
                                className="hover:text-white transition-colors"
                            >
                                Services
                            </Link>
                            <span>/</span>
                            <span>Early Childhood Development</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6" data-aos="fade-up">
                            Early Childhood Development
                        </h1>
                        <p className="text-xl text-white/90 leading-relaxed" data-aos="fade-up" data-aos-delay="100">
                            Nurturing young minds through quality education and comprehensive care.
                        </p>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-20 bg-gradient-to-b from-primary/5 via-white to-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto mb-16">
                        <div className="prose prose-lg">
                            <div className="bg-white rounded-2xl shadow-lg p-8 mb-8" data-aos="fade-up">
                                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Approach</h2>
                                <p className="text-gray-600 mb-6">
                                    We believe every child deserves access to quality early childhood education. Our program focuses on creating a safe, nurturing environment where children can develop essential skills through play-based learning and structured activities.
                                </p>
                                <div className="space-y-4">
                                    <div className="flex items-start gap-3">
                                        <svg className="w-6 h-6 text-primary flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        <p className="text-gray-600">Age-appropriate curriculum designed for optimal learning</p>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <svg className="w-6 h-6 text-primary flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        <p className="text-gray-600">Regular parent-teacher communication and involvement</p>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <svg className="w-6 h-6 text-primary flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        <p className="text-gray-600">Focus on both academic and social-emotional development</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Features Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                        {features.map((feature, index) => (
                            <div 
                                key={index}
                                className="bg-white rounded-2xl shadow-lg p-8 transform hover:-translate-y-1 transition-all duration-300"
                                data-aos="fade-up"
                                data-aos-delay={index * 100}
                            >
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
                                        {feature.icon}
                                    </div>
                                    <h3 className="text-xl font-semibold text-gray-800">{feature.title}</h3>
                                </div>
                                <p className="text-gray-600">{feature.description}</p>
                            </div>
                        ))}
                    </div>

                    {/* Activities */}
                    <div className="mb-16">
                        <h2 className="text-2xl font-semibold text-gray-800 mb-8 text-center" data-aos="fade-up">Daily Activities</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {activities.map((activity, index) => (
                                <div 
                                    key={index}
                                    className="bg-white rounded-2xl shadow-lg overflow-hidden transform hover:-translate-y-1 transition-all duration-300"
                                    data-aos="fade-up"
                                    data-aos-delay={index * 100}
                                >
                                    <div className="relative h-48">
                                        <Image
                                            src={activity.image}
                                            alt={activity.title}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                    <div className="p-6">
                                        <h3 className="text-lg font-semibold text-gray-800 mb-2">{activity.title}</h3>
                                        <p className="text-gray-600">{activity.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Impact Stats */}
                    <div className="bg-white rounded-2xl shadow-lg p-8" data-aos="fade-up">
                        <h2 className="text-2xl font-semibold text-gray-800 mb-8 text-center">Our Impact</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="text-center">
                                <div className="text-4xl font-bold text-primary mb-2">100+</div>
                                <p className="text-gray-600">Children Enrolled</p>
                            </div>
                            <div className="text-center">
                                <div className="text-4xl font-bold text-primary mb-2">90%</div>
                                <p className="text-gray-600">Parent Satisfaction</p>
                            </div>
                            <div className="text-center">
                                <div className="text-4xl font-bold text-primary mb-2">8:1</div>
                                <p className="text-gray-600">Student-Teacher Ratio</p>
                            </div>
                        </div>
                    </div>

                    {/* Call to Action */}
                    <div className="mt-16 text-center" data-aos="fade-up">
                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Give Your Child the Best Start</h2>
                        <p className="text-gray-600 mb-8">Enroll your child in our early childhood development program today.</p>
                        <Link 
                            href="/contact" 
                            className="inline-block bg-primary text-white px-8 py-3 rounded-lg hover:bg-primary-dark transition-colors"
                        >
                            Enroll Now
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    )
}