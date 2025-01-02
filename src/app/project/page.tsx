'use client'

import React from 'react'

export default function ProjectPage() {
    return (
        <div>
            <div className="breadcrumbs"></div>

            <section className="sec-one">
                <div className="container">
                    <div className="section-header" data-aos="fade-up">
                        <h3>Our Projects</h3>
                        <p>Discover our ongoing and completed projects aimed at empowering children and youth</p>
                    </div>
                    <div className="row project-grid">

                        {[
                            {
                                title: 'COMBASHI Project',
                                goal: 'Mobilize, sensitize, and support communities to improve sanitation and hygiene.',
                                achievements: '33% of households improved sanitation, 22% installed handwashing facilities, and 19% achieved Open Defecation Free status.',
                                period: '1st Sept 2023 to date',
                                partners: 'Embassy of Iceland',
                            },
                            {
                                title: 'Pallisa & Kumi Town Roads',
                                goal: 'Manage HIV/AIDS, Gender-based violence, child protection, and community health on civil works.',
                                achievements: 'Ongoing.',
                                period: 'May 2024',
                                partners: 'Arab Contractors',
                            },
                            {
                                title: 'MHM Project in Fishing Communities',
                                goal: 'Increase school attendance by addressing menstrual hygiene issues for girls.',
                                achievements: 'Supported 4 schools to promote MHM and became WASH-friendly.',
                                period: '2018 to 2019',
                                partners: 'Mobile Mama UK',
                            },
                            {
                                title: 'Girls In Control (GiC-MHM)',
                                goal: 'Promote Menstrual Hygiene Management in schools and provide SRH information.',
                                achievements: 'Supported 72 primary schools in Mukono District to become WASH friendly.',
                                period: 'Sept 2014 - Sept 2016',
                                partners: ' SNV - Netherlands Development Organization',
                            },
                            {
                                title: 'Market Based Sanitation & WiS',
                                goal: 'Increase access to improved and sustainable WASH services.',
                                achievements: 'Supported 16 schools to become WASH-friendly, improved latrines, and Open Defecation Free status for 166 villages.',
                                period: 'June 2019 to June 2022',
                                partners: 'USAID',
                            },
                            {
                                title: 'MARPS Project',
                                goal: 'Scale up HIV prevention among Most At Risk Populations (MARPS).',
                                achievements: 'Held 32 dialogue meetings for 800 youth and conducted 24 film shows for 1200 youth.',
                                period: 'Oct 2013 - Sept 2015',
                                partners: 'AMICAALL & CSF',
                            },
                            {
                                title: 'EYoFs Project',
                                goal: 'Scale youth-friendly ASRH information and services.',
                                achievements: 'Reached 1718 young people with HIV/STI information and 9343 through peer sensitization.',
                                period: 'Jan 2013 - Jan 2014',
                                partners: 'Naguru Teenage Information and Health Center / SEGAL Family Foundation',
                            },
                        ].map((project, index) => (
                            <div className="col-12 mb-4" key={index} data-aos="fade-up">
                                <div className="project-card p-4">
                                    {/* Title & Period Section */}
                                    <div className="project-header">
                                        <h5 className="project-title">
                                            <i className="fas fa-bullseye"></i> {project.title}
                                        </h5>
                                        <span className="project-period">
                                          <i className="fas fa-calendar-alt"></i> {project.period}
                                        </span>
                                    </div>

                                    {/* Details Section */}
                                    <div className="project-details">
                                        <p>
                                            <i className="fas fa-bullseye"></i> <strong>Goal:</strong> {project.goal}
                                        </p>
                                        <p>
                                            <i className="fas fa-trophy"></i> <strong>Achievements:</strong> {project.achievements}
                                        </p>
                                        <p>
                                            <i className="fas fa-handshake"></i> <strong>Funding Partners:</strong> {project.partners}
                                        </p>
                                    </div>

                                    {/* Download Button */}
                                    <div className="project-download">
                                        <button className="btn btn-primary">
                                            <i className="fas fa-download"></i> Download Report
                                        </button>
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
