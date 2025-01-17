'use client'

import React from 'react'
import useContactForm from "@/hooks/useContactForm";
import Image from 'next/image'

export default function ContactPage() {
    const { formData, status, handleChange, handleSubmit } = useContactForm();

    return (
        <div>
            {/* Contact Info Section */}
            <section className="py-20 bg-gradient-to-b from-primary/5 via-white to-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h3 className="text-4xl font-bold mb-4 text-gray-800">Get in Touch</h3>
                        <p className="text-gray-600 text-lg">We'd love to hear from you</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {/* Visit Us Card */}
                        <div className="bg-white rounded-xl shadow-lg p-8 transform hover:-translate-y-1 transition-transform duration-300">
                            <div className="flex flex-col items-center text-center">
                                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                                    <svg className="w-7 h-7 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                </div>
                                <h4 className="text-xl font-semibold mb-3 text-gray-800">Visit Us</h4>
                                <p className="text-gray-600 leading-relaxed">
                                    Kasangalabi, Mukono<br />
                                    1½ KM off Bugerere-Kayunga Road
                                </p>
                            </div>
                        </div>

                        {/* Email Us Card */}
                        <div className="bg-white rounded-xl shadow-lg p-8 transform hover:-translate-y-1 transition-transform duration-300">
                            <div className="flex flex-col items-center text-center">
                                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                                    <svg className="w-7 h-7 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <h4 className="text-xl font-semibold mb-3 text-gray-800">Email Us</h4>
                                <a 
                                    href="mailto:info@ccayef.org" 
                                    className="text-gray-600 hover:text-primary transition-colors"
                                >
                                    info@ccayef.org
                                </a>
                            </div>
                        </div>

                        {/* Call Us Card */}
                        <div className="bg-white rounded-xl shadow-lg p-8 transform hover:-translate-y-1 transition-transform duration-300">
                            <div className="flex flex-col items-center text-center">
                                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                                    <svg className="w-7 h-7 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                </div>
                                <h4 className="text-xl font-semibold mb-3 text-gray-800">Call Us</h4>
                                <a 
                                    href="tel:+256414691428" 
                                    className="text-gray-600 hover:text-primary transition-colors"
                                >
                                    +256 414691428
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Form Section */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                        <div className="grid grid-cols-1 lg:grid-cols-2">
                            <div className="relative h-72 lg:h-auto">
                                <Image
                                    src="/images/office.jpg"
                                    alt="Contact Image"
                                    fill
                                    className="object-cover"
                                />
                            </div>

                            <div className="p-10">
                                <h4 className="text-2xl font-bold mb-6 text-gray-800">Send us a Message</h4>
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div>
                                        <input
                                            type="text"
                                            name="name"
                                            onChange={handleChange}
                                            value={formData.name}
                                            className="form-input"
                                            placeholder="Your Name"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <input
                                            type="email"
                                            name="email"
                                            onChange={handleChange}
                                            value={formData.email}
                                            className="form-input"
                                            placeholder="Your Email"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <textarea
                                            name="message"
                                            onChange={handleChange}
                                            value={formData.message}
                                            rows={4}
                                            className="form-input"
                                            placeholder="Your Message"
                                            required
                                        />
                                    </div>
                                    <button
                                        type="submit"
                                        className="w-full bg-primary hover:bg-primary-dark text-white font-semibold py-3 px-6 rounded-lg transition-colors"
                                    >
                                        Send Message
                                    </button>
                                    {status && (
                                        <p className="text-sm text-center text-gray-600 mt-4">{status}</p>
                                    )}
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Map Section */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h3 className="text-4xl font-bold mb-4 text-gray-800">Our Location</h3>
                        <p className="text-gray-600 text-lg">Visit us at our office</p>
                    </div>
                    <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31917.89127079328!2d32.73039848889425!3d0.36714214145714064!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x177dc7adf9689181%3A0x9534af5707d70d2f!2sChild%20Care%20And%20Youth%20Empowerement%20Foundation!5e0!3m2!1sen!2sug!4v1735820922383!5m2!1sen!2sug"
                            className="w-full h-[500px]"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        />
                    </div>
                </div>
            </section>
        </div>
    )
}