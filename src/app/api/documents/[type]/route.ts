import { NextRequest, NextResponse } from 'next/server'
import fs from 'fs/promises'
import path from 'path'

export async function GET(
    request: NextRequest,
    context: { params: { type: string } }
) {
    try {
        const docPath = path.join(process.cwd(), 'public/docs', context.params.type)
        const files = await fs.readdir(docPath)

        const fileList = files.map(file => ({
            name: file,
            url: `/docs/${context.params.type}/${file}`,
            type: path.extname(file).toLowerCase()
        }))

        return NextResponse.json(fileList)
    } catch (error: any) {
        console.error('Error reading documents directory:', error.message)
        return NextResponse.json(
            { error: 'Failed to load documents' },
            { status: 500 }
        )
    }
}