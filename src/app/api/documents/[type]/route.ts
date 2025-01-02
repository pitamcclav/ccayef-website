import { NextRequest, NextResponse } from 'next/server'
import fs from 'fs/promises'
import path from 'path'

// Define the correct params interface
interface RouteParams {
    params: Promise<{
        type: string
    }>
}

export async function GET(
    request: NextRequest,
    { params }: RouteParams
) {
    try {
        // Await the params before using them
        const { type } = await params

        // Validate the type parameter
        if (!type) {
            return NextResponse.json({ error: 'Document type is required' }, { status: 400 })
        }

        const docPath = path.join(process.cwd(), 'public', 'docs', type)

        // Get files and their stats
        const files = await fs.readdir(docPath)
        const filePromises = files.map(async (file) => {
            const filePath = path.join(docPath, file)
            const stats = await fs.stat(filePath)

            return {
                name: file,
                url: `/docs/${type}/${file}`,
                type: path.extname(file).toLowerCase(),
                size: stats.size,
                lastModified: stats.mtime
            }
        })

        const fileList = await Promise.all(filePromises)
        return NextResponse.json(fileList)

    } catch (error) {
        console.error('Error reading documents directory:', error)

        // Get type safely after params is awaited
        const { type } = await params

        if (error instanceof Error) {
            // Check if the error is due to directory not found
            if ((error as NodeJS.ErrnoException).code === 'ENOENT') {
                return NextResponse.json(
                    { error: `Directory for type '${type}' not found` },
                    { status: 404 }
                )
            }
            return NextResponse.json({ error: error.message }, { status: 500 })
        }

        return NextResponse.json({ error: 'Unknown error occurred' }, { status: 500 })
    }
}