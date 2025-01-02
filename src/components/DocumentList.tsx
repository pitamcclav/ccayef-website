'use client'
import { useEffect, useState } from 'react'

interface Document {
    name: string
    type: string
    url: string
}

interface DocumentListProps {
    type: 'publications' | 'reports'
}

export function DocumentList({ type }: DocumentListProps) {
    const [documents, setDocuments] = useState<Document[]>([])
    const [error, setError] = useState<string | null>(null)
    const [loading, setLoading] = useState<boolean>(true)

    const getFileIcon = (extension: string) => {
        switch (extension) {
            case '.pdf': return '/images/icons/pdf.png'
            case '.doc':
            case '.docx': return '/images/icons/word.png'
            case '.xls':
            case '.xlsx': return '/images/icons/excel.png'
            default: return '/images/icons/file-icon.png'
        }
    }

    useEffect(() => {
        const fetchDocuments = async () => {
            try {
                setLoading(true)
                const response = await fetch(`/api/documents/${type}`)
                if (!response.ok) throw new Error('Failed to fetch documents')
                const data = await response.json()
                setDocuments(data)
            } catch (error) {
                console.error('Error loading documents:', error)
                setError('Failed to load documents. Please try again later.')
            } finally {
                setLoading(false)
            }
        }
        fetchDocuments()
    }, [type])

    if (loading) return <p>Loading documents...</p>
    if (error) return <p>{error}</p>
    if (documents.length === 0) return <p>No documents found.</p>

    return (
        <div className={`${type} row`}>
            {documents.map((doc, index) => (
                <div key={index} className="col-lg-4 my-3">
                    <div className="card text-center">
                        <img
                            src={getFileIcon(doc.type)}
                            alt={doc.name}
                            className="card-img-top"
                            style={{
                                width: '40%',
                                boxShadow: 'none',
                                objectFit: 'cover',
                                padding: '20px'
                            }}
                        />
                        <div className="card-body">
                            <h6>{doc.name}</h6>
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
