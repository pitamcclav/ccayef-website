'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const services = [
    {
        title: "Disease Prevention",
        description: "Comprehensive disease prevention and health education programs.",
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
        )
    },
    {
        title: "Safe Motherhood",
        description: "Supporting maternal health and safe childbirth practices.",
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
        )
    },
    {
        title: "Adolescent Health",
        description: "Specialized healthcare services for adolescents and young adults.",
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
        )
    },
    {
        title: "Community Outreach",
        description: "Mobile health services and community-based healthcare initiatives.",
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
        )
    }
];

const initiatives = [
    {
        title: "Health Education",
        description: "Regular workshops and training sessions on preventive healthcare.",
        image: "/images/Food preparation and demonstration sessions.jpg"
    },
    {
        title: "Medical Camps",
        description: "Free medical checkups and treatment camps in underserved areas.",
        image: "/images/Food preparation and demonstration sessions.jpg"
    },
    {
        title: "Maternal Care",
        description: "Comprehensive support for expectant mothers and newborns.",
        image: "/images/Food preparation and demonstration sessions.jpg"
    }
];

export default function HealthServicesPage() {
    return (
        <div className="pt-16">
            {/* Hero Section */}
            <section className="relative h-[60vh] min-h-[500px] bg-gray-900">
                <Image
                    src="/images/Food preparation and demonstration sessions.jpg"
                    alt="Health Services"
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
                            <span>Health Services</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6" data-aos="fade-up">
                            Health Services
                        </h1>
                        <p className="text-xl text-white/90 leading-relaxed" data-aos="fade-up" data-aos-delay="100">
                            Providing accessible healthcare and promoting community well-being.
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
                                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Mission</h2>
                                <p className="text-gray-600 mb-6">
                                    We are committed to improving the health and well-being of our community through accessible healthcare services, preventive care, and health education. Our focus is on reaching the most vulnerable populations and ensuring no one is left behind.
                                </p>
                                <div className="space-y-4">
                                    <div className="flex items-start gap-3">
                                        <svg className="w-6 h-6 text-primary flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        <p className="text-gray-600">Comprehensive healthcare services for all ages</p>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <svg className="w-6 h-6 text-primary flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        <p className="text-gray-600">Focus on preventive care and health education</p>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <svg className="w-6 h-6 text-primary flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        <p className="text-gray-600">Community-based approach to healthcare delivery</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Services Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                        {services.map((service, index) => (
                            <div 
                                key={index}
                                className="bg-white rounded-2xl shadow-lg p-8 transform hover:-translate-y-1 transition-all duration-300"
                                data-aos="fade-up"
                                data-aos-delay={index * 100}
                            >
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
                                        {service.icon}
                                    </div>
                                    <h3 className="text-xl font-semibold text-gray-800">{service.title}</h3>
                                </div>
                                <p className="text-gray-600">{service.description}</p>
                            </div>
                        ))}
                    </div>

                    {/* Initiatives */}
                    <div className="mb-16">
                        <h2 className="text-2xl font-semibold text-gray-800 mb-8 text-center" data-aos="fade-up">Our Initiatives</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {initiatives.map((initiative, index) => (
                                <div 
                                    key={index}
                                    className="bg-white rounded-2xl shadow-lg overflow-hidden transform hover:-translate-y-1 transition-all duration-300"
                                    data-aos="fade-up"
                                    data-aos-delay={index * 100}
                                >
                                    <div className="relative h-48">
                                        <Image
                                            src={initiative.image}
                                            alt={initiative.title}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                    <div className="p-6">
                                        <h3 className="text-lg font-semibold text-gray-800 mb-2">{initiative.title}</h3>
                                        <p className="text-gray-600">{initiative.description}</p>
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
                                <div className="text-4xl font-bold text-primary mb-2">5000+</div>
                                <p className="text-gray-600">Patients Served</p>
                            </div>
                            <div className="text-center">
                                <div className="text-4xl font-bold text-primary mb-2">24/7</div>
                                <p className="text-gray-600">Emergency Care</p>
                            </div>
                            <div className="text-center">
                                <div className="text-4xl font-bold text-primary mb-2">100+</div>
                                <p className="text-gray-600">Community Programs</p>
                            </div>
                        </div>
                    </div>

                    {/* Call to Action */}
                    <div className="mt-16 text-center" data-aos="fade-up">
                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Need Medical Assistance?</h2>
                        <p className="text-gray-600 mb-8">Contact us to learn more about our healthcare services and programs.</p>
                        <Link 
                            href="/contact" 
                            className="inline-block bg-primary text-white px-8 py-3 rounded-lg hover:bg-primary-dark transition-colors"
                        >
                            Get Help
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    )
}