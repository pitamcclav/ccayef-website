// NavbarWrapper.tsx
'use client'
import Navbar from './Navbar'
import NavbarProvider from './NavbarProvider'

export default function NavbarWrapper() {
    return (
        <NavbarProvider>
            <Navbar />
        </NavbarProvider>
    )
}