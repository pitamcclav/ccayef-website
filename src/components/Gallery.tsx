'use client'
import { useState, useEffect } from 'react'
import Image from 'next/image'

interface GalleryProps {
    apiUrl: string
}

interface GalleryItem {
    src: string
    alt: string
    width: number
    height: number
    type: 'photo' | 'video'
    videoUrl?: string
}

export default function Gallery({ apiUrl }: GalleryProps) {
    const [items, setItems] = useState<GalleryItem[]>([])
    const [selectedItem, setSelectedItem] = useState<number | null>(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        const fetchItems = async () => {
            try {
                const response = await fetch(apiUrl)
                if (!response.ok) {
                    throw new Error('Failed to fetch gallery items')
                }
                const data = await response.json()
                setItems(data)
            } catch (err) {
                setError(err instanceof Error ? err.message : 'Failed to load gallery items')
            } finally {
                setLoading(false)
            }
        }

        fetchItems()
    }, [apiUrl])

    const openModal = (index: number) => {
        setSelectedItem(index)
        document.body.style.overflow = 'hidden'
    }

    const closeModal = () => {
        setSelectedItem(null)
        document.body.style.overflow = 'unset'
    }

    const navigateItem = (direction: 'prev' | 'next') => {
        setSelectedItem((current) => {
            if (current === null) return null
            
            if (direction === 'prev') {
                return current === 0 ? items.length - 1 : current - 1
            } else {
                return current === items.length - 1 ? 0 : current + 1
            }
        })
    }

    if (loading) {
        return (
            <div className="flex justify-center items-center min-h-[200px]">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
            </div>
        )
    }

    if (error) {
        return (
            <div className="text-center text-red-600 py-8">
                <p>{error}</p>
            </div>
        )
    }

    if (items.length === 0) {
        return (
            <div className="text-center text-gray-600 py-8">
                <p>No items available</p>
            </div>
        )
    }

    return (
        <>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {items.map((item, index) => (
                    <div 
                        key={item.src} 
                        className="relative aspect-square cursor-pointer overflow-hidden rounded-lg group"
                        onClick={() => openModal(index)}
                    >
                        <Image
                            src={item.src}
                            alt={item.alt}
                            fill
                            className="object-cover transition-transform duration-300 group-hover:scale-105"
                            sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                        />
                        {item.type === 'video' && (
                            <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/40 transition-colors">
                                <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                        )}
                    </div>
                ))}
            </div>

            {/* Modal */}
            {selectedItem !== null && (
                <div 
                    className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4"
                    onClick={closeModal}
                >
                    <div 
                        className="relative max-w-7xl w-full h-full flex items-center justify-center"
                        onClick={e => e.stopPropagation()}
                    >
                        {/* Close button */}
                        <button
                            onClick={closeModal}
                            className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
                            aria-label="Close modal"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>

                        {/* Navigation buttons */}
                        <button
                            onClick={() => navigateItem('prev')}
                            className="absolute left-4 text-white hover:text-gray-300 z-10"
                            aria-label="Previous item"
                        >
                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>
                        <button
                            onClick={() => navigateItem('next')}
                            className="absolute right-4 text-white hover:text-gray-300 z-10"
                            aria-label="Next item"
                        >
                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>

                        {/* Content */}
                        <div className="relative w-full h-full">
                            {items[selectedItem].type === 'video' && items[selectedItem].videoUrl ? (
                                <iframe
                                    src={items[selectedItem].videoUrl.replace('watch?v=', 'embed/')}
                                    title={items[selectedItem].alt}
                                    className="absolute inset-0 w-full h-full"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                />
                            ) : (
                                <Image
                                    src={items[selectedItem].src}
                                    alt={items[selectedItem].alt}
                                    fill
                                    className="object-contain"
                                    sizes="100vw"
                                    priority
                                />
                            )}
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}
