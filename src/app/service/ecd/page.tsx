'use client'

import Link from 'next/link'
import React from 'react'


export default function EarlyChildhoodDevPage() {
  return (
      <div>


          <section className="early-sec">

              <div className="early">
                  <div className="section-header">
                      <Link href="/service" data-page="services" className="btn">Back</Link>
                      <h3>Early Childhood Development</h3>
                  </div>
                  <div className="container late">
                      <h2>Background</h2>
                      <p>
                          Children born to teenage mothers are as vulnerable as their moms and often suffer from
                          malnutrition,
                          lacking access to even basic education, let alone quality education. This situation often
                          results from
                          male culprits abandoning the pregnant teenagers, leaving them without support. Research shows
                          that for these reasons,
                          children of teenage mothers are more likely to become teen moms themselves or, if boys, end up
                          in juvenile delinquency.
                      </p>
                      <p>
                          In an effort to break this vicious cycle, CCAYEF supports teenage mothers by offering medical
                          treatment for
                          both very sick babies and their mothers, as well as pre-primary education.
                      </p>
                      <div className="sec-one serve">

                          <h2>Child Care Nursery and Day Care Center</h2>
                          <div className="row">
                              <div className="col-lg-6">
                                  <img src="images/child.jpg"/>
                              </div>

                              <div className="col-lg-6">
                                  <p>
                                      CCAYEF established the Child Care Nursery and Day Care Center to cater to the
                                      helpless children born to teenage mothers.
                                      Due to its successful initiatives, the wider community has also embraced the
                                      center’s services.
                                      In addition to covering the regular school curriculum, we offer parenting sessions
                                      to parents,
                                      promote early graders’ reading in both English and the local language (Luganda),
                                      and ensure good nutrition among the children.
                                  </p>
                                  <p>
                                      Here, we emphasize the right to play for children, supporting their mental and
                                      physical growth and development. We also address their moral, social, emotional,
                                      and cognitive development.
                                  </p>
                              </div>
                          </div>
                      </div>


                      <div className="serve">

                          <h2>Establishment of Day Care Center and Nursery School</h2>
                          <p>
                              Although the Ugandan government has implemented Universal Primary Education, there
                              are no public early childhood development centers. To bridge this gap, CCAYEF established
                              a
                              day care center and nursery school, primarily for the children of the teenage mothers we
                              serve, as
                              well as those from the neighboring community where our offices are located. This provides
                              these
                              vulnerable children with a firm foundation and a quality start to their education.
                          </p>
                      </div>

                      <div className="sec-one serve">
                          <h2>Reintegration of Teenage Mothers into the Formal Education System</h2>
                          <div className="row">
                              <div className="col-lg-6">
                                  <img src="images/child2.jpg"/>
                              </div>
                              <div className="col-lg-6">
                                  <p>
                                      We have successfully re-integrated over 15 teenage mothers into formal education.
                                      One teenage mother has completed training in nursery teacher education and is now
                                      employed,
                                      able to support herself and her child. One is currently attending primary school,
                                      and
                                      the rest are enrolled in secondary schools. These young mothers have set life
                                      goals, and
                                      we are helping them achieve their aspirations through consistent follow-up,
                                      ongoing counseling, and training.
                                  </p>
                              </div>
                          </div>
                      </div>


                  </div>
              </div>

          </section>


      </div>
  )
}