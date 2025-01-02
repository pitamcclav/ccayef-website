'use client'
import { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

interface GalleryProps {
    apiUrl: string
}

export function Gallery({ apiUrl }: GalleryProps) {
    const [images, setImages] = useState<string[]>([])

    useEffect(() => {
        const fetchImages = async () => {
            try {
                const response = await fetch(apiUrl)
                if (!response.ok) throw new Error('Failed to fetch images')
                const data = await response.json()
                setImages(data)
            } catch (error) {
                console.error('Error loading images:', error)
            }
        }
        fetchImages()
    }, [apiUrl])

    return (
        <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={2}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            breakpoints={{
                1024: { slidesPerView: 2 },
                768: { slidesPerView: 2 },
                576: { slidesPerView: 1 },
                344: { slidesPerView: 1 },
            }}
            className="w-full"
        >
            {images.map((image, index) => (
                <SwiperSlide key={index}>
                    <div className="gallery-item">
                        <img
                            src={`images/gallery/${image}`}
                            className="img-fluid rounded"
                            alt={`Gallery Image ${index + 1}`}
                        />
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    )
}
