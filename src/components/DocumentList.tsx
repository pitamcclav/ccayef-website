'use client'
import { useEffect, useState } from 'react'

interface Document {
    name: string
    type: string
    url: string
    size: number
    lastModified: string
}

interface DocumentListProps {
    type: 'publications' | 'reports'
}

export function DocumentList({ type }: DocumentListProps) {
    const [documents, setDocuments] = useState<Document[]>([])
    const [error, setError] = useState<string | null>(null)
    const [loading, setLoading] = useState<boolean>(true)

    const getFileIcon = (extension: string) => {
        switch (extension.toLowerCase()) {
            case '.pdf': return '/images/icons/pdf.png'
            case '.doc':
            case '.docx': return '/images/icons/word.png'
            case '.xls':
            case '.xlsx': return '/images/icons/excel.png'
            default: return '/images/icons/file-icon.png'
        }
    }

    const formatFileSize = (bytes: number) => {
        if (bytes < 1024) return `${bytes} B`
        if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`
        return `${(bytes / (1024 * 1024)).toFixed(1)} MB`
    }

    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric'
        })
    }

    useEffect(() => {
        const fetchDocuments = async () => {
            try {
                setLoading(true)
                const response = await fetch(`/api/documents/${type}`)
                if (!response.ok) {
                    const errorData = await response.json()
                    throw new Error(errorData.error || 'Failed to fetch documents')
                }
                const data = await response.json()
                setDocuments(data)
            } catch (error) {
                console.error('Error loading documents:', error)
                setError(error instanceof Error ? error.message : 'Failed to load documents. Please try again later.')
            } finally {
                setLoading(false)
            }
        }
        fetchDocuments()
    }, [type])

    if (loading) return (
        <div className="flex justify-center p-4">
            <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-primary" role="status">
                <span className="sr-only">Loading...</span>
            </div>
        </div>
    )

    if (error) return (
        <div className="bg-danger/10 text-danger px-4 py-3 rounded-lg" role="alert">
            {error}
        </div>
    )

    if (documents.length === 0) return (
        <div className="bg-info/10 text-info px-4 py-3 rounded-lg" role="alert">
            No documents found in this category.
        </div>
    )

    return (
        <div className={`${type} grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4`}>
            {documents.map((doc, index) => (
                <div key={`${doc.name}-${index}`} className="h-full">
                    <div className="bg-white rounded-lg shadow-md h-full">
                        <div className="p-6 flex flex-col items-center">
                            <img
                                src={getFileIcon(doc.type)}
                                alt={`${doc.type} file`}
                                className="w-16 h-16 object-contain mb-3"
                            />
                            <h6 className="text-lg font-semibold truncate w-full text-center mb-2" title={doc.name}>
                                {doc.name}
                            </h6>
                            <p className="text-sm text-gray-500 mb-4">
                                {formatFileSize(doc.size)} • Updated {formatDate(doc.lastModified)}
                            </p>
                            <a
                                href={doc.url}
                                className="bg-primary hover:bg-primary/90 text-white font-semibold py-2 px-4 rounded transition-colors"
                                download
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Download
                            </a>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}