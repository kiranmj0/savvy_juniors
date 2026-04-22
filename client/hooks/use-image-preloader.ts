import { useEffect } from 'react';
import { preloadImages } from '@/lib/assets';

// Critical images that should be preloaded immediately
const CRITICAL_IMAGES = [
  'HomePic.webp',
  'AboutUs.webp',
  'programsPic.webp',
  'contactPic.webp',
  'AdmissionPic.webp'
];

export function useImagePreloader() {
  useEffect(() => {
    // Preload critical images on app start
    preloadImages(CRITICAL_IMAGES).catch(console.error);
  }, []);
}

export function usePageImagePreloader(images: string[]) {
  useEffect(() => {
    if (images.length > 0) {
      preloadImages(images).catch(console.error);
    }
  }, [images]);
}