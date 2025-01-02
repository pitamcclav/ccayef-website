'use client'

import React from 'react'
import { Gallery } from '@/components/Gallery'


export default function MediaPage() {

  return (
    <div>
        <nav className="breadcrumbs">

        </nav>


        <section className="gallery-section">
            <div className="container">
                <div className="section-header mb-4" data-aos="fade-up">
                    <h3>Gallery</h3>
                    <p>Explore moments captured from our various events and activities.</p>
                </div>

                <div className="swiper" data-aos="fade-up">
                    <div className="swiper-wrapper" id="gallery-container">
                        <Gallery apiUrl="/api/images" />
                    </div>


                    <div className="swiper-pagination"></div>


                    <div className="swiper-button-next"></div>
                    <div className="swiper-button-prev"></div>
                </div>

            </div>
        </section>


        <section className="videos-section py-5 bg-light">
            <div className="container">
                <div className="section-header mb-4" data-aos="fade-up">
                    <h3>Videos</h3>
                    <p>Watch our latest videos showcasing our initiatives and impact.</p>
                </div>

                <div className="row">

                    <div className="col-lg-6 mb-4" data-aos="fade-up">
                        <div className="embed-responsive embed-responsive-16by9">

                            <iframe width="560" height="315" src="https://www.youtube.com/embed/D3ionqyQ3q4?si=k6en_yqDeLpwpxdV" title="YouTube video player"
                                    frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                        </div>
                        <p className="mt-2">CCAYEF empowered youth</p>
                    </div>
                    <div className="col-lg-6 mb-4" data-aos="fade-up">
                        <div className="embed-responsive embed-responsive-16by9">
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/BYMlwiIou5c?si=8gpa0657sZQwT1_c"
                                    title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    referrerPolicy="strict-origin-when-cross-origin" allowFullScreen className="embed-responsive-item"></iframe>
                        </div>
                        <p className="mt-2">East Africa Community Philanthropy Stories: Namusisi Ruth-Child Care & Youth Empowerment Foundation</p>
                    </div>
                    <div className="col-lg-6 mb-4" data-aos="fade-up">
                        <div className="embed-responsive embed-responsive-16by9">
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/twNg7kLZHPA?si=bjYJs_v4RR4OVFO3" title="YouTube video player"
                                    frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                        </div>
                        <p className="mt-2">CCAYEF graduation poem</p>
                    </div>
                    <div className="col-lg-6 mb-4" data-aos="fade-up">
                        <div className="embed-responsive embed-responsive-16by9">
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/HlGlze22_Ys?si=86McBIspCgdaNbkY" title="YouTube video player"
                                    frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                        </div>
                        <p className="mt-2">ccayef graduation 2017 speech</p>
                    </div>

                </div>
            </div>
        </section>

    </div>
  )
}