'use client'

import React, { useState } from 'react'
import { DocumentList } from '@/components/DocumentList'

export default function PublicationPage() {
    const [activeTab, setActiveTab] = useState<'publications' | 'reports'>('publications');

    return (
        <div>
            {/* Hero Section */}
            <section className="relative py-20 bg-gradient-to-b from-primary/5 via-white to-white">
                <div className="container mx-auto px-4">
                    <div className="text-center max-w-3xl mx-auto">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">Publications & Reports</h1>
                        <p className="text-lg text-gray-600 leading-relaxed">
                            Access our latest publications, research findings, and annual reports to learn more about our impact and initiatives.
                        </p>
                    </div>
                </div>
            </section>

            {/* Main Content Section */}
            <section className="py-5">
                <div className="container mx-auto px-4">
                    {/* Tabs */}
                    <div className="flex justify-center mb-12" data-aos="fade-up">
                        <div className="inline-flex p-1 bg-gray-100 rounded-xl">
                            <button
                                onClick={() => setActiveTab('publications')}
                                className={`px-6 py-2.5 text-sm font-semibold rounded-lg transition-all duration-200 ${
                                    activeTab === 'publications'
                                        ? 'bg-white text-primary shadow-sm'
                                        : 'text-gray-600 hover:text-gray-800'
                                }`}
                            >
                                Publications
                            </button>
                            <button
                                onClick={() => setActiveTab('reports')}
                                className={`px-6 py-2.5 text-sm font-semibold rounded-lg transition-all duration-200 ${
                                    activeTab === 'reports'
                                        ? 'bg-white text-primary shadow-sm'
                                        : 'text-gray-600 hover:text-gray-800'
                                }`}
                            >
                                Reports
                            </button>
                        </div>
                    </div>

                    {/* Content */}
                    <div className="max-w-6xl mx-auto">
                        {/* Publications Tab */}
                        <div className={activeTab === 'publications' ? 'block' : 'hidden'}>
                            <div className="text-center mb-8" data-aos="fade-up">
                                <p className="text-gray-600 max-w-2xl mx-auto">
                                    Explore our collection of publications covering various aspects of our work and impact in the community.
                                </p>
                            </div>
                            <div className="bg-white rounded-xl shadow-lg p-8" data-aos="fade-up">
                                <DocumentList type="publications" />
                            </div>
                        </div>

                        {/* Reports Tab */}
                        <div className={activeTab === 'reports' ? 'block' : 'hidden'}>
                            <div className="text-center mb-8" data-aos="fade-up">
                                <p className="text-gray-600 max-w-2xl mx-auto">
                                    Access our detailed reports and analyses that showcase our achievements and future plans.
                                </p>
                            </div>
                            <div className="bg-white rounded-xl shadow-lg p-8" data-aos="fade-up">
                                <DocumentList type="reports" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="text-center max-w-3xl mx-auto" data-aos="fade-up">
                        <h2 className="text-3xl font-bold mb-6 text-gray-800">Need More Information?</h2>
                        <p className="text-lg text-gray-600 mb-8">
                            Contact us for additional resources or specific inquiries about our publications and reports.
                        </p>
                        <a 
                            href="/contact" 
                            className="inline-block bg-primary hover:bg-primary-dark text-white font-semibold py-3 px-8 rounded-lg transition-colors"
                        >
                            Contact Us
                        </a>
                    </div>
                </div>
            </section>
        </div>
    )
}
