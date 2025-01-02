'use client'

import React from 'react'

export default function AboutPage() {
  return (
      <div>
          <div className="breadcrumbs">

          </div>

          <section className="sec-one">
              <div className="container">
                  <div className="section-header">
                      <h3>Our Journey</h3>
                      <p>Learn more about us</p>
                  </div>
                  <div className="row" data-aos="fade-up">
                      <div className="col-lg-6">
                          <img src="/images/voc4.jpg" alt="Alternate Text"/>
                      </div>
                      <div className="col-lg-6">
                          <p>
                              Child Care And Youth Empowerment Foundation (CCAYEF) is a non-profit charitable
                              organization that was established in 2008.

                              The organization was founded by a three of individuals who were passionate about the
                              welfare of children and young people in Uganda being nurtured holistically to
                              realize their full growth and development potential.
                              The founders of CCAYEF recognized the need to provide support and resources to children
                              and young people who were vulnerable and marginalized.
                              The organization was established with the aim of empowering children and young people to
                              reach their full potential and lead healthy and fulfilling lives.
                              Since its establishment, CCAYEF has been working to provide early childhood development
                              through education, healthcare service, and other essential services to
                              children and young people in Uganda.
                              The organization has also been working to raise awareness about the rights of children and
                              young people and to advocate for their rights including Gender Based Violence.
                              CCAYEF is committed to making a positive impact in the lives of children and young people
                              in Uganda and to creating a better future for them.
                              The organization is registered by Uganda Ministry of Internal Affairs – NGO Board <b>(Reg
                              No: 4164, CCAYEF. S. 5914/9236)</b>
                          </p>
                      </div>
                  </div>
              </div>
          </section>

          <section>
              <div className="container">
                  <div className="row" data-aos="fade-up">
                      <div className="col-lg-6">
                          <div className="card-body">
                              <h4>Mission</h4>
                              <p>
                                  Our mission is to empower children and young people in Uganda to reach their full
                                  potential and lead healthy and fulfilling lives.
                              </p>
                          </div>
                      </div>
                      <div className="col-lg-6">
                          <div className="card-body">
                              <h4>Vision</h4>
                              <p>
                                  Our vision is to create a better future for children and young people in Uganda by
                                  providing them with the support and resources they need to thrive.
                              </p>
                          </div>
                      </div>
                  </div>
              </div>
          </section>


          <section className="sec-one">
              <div className="section-header">
                  <h3>Core Values</h3>
                  <p>
                      At CCAYEF, we are guided by the following core values in all our work:
                  </p>
              </div>
              <div className="container">

                  <div className="row" data-aos="fade-up">
                      <div className="col-lg-4 my-4">
                          <div className="card-item ci1">
                              <div className="circle">1</div>
                              <div className="card-content">
                                  Social justice and Empowerment
                              </div>
                          </div>
                      </div>
                      <div className="col-lg-4 my-4">
                          <div className="card-item ci2">
                              <div className="circle">2</div>
                              <div className="card-content">
                                  Integrity
                              </div>
                          </div>
                      </div>
                      <div className="col-lg-4 my-4">
                          <div className="card-item ci3">
                              <div className="circle">3</div>
                              <div className="card-content">
                                  Respect
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="row justify-content-center" data-aos="fade-up">
                      <div className="col-lg-4 my-4">
                          <div className="card-item ci4">
                              <div className="circle">4</div>
                              <div className="card-content">
                                  Love
                              </div>
                          </div>
                      </div>
                      <div className="col-lg-4 my-4">
                          <div className="card-item ci5">
                              <div className="circle">5</div>
                              <div className="card-content">
                                  Professionalism
                              </div>
                          </div>
                      </div>

                  </div>


              </div>
          </section>


          <section>
              <div className="container">
                  <div className="section-header" data-aos="fade-up">
                      <h3>Our Team</h3>
                      <p>Meet the dedicated individuals behind CCAYEF</p>
                  </div>
                  <div className="row" data-aos="fade-up">
                      <div className="col-lg-4">
                          <div className="team-member">
                              <div className="image-wrapper">
                                  <img src="/images/staff/prossy.png" alt="Team Member 1"/>
                                    {/*<div class="social-overlay">*/}
                                    {/*    <a href="https://www.facebook.com" class="fa-brands fa-facebook"></a>*/}
                                    {/*    <a href="https://www.twitter.com" class="fa-brands fa-x-twitter"></a>*/}
                                    {/*    <a href="https://www.instagram.com" class="fa-brands fa-instagram"></a>*/}
                                    {/*    <a href="https://www.linkedin.com" class="fa-brands fa-linkedin"></a> */}
                              </div>
                              <h5>Dr. Proscovia Nalwadda Kkonde</h5>
                              <p>Founder & Executive Director</p>
                              <p>Prossy has over 15 years of experience in the nonprofit sector,
                                  working to improve the lives of vulnerable children and youth in Uganda.</p>
                          </div>
                      </div>

                      <div className="col-lg-4">
                          <div className="team-member">
                              <div className="image-wrapper">
                                  <img src="images/image_6.jpg" alt="Team Member 1"/>

                              </div>
                              <h5>Mrs. Lucia Kivumbi</h5>
                              <p>Projects Coordinator</p>
                              <p>Lucia has over 15 years of experience in the nonprofit sector,
                                  working to improve the lives of vulnerable children and youth in Uganda.</p>
                          </div>
                      </div>

                      <div className="col-lg-4">
                          <div className="team-member">
                              <div className="image-wrapper">
                                  <img src="/images/image_6.jpg" alt="Team Member 1"/>

                                  <h5>Mrs. Judith Katongole</h5>
                                  <p>Finance and HR</p>
                                  <p>Judith has worked with the Organization for over 10 years budgeting and managing
                                      the finances
                                      of the CCAYEF. She also acts as the Human Resource for the organization.</p>
                              </div>
                          </div>

                      </div>
                  </div>
              </div>
          </section>

      </div>
  )
}