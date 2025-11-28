import { NORMALIZED_BASE_URL } from './config';

/**
 * Get the correct asset path considering the base path
 */
export function getAssetPath(path: string): string {
  // Remove leading slash if present
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  
  // Return the normalized path with base URL
  return `${NORMALIZED_BASE_URL}${cleanPath}`;
}