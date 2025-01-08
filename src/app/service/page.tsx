'use client'

import React from 'react'

export default function ServicePage() {
    // const toggleAccordionItems = ()=>{
    //     const accordionItems = document.querySelectorAll('.accordion-collapse');
    //     if (window.innerWidth >= 992) {
    //         accordionItems.forEach(item => item.classList.add('show'));
    //     } else {
    //         accordionItems.forEach(item => item.classList.remove('show'));
    //     }
    // };
    //
    // const observeAccordionContainer = ()=>{
    //     const observer = new MutationObserver((mutationsList, observer) => {
    //         const accordionContainer = document.querySelector('.accordion');
    //         if (accordionContainer) {
    //             toggleAccordionItems(); // Adjust accordion items based on screen size
    //             observer.disconnect(); // Stop observing once adjustments are made
    //         }
    //     });
    //
    //     // Observe the #content container for any new children (such as dynamically loaded accordion)
    //     // observer.observe(document.getElementById('content'), {
    //     //     childList: true,
    //     //     subtree: true,
    //     // });
    // };
  return (
      <div>
          <div className="breadcrumbs">
          </div>
          <div className="accordion accordion-flush">
              <section className="sec-one">
                  <div className="container">
                      <div className="section-header" data-aos="fade-up">
                          <h3>Our Services</h3>
                          <p>CCAYEF has different services it offers to the Community to promote better livelihoods of
                              people.</p>
                      </div>
                      <div className="row" data-aos="fade-up">
                          <div className="col-lg-4">
                              <div className="card">
                                  <img src="/images/adol5.jpg" alt="Early childhood dev"/>
                                  <div className="card-body">
                                      <div className="accordion-item">
                                          <h4 className="accordion-header">
                                              <button className="accordion-button" type="button"
                                                      data-bs-toggle="collapse" data-bs-target="#collapseOne"
                                                      aria-expanded="true" aria-controls="collapseOne">
                                                  Early Childhood Development
                                              </button>
                                          </h4>
                                          <div id="collapseOne" className="accordion-collapse collapse "
                                               data-bs-parent="#accordionExample">
                                              <div className="accordion-body">
                                                  <p>We provided access to quality education for underprivileged
                                                      children pre-pandemic. Our program included affordable education,
                                                      around-the-clock care, and transportation to ensure every child
                                                      has the opportunity to learn and grow in a secure environment.</p>
                                              </div>
                                          </div>
                                      </div>
                                      <a href="/service/ecd" data-page="earlyChildhoodDev" className="btn btn-primary more my-3">Learn
                                          More</a>
                                  </div>
                              </div>
                          </div>

                          <div className="col-lg-4">
                              <div className="card">
                                  <img src="/images/Food preparation and demonstration sessions.jpg"
                                       alt="Teen mother rehab"/>
                                  <div className="card-body">
                                      <div className="accordion-item">
                                          <h4 className="accordion-header">
                                              <button className="accordion-button" type="button"
                                                      data-bs-toggle="collapse" data-bs-target="#collapseTwo"
                                                      aria-expanded="true" aria-controls="collapseTwo">
                                                  Teenage Mother Rehabilitation
                                              </button>
                                          </h4>
                                          <div id="collapseTwo" className="accordion-collapse collapse"
                                               data-bs-parent="#accordionExample">
                                              <div className="accordion-body">
                                                  <p>This service focuses on providing essential counseling, health
                                                      education, and mental health support for teen mothers. We work
                                                      with local healthcare providers to ensure children and young
                                                      people have access to the healthcare they need.</p>
                                              </div>
                                          </div>
                                      </div>
                                      <a href="/service/tmr" data-page="teenageMotherRehab" className="btn btn-primary more my-3">Learn
                                          More</a>
                                  </div>
                              </div>
                          </div>

                          <div className="col-lg-4">
                              <div className="card">
                                  <img src="/images/voc4.jpg" alt="Vocational Skills Training"/>
                                  <div className="card-body">
                                      <div className="accordion-item">
                                          <h4 className="accordion-header">
                                              <button className="accordion-button" type="button"
                                                      data-bs-toggle="collapse" data-bs-target="#collapseThree"
                                                      aria-expanded="true" aria-controls="collapseThree">
                                                  Vocational Skills Training
                                              </button>
                                          </h4>
                                          <div id="collapseThree" className="accordion-collapse collapse"
                                               data-bs-parent="#accordionExample">
                                              <div className="accordion-body">
                                                  <p>Vocational skills are essential for youth to start businesses or
                                                      earn a living. CCAYEF offers a range of vocational skills to help
                                                      young people earn a living.</p>
                                              </div>
                                          </div>
                                      </div>
                                      <a href="/service/vst" data-page="vocationalTraining" className="btn btn-primary more my-3">Learn
                                          More</a>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </section>

              <section className="sec-two">
                  <div className="container">
                      <div className="row" data-aos="fade-up">
                          <div className="col-lg-6">
                              <img src="/images/mybg5.jpg" alt="Community Outreach"/>
                          </div>
                          <div className="col-lg-6">
                              <div className="card-body">
                                  <div className="accordion-item">
                                      <h4 className="accordion-header">
                                          <button className="accordion-button" type="button" data-bs-toggle="collapse"
                                                  data-bs-target="#collapseHealthServices" aria-expanded="true"
                                                  aria-controls="collapseHealthServices">
                                              Health Services
                                          </button>
                                      </h4>
                                      <div id="collapseHealthServices" className="accordion-collapse collapse"
                                           data-bs-parent="#accordionExample">
                                          <div className="accordion-body">
                                              <p>Our health services are part of what makes us CCAYEF. We carry them out
                                                  through outreaches in communities, campaigns against GBV, HIV
                                                  treatment mobilization, and various projects with partners.</p>
                                          </div>
                                      </div>
                                  </div>
                                  <a href="/service/hs" data-page="healthServices" className="btn btn-primary more my-3">More
                                      ....</a>
                              </div>
                          </div>
                      </div>
                  </div>
              </section>

              <section className="sec-one">
                  <div className="container">
                      <div className="row" data-aos="fade-up">
                          <div className="col-lg-6">
                              <div className="card-body">
                                  <div className="accordion-item">
                                      <h4 className="accordion-header">
                                          <button className="accordion-button" type="button" data-bs-toggle="collapse"
                                                  data-bs-target="#collapseWASH" aria-expanded="true"
                                                  aria-controls="collapseWASH">
                                              WASH and Climate Change
                                          </button>
                                      </h4>
                                      <div id="collapseWASH" className="accordion-collapse collapse"
                                           data-bs-parent="#accordionExample">
                                          <div className="accordion-body">
                                              <p>CCAYEF has implemented projects to provide WASH facilities and climate
                                                  change initiatives, including tree planting and environmental cleanup
                                                  campaigns in communities and schools.</p>
                                          </div>
                                      </div>
                                  </div>
                                  <a href="/service/wac" data-page="WASHandClimateChange"
                                     className="btn btn-primary more my-3">More...</a>
                              </div>
                          </div>
                          <div className="col-lg-6">
                              <img src="/images/Three legged or mobile hand washing facility demonstration.jpg"
                                   alt="Empowerment Workshops"/>
                          </div>
                      </div>
                  </div>
              </section>

              <section className="sec-two">
                  <div className="container">
                      <div className="row" data-aos="fade-up">
                          <div className="col-lg-6">
                              <img src="/images/Trigger meeting at Busaana SC.jpg" alt="Mentorship Program"/>
                          </div>
                          <div className="col-lg-6">
                              <div className="card-body">
                                  <div className="accordion-item">
                                      <h4 className="accordion-header">
                                          <button className="accordion-button" type="button" data-bs-toggle="collapse"
                                                  data-bs-target="#collapseAdolescentEmpowerment" aria-expanded="true"
                                                  aria-controls="collapseAdolescentEmpowerment">
                                              Adolescent Empowerment
                                          </button>
                                      </h4>
                                      <div id="collapseAdolescentEmpowerment" className="accordion-collapse collapse"
                                           data-bs-parent="#accordionExample">
                                          <div className="accordion-body">
                                              <p>Our mentorship and counseling program connects young people with
                                                  mentors who can guide and support them through personal and
                                                  professional growth, helping them navigate life with purpose.</p>
                                          </div>
                                      </div>
                                  </div>
                                  <a href="/service/ae" data-page="youthEmpowerment"
                                     className="btn btn-primary more my-3">More...</a>
                              </div>
                          </div>
                      </div>
                  </div>
              </section>
          </div>

      </div>
  )
}