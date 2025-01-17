'use client'
import React, { useEffect, useState } from 'react'

export default function NavbarProvider({ children }: { children: React.ReactNode }) {
    const [lastScrollY, setLastScrollY] = useState(0)

    useEffect(() => {
        const navbar = document.querySelector('.navbar')
        if (!navbar) return

        const handleScroll = () => {
            const currentScrollY = window.scrollY

            // Show/hide navbar based on scroll direction
            if (currentScrollY > lastScrollY && currentScrollY > 100) {
                // Scrolling down & past threshold
                navbar.classList.add('scrolled')
            } else {
                // Scrolling up or at top
                navbar.classList.remove('scrolled')
            }

            setLastScrollY(currentScrollY)
        }

        window.addEventListener('scroll', handleScroll, { passive: true })
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [lastScrollY])

    return <>{children}</>
}
