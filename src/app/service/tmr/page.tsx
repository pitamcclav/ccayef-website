'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const programs = [
    {
        title: "Counseling & Support",
        description: "Professional counseling and mental health support for teen mothers.",
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
        )
    },
    {
        title: "Health Education",
        description: "Comprehensive health education and access to medical services.",
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
        )
    },
    {
        title: "Skills Training",
        description: "Vocational and life skills training for economic empowerment.",
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
        )
    },
    {
        title: "Child Care Support",
        description: "Assistance with child care and parenting education.",
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
        )
    }
];

const successStories = [
    {
        quote: "Through CCAYEF's support, I was able to complete my education and now I can provide for my child.",
        author: "Sarah, Program Graduate",
        image: "/images/Food preparation and demonstration sessions.jpg"
    },
    {
        quote: "The counseling and skills training helped me build a better future for myself and my baby.",
        author: "Mary, Current Participant",
        image: "/images/Food preparation and demonstration sessions.jpg"
    }
];

export default function TeenageMotherRehabPage() {
    return (
        <div className="pt-16">
            {/* Hero Section */}
            <section className="relative h-[60vh] min-h-[500px] bg-gray-900">
                <Image
                    src="/images/Food preparation and demonstration sessions.jpg"
                    alt="Teenage Mother Rehabilitation"
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
                            <span>Teenage Mother Rehabilitation</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6" data-aos="fade-up">
                            Teenage Mother Rehabilitation
                        </h1>
                        <p className="text-xl text-white/90 leading-relaxed" data-aos="fade-up" data-aos-delay="100">
                            Supporting young mothers to build better futures through comprehensive care and empowerment programs.
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
                                    Children born to teenage mothers are often vulnerable and face numerous challenges, including malnutrition and limited access to education. Our program aims to break this cycle by providing comprehensive support to both mothers and their children.
                                </p>
                                <div className="space-y-4">
                                    <div className="flex items-start gap-3">
                                        <svg className="w-6 h-6 text-primary flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        <p className="text-gray-600">Medical support for mothers and babies</p>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <svg className="w-6 h-6 text-primary flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        <p className="text-gray-600">Education and skills training opportunities</p>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <svg className="w-6 h-6 text-primary flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        <p className="text-gray-600">Counseling and mental health support</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Programs Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                        {programs.map((program, index) => (
                            <div 
                                key={index}
                                className="bg-white rounded-2xl shadow-lg p-8 transform hover:-translate-y-1 transition-all duration-300"
                                data-aos="fade-up"
                                data-aos-delay={index * 100}
                            >
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
                                        {program.icon}
                                    </div>
                                    <h3 className="text-xl font-semibold text-gray-800">{program.title}</h3>
                                </div>
                                <p className="text-gray-600">{program.description}</p>
                            </div>
                        ))}
                    </div>

                    {/* Success Stories */}
                    <div className="mb-16">
                        <h2 className="text-2xl font-semibold text-gray-800 mb-8 text-center" data-aos="fade-up">Success Stories</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {successStories.map((story, index) => (
                                <div 
                                    key={index}
                                    className="bg-white rounded-2xl shadow-lg overflow-hidden transform hover:-translate-y-1 transition-all duration-300"
                                    data-aos="fade-up"
                                    data-aos-delay={index * 100}
                                >
                                    <div className="relative h-48">
                                        <Image
                                            src={story.image}
                                            alt={story.author}
                                            fill
                                            className="object-cover"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                                    </div>
                                    <div className="p-8">
                                        <blockquote className="text-gray-600 text-lg italic mb-4">"{story.quote}"</blockquote>
                                        <p className="text-primary font-medium">{story.author}</p>
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
                                <div className="text-4xl font-bold text-primary mb-2">15+</div>
                                <p className="text-gray-600">Mothers Reintegrated into Education</p>
                            </div>
                            <div className="text-center">
                                <div className="text-4xl font-bold text-primary mb-2">100%</div>
                                <p className="text-gray-600">Access to Healthcare Services</p>
                            </div>
                            <div className="text-center">
                                <div className="text-4xl font-bold text-primary mb-2">80%</div>
                                <p className="text-gray-600">Employment Rate After Training</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}