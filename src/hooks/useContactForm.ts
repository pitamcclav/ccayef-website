import React, { useState } from 'react';

interface FormData {
    name: string;
    email: string;
    message: string;
}

export default function useContactForm() {
    const [formData, setFormData] = useState<FormData>({ name: '', email: '', message: '' });
    const [status, setStatus] = useState<string>('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const clearForm = () => setFormData({ name: '', email: '', message: '' });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('Sending...');
        try {
            const response = await fetch('/api/emails', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setStatus('Email sent successfully!');
                clearForm();
            } else {
                setStatus('Failed to send email.');
            }
        } catch (error) {
            console.error('Error:', error);
            setStatus('An error occurred. Please try again.');
        }
    };

    return { formData, status, handleChange, handleSubmit, clearForm };
}
