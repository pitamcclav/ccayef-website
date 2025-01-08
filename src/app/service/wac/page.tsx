'use client'

import React from 'react'
import Link from "next/link";

export default function ServicePage() {
  return (
      <div>

          <section className="early-sec">

              <div className="early">

                  <div className="section-header">
                      <Link href="/service" data-page="services" className="btn">Back</Link>
                      <h3>WASH and Climate Change</h3>
                  </div>
                  <div className="container late">
                      <h2>Disability Inclusive WASH</h2>
                      <p>
                          This program aims to include youth and children with disabilities in Water, Sanitation, and
                          Hygiene (WASH) initiatives. These groups face significant barriers to accessing WASH services,
                          which are often overlooked. Our focus is to ensure equitable access for everyone, regardless
                          of physical ability.
                      </p>

                      <h2>WASH in Schools</h2>
                      <p>
                          The WASH in Schools program addresses the barriers and challenges that children, both boys and
                          girls, face due to lack of water, sanitation, and hygiene facilities. This program helps
                          prevent school absenteeism, dropout, and loss of self-esteem by ensuring the availability and
                          accessibility of appropriate WASH facilities, including menstrual health and hygiene services
                          and handwashing stations.
                      </p>

                      <h2>Gender Equality and Climate Change</h2>
                      <p>
                          We empower women, girls, youth, and people with disabilities to participate in decision-making
                          processes related to climate change. By doing so, we promote sustainable development and
                          greater gender equality. Our aim is to ensure that everyone has a voice in addressing climate
                          change-related challenges.
                      </p>

                      <h2>WASH in Fishing Communities</h2>
                      <p>
                          This program enhances WASH services in marginalized fishing communities. People in these areas
                          often face significant challenges related to sanitation, hygiene, and water access due to
                          geographical isolation and poor infrastructure. Our approach includes behavior-centered and
                          locally adapted solutions to improve WASH services in these communities.
                      </p>

                      <h2>Climate Change</h2>
                      <p>
                          Our climate change program focuses on addressing long-term shifts in weather patterns and
                          temperatures due to both natural and human activities. We employ Locally Led Adaptations (LLA)
                          to mitigate the impacts of climate change on vulnerable populations, such as women, girls,
                          youth, and children. This program addresses issues like global warming, carbon emissions,
                          unpredictable weather, and its effects on agriculture, food production, and health.
                      </p>

                      <p>
                          By working with local communities, we aim to reduce the impact of climate change, including
                          issues like agricultural and ecological droughts, rising sea levels, and water scarcity. We
                          support sustainable practices that reduce carbon footprints and protect the environment for
                          future generations.
                      </p>
                  </div>
              </div>

          </section>

      </div>
  )
}