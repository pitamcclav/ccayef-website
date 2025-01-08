'use client'
import { useEffect } from 'react'

// Define types for Bootstrap
interface CarouselOptions {
    interval?: number;
    keyboard?: boolean;
    ride?: boolean | 'carousel';
    pause?: boolean | 'hover';
    wrap?: boolean;
    touch?: boolean;
}

interface Carousel {
    cycle(): void;
    pause(): void;
    prev(): void;
    next(): void;
    dispose(): void;
}

interface BootstrapStatic {
    Carousel: new (element: Element, options?: CarouselOptions) => Carousel;
}

// Extend Window interface
declare global {
    interface Window {
        bootstrap?: BootstrapStatic;
    }
}

export function useCarousel(carouselId: string) {
    useEffect(() => {
        if (typeof window === 'undefined') return;

        const heroCarousel = document.getElementById(carouselId);
        if (!heroCarousel) return;

        // Function to initialize carousel
        const initCarousel = () => {
            try {
                // Check if Bootstrap is loaded
                if (!window.bootstrap) {
                    console.warn('Bootstrap not loaded yet, retrying in 100ms');
                    setTimeout(initCarousel, 100);
                    return;
                }

                const carousel = new window.bootstrap.Carousel(heroCarousel, {
                    interval: 4000,
                    ride: 'carousel',
                    wrap: true
                });

                // Start auto-sliding
                carousel.cycle();

                const addZoomEffect = () => {
                    // Reset zoom on all images
                    const allImages = heroCarousel.querySelectorAll('.carousel-item img');
                    allImages.forEach((img) => {
                        (img as HTMLElement).style.transform = 'scale(1)';
                        (img as HTMLElement).style.transition = 'transform 3s ease-in-out';
                    });

                    // Apply zoom to the active image
                    const activeImage = heroCarousel.querySelector('.carousel-item.active img');
                    if (activeImage) {
                        (activeImage as HTMLElement).style.transform = 'scale(1.1)';
                    }
                };

                // Initial Zoom on Mount
                addZoomEffect();

                // Event Listener for Bootstrap Carousel slide transition
                heroCarousel.addEventListener('slid.bs.carousel', addZoomEffect);

                return () => {
                    carousel.dispose();
                    heroCarousel.removeEventListener('slid.bs.carousel', addZoomEffect);
                };
            } catch (error) {
                console.error('Error initializing carousel:', error);
            }
        };

        // Start initialization
        initCarousel();

    }, [carouselId]);
}