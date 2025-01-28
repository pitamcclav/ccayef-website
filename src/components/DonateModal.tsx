'use client'
import { useState } from 'react'
import Image from 'next/image'

interface DonateModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const causes = [
    { id: 'education', label: 'Education Support' },
    { id: 'health', label: 'Healthcare Services' },
    { id: 'youth', label: 'Youth Empowerment' },
    { id: 'wash', label: 'WASH & Climate Change' },
    { id: 'general', label: 'General Support' }
]

const paymentMethods = [
    { 
        id: 'mtn', 
        label: 'MTN Mobile Money',
        icon: '/images/mtn.png'
    },
    { 
        id: 'airtel', 
        label: 'Airtel Money',
        icon: '/images/airtel.png'
    },
    { 
        id: 'card', 
        label: 'Card Payment',
        icon: '/images/card.png'
    }
]

const amounts = [1000, 5000, 10000, 20000, 50000]

export default function DonateModal({ isOpen, onClose }: DonateModalProps) {
    const [selectedCause, setSelectedCause] = useState('')
    const [selectedAmount, setSelectedAmount] = useState<number | ''>('')
    const [customAmount, setCustomAmount] = useState('')
    const [selectedPayment, setSelectedPayment] = useState('')
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        mobileNumber: '',
        cardNumber: '',
        expiryDate: '',
        cvv: '',
        cardholderName: ''
    })
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [error, setError] = useState('')

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitting(true)
        setError('')

        try {
            // Prepare payment details based on payment method
            let paymentDetails = {}
            if (selectedPayment === 'card') {
                paymentDetails = {
                    cardholderName: formData.cardholderName,
                    cardNumber: formData.cardNumber,
                    expiryDate: formData.expiryDate,
                    cvv: formData.cvv
                }
            } else {
                paymentDetails = {
                    mobileNumber: formData.mobileNumber
                }
            }

            const response = await fetch('/api/donations', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: formData.name,
                    email: formData.email,
                    cause: selectedCause,
                    amount: selectedAmount || customAmount,
                    paymentMethod: selectedPayment,
                    paymentDetails
                }),
            })

            const data = await response.json()

            if (!response.ok) {
                throw new Error(data.error || 'Failed to process donation')
            }

            // Handle successful donation
            onClose()
            // You might want to show a success message or redirect
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Failed to process donation')
        } finally {
            setIsSubmitting(false)
        }
    }

    if (!isOpen) return null

    return (
        <div className="fixed inset-0 z-50 overflow-y-auto">
            <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />
            
            <div className="relative min-h-screen flex items-center justify-center p-4">
                <div className="relative bg-white rounded-xl shadow-xl max-w-2xl w-full p-6 overflow-hidden">
                    {/* Close button */}
                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 
                                 transition-colors"
                    >
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>

                    {/* Modal content */}
                    <div className="space-y-6">
                        <div className="text-center">
                            <h3 className="text-2xl font-bold text-gray-900">Make a Donation</h3>
                            <p className="mt-2 text-gray-600">Your support helps us make a difference</p>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            {/* Personal Information */}
                            <div className="space-y-4">
                                <div>
                                    <label htmlFor="name" className="form-label">Full Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        className="form-input"
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        required
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="form-label">Email Address</label>
                                    <input
                                        type="email"
                                        id="email"
                                        className="form-input"
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        required
                                    />
                                </div>
                            </div>

                            {/* Cause Selection */}
                            <div>
                                <label className="form-label">Select a Cause</label>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                    {causes.map((cause) => (
                                        <button
                                            key={cause.id}
                                            type="button"
                                            className={`p-3 rounded-lg border-2 text-left transition-colors
                                                      ${selectedCause === cause.id 
                                                        ? 'border-primary bg-primary/5 text-primary' 
                                                        : 'border-gray-200 hover:border-primary/50'}`}
                                            onClick={() => setSelectedCause(cause.id)}
                                        >
                                            {cause.label}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Amount Selection */}
                            <div>
                                <label className="form-label">Select Amount (UGX)</label>
                                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 mb-3">
                                    {amounts.map((amount) => (
                                        <button
                                            key={amount}
                                            type="button"
                                            className={`p-3 rounded-lg border-2 text-center transition-colors
                                                      ${selectedAmount === amount 
                                                        ? 'border-primary bg-primary/5 text-primary' 
                                                        : 'border-gray-200 hover:border-primary/50'}`}
                                            onClick={() => {
                                                setSelectedAmount(amount)
                                                setCustomAmount('')
                                            }}
                                        >
                                            {amount.toLocaleString()}
                                        </button>
                                    ))}
                                </div>
                                <div>
                                    <input
                                        type="number"
                                        placeholder="Custom Amount"
                                        className="form-input"
                                        value={customAmount}
                                        onChange={(e) => {
                                            setCustomAmount(e.target.value)
                                            setSelectedAmount('')
                                        }}
                                    />
                                </div>
                            </div>

                            {/* Payment Method */}
                            <div>
                                <label className="form-label">Payment Method</label>
                                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                                    {paymentMethods.map((method) => (
                                        <button
                                            key={method.id}
                                            type="button"
                                            className={`p-4 rounded-lg border-2 flex items-center space-x-3
                                                      transition-colors
                                                      ${selectedPayment === method.id 
                                                        ? 'border-primary bg-primary/5' 
                                                        : 'border-gray-200 hover:border-primary/50'}`}
                                            onClick={() => setSelectedPayment(method.id)}
                                        >
                                            <Image
                                                src={method.icon}
                                                alt={method.label}
                                                width={32}
                                                height={32}
                                                className="w-10 h-10 object-contain"
                                            />
                                            <span>{method.label}</span>
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Mobile Money Fields */}
                            {(selectedPayment === 'mtn' || selectedPayment === 'airtel') && (
                                <div className="space-y-4">
                                    <div>
                                        <label htmlFor="mobileNumber" className="form-label">Mobile Money Number</label>
                                        <input
                                            type="tel"
                                            id="mobileNumber"
                                            className="form-input"
                                            placeholder="Enter your mobile number"
                                            value={formData.mobileNumber}
                                            onChange={(e) => setFormData({ ...formData, mobileNumber: e.target.value })}
                                            required
                                        />
                                    </div>
                                </div>
                            )}

                            {/* Card Payment Fields */}
                            {selectedPayment === 'card' && (
                                <div className="space-y-4">
                                    <div>
                                        <label htmlFor="cardholderName" className="form-label">Cardholder Name</label>
                                        <input
                                            type="text"
                                            id="cardholderName"
                                            className="form-input"
                                            placeholder="Name on card"
                                            value={formData.cardholderName}
                                            onChange={(e) => setFormData({ ...formData, cardholderName: e.target.value })}
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="cardNumber" className="form-label">Card Number</label>
                                        <input
                                            type="text"
                                            id="cardNumber"
                                            className="form-input"
                                            placeholder="1234 5678 9012 3456"
                                            value={formData.cardNumber}
                                            onChange={(e) => setFormData({ ...formData, cardNumber: e.target.value })}
                                            required
                                        />
                                    </div>
                                    <div className="grid grid-cols-2 gap-4">
                                        <div>
                                            <label htmlFor="expiryDate" className="form-label">Expiry Date</label>
                                            <input
                                                type="text"
                                                id="expiryDate"
                                                className="form-input"
                                                placeholder="MM/YY"
                                                value={formData.expiryDate}
                                                onChange={(e) => setFormData({ ...formData, expiryDate: e.target.value })}
                                                required
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="cvv" className="form-label">CVV</label>
                                            <input
                                                type="text"
                                                id="cvv"
                                                className="form-input"
                                                placeholder="123"
                                                value={formData.cvv}
                                                onChange={(e) => setFormData({ ...formData, cvv: e.target.value })}
                                                required
                                            />
                                        </div>
                                    </div>
                                </div>
                            )}

                            {error && (
                                <div className="text-red-500 text-sm text-center">
                                    {error}
                                </div>
                            )}

                            {/* Submit Button */}
                            <button
                                type="submit"
                                className="w-full btn btn-primary"
                                disabled={isSubmitting || !selectedCause || (!selectedAmount && !customAmount) || !selectedPayment || 
                                    (selectedPayment === 'card' && (!formData.cardNumber || !formData.expiryDate || !formData.cvv || !formData.cardholderName)) ||
                                    ((selectedPayment === 'mtn' || selectedPayment === 'airtel') && !formData.mobileNumber)}
                            >
                                {isSubmitting ? 'Processing...' : 'Proceed to Payment'}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
} 