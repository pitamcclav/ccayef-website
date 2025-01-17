'use server'

import { NextResponse } from 'next/server'
import fs from 'fs/promises'
import path from 'path'

interface ImageData {
    src: string
    alt: string
    width: number
    height: number
}

export async function GET(request: Request) {
    try {
        const publicDir = path.join(process.cwd(), 'public')
        const photosDir = path.join(publicDir, 'images/gallery')
        const photoFiles = await fs.readdir(photosDir)
        
        const images: ImageData[] = photoFiles
            .filter(file => /\.(jpg|jpeg|png|webp)$/i.test(file))
            .map(file => ({
                src: `/images/gallery/${file}`,
                alt: file.replace(/\.(jpg|jpeg|png|webp)$/i, '')
                    .split('-')
                    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                    .join(' '),
                width: 1200,
                height: 800
            }))

        return NextResponse.json(images)
    } catch (error) {
        console.error('Error reading image directory:', error)
        return NextResponse.json(
            { error: 'Failed to load images' },
            { status: 500 }
        )
    }
}
