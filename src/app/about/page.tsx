'use client'

import React from 'react'

export default function AboutPage() {
  return (
      <div>
          <div className="breadcrumbs">

          </div>

          <section className="py-0 bg-gray-50">
              <div className="container mx-auto px-4">
                  {/* Header */}
                  <div className="text-center mb-12">
                      <h3 className="text-3xl font-bold text-gray-800 mb-2">Our Journey</h3>
                      <p className="text-lg text-gray-600">Learn more about us</p>
                      <div className="w-24 h-1 bg-blue-500 mx-auto mt-4"></div>
                  </div>

                  {/* Content */}
                  <div className="row">
                      {/* Image Column */}
                      <div className="col-lg-6 mb-4 mb-lg-0">
                          <div className="rounded-lg overflow-hidden">
                              <img
                                  src="/images/voc4.jpg"
                                  alt="CCAYEF Journey"
                                  className="w-100 h-auto "
                              />
                          </div>
                      </div>

                      {/* Text Column */}
                      <div className="col-lg-6">
                          <div className="space-y-4 text-gray-700">
                              <p className="leading-relaxed">
                                  Child Care And Youth Empowerment Foundation (CCAYEF) is a non-profit charitable
                                  organization that was established in 2008.
                              </p>

                              <p className="leading-relaxed">
                                  The organization was founded by a three of individuals who were passionate about the
                                  welfare of children and young people in Uganda being nurtured holistically to
                                  realize their full growth and development potential.
                              </p>

                              <p className="leading-relaxed">
                                  Since its establishment, CCAYEF has been working tirelessly to provide essential
                                  services to children and young people in Uganda, creating lasting positive impact
                                  in their lives and building a better future.
                              </p>

                          </div>
                      </div>
                  </div>
                  <div className="row mt-3">
                      <div className="col-lg-6">
                          <div className="space-y-2">

                              <h4 className="text-xl font-semibold text-gray-800">Our Focus Areas:</h4>
                              <ul className="list-disc pl-5 space-y-2">
                                  <li>Early childhood development through education</li>
                                  <li>Healthcare services</li>
                                  <li>Children&#39;s rights awareness and advocacy</li>
                                  <li>Gender Based Violence prevention</li>
                              </ul>
                          </div>
                      </div>
                      <div className="col-lg-6">
                          <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-100">
                              <p className="text-sm font-medium text-blue-800">
                                  Registered by Uganda Ministry of Internal Affairs – NGO Board
                                  <br/>
                                  <span className="font-bold">Reg No: 4164, CCAYEF. S. 5914/9236</span>
                              </p>
                          </div>
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
                                  <img src="/images/staff/ruth.png" alt="Team Member 1"/>

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
                                  <img src="/images/staff/judith.png" alt="Team Member 1"/>

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