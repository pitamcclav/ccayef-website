'use client'

import React from 'react'
import Image from 'next/image'

export default function AboutPage() {
    return (
        <div>
            {/* Journey Section */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    {/* Header */}
                    <div className="text-center mb-12" data-aos="fade-up">
                        <h2 className="section-title">Our Journey</h2>
                        <p className="section-subtitle">Learn more about us</p>
                    </div>

                    {/* Content */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Image Column */}
                        <div className="relative aspect-video rounded-2xl overflow-hidden shadow-lg" data-aos="fade-right">
                            <Image
                                src="/images/voc4.jpg"
                                alt="CCAYEF Journey"
                                fill
                                className="object-cover"
                            />
                        </div>

                        {/* Text Column */}
                        <div className="space-y-6 text-gray-600" data-aos="fade-left">
                            <p className="text-lg leading-relaxed">
                                Child Care And Youth Empowerment Foundation (CCAYEF) is a non-profit charitable
                                organization that was established in 2008.
                            </p>

                            <p className="text-lg leading-relaxed">
                                The organization was founded by a three of individuals who were passionate about the
                                welfare of children and young people in Uganda being nurtured holistically to
                                realize their full growth and development potential.
                            </p>

                            <p className="text-lg leading-relaxed">
                                Since its establishment, CCAYEF has been working tirelessly to provide essential
                                services to children and young people in Uganda, creating lasting positive impact
                                in their lives and building a better future.
                            </p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
                        <div className="space-y-6" data-aos="fade-up">
                            <h4 className="text-2xl font-semibold text-gray-800">Our Focus Areas:</h4>
                            <ul className="space-y-4 text-gray-600">
                                {[
                                    "Early childhood development through education",
                                    "Healthcare services",
                                    "Children's rights awareness and advocacy",
                                    "Gender Based Violence prevention"
                                ].map((item, index) => (
                                    <li key={index} className="flex items-center space-x-3">
                                        <svg className="w-5 h-5 text-primary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        <span className="text-lg">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl border border-blue-200 p-8 shadow-inner" data-aos="fade-up">
                            <p className="text-lg font-medium text-blue-900">
                                Registered by Uganda Registration Service Bureau
                                <br/>
                                <span className="text-xl font-bold mt-2 block">Reg No: 4164, CCAYEF. S. 5914/9236</span>
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission & Vision Section */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12" data-aos="fade-up">
                        <div className="bg-white rounded-2xl shadow-lg p-8 transform hover:-translate-y-1 transition-all duration-300">
                            <div className="flex items-center space-x-4 mb-6">
                                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                    </svg>
                                </div>
                                <h4 className="text-2xl font-semibold text-gray-800">Mission</h4>
                            </div>
                            <p className="text-lg text-gray-600 leading-relaxed">
                                Our mission is to empower children and young people in Uganda to reach their full
                                potential and lead healthy and fulfilling lives.
                            </p>
                        </div>
                        <div className="bg-white rounded-2xl shadow-lg p-8 transform hover:-translate-y-1 transition-all duration-300">
                            <div className="flex items-center space-x-4 mb-6">
                                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                    </svg>
                                </div>
                                <h4 className="text-2xl font-semibold text-gray-800">Vision</h4>
                            </div>
                            <p className="text-lg text-gray-600 leading-relaxed">
                                Our vision is to create a better future for children and young people in Uganda by
                                providing them with the support and resources they need to thrive.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Partners Section */}
            <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
                <div className="container px-4 sm:px-6">
                    <div className="text-center mb-8 sm:mb-12" data-aos="fade-up">
                        <h2 className="section-title">Our Partners</h2>
                        <p className="section-subtitle">Organizations that support our mission</p>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 md:gap-8 max-w-6xl mx-auto" data-aos="fade-up">
                        <a href="https://www.government.is/diplomatic-missions/embassy-of-iceland-in-kampala/" 
                           className="flex items-center justify-center p-4 sm:p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                            <Image src="/images/embassy.svg" alt="Embassy of Iceland" width={100} height={50} className="object-contain w-auto h-auto max-h-12" />
                        </a>
                        <a href="https://www.girlsnotbrides.org/our-partnership/national-partnerships-coalitions/uganda/"
                           className="flex items-center justify-center p-4 sm:p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                            <Image src="/images/gnb.png" alt="Girls Not Brides" width={100} height={50} className="object-contain w-auto h-auto max-h-12" />
                        </a>
                        <a href="https://www.segalfamilyfoundation.org/"
                           className="flex items-center justify-center p-4 sm:p-6 bg-green-600 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                            <Image src="/images/segal.svg" alt="Segal Family Foundation" width={100} height={50} className="object-contain w-auto h-auto max-h-12" />
                        </a>
                        <a href="https://ngoforum.or.ug/"
                           className="flex items-center justify-center p-4 sm:p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                            <Image src="/images/ngo-forum.png" alt="NGO Forum" width={100} height={50} className="object-contain w-auto h-auto max-h-12" />
                        </a>
                        <a href="https://kayunga.go.ug/"
                           className="flex items-center justify-center p-4 sm:p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                            <Image src="/images/kayunga.png" alt="Kayunga" width={100} height={50} className="object-contain w-auto h-auto max-h-12" />
                        </a>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 mt-4 sm:mt-6 md:mt-8 max-w-6xl mx-auto" data-aos="fade-up">
                        <a href="https://www.muwrp.org/"
                           className="flex items-center justify-center p-4 sm:p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                            <Image src="/images/muwrp.png" alt="MUWRP" width={80} height={40} className="object-contain w-auto h-auto max-h-10" />
                        </a>
                        <a href="https://www.usaid.gov/"
                           className="flex items-center justify-center p-4 sm:p-6 bg-[#000061] rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                            <Image src="/images/usaid.svg" alt="USAID" width={100} height={50} className="object-contain w-auto h-auto max-h-12" />
                        </a>
                        <a href="https://buikwe.go.ug/"
                           className="flex items-center justify-center p-4 sm:p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                            <Image src="/images/buikwe.png" alt="Buikwe" width={100} height={50} className="object-contain w-auto h-auto max-h-12" />
                        </a>
                        <a href="https://mukono.go.ug/"
                           className="flex items-center justify-center p-4 sm:p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                            <Image src="/images/mukono.png" alt="Mukono" width={100} height={50} className="object-contain w-auto h-auto max-h-12" />
                        </a>
                        <a href="https://uwasnet.org/"
                           className="flex items-center justify-center p-4 sm:p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                            <Image src="/images/uwasenet.png" alt="UWASNET" width={100} height={50} className="object-contain w-auto h-auto max-h-12" />
                        </a>
                    </div>
                </div>
            </section>

            {/* Core Values Section */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12" data-aos="fade-up">
                        <h2 className="section-title">Core Values</h2>
                        <p className="section-subtitle">
                            At CCAYEF, we are guided by the following core values in all our work:
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" data-aos="fade-up">
                        {[
                            "Social justice and Empowerment",
                            "Integrity",
                            "Respect",
                            "Love",
                            "Professionalism"
                        ].map((value, index) => (
                            <div key={index} className="bg-white rounded-2xl shadow-lg p-6 flex items-center space-x-6 transform hover:-translate-y-1 transition-all duration-300">
                                <div className="w-14 h-14 bg-primary text-white rounded-xl flex items-center justify-center font-bold text-2xl">
                                    {index + 1}
                                </div>
                                <div className="font-medium text-xl text-gray-800">
                                    {value}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
                <div className="container px-4 sm:px-6">
                    <div className="text-center mb-8 sm:mb-12" data-aos="fade-up">
                        <h2 className="section-title">Our Team</h2>
                        <p className="section-subtitle">Meet the dedicated individuals behind CCAYEF</p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto" data-aos="fade-up">
                        <div className="group">
                            <div className="bg-white rounded-2xl shadow-lg overflow-hidden p-4 sm:p-6 text-center">
                                <div className="w-32 h-32 sm:w-40 sm:h-40 mx-auto mb-4 sm:mb-6 rounded-full border-4 border-white shadow-lg overflow-hidden">
                                    <Image
                                        src="/images/staff/prossy.png"
                                        alt="Dr. Proscovia Nalwadda Kkonde"
                                        width={160}
                                        height={160}
                                        className="object-cover w-full h-full"
                                    />
                                </div>
                                <h5 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-2">Dr. Proscovia Nalwadda Kkonde</h5>
                                <p className="text-primary font-medium text-base sm:text-lg mb-4">Founder & Executive Director</p>
                                <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-6">
                                    Prossy has over 12 years of experience in the nonprofit sector,
                                    working to improve the lives of vulnerable children and youth in Uganda.
                                </p>
                                <div className="flex justify-center space-x-4">
                                    <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                                        <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                                        </svg>
                                    </a>
                                    <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                                        <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                        {/* Add more team members here */}
                    </div>
                </div>
            </section>
        </div>
    )
}