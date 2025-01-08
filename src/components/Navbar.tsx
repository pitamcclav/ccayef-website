'use client'
import React, { useEffect, useRef } from 'react'
import Link from 'next/link'

export default function Navbar() {
    const navbarTogglerRef = useRef<HTMLButtonElement | null>(null)
    const navLinksRef = useRef<NodeListOf<HTMLAnchorElement> | null>(null)

    useEffect(() => {
        const handleNavLinkClick = () => {
            if (
                navbarTogglerRef.current &&
                window.getComputedStyle(navbarTogglerRef.current).display !== 'none' &&
                !navbarTogglerRef.current.classList.contains('collapsed')
            ) {
                navbarTogglerRef.current.click()
            }
        }

        // Attach event listeners
        const links = navLinksRef.current
        if (links) {
            links.forEach(link => {
                link.addEventListener('click', handleNavLinkClick)
            })
        }

        // Cleanup event listeners
        return () => {
            if (links) {
                links.forEach(link => {
                    link.removeEventListener('click', handleNavLinkClick)
                })
            }
        }
    }, [])

    return (
        <nav className="navbar navbar-expand-lg fixed-top">
            <div className="container">
                {/* Logo */}
                <Link className="navbar-brand" href="/">
                    <img className="navbar-img" src="/images/logo.png" alt="CCAYEF Logo" />
                    CCAYEF
                </Link>

                {/* Toggle Button */}
                <button
                    ref={navbarTogglerRef}
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon" />
                </button>

                {/* Navbar Links */}
                <div className="collapse navbar-collapse justify-content-end"
                    id="navbarNav">
                    <ul className="navbar-nav"
                        ref={(el) => {
                            if (el) navLinksRef.current = el.querySelectorAll('.nav-link')
                        }} >
                        <li className="nav-item">
                            <Link className="nav-link" href="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" href="/about">About Us</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" href="/service">Services</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" href="/project">Projects</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" href="/media">Media</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" href="/publication">Resources</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" href="/contact">Contact</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
