'use client'

import React from 'react'
import { DocumentList } from '@/components/DocumentList'

export default function PublicationPage() {
    return (
        <div>
            {/* Breadcrumbs */}
            <div className="breadcrumbs"></div>

            {/* Publications Section */}
            <section className="sec-one">
                <div className="container">
                    <div className="publications">
                        <div className="section-header" data-aos="fade-up">
                            <h3>Publications</h3>
                        </div>
                        <div className="row" data-aos="fade-up">
                            <DocumentList type="publications" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Reports Section */}
            <section>
                <div className="container">
                    <div className="reports">
                        <div className="section-header" data-aos="fade-up">
                            <h3>Reports</h3>
                        </div>
                        <div className="row" data-aos="fade-up">
                            <DocumentList type="reports" />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
