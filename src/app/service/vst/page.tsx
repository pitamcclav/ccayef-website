'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const courses = [
    {
        title: "Tailoring & Fashion Design",
        description: "Learn professional sewing techniques and fashion design principles.",
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
            </svg>
        )
    },
    {
        title: "Hairdressing & Beauty",
        description: "Master hair styling, beauty treatments, and salon management.",
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
            </svg>
        )
    },
    {
        title: "Catering & Hospitality",
        description: "Develop culinary skills and learn food service management.",
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
        )
    },
    {
        title: "Computer Skills",
        description: "Learn essential computer applications and digital literacy.",
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
        )
    }
];

const testimonials = [
    {
        quote: "The tailoring course gave me the skills to start my own business and support my family.",
        author: "Jane, Fashion Design Graduate",
        image: "/images/Food preparation and demonstration sessions.jpg"
    },
    {
        quote: "Thanks to the computer skills training, I now work as a data entry specialist.",
        author: "John, Computer Skills Graduate",
        image: "/images/Food preparation and demonstration sessions.jpg"
    }
];

export default function VocationalSkillsPage() {
    return (
        <div className="pt-16">
            {/* Hero Section */}
            <section className="relative h-[60vh] min-h-[500px] bg-gray-900">
                <Image
                    src="/images/Food preparation and demonstration sessions.jpg"
                    alt="Vocational Skills Training"
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
                            <span>Vocational Skills Training</span>
                  </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6" data-aos="fade-up">
                            Vocational Skills Training
                        </h1>
                        <p className="text-xl text-white/90 leading-relaxed" data-aos="fade-up" data-aos-delay="100">
                            Empowering youth with practical skills for sustainable livelihoods and economic independence.
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
                                    Our vocational training program is designed to provide practical, hands-on skills that lead to immediate employment opportunities or self-employment. We focus on market-driven skills that are in high demand in our community.
                                </p>
                                <div className="space-y-4">
                                    <div className="flex items-start gap-3">
                                        <svg className="w-6 h-6 text-primary flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        <p className="text-gray-600">Industry-standard equipment and facilities</p>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <svg className="w-6 h-6 text-primary flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        <p className="text-gray-600">Experienced instructors from relevant industries</p>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <svg className="w-6 h-6 text-primary flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        <p className="text-gray-600">Business skills and entrepreneurship training</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Courses Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                        {courses.map((course, index) => (
                            <div 
                                key={index}
                                className="bg-white rounded-2xl shadow-lg p-8 transform hover:-translate-y-1 transition-all duration-300"
                                data-aos="fade-up"
                                data-aos-delay={index * 100}
                            >
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
                                        {course.icon}
                                    </div>
                                    <h3 className="text-xl font-semibold text-gray-800">{course.title}</h3>
                                </div>
                                <p className="text-gray-600">{course.description}</p>
                            </div>
                        ))}
                    </div>

                    {/* Testimonials */}
                    <div className="mb-16">
                        <h2 className="text-2xl font-semibold text-gray-800 mb-8 text-center" data-aos="fade-up">Student Success Stories</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {testimonials.map((testimonial, index) => (
                                <div 
                                    key={index}
                                    className="bg-white rounded-2xl shadow-lg overflow-hidden transform hover:-translate-y-1 transition-all duration-300"
                                    data-aos="fade-up"
                                    data-aos-delay={index * 100}
                                >
                                    <div className="relative h-48">
                                        <Image
                                            src={testimonial.image}
                                            alt={testimonial.author}
                                            fill
                                            className="object-cover"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                                    </div>
                                    <div className="p-8">
                                        <blockquote className="text-gray-600 text-lg italic mb-4">"{testimonial.quote}"</blockquote>
                                        <p className="text-primary font-medium">{testimonial.author}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Impact Stats */}
                    <div className="bg-white rounded-2xl shadow-lg p-8" data-aos="fade-up">
                        <h2 className="text-2xl font-semibold text-gray-800 mb-8 text-center">Program Impact</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="text-center">
                                <div className="text-4xl font-bold text-primary mb-2">200+</div>
                                <p className="text-gray-600">Students Trained</p>
                            </div>
                            <div className="text-center">
                                <div className="text-4xl font-bold text-primary mb-2">85%</div>
                                <p className="text-gray-600">Employment Rate</p>
                            </div>
                            <div className="text-center">
                                <div className="text-4xl font-bold text-primary mb-2">50+</div>
                                <p className="text-gray-600">Business Start-ups</p>
                            </div>
                  </div>
              </div>

                    {/* Call to Action */}
                    <div className="mt-16 text-center" data-aos="fade-up">
                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Ready to Start Your Journey?</h2>
                        <p className="text-gray-600 mb-8">Join our vocational training program and take the first step towards a successful career.</p>
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