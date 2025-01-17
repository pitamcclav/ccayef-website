'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const programs = [
    {
        title: "Life Skills Training",
        description: "Building essential life skills for personal development and success.",
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
        )
    },
    {
        title: "Mentorship",
        description: "Connecting youth with positive role models and mentors.",
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
        )
    },
    {
        title: "Leadership Development",
        description: "Fostering leadership skills and community engagement.",
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
        )
    },
    {
        title: "Health Education",
        description: "Comprehensive health education and awareness programs.",
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
        )
    }
];

const successStories = [
    {
        quote: "The leadership program helped me discover my potential and become a community leader.",
        author: "Sarah, Program Graduate",
        image: "/images/Food preparation and demonstration sessions.jpg"
    },
    {
        title: "Youth-Led Initiatives",
        description: "Our graduates leading community development projects.",
        image: "/images/Food preparation and demonstration sessions.jpg"
    },
    {
        title: "Skills Development",
        description: "Training sessions empowering youth with practical skills.",
        image: "/images/Food preparation and demonstration sessions.jpg"
    }
];

export default function AdolescentEmpowermentPage() {
    return (
        <div className="pt-16">
            {/* Hero Section */}
            <section className="relative h-[60vh] min-h-[500px] bg-gray-900">
                <Image
                    src="/images/Food preparation and demonstration sessions.jpg"
                    alt="Adolescent Empowerment"
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
                            <span>Adolescent Empowerment</span>
                  </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6" data-aos="fade-up">
                            Adolescent Empowerment
                        </h1>
                        <p className="text-xl text-white/90 leading-relaxed" data-aos="fade-up" data-aos-delay="100">
                            Empowering young people to become confident leaders and change-makers.
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
                                    We believe in empowering adolescents with the knowledge, skills, and support they need to make informed decisions and become active contributors to their communities. Our comprehensive approach focuses on personal development, leadership skills, and health awareness.
                                </p>
                                <div className="space-y-4">
                                    <div className="flex items-start gap-3">
                                        <svg className="w-6 h-6 text-primary flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        <p className="text-gray-600">Building confidence and self-esteem</p>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <svg className="w-6 h-6 text-primary flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        <p className="text-gray-600">Developing leadership and life skills</p>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <svg className="w-6 h-6 text-primary flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        <p className="text-gray-600">Promoting health awareness and education</p>
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
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
                                            alt={story.title || story.author || 'Success Story'}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                    <div className="p-6">
                                        {story.quote ? (
                                            <>
                                                <blockquote className="text-gray-600 text-lg italic mb-4">"{story.quote}"</blockquote>
                                                <p className="text-primary font-medium">{story.author}</p>
                                            </>
                                        ) : (
                                            <>
                                                <h3 className="text-lg font-semibold text-gray-800 mb-2">{story.title}</h3>
                                                <p className="text-gray-600">{story.description}</p>
                                            </>
                                        )}
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
                                <div className="text-4xl font-bold text-primary mb-2">1000+</div>
                                <p className="text-gray-600">Youth Empowered</p>
                            </div>
                            <div className="text-center">
                                <div className="text-4xl font-bold text-primary mb-2">50+</div>
                                <p className="text-gray-600">Community Projects</p>
                            </div>
                            <div className="text-center">
                                <div className="text-4xl font-bold text-primary mb-2">85%</div>
                                <p className="text-gray-600">Program Success Rate</p>
                            </div>
                  </div>
              </div>

                    {/* Call to Action */}
                    <div className="mt-16 text-center" data-aos="fade-up">
                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Join Our Youth Programs</h2>
                        <p className="text-gray-600 mb-8">Take the first step towards becoming a confident leader and change-maker.</p>
                        <Link 
                            href="/contact" 
                            className="inline-block bg-primary text-white px-8 py-3 rounded-lg hover:bg-primary-dark transition-colors"
                        >
                            Get Started
                        </Link>
                    </div>
                </div>
          </section>
      </div>
  )
}