import { BASE_URL, IS_DEV } from './config';

/**
 * Debug utility to log asset paths in development
 */
export function debugAssetPath(originalPath: string, resolvedPath: string): void {
  if (IS_DEV) {
    console.log(`Asset Path Debug:`, {
      original: originalPath,
      resolved: resolvedPath,
      baseUrl: BASE_URL,
      location: window.location.href
    });
  }
}

/**
 * Check if an image loads successfully
 */
export function checkImageLoad(src: string): Promise<boolean> {
  return new Promise((resolve) => {
    const img = new Image();
    img.onload = () => resolve(true);
    img.onerror = () => resolve(false);
    img.src = src;
  });
}