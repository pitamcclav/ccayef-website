import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function POST(request: Request) {
    try {
        const body = await request.json()
        const { name, email, cause, amount, paymentMethod, paymentDetails } = body

        // Create or find donor
        const donor = await prisma.donor.upsert({
            where: { email },
            update: { name },
            create: { name, email }
        })

        // Create donation
        const donation = await prisma.donation.create({
            data: {
                amount: parseFloat(amount),
                cause,
                paymentMethod,
                paymentDetails: JSON.stringify(paymentDetails),
                donorId: donor.id
            },
            include: {
                donor: true
            }
        })

        return NextResponse.json({ success: true, donation })
    } catch (error) {
        console.error('Donation error:', error)
        return NextResponse.json(
            { error: 'Failed to process donation' },
            { status: 500 }
        )
    }
} 