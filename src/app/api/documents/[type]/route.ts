import { NextRequest, NextResponse } from 'next/server'
import fs from 'fs/promises'
import path from 'path'

type Props = {
    params: {
        type: string
    }
}

export async function GET(
    request: NextRequest,
    { params }: Props
) {
    try {
        const docPath = path.join(process.cwd(), 'public/docs', params.type)
        const files = await fs.readdir(docPath)

        const fileList = files.map(file => ({
            name: file,
            url: `/docs/${params.type}/${file}`,
            type: path.extname(file).toLowerCase()
        }))

        return NextResponse.json(fileList)
    } catch (error) {
        if (error instanceof Error) {
            console.error('Error reading documents directory:', error.message)
            return NextResponse.json({ error: error.message }, { status: 500 })
        } else {
            console.error('Error reading documents directory:', error)
            return NextResponse.json({ error: 'Unknown error occurred' }, { status: 500 })
        }
    }
}