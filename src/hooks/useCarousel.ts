'use client'
import { useEffect } from 'react'

export function useCarousel(carouselId: string) {
    useEffect(() => {
        // Ensure code runs only on the client side
        if (typeof window === 'undefined') return;

        const heroCarousel = document.getElementById(carouselId);
        if (!heroCarousel) return;

        const addZoomEffect = () => {
            // Remove zoom from all images
            const allImages = heroCarousel.querySelectorAll('.carousel-item img');
            allImages.forEach((img) => {
                (img as HTMLElement).style.transform = 'scale(1)';
                (img as HTMLElement).style.transition = 'transform 3s ease-in-out';
            });

            // Add zoom to active image
            const activeImage = heroCarousel.querySelector('.carousel-item.active img');
            if (activeImage) {
                setTimeout(() => {
                    (activeImage as HTMLElement).style.transform = 'scale(1.1)';
                }, 50);
            }
        };

        // Initialize first active image
        const initializeZoom = () => {
            const firstActiveImage = heroCarousel.querySelector('.carousel-item.active img');
            if (firstActiveImage) {
                setTimeout(() => {
                    (firstActiveImage as HTMLElement).style.transform = 'scale(1.1)';
                }, 50);
            }
        };

        initializeZoom(); // Initialize zoom on mount

        // Add event listener for carousel slide changes
        heroCarousel.addEventListener('slid.bs.carousel', addZoomEffect);

        return () => {
            heroCarousel.removeEventListener('slid.bs.carousel', addZoomEffect);
        };
    }, [carouselId]);
}
