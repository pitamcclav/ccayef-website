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
        <div className="d-flex justify-content-center p-4">
            <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    )

    if (error) return (
        <div className="alert alert-danger" role="alert">
            {error}
        </div>
    )

    if (documents.length === 0) return (
        <div className="alert alert-info" role="alert">
            No documents found in this category.
        </div>
    )

    return (
        <div className={`${type} row g-4`}>
            {documents.map((doc, index) => (
                <div key={`${doc.name}-${index}`} className="col-lg-4 col-md-6">
                    <div className="card h-100">
                        <div className="card-body text-center">
                            <img
                                src={getFileIcon(doc.type)}
                                alt={`${doc.type} file`}
                                className="mb-3"
                                style={{
                                    width: '64px',
                                    height: '64px',
                                    objectFit: 'contain'
                                }}
                            />
                            <h6 className="card-title text-truncate" title={doc.name}>
                                {doc.name}
                            </h6>
                            <p className="card-text small text-muted mb-3">
                                {formatFileSize(doc.size)} • Updated {formatDate(doc.lastModified)}
                            </p>
                            <a
                                href={doc.url}
                                className="btn btn-primary"
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