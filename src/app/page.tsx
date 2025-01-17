'use client'

import React, { useState } from 'react'
import useContactForm from "@/hooks/useContactForm";
import Link from "next/link";
import Image from 'next/image';
import Carousel from '@/components/Carousel';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import { PureIncrement } from 'pure_counter';
import DonateModal from '@/components/DonateModal'

const heroSlides = [
    {
        image: "/images/Learning visit for students of Wisconcin_USA at CCAYEF.jpg",
        title: "Communities Involved",
        description: "Join us to change lives."
    },
    {
        image: "/images/mhm_demo.jpg",
        title: "Volunteer Opportunities",
        description: "Give back to your community and help those in need."
    },
    {
        image: "/images/COMBASHI Approach training for Buikwe government officials.jpg",
        title: "Support Our Mission",
        description: "Your donations can change lives."
    }
];

const stats = [
    {
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        ),
        value: 10,
        label: "Happy Clients"
    },
    {
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
        ),
        value: 10,
        label: "Projects"
    },
    {
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
        ),
        value: 10,
        label: "Hours Of Support"
    },
    {
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
        ),
        value: 10,
        label: "Hard Workers"
    }
];

export default function Home() {
    const { formData, status, handleChange, handleSubmit } = useContactForm();
    const [isDonateModalOpen, setIsDonateModalOpen] = useState(false)

    return (
        <div>
            {/* Hero Section */}
            <section id="hero" className="relative h-screen">
                <div className="absolute inset-0">
                    <Carousel slides={heroSlides} />
                </div>
                <div className="relative h-full z-20 flex flex-col items-center justify-center text-center text-white p-4 sm:px-6 md:px-8" data-aos="fade-down" data-aos-duration="1000">
                    <div className="max-w-4xl mx-auto backdrop-blur-sm bg-black/10 p-4 sm:p-6 md:p-8 rounded-2xl">
                        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 sm:mb-6 text-balance">
                            Empowering Youth for a Brighter Future
                        </h1>
                        <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 text-balance opacity-90">
                            Join us in our mission to transform lives through education, skill-building, and community development.
                        </p>
                        <a href="#volunteer" className="btn btn-primary">
                            Get Started
                        </a>
                    </div>
                </div>
            </section>

            {/* Volunteer Section */}
            <section id="volunteer" className="py-12 sm:py-16 md:py-20 bg-gray-50">
                <div className="container px-4 sm:px-6">
                    <div className="text-center mb-8 sm:mb-12" data-aos="fade-up">
                        <h2 className="section-title">Join Us</h2>
                        <p className="section-subtitle">Joining us is a great way to give back to the community. We have a number of programs that you can volunteer for.</p>
                    </div>
                    <div className="bg-white rounded-2xl shadow-lg overflow-hidden max-w-5xl mx-auto" data-aos="fade-up">
                        <div className="grid grid-cols-1 lg:grid-cols-2">
                            <div className="relative aspect-square lg:aspect-auto">
                                <Image
                                    src="/images/Group hand washing facility at Kangulumira CU.jpg"
                                    alt="volunteer"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="p-4 sm:p-6 md:p-8 lg:p-12">
                                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                                            Your Name
                                        </label>
                                        <input
                                            id="name"
                                            type="text"
                                            name="name"
                                            onChange={handleChange}
                                            value={formData.name}
                                            className="form-input"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                                            Your Email
                                        </label>
                                        <input
                                            id="email"
                                            type="email"
                                            name="email"
                                            onChange={handleChange}
                                            value={formData.email}
                                            className="form-input"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                                            Your Message
                                        </label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            onChange={handleChange}
                                            value={formData.message}
                                            rows={4}
                                            className="form-input"
                                            required
                                        />
                                    </div>
                                    <button
                                        type="submit"
                                        className="btn btn-primary w-full"
                                    >
                                        Submit
                                    </button>
                                    {status && (
                                        <p className="text-sm text-center text-gray-600">{status}</p>
                                    )}
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* What We Do Section */}
            <section className="py-20">
                <div className="container">
                    <div className="text-center mb-12" data-aos="fade-up">
                        <h2 className="section-title">What We Do</h2>
                        <p className="section-subtitle">Our services are designed to help you achieve your goals</p>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="relative aspect-video rounded-2xl overflow-hidden shadow-lg" data-aos="fade-right">
                            <Image
                                src="/images/adol2.jpg"
                                alt="What We Do"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div data-aos="fade-left">
                            <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                                CCAYEF is a Uganda-based NGO dedicated to empowering youth and
                                communities through providing several programs and services. Founded in the early
                                2000s in Mukono District, CCAYEF in
                                partnership with others provides the following services.
                            </p>
                            <ul className="space-y-4 mb-8 list-none">
                                {[
                                    "Early Childhood Development",
                                    "Vocational Skills Training",
                                    "Teenage Mother Rehabilitation",
                                    "Adolescent Health and Empowerment",
                                    "HIV Sensitization",
                                    "WASH and Climate Change"
                                ].map((service, index) => (
                                    <li key={index} className="flex items-center text-gray-700">
                                        <svg className="w-5 h-5 text-primary mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        {service}
                                    </li>
                                ))}
                            </ul>
                            <Link
                                href="/services"
                                className="btn btn-primary"
                            >
                                Learn More
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Counter Section */}
            <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
                <div className="container px-4 sm:px-6">
                    <div className="text-center mb-8 sm:mb-12" data-aos="fade-up">
                        <h2 className="section-title">Achievements</h2>
                        <p className="section-subtitle">Collaborating for Change</p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 max-w-6xl mx-auto">
                        {stats.map((stat, index) => (
                            <div 
                                key={index}
                                className="bg-white rounded-xl shadow-md p-4 sm:p-6 transform hover:-translate-y-1 transition-transform duration-300"
                                data-aos="fade-up"
                                data-aos-delay={index * 100}
                            >
                                <div className="flex items-center space-x-3 sm:space-x-4">
                                    <div className="text-primary flex-shrink-0">
                                        {stat.icon}
                                    </div>
                                    <div>
                                        <div className="text-xl sm:text-2xl font-bold text-gray-900">
                                            <PureIncrement start={0} end={stat.value} duration={1} />
                                        </div>
                                        <p className="text-sm sm:text-base text-gray-600">{stat.label}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            {/* Donate Section */}
            <section className="section bg-gradient-to-br from-primary/5 to-primary/10">
                <div className="container">
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="section-title">Support Our Cause</h2>
                        <p className="section-subtitle">
                            Your donation can make a real difference in the lives of children and youth. 
                            Every contribution helps us continue our mission of empowering young lives 
                            through education, healthcare, and community development.
                        </p>
                        <div className="mt-8 space-y-4">
                            <button 
                                onClick={() => setIsDonateModalOpen(true)}
                                className="btn btn-primary"
                            >
                                Donate Now
                            </button>
                            <p className="text-sm text-gray-600">
                                Secure payment processing • Tax-deductible
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Donate Modal */}
            <DonateModal 
                isOpen={isDonateModalOpen} 
                onClose={() => setIsDonateModalOpen(false)} 
            />

            {/* Testimonials Section */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12" data-aos="fade-up">
                        <h2 className="section-title">Testimonials</h2>
                        <p className="section-subtitle">What Our Community Says</p>
                    </div>

                    <div className="relative overflow-hidden" data-aos="fade-up">
                        <div className="flex gap-6 transition-transform duration-500 ease-out overflow-x-auto snap-x snap-mandatory pb-8 scrollbar-hide">
                            {[
                                {
                                    name: "Sarah Johnson",
                                    role: "Volunteer",
                                    image: "/images/user.png",
                                    quote: "Working with CCAYEF has been an incredible experience. The impact they have on the community is truly remarkable."
                                },
                                {
                                    name: "David Mukasa",
                                    role: "Community Member",
                                    image: "/images/user.png",
                                    quote: "CCAYEF's programs have transformed our community. Their dedication to youth empowerment is inspiring."
                                },
                                {
                                    name: "Mary Nakato",
                                    role: "Program Participant",
                                    image: "/images/user.png",
                                    quote: "The skills training program changed my life. I now run my own small business and can support my family."
                                }
                            ].map((testimonial, index) => (
                                <div
                                    key={index}
                                    className="flex-none w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] snap-start"
                                >
                                    <div className="bg-white rounded-2xl shadow-lg p-8 h-full transform hover:-translate-y-1 transition-all duration-300">
                                        <div className="flex items-center gap-4 mb-6">
                                            <div className="relative w-16 h-16 rounded-full overflow-hidden ring-4 ring-primary/10">
                                                <Image
                                                    src={testimonial.image}
                                                    alt={testimonial.name}
                                                    fill
                                                    className="object-cover"
                                                />
                                            </div>
                                            <div>
                                                <h4 className="font-semibold text-gray-900 text-lg">{testimonial.name}</h4>
                                                <p className="text-primary/80">{testimonial.role}</p>
                                            </div>
                                        </div>
                                        <blockquote className="text-gray-600 text-lg leading-relaxed">
                                            "{testimonial.quote}"
                                        </blockquote>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            
        </div>
    )
}