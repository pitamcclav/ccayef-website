'use client'
import { useState } from 'react'
import emailjs from '@emailjs/browser'

export function VolunteerForm() {
    const [status, setStatus] = useState('')

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const form = e.target as HTMLFormElement

        try {
            await emailjs.send(
                'service_enz5mri',
                'template_nqxqm57',
                {
                    name: (form.elements.namedItem('name') as HTMLInputElement).value,
                    email: (form.elements.namedItem('email') as HTMLInputElement).value,
                    message: (form.elements.namedItem('message') as HTMLInputElement).value,
                }
            )
            setStatus('Message sent successfully!')
        } catch (error) {
            setStatus('Failed to send message')
            console.error('Error', error)
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input type="email" className="form-control" id="email" required />
            </div>
            <div className="mb-3">
                <label htmlFor="name" className="form-label">Name</label>
                <input type="text" className="form-control" id="name" required />
            </div>
            <div className="mb-3">
                <label htmlFor="message" className="form-label">Message</label>
                <textarea className="form-control" id="message" rows={3} required />
            </div>
            <button type="submit" className="btn btn-sm btn-primary">Submit</button>
            {status && <p className="mt-2">{status}</p>}
        </form>
    )
}