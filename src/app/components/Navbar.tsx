'use client'
import React, { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false)
    const navLinksRef = useRef<NodeListOf<HTMLAnchorElement> | null>(null)
    const pathname = usePathname()

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0)
        }

        const handleNavLinkClick = () => {
            setIsMenuOpen(false)
        }

        // Attach event listeners
        window.addEventListener('scroll', handleScroll)
        const links = navLinksRef.current
        if (links) {
            links.forEach(link => {
                link.addEventListener('click', handleNavLinkClick)
            })
        }

        // Cleanup event listeners
        return () => {
            window.removeEventListener('scroll', handleScroll)
            if (links) {
                links.forEach(link => {
                    link.removeEventListener('click', handleNavLinkClick)
                })
            }
        }
    }, [])

    const isLinkActive = (href: string) => {
        if (href === '/') return pathname === href
        return pathname.startsWith(href)
    }

    return (
        <nav className={`navbar fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'navbar-solid' : 'navbar-transparent'}`}>
            <div className={`${isScrolled ? 'bg-white shadow-md' : ''}`}>
                <div className="container mx-auto px-4">
                    <div className="flex items-center justify-between h-16">
                        {/* Logo */}
                        <Link className="flex items-center space-x-2 text-gray-900 font-bold" href="/">
                            <Image 
                                src="/images/logo.png" 
                                alt="CCAYEF Logo" 
                                width={32} 
                                height={32} 
                                className="w-8 h-8"
                            />
                            <span>CCAYEF</span>
                        </Link>

                        {/* Toggle Button */}
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="lg:hidden p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 focus:outline-none"
                            type="button"
                            aria-expanded={isMenuOpen}
                            aria-label="Toggle navigation"
                        >
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>

                        {/* Desktop Menu */}
                        <div className="hidden lg:flex lg:items-center lg:space-x-8">
                            <ul className="flex space-x-8"
                                ref={(el) => {
                                    if (el) navLinksRef.current = el.querySelectorAll('[data-nav-link]')
                                }}
                            >
                                {[
                                    { href: '/', label: 'Home' },
                                    { href: '/about', label: 'About Us' },
                                    { href: '/service', label: 'Services' },
                                    { href: '/project', label: 'Projects' },
                                    { href: '/media', label: 'Media' },
                                    { href: '/publication', label: 'Resources' },
                                    { href: '/contact', label: 'Contact' }
                                ].map((link) => (
                                    <li key={link.href}>
                                        <Link 
                                            className={`nav-link ${isLinkActive(link.href) ? 'active' : ''}`} 
                                            data-nav-link 
                                            href={link.href}
                                        >
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Mobile Menu */}
                        <div className={`lg:hidden absolute top-16 left-0 right-0 bg-white shadow-md transition-all duration-300 ${isMenuOpen ? 'block' : 'hidden'}`}>
                            <ul className="px-4 py-2 space-y-2">
                                {[
                                    { href: '/', label: 'Home' },
                                    { href: '/about', label: 'About Us' },
                                    { href: '/service', label: 'Services' },
                                    { href: '/project', label: 'Projects' },
                                    { href: '/media', label: 'Media' },
                                    { href: '/publication', label: 'Resources' },
                                    { href: '/contact', label: 'Contact' }
                                ].map((link) => (
                                    <li key={link.href}>
                                        <Link 
                                            className={`block py-2 nav-link ${isLinkActive(link.href) ? 'active' : ''}`} 
                                            data-nav-link 
                                            href={link.href}
                                        >
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
} 