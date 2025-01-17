'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const services = [
    {
        title: "Early Childhood Development",
        description: "We provided access to quality education for underprivileged children pre-pandemic. Our program included affordable education, around-the-clock care, and transportation to ensure every child has the opportunity to learn and grow in a secure environment.",
        image: "/images/adol5.jpg",
        link: "/service/ecd",
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
        )
    },
    {
        title: "Teenage Mother Rehabilitation",
        description: "This service focuses on providing essential counseling, health education, and mental health support for teen mothers. We work with local healthcare providers to ensure children and young people have access to the healthcare they need.",
        image: "/images/Food preparation and demonstration sessions.jpg",
        link: "/service/tmr",
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
        )
    },
    {
        title: "Vocational Skills Training",
        description: "Vocational skills are essential for youth to start businesses or earn a living. CCAYEF offers a range of vocational skills to help young people earn a living.",
        image: "/images/voc4.jpg",
        link: "/service/vst",
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
        )
    }
];

const additionalServices = [
    {
        title: "Health Services",
        description: "Our health services are part of what makes us CCAYEF. We carry them out through outreaches in communities, campaigns against GBV, HIV treatment mobilization, and various projects with partners.",
        image: "/images/mybg5.jpg",
        link: "/service/hs",
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
        )
    },
    {
        title: "WASH and Climate Change",
        description: "CCAYEF has implemented projects to provide WASH facilities and climate change initiatives, including tree planting and environmental cleanup campaigns in communities and schools.",
        image: "/images/Three legged or mobile hand washing facility demonstration.jpg",
        link: "/service/wac",
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
            </svg>
        )
    },
    {
        title: "Adolescent Empowerment",
        description: "Our mentorship and counseling program connects young people with mentors who can guide and support them through personal and professional growth, helping them navigate life with purpose.",
        image: "/images/Trigger meeting at Busaana SC.jpg",
        link: "/service/ae",
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
        )
    }
];

export default function ServicePage() {
    return (
        <div >
            {/* Hero Section */}
            <section className="relative py-20 bg-gradient-to-b from-primary/5 via-white to-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16" data-aos="fade-up">
                        <h1 className="section-title">Our Services</h1>
                        <p className="section-subtitle">
                            CCAYEF has different services it offers to the Community to promote better livelihoods of people.
                        </p>
                    </div>

                    {/* Main Services Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                        {services.map((service, index) => (
                            <div 
                                key={index}
                                className="group bg-white rounded-2xl shadow-lg overflow-hidden transform hover:-translate-y-1 transition-all duration-300"
                                data-aos="fade-up"
                                data-aos-delay={index * 100}
                            >
                                <div className="relative h-48 overflow-hidden">
                                    <Image
                                        src={service.image}
                                        alt={service.title}
                                        fill
                                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                </div>
                                <div className="p-6">
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                                            {service.icon}
                                        </div>
                                        <h3 className="text-xl font-semibold text-gray-800">{service.title}</h3>
                                    </div>
                                    <p className="text-gray-600 mb-6 line-clamp-3">{service.description}</p>
                                    <Link 
                                        href={service.link}
                                        className="inline-flex items-center text-primary hover:text-primary-dark font-medium transition-colors"
                                    >
                                        Learn More
                                        <svg className="w-5 h-5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                        </svg>
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Additional Services */}
                    <div className="space-y-12">
                        {additionalServices.map((service, index) => (
                            <div 
                                key={index}
                                className="bg-white rounded-2xl shadow-lg overflow-hidden"
                                data-aos="fade-up"
                            >
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                                    <div className={`relative h-64 lg:h-auto ${index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}`}>
                                        <Image
                                            src={service.image}
                                            alt={service.title}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                    <div className={`p-8 flex flex-col justify-center ${index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}`}>
                                        <div className="flex items-center gap-4 mb-6">
                                            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
                                                {service.icon}
                                            </div>
                                            <h3 className="text-2xl font-semibold text-gray-800">{service.title}</h3>
                                        </div>
                                        <p className="text-gray-600 mb-8 text-lg">{service.description}</p>
                                        <Link 
                                            href={service.link}
                                            className="inline-flex items-center text-primary hover:text-primary-dark font-medium transition-colors"
                                        >
                                            Learn More
                                            <svg className="w-5 h-5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                            </svg>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}