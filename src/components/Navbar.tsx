'use client'
import React, { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false)
    const lastScrollY = useRef(0)
    const [isVisible, setIsVisible] = useState(true)
    const navLinksRef = useRef<NodeListOf<HTMLAnchorElement> | null>(null)
    const pathname = usePathname()

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY
            setIsScrolled(currentScrollY > 0)
            
            // Hide navbar on scroll down, show on scroll up
            if (currentScrollY > lastScrollY.current && currentScrollY > 80) {
                setIsVisible(false)
            } else {
                setIsVisible(true)
            }
            lastScrollY.current = currentScrollY
        }

        const handleNavLinkClick = () => {
            setIsMenuOpen(false)
        }

        window.addEventListener('scroll', handleScroll)
        const links = navLinksRef.current
        if (links) {
            links.forEach(link => {
                link.addEventListener('click', handleNavLinkClick)
            })
        }

        return () => {
            window.removeEventListener('scroll', handleScroll)
            if (links) {
                links.forEach(link => {
                    link.removeEventListener('click', handleNavLinkClick)
                })
            }
        }
    }, [])

    // Close menu when route changes
    useEffect(() => {
        setIsMenuOpen(false)
    }, [pathname])

    const isLinkActive = (href: string) => {
        if (href === '/') return pathname === href
        return pathname.startsWith(href)
    }

    return (
        <nav className={`navbar ${isScrolled ? 'navbar-solid' : 'navbar-transparent'} 
                        transform transition-transform duration-300 
                        ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <Link 
                        className="flex items-center space-x-2 font-bold 
                                 hover:opacity-80 transition-opacity" 
                        href="/"
                    >
                        <Image 
                            src="/images/logo.png" 
                            alt="CCAYEF Logo" 
                            width={32} 
                            height={32} 
                            className="w-8 h-8"
                        />
                        <span className="text-white">CCAYEF</span>
                    </Link>

                    {/* Toggle Button */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="lg:hidden p-2 rounded-md text-gray-200 hover:text-white 
                                 hover:bg-white/10 backdrop-blur-sm focus:outline-none 
                                 transition-colors"
                        type="button"
                        aria-expanded={isMenuOpen}
                        aria-label="Toggle navigation"
                    >
                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                                  d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
                        </svg>
                    </button>

                    {/* Desktop Menu */}
                    <div className="hidden lg:flex lg:items-center lg:space-x-8">
                        <ul className="flex space-x-8">
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
                    <div 
                        className={`lg:hidden fixed inset-x-0 top-16 bg-[var(--navbar-bg)] 
                                   shadow-lg transition-all duration-300 
                                   ${isMenuOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 
                                                'opacity-0 -translate-y-full pointer-events-none'}`}
                    >
                        <ul className="container mx-auto px-4 py-4 space-y-2">
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
                                        className={`block py-2 px-4 rounded-lg nav-link 
                                                  ${isLinkActive(link.href) ? 'active bg-white/10' : ''} 
                                                  hover:bg-white/10 transition-colors`} 
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
        </nav>
    )
}
