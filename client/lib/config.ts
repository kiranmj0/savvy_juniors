/**
 * Application configuration
 */

// Get the base URL from Vite's environment
export const BASE_URL = import.meta.env.BASE_URL || '/';

// Normalize base URL to ensure it ends with a slash
export const NORMALIZED_BASE_URL = BASE_URL.endsWith('/') ? BASE_URL : `${BASE_URL}/`;

// Check if we're in development mode
export const IS_DEV = import.meta.env.DEV;

// Check if we're in production mode
export const IS_PROD = import.meta.env.PROD;