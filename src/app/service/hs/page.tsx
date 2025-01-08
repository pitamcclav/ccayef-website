'use client'

import React from 'react'
import Link from "next/link";

export default function HealthServicesPage() {
  return (
      <div>


          <section className="early-sec">

              <div className="early">

                  <div className="section-header youth">
                      <Link href="/service" className="btn" data-page="services">Back</Link>
                      <h3>Health Services</h3>
                  </div>
                  <div className="container late" >
                      <h2>Background</h2>
                      <p>
                          Health is a strategic priority area that focuses on health awareness, infection prevention,
                          promoting health-seeking behaviors, improving nutrition, and enhancing household and community
                          hygiene. This is achieved through life skills training, provision of Sexual Reproductive
                          Health Rights (SRHR) information, and linking youth to health services, including HIV/AIDS
                          prevention services. Our main strategic objective is:
                      </p>
                      <blockquote>
                          “To eliminate health disparities among children and youth by addressing social determinants of
                          health in the communities we serve.”
                      </blockquote>

                      <h2>Priority Area Specific Objectives</h2>

                      <h3>1. Prevent and Reduce Disease Morbidity and Mortality Among Children and Youth</h3>
                      <p>
                          We design and implement various activities to achieve this objective, such as community
                          sensitization on primary healthcare, malaria, HIV/AIDS, and TB prevention. Additionally, we
                          facilitate referrals to health facilities for treatment and distribute mosquito nets to
                          prevent malaria.
                      </p>

                      <h3>2. Promote and Strengthen Safe Motherhood and Child Survival</h3>
                      <p>
                          We educate adolescents on child management, early pregnancy prevention, and the prevention of
                          second unwanted pregnancies. These efforts ensure safer motherhood and better child survival
                          outcomes in the communities we serve.
                      </p>

                      <h3>3. Promote and Strengthen Adolescents and Maternal Health</h3>
                      <p>
                          Through outreach programs, we educate communities on reproductive and maternal health. We also
                          collaborate with health facilities to train health workers and community health extension
                          workers on safe motherhood practices.
                      </p>

                      <h3>4. Eliminate Health Service Gaps for Youths</h3>
                      <p>
                          Our efforts focus on closing gaps that hinder young people from accessing health services. We
                          offer integrated and optimized HIV testing and promote uptake of integrated health promotion
                          services, such as Voluntary Medical Male Circumcision (VMMC). We also train community
                          volunteers and peer mentors on adolescent sexual and reproductive health (ASRH), and we
                          strengthen youth corners in existing health facilities to provide youth-friendly services.
                      </p>
                  </div>
              </div>

          </section>


      </div>
  )
}