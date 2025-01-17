'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'

interface CarouselSlide {
    image: string
    title: string
    description: string
}

interface CarouselProps {
    slides: CarouselSlide[]
    interval?: number
    autoPlay?: boolean
}

export default function Carousel({ slides, interval = 5000, autoPlay = true }: CarouselProps) {
    const [currentSlide, setCurrentSlide] = useState(0)
    const [direction, setDirection] = useState<'right' | 'left'>('right')
    const [isTransitioning, setIsTransitioning] = useState(false)

    useEffect(() => {
        if (!autoPlay) return

        const timer = setInterval(() => {
            nextSlide()
        }, interval)

        return () => clearInterval(timer)
    }, [currentSlide, autoPlay, interval])

    const nextSlide = () => {
        if (isTransitioning) return
        setDirection('right')
        setIsTransitioning(true)
        setCurrentSlide((prev) => (prev + 1) % slides.length)
        setTimeout(() => setIsTransitioning(false), 1000)
    }

    const prevSlide = () => {
        if (isTransitioning) return
        setDirection('left')
        setIsTransitioning(true)
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
        setTimeout(() => setIsTransitioning(false), 1000)
    }

    const goToSlide = (index: number) => {
        if (isTransitioning || index === currentSlide) return
        setDirection(index > currentSlide ? 'right' : 'left')
        setIsTransitioning(true)
        setCurrentSlide(index)
        setTimeout(() => setIsTransitioning(false), 1000)
    }

    return (
        <div className="relative h-full overflow-hidden">
            {/* Slides */}
            <div className="relative h-full">
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        className={`absolute inset-0 transform transition-all duration-1000 ease-in-out ${
                            index === currentSlide 
                                ? 'opacity-100 z-0 translate-x-0 scale-100' 
                                : `opacity-0 z-0 ${
                                    direction === 'right' 
                                        ? 'translate-x-full scale-110'
                                        : '-translate-x-full scale-110'
                                }`
                        }`}
                    >
                        <div className="absolute inset-0 scale-[1.03] transition-transform duration-[10000ms] ease-linear"
                             style={{
                                 transform: index === currentSlide ? 'scale(1.1)' : 'scale(1.03)'
                             }}>
                            <Image
                                src={slide.image}
                                alt={slide.title}
                                fill
                                className="object-cover"
                                priority={index === 0}
                                sizes="100vw"
                            />
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
                    </div>
                ))}
            </div>

            {/* Navigation Buttons */}
            <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-black/20 text-white hover:bg-black/40 hover:text-white/90 transition-all duration-300 backdrop-blur-sm"
                aria-label="Previous slide"
            >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
            </button>
            <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-black/20 text-white hover:bg-black/40 hover:text-white/90 transition-all duration-300 backdrop-blur-sm"
                aria-label="Next slide"
            >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
            </button>

            {/* Indicators */}
            <div className="absolute bottom-8 left-0 right-0 z-30 flex justify-center space-x-3">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${
                            index === currentSlide 
                                ? 'bg-white scale-100' 
                                : 'bg-white/50 hover:bg-white/75 scale-75 hover:scale-90'
                        }`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    )
} 