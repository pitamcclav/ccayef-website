// Purpose: Define the layout for the entire application.
import type { Metadata } from 'next'
import React from 'react'
import NavbarWrapper from "@/components/NavbarWrapper";
import Link from 'next/link'
import Script from 'next/script'
import AOSProvider from "@/components/AOSProvider";


export const metadata: Metadata = {
    title: 'CCAYEF | Empowering Youth for a Brighter Future',
    description: 'CCAYEF focuses on empowering youth and fostering community development through education, skill-building, and leadership programs.',
    keywords: [
        'CCAYEF',
        'youth empowerment',
        'community development',
        'non-profit organization',
        'youth education',
        'sanitation promotion'
    ],
    openGraph: {
        title: 'CCAYEF | Empowering Youth for a Brighter Future',
        description: 'Empowering youth and fostering community development through impactful programs.',
        url: 'https://www.ccayefug.org',
        siteName: 'CCAYEF',
        images: [
            {
                url: '/images/logo.png', // Ensure this image exists
                width: 1200,
                height: 630,
                alt: 'CCAYEF Logo'
            }
        ],
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        site: '@CCAYEF',
        title: 'CCAYEF | Empowering Youth for a Brighter Future',
        description: 'Empowering youth and fostering community development.',
        images: ['/images/og-image.png'],
    },
};


export default function RootLayout({

                                       children,
                                   }: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en">
        <head>
            <meta charSet="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />

            <link
                href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
                rel="stylesheet"
                integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH"
                crossOrigin="anonymous"
            />
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.3.0/font/bootstrap-icons.css"/>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css" />
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
            <link
                href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Poppins:wght@300;400;500;600;700&display=swap"
                rel="stylesheet"
            />
            {/* Custom styles should come last */}
            <link rel="stylesheet" href="/site.css" />
            <link rel="stylesheet" href="/ccayef.css" />
            <link rel="icon" href="/images/logo.png" />
        </head>
        <body>
        {/* Navbar with proper z-index */}
        <header className="header-fixed">
            <NavbarWrapper/>
        </header>
        <AOSProvider>
        <main className="main-content">
            {children}
        </main>
        </AOSProvider>

        <footer className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-md-4 mb-4 mb-md-0">
                        <h4>Contact Us</h4>
                        <ul className="list-unstyled">
                            <li>
                                <a href="mailto:info@ccayef.org">
                                    <i className="fas fa-envelope me-2" /> info@ccayef.org
                                </a>
                            </li>
                            <li>
                                <a href="tel:+256414691428">
                                    <i className="fas fa-phone me-2" /> +256 414691428
                                </a>
                            </li>
                            <li>
                                <i className="fas fa-map-marker-alt me-2" />
                                Kasangalabi, Mukono <br /> 1½ KM off Bugerere-Kayunga Road
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-4 mb-4 mb-md-0">
                        <h4>Follow Us</h4>
                        <div className="social-links">
                            <a href="#" className="me-3">
                                <i className="fab fa-twitter" />
                            </a>
                            <a href="#" className="me-3">
                                <i className="fab fa-facebook" />
                            </a>
                            <a href="#" className="me-3">
                                <i className="fab fa-instagram" />
                            </a>
                            <a
                                href="https://www.linkedin.com/company/child-care-and-youth-empowerment-foundation-ccayef/"
                                className="me-3"
                            >
                                <i className="fab fa-linkedin" />
                            </a>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <h4>Quick Links</h4>
                        <ul className="list-unstyled">
                            <li><Link href="/about" className="nav-bottom">About Us</Link></li>
                            <li><Link href="/service" className="nav-bottom">Services</Link></li>
                            <li><Link href="/project" className="nav-bottom">Projects</Link></li>
                            <li><Link href="/media" className="nav-bottom">Media</Link></li>
                            <li><Link href="/publication" className="nav-bottom">Resources</Link></li>
                            <li><Link href="/contact" className="nav-bottom">Contact Us</Link></li>
                        </ul>
                    </div>
                </div>
                <hr className="mt-4 mb-3" />
                <div className="row">
                    <div className="col text-center">
                        <p>&copy; 2024 CCAYEF | <a href="#">Privacy Policy</a></p>
                    </div>
                </div>
            </div>
        </footer>

        {/* Load scripts in correct order */}
        <Script
            src="https://code.jquery.com/jquery-3.7.1.min.js"
            integrity="sha256-/JqT3SQfawRcv/BIHPThkBvs0OEvtFFmqPF/lYI/Cxo="
            crossOrigin="anonymous"
            strategy="afterInteractive"
        />
        <Script
            src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
            integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz"
            crossOrigin="anonymous"
            strategy="afterInteractive"
        />
        <Script
            src="https://kit.fontawesome.com/1cf6fd3c89.js"
            crossOrigin="anonymous"
            strategy="afterInteractive"
        />
        <Script
            src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"
            strategy="afterInteractive"
        />
        {/*<Script src="/site.js" strategy="afterInteractive" />*/}
        </body>
        </html>
    )
}