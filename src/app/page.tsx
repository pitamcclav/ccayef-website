'use client'
import React from 'react'
import { useCarousel} from "@/hooks/useCarousel";
import useContactForm from "@/hooks/useContactForm";


export default function Home() {
    useCarousel('heroCarousel')

    const { formData, status, handleChange, handleSubmit } = useContactForm();
    return (
    <div>
        <section id="hero" className="hero-section">
            <div id="heroCarousel" className="carousel slide" data-bs-ride="carousel">
                <div className="welcome" data-aos="fade-down" data-aos-duration="1000">
                    <h1>Welcome to CCAYEF</h1>
                </div>
                <div className="carousel-inner">

                    <div className="carousel-item active">
                        <img src="/images/Learning visit for students of Wisconcin_USA at CCAYEF.jpg" className="d-block w-100" alt="..."/>
                            <div className="carousel-caption">
                                <h5> Communities Involved</h5>
                                <p>Join us to change lives.</p>
                            </div>
                            <div className="overlay"></div>
                    </div>


                    <div className="carousel-item">
                        <img src="/images/mhm_demo.jpg" className="d-block w-100" alt="..."/>
                            <div className="carousel-caption ">
                                <h5>Volunteer Opportunities</h5>
                                <p>Give back to your community and help those in need.</p>
                            </div>
                            <div className="overlay"></div>
                    </div>


                    <div className="carousel-item ">
                        <img src="/images/COMBASHI Approach training for Buikwe government officials.jpg" className="d-block w-100" alt="..."/>
                            <div className="carousel-caption ">
                                <h5>Support Our Mission</h5>
                                <p>Your donations can change lives.</p>
                            </div>
                            <div className="overlay"></div>
                    </div>

                </div>

                <button className="carousel-control-prev upper-prev" type="button" data-bs-target="#heroCarousel" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next upper-next" type="button" data-bs-target="#heroCarousel" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </section>



        <section className="volunteer-section">
            <div className="container">
                <div className="section-header" data-aos="fade-up">
                    <h3>Join Us</h3>
                    <p>Joining us is a great way to give back to the community. We have a number of programs that you can volunteer for.</p>
                </div>
                <div className="volunteer" data-aos="fade-up">
                    <div className="row">
                        <div className="col-lg-6">
                            <img src="/images/Group hand washing facility at Kangulumira CU.jpg" alt="volunteer" className="img-fluid"/>
                        </div>
                        <div className="col-lg-6">
                            <form id="volunteerForm" onSubmit={handleSubmit}>

                                <div className="mb-3">
                                    {/*<label htmlFor="volunteer-name" className="form-label">Name</label>*/}
                                    <input type="text"
                                           placeholder={'Your Name'}
                                             name="name"
                                             onChange={handleChange}
                                           value={formData.name}
                                           className="form-control"
                                           id="volunteer-name" required/>
                                </div>
                                <div className="mb-3">
                                    {/*<label htmlFor="volunteer-email" className="form-label">Email</label>*/}
                                    <input type="email"
                                             placeholder={'Your Email'}
                                           name="email"
                                             onChange={handleChange}
                                           value={formData.email}
                                           className="form-control"
                                           id="volunteer-email" required/>
                                </div>

                                <div className="mb-3">
                                    {/*<label htmlFor="message" className="form-label">Message</label>*/}
                                    <textarea className="form-control"
                                              placeholder={'Your Message'}
                                                onChange={handleChange}
                                              value={formData.message}
                                                name="message"
                                              id="message"
                                              rows={3} required></textarea>
                                </div>
                                <button type="submit" className="btn btn-sm btn-primary">Submit</button>
                                <p id="status">{status}</p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>


        <section className="what-we-do sec-one">
            <div className="container">
                <div className="section-header" data-aos="fade-up">
                <h3>What We Do</h3>
                    <p>Our services are designed to help you achieve your goals</p>
                </div>
                <div>
                    <div className="row">
                        <div className="col-lg-6 what-we-do-img" >
                            <img src="/images/adol2.jpg" alt="Alternate Text" />
                        </div>
                        <div className="col-lg-6" >
                            <div data-aos="fade-up">
                                <p className="card-text">
                                    CCAYEF is a Uganda-based NGO dedicated to empowering youth and
                                    communities through providing several programs and services. Founded in the early
                                    2000s in Mukono District, CCAYEF in
                                    partnership with others provides the following services.
                                </p>
                                <ul>
                                    <li>Early Childhood Development</li>
                                    <li>Vocational Skills Training</li>
                                    <li>Teenage Mother Rehabilitation</li>
                                    <li>Adolescent Health and Empowerment</li>
                                    <li>HIV Sensitization</li>
                                    <li>WASH and Climate Change</li>
                                </ul>

                                <a href="#" className="btn btn-primary nav-bottom" data-page="services" >Learn More</a>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </section>





        <section className="our-partners">
            <div className="section-header">
                <h3>Our Partners</h3>
                <p>Organizations that support our mission</p>
            </div>
            <div className="row" data-aos="fade-up">
                <div className="col">
                    <a href="https://www.government.is/diplomatic-missions/embassy-of-iceland-in-kampala/">
                        <img src="/images/embassy.svg" alt='...'/>
                    </a>
                </div>
                <div className="col">
                    <a href="https://www.girlsnotbrides.org/our-partnership/national-partnerships-coalitions/uganda/">
                        <img src="/images/gnb.png" alt='...'/>
                    </a>
                </div>
                <div className="col" >
                    <a href="https://www.segalfamilyfoundation.org/">
                        <img style={{backgroundColor: 'green', padding: '10px'}} src="/images/segal.svg"  alt='...'/>
                    </a>
                </div>
                <div className="col">
                    <a href="https://ngoforum.or.ug/">
                        <img src="images/ngo-forum.png" alt='....'/>
                    </a>
                </div>
                <div className="col">
                    <a href="https://kayunga.go.ug/">
                        <img src="images/kayunga.png"  alt='...'/>
                    </a>
                </div>

                <div className="row" data-aos="fade-up">
                    <div className="col">
                        <a href="https://www.muwrp.org/">
                            <img src="images/muwrp.png" alt='....'/>
                        </a>
                    </div>
                    <div className="col">
                        <a href="https://www.usaid.gov/">
                            <img style={{backgroundColor:'#000061', padding: '10px'}} src="/images/usaid.svg"  alt='...'/>
                        </a>
                    </div>
                    <div className="col">
                        <a href="https://buikwe.go.ug/">
                            <img src="/images/buikwe.png"  alt='...'/>
                        </a>
                    </div>
                    <div className="col">
                        <a href="https://mukono.go.ug/">
                            <img src="/images/mukono.png" alt='...'/>
                        </a>
                    </div>
                    <div className="col">
                        <a href="https://uwasnet.org/">
                            <img src="/images/uwasenet.png"  alt='....'/>
                        </a>
                    </div>
                </div>
            </div>
        </section>


        <section className="donate-section sec-one">
            <div className="container">
                <div className="section-header" data-aos="fade-up">
                    <h3>Donate</h3>
                    <p>Help us make a difference in the lives of the less privileged</p>

                </div>
                <div className="donate-btn">
                    <a href="#" className="btn btn-primary">Donate Now</a>
                </div>
            </div>
        </section>


        <section className="testimonials-section">
            <div className="container">
                <div className="section-header text-center" data-aos="fade-up">
                    <h3>Success Stories</h3>
                    <p>See what our community says about us</p>
                </div>
                <div id="testimonialCarousel" className="carousel slide testimonial-carousel" data-bs-ride="true" data-aos="fade-up">
                    <div className="carousel-inner">
                        <div className="carousel-item test-item active">
                            <div className="d-flex justify-content-center">
                                <div className="card text-center">
                                    <div className="card-body d-flex align-items-center">


                                        <div className="text-container">
                                            <h5 className="card-title">Peter Claver</h5>
                                            <p className="card-subtitle mb-2 text-muted">Employee</p>
                                            <p className="card-text">&#34;The deep passion of helping youth keeps me on my toes everyday. A real
                                                family and home, that&#39;s CCAYEF&#34;</p>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item test-item">
                            <div className="d-flex justify-content-center">
                                <div className="card text-center">
                                    <div className="card-body">

                                        <div className="text-container">
                                            <h5 className="card-title">Harvey </h5>
                                            <p className="card-subtitle mb-2 text-muted">Volunteer</p>
                                            <p className="card-text">&#34;The skills gained at CCAYEF helped me kickstart my career. Forever grateful to the CCAYEF family&#34;</p>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item test-item">
                            <div className="d-flex justify-content-center">
                                <div className="card text-center">
                                    <div className="card-body">
                                        <div className="text-container">
                                            <h5 className="card-title">Henry L.</h5>
                                            <p className="card-subtitle mb-2 text-muted">Donor</p>
                                            <p className="card-text">&#34;Glad to be part of the people contributing to the growth of the children
                                                and the youth at CCAYEF, Uganda&#34;</p>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#testimonialCarousel" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#testimonialCarousel" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </section>
    </div>
  )}