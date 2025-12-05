import { NORMALIZED_BASE_URL } from './config';

// Build version for cache busting
const BUILD_VERSION = import.meta.env.VITE_BUILD_VERSION || Date.now().toString();

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