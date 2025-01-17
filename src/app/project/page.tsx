'use client'

import React from 'react'

export default function ProjectPage() {
    return (
        <div className="min-h-screen bg-gray-50">
            <div className="bg-gradient-to-r from-primary to-primary/90 text-white py-12">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <h3 className="text-4xl md:text-5xl font-bold mb-4">Our Projects</h3>
                        <p className="text-lg opacity-90">
                            Discover our ongoing and completed projects aimed at empowering children and youth
                        </p>
                    </div>
                </div>
            </div>

            <section className="py-16">
                <div className="container mx-auto px-4">
                    <div className="space-y-6">
                        {[
                            {
                                title: 'COMBASHI Project',
                                goal: 'Mobilize, sensitize, and support communities to improve sanitation and hygiene.',
                                achievements: '33% of households improved sanitation, 22% installed handwashing facilities, and 19% achieved Open Defecation Free status.',
                                period: '1st Sept 2023 to date',
                                partners: 'Embassy of Iceland',
                                url: '/docs/reports/iNCEPTION  REPORT FINAL.docx'
                            },
                            {
                                title: 'Pallisa & Kumi Town Roads',
                                goal: 'Manage HIV/AIDS, Gender-based violence, child protection, and community health on civil works.',
                                achievements: 'Ongoing.',
                                period: 'May 2024',
                                partners: 'Arab Contractors',
                                url: '/docs/reports/iNCEPTION  REPORT FINAL.docx'
                            },
                            {
                                title: 'MHM Project in Fishing Communities',
                                goal: 'Increase school attendance by addressing menstrual hygiene issues for girls.',
                                achievements: 'Supported 4 schools to promote MHM and became WASH-friendly.',
                                period: '2018 to 2019',
                                partners: 'Mobile Mama UK',
                                url: '/docs/reports/ccayef-2020-report.pdf'
                            },
                            {
                                title: 'Girls In Control (GiC-MHM)',
                                goal: 'Promote Menstrual Hygiene Management in schools and provide SRH information.',
                                achievements: 'Supported 72 primary schools in Mukono District to become WASH friendly.',
                                period: 'Sept 2014 - Sept 2016',
                                partners: ' SNV - Netherlands Development Organization',
                                url: '/docs/reports/ccayef-2020-report.pdf'
                            },
                            {
                                title: 'Market Based Sanitation & WiS',
                                goal: 'Increase access to improved and sustainable WASH services.',
                                achievements: 'Supported 16 schools to become WASH-friendly, improved latrines, and Open Defecation Free status for 166 villages.',
                                period: 'June 2019 to June 2022',
                                partners: 'USAID',
                                url: '/docs/reports/CCAYEF end of Project Report for MBSIA 2022.docx'
                            },
                            {
                                title: 'MARPS Project',
                                goal: 'Scale up HIV prevention among Most At Risk Populations (MARPS).',
                                achievements: 'Held 32 dialogue meetings for 800 youth and conducted 24 film shows for 1200 youth.',
                                period: 'Oct 2013 - Sept 2015',
                                partners: 'AMICAALL & CSF',
                                url: '/docs/reports/ccayef-2020-report.pdf'
                            },
                            {
                                title: 'EYoFs Project',
                                goal: 'Scale youth-friendly ASRH information and services.',
                                achievements: 'Reached 1718 young people with HIV/STI information and 9343 through peer sensitization.',
                                period: 'Jan 2013 - Jan 2014',
                                partners: 'Naguru Teenage Information and Health Center / SEGAL Family Foundation',
                                url: '/docs/reports/ccayef-2020-report.pdf'
                            },
                        ].map((project, index) => (
                            <div 
                                key={index} 
                                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300" 
                                data-aos="fade-up" 
                                data-aos-delay={index * 100}
                            >
                                <div className="p-6">
                                    {/* Title & Period Section */}
                                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
                                        <h3 className="text-2xl font-bold text-gray-800 flex items-center gap-3">
                                            <i className="fas fa-bullseye text-primary"></i>
                                            {project.title}
                                        </h3>
                                        <span className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full text-gray-700">
                                            <i className="fas fa-calendar-alt text-primary"></i>
                                            {project.period}
                                        </span>
                                    </div>

                                    {/* Details Section */}
                                    <div className="space-y-4 mb-6">
                                        <div className="flex items-start gap-3">
                                            <i className="fas fa-bullseye text-primary mt-1"></i>
                                            <div>
                                                <span className="font-semibold text-gray-700">Goal:</span>
                                                <p className="text-gray-600">{project.goal}</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-3">
                                            <i className="fas fa-trophy text-primary mt-1"></i>
                                            <div>
                                                <span className="font-semibold text-gray-700">Achievements:</span>
                                                <p className="text-gray-600">{project.achievements}</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-3">
                                            <i className="fas fa-handshake text-primary mt-1"></i>
                                            <div>
                                                <span className="font-semibold text-gray-700">Funding Partners:</span>
                                                <p className="text-gray-600">{project.partners}</p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Download Button */}
                                    <div className="flex justify-end">
                                        <a
                                            href={project.url}
                                            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors duration-200"
                                            download
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <i className="fas fa-download"></i>
                                            Download Report
                                        </a>
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
