'use client'

import React from 'react'
import useContactForm from "@/hooks/useContactForm";

export default function ContactPage() {

    const { formData, status, handleChange, handleSubmit } = useContactForm();

  return (
    <div>

        <div className="breadcrumbs">
        </div>

        <section className="contact-section">
            <div className="container">
                <div className="section-header">
                    <h3>Contact</h3>
                    <p>Get in touch with us</p>
                </div>
                <div className="row">
                    <div className="col-lg-4">
                        <div className="card contact-card">
                    <span>
                        <i className="fa-solid fa-location-dot"></i>
                    </span>
                            <h4>Address</h4>
                            <p>Kasangalabi, Mukono <br/> 1½ KM off Bugerere-Kayunga Road</p>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="card contact-card">
                    <span>
                        <i className="fa-regular fa-envelope"></i>
                    </span>
                            <h4>Email</h4>
                            <a href="mailto:info@ccayef.org"><p>info@ccayef.org</p></a>

                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="card contact-card">
                    <span>
                        <i className="fa-solid fa-phone"></i>
                    </span>
                            <h4>Call Us</h4>
                            <a href="tel:+256414691428"><p>+256 414691428</p></a>
                        </div>
                    </div>
                </div>
            </div>
        </section>


        <section>
            <div className="container">
                <div className="card">
                    <div className="row form-part">
                        <div className="col">
                            <img src="/images/office.jpg" alt="Contact Image"/>
                        </div>

                        <div className="col-lg-1">
                            <div className="vertical-hr"></div>
                        </div>
                        <div className="col contact-form side-two">
                            <h4>Share your thoughts</h4>
                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <input type="text"
                                             name="name"
                                             onChange={handleChange}
                                           value={formData.name}
                                           className="form-control"
                                           id="name"
                                           placeholder="Your Name" required/>
                                </div>
                                <div className="mb-3">
                                    <input type="email"
                                             name="email"
                                                onChange={handleChange}
                                             value={formData.email}
                                           className="form-control"
                                           id="email"
                                           placeholder="Your Email"/>
                                </div>
                                <div className="mb-3">

                                    <textarea className="form-control"
                                                name="message"
                                                onChange={handleChange}
                                                value={formData.message}
                                              id="message"
                                              rows={3}
                                              placeholder="Your Message"></textarea>
                                </div>
                                <button type="submit" className="btn btn-primary">Submit</button>
                                {status && <p className="mt-2">{status}</p>}
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>

       
        <section className="sec-one">
            <div className="container">
                <div className="section-header">
                    <h3>Our Location</h3>
                    <p>Find us here</p>
                </div>
                <div className="map">
                    <div className="card">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31917.89127079328!2d32.73039848889425!3d0.36714214145714064!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x177dc7adf9689181%3A0x9534af5707d70d2f!2sChild%20Care%20And%20Youth%20Empowerement%20Foundation!5e0!3m2!1sen!2sug!4v1735820922383!5m2!1sen!2sug"
                            width="" height="450" style={{border: 0}} allowFullScreen loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"></iframe>

                    </div>
                </div>
            </div>
        </section>

    </div>
  )
}