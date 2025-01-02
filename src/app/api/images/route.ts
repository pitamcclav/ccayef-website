'use server'
import { NextResponse } from 'next/server'
import fs from 'fs/promises'
import path from 'path'

export async function GET() {
    try {
        const galleryDir = path.join(process.cwd(), 'public/images/gallery')
        const files = await fs.readdir(galleryDir)
        return NextResponse.json(files)
    } catch (error) {
        console.error('Error reading gallery directory:', error)
        return NextResponse.json({ error: 'Failed to load images' }, { status: 500 })
    }
}
