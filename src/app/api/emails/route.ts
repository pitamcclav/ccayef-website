import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import Mail from 'nodemailer/lib/mailer';

export async function POST(req: NextRequest) {
    const { name, email, message } = await req.json();

    try {
        // Configure the SMTP transporter
        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: parseInt(process.env.SMTP_PORT || '0', 10),
            auth: {
                user: process.env.SMTP_USER, // Your SMTP user
                pass: process.env.SMTP_PASS, // Your SMTP password
            },
        });

        // Email options
        const mailOptions: Mail.Options = {
            from: email,
            to: 'ccayefug@gmail.com', // Replace with your destination email
            subject: `Message from ${name}`,
            text: message,
        };

        // Send email
        await transporter.sendMail(mailOptions);
        return NextResponse.json({ message: 'Email sent' });
    }catch (error: unknown) {
        if (error instanceof Error) {
            console.error(error);
            return NextResponse.json({ error: error.message || 'Internal Server Error' }, { status: 500 });
        } else {
            console.error('Unknown error', error);
            return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
        }
    }
}
