'use client'

import React, { useState } from 'react'
import Gallery from '@/components/Gallery'

export default function MediaPage() {
    const [activeTab, setActiveTab] = useState<'photos' | 'videos'>('photos')

    return (
        <div className="min-h-screen bg-gray-50">

            <div className="container mx-auto px-4 py-12">
                {/* Tabs */}
                <div className="flex justify-center mb-12" data-aos="fade-up">
                    <div className="inline-flex p-1 bg-white rounded-xl shadow-sm">
                        <button 
                            type="button" 
                            className={`px-6 py-2.5 text-sm font-semibold rounded-lg transition-all duration-200 ${
                                activeTab === 'photos'
                                    ? 'bg-primary text-white shadow'
                                    : 'text-gray-600 hover:text-gray-800'
                            }`}
                            onClick={() => setActiveTab('photos')}
                        >
                            Photos
                        </button>
                        <button 
                            type="button" 
                            className={`px-6 py-2.5 text-sm font-semibold rounded-lg transition-all duration-200 ${
                                activeTab === 'videos'
                                    ? 'bg-primary text-white shadow'
                                    : 'text-gray-600 hover:text-gray-800'
                            }`}
                            onClick={() => setActiveTab('videos')}
                        >
                            Videos
                        </button>
                    </div>
                </div>

                {/* Photos Tab */}
                {activeTab === 'photos' && (
                    <section className="gallery-section">
                        <div className="max-w-7xl mx-auto">
                            <div className="text-center mb-12" data-aos="fade-up">
                                <h2 className="text-3xl font-bold text-gray-800 mb-4">Photo Gallery</h2>
                                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                                    Explore moments captured from our various events and activities.
                                </p>
                            </div>

                            <div className="bg-white rounded-2xl shadow-lg p-8" data-aos="fade-up">
                                <div className="swiper-wrapper" id="gallery-container">
                                    <Gallery apiUrl="/api/images" />
                                </div>

                                <div className="swiper-pagination"></div>
                                <div className="swiper-button-next"></div>
                                <div className="swiper-button-prev"></div>
                            </div>
                        </div>
                    </section>
                )}

                {/* Videos Tab */}
                {activeTab === 'videos' && (
                    <section className="videos-section">
                        <div className="max-w-7xl mx-auto">
                            <div className="text-center mb-12" data-aos="fade-up">
                                <h2 className="text-3xl font-bold text-gray-800 mb-4">Video Gallery</h2>
                                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                                    Watch our latest videos showcasing our initiatives and impact.
                                </p>
                            </div>

                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                                <div className="bg-white rounded-2xl shadow-lg overflow-hidden" data-aos="fade-up">
                                    <div className="aspect-video">
                                        <iframe 
                                            className="w-full h-full"
                                            src="https://www.youtube.com/embed/D3ionqyQ3q4?si=k6en_yqDeLpwpxdV" 
                                            title="YouTube video player"
                                            frameBorder="0" 
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                            referrerPolicy="strict-origin-when-cross-origin" 
                                            allowFullScreen
                                        ></iframe>
                                    </div>
                                    <div className="p-6">
                                        <h3 className="text-lg font-semibold text-gray-800 mb-2">CCAYEF empowered youth</h3>
                                        <p className="text-gray-600">Watch how CCAYEF is making a difference in young lives.</p>
                                    </div>
                                </div>

                                <div className="bg-white rounded-2xl shadow-lg overflow-hidden" data-aos="fade-up">
                                    <div className="aspect-video">
                                        <iframe 
                                            className="w-full h-full"
                                            src="https://www.youtube.com/embed/BYMlwiIou5c?si=8gpa0657sZQwT1_c"
                                            title="YouTube video player" 
                                            frameBorder="0" 
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                            referrerPolicy="strict-origin-when-cross-origin" 
                                            allowFullScreen
                                        ></iframe>
                                    </div>
                                    <div className="p-6">
                                        <h3 className="text-lg font-semibold text-gray-800 mb-2">East Africa Community Philanthropy Stories</h3>
                                        <p className="text-gray-600">Namusisi Ruth-Child Care & Youth Empowerment Foundation</p>
                                    </div>
                                </div>

                                <div className="bg-white rounded-2xl shadow-lg overflow-hidden" data-aos="fade-up">
                                    <div className="aspect-video">
                                        <iframe 
                                            className="w-full h-full"
                                            src="https://www.youtube.com/embed/twNg7kLZHPA?si=bjYJs_v4RR4OVFO3" 
                                            title="YouTube video player"
                                            frameBorder="0" 
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                            referrerPolicy="strict-origin-when-cross-origin" 
                                            allowFullScreen
                                        ></iframe>
                                    </div>
                                    <div className="p-6">
                                        <h3 className="text-lg font-semibold text-gray-800 mb-2">CCAYEF graduation poem</h3>
                                        <p className="text-gray-600">A beautiful performance at our graduation ceremony.</p>
                                    </div>
                                </div>

                                <div className="bg-white rounded-2xl shadow-lg overflow-hidden" data-aos="fade-up">
                                    <div className="aspect-video">
                                        <iframe 
                                            className="w-full h-full"
                                            src="https://www.youtube.com/embed/HlGlze22_Ys?si=86McBIspCgdaNbkY" 
                                            title="YouTube video player"
                                            frameBorder="0" 
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                            referrerPolicy="strict-origin-when-cross-origin" 
                                            allowFullScreen
                                        ></iframe>
                                    </div>
                                    <div className="p-6">
                                        <h3 className="text-lg font-semibold text-gray-800 mb-2">CCAYEF Graduation 2017 Speech</h3>
                                        <p className="text-gray-600">Inspiring words from our graduation ceremony.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                )}
            </div>
        </div>
    )
}