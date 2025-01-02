'use client'
import React, { useEffect } from 'react'

export default function NavbarProvider({ children }: { children: React.ReactNode }) {
    useEffect(() => {
        const navbar = document.querySelector('.navbar')

        const handleScroll = () => {
            if (navbar) {
                if (window.scrollY > 50) {
                    navbar.classList.add('scrolled')
                } else {
                    navbar.classList.remove('scrolled')
                }
            }
        }

        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return <>{children}</>
}
