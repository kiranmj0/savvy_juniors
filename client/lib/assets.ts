import { NORMALIZED_BASE_URL } from './config';

// Build version for cache busting
const BUILD_VERSION = import.meta.env.VITE_BUILD_VERSION || Date.now().toString();

// Image cache for preloaded images
const imageCache = new Map<string, boolean>();

/**
 * Get the correct asset path considering the base path
 */
export function getAssetPath(path: string, bustCache = false): string {
  // Remove leading slash if present
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  
  // Return the normalized path with base URL
  const assetPath = `${NORMALIZED_BASE_URL}${cleanPath}`;
  
  // Add cache busting parameter if requested
  return bustCache ? `${assetPath}?v=${BUILD_VERSION}` : assetPath;
}

/**
 * Preload critical images
 */
export function preloadImage(src: string, priority = false): Promise<void> {
  return new Promise((resolve, reject) => {
    const imagePath = getAssetPath(src);
    
    // Check if already cached
    if (imageCache.has(imagePath)) {
      resolve();
      return;
    }

    const img = new Image();
    img.onload = () => {
      imageCache.set(imagePath, true);
      resolve();
    };
    img.onerror = reject;
    
    // Set priority attributes
    if (priority) {
      img.fetchPriority = 'high';
      img.loading = 'eager';
    }
    
    img.src = imagePath;
  });
}

/**
 * Preload multiple images
 */
export function preloadImages(sources: string[]): Promise<void[]> {
  return Promise.all(sources.map(src => preloadImage(src)));
}