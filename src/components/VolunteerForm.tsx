'use client'
import { useState } from 'react'

export default function VolunteerForm() {
    const [status, setStatus] = useState('')

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const formData = new FormData(e.currentTarget)
        
        try {
            const response = await fetch('/api/volunteer', {
                method: 'POST',
                body: JSON.stringify({
                    email: formData.get('email'),
                    name: formData.get('name'),
                    message: formData.get('message')
                }),
                headers: {
                    'Content-Type': 'application/json'
                }
            })

            if (response.ok) {
                setStatus('Thank you for your interest! We will contact you soon.')
                e.currentTarget.reset()
            } else {
                setStatus('Something went wrong. Please try again later.')
            }
        } catch (error) {
            setStatus('Something went wrong. Please try again later.')
        }
    }

    return (
        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input 
                    type="email" 
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary" 
                    id="email" 
                    name="email"
                    required 
                />
            </div>
            <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                <input 
                    type="text" 
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary" 
                    id="name" 
                    name="name"
                    required 
                />
            </div>
            <div className="mb-4">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea 
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary" 
                    id="message" 
                    name="message"
                    rows={3} 
                    required 
                />
            </div>
            <button 
                type="submit" 
                className="w-full bg-primary hover:bg-primary/90 text-white font-semibold py-2 px-4 rounded-md transition-colors"
            >
                Submit
            </button>
            {status && (
                <p className="mt-4 text-sm text-center text-gray-700">{status}</p>
            )}
        </form>
    )
}