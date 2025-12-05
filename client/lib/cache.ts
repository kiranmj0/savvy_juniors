/**
 * Cache management utilities
 */

export class CacheManager {
  private static readonly CACHE_VERSION_KEY = 'app_cache_version';
  
  /**
   * Get current cache version
   */
  static getCurrentVersion(): string {
    return localStorage.getItem(this.CACHE_VERSION_KEY) || '1';
  }
  
  /**
   * Set new cache version
   */
  static setVersion(version: string): void {
    localStorage.setItem(this.CACHE_VERSION_KEY, version);
  }
  
  /**
   * Clear all caches and reload page
   */
  static async clearAllCaches(): Promise<void> {
    try {
      // Clear localStorage
      localStorage.clear();
      
      // Clear sessionStorage
      sessionStorage.clear();
      
      // Clear service worker caches if available
      if ('caches' in window) {
        const cacheNames = await caches.keys();
        await Promise.all(
          cacheNames.map(cacheName => caches.delete(cacheName))
        );
      }
      
      // Force reload without cache
      window.location.reload();
    } catch (error) {
      console.error('Error clearing caches:', error);
      // Fallback: just reload
      window.location.reload();
    }
  }
  
  /**
   * Check if cache should be cleared based on version
   */
  static shouldClearCache(newVersion: string): boolean {
    const currentVersion = this.getCurrentVersion();
    return currentVersion !== newVersion;
  }
  
  /**
   * Initialize cache management
   */
  static init(appVersion: string): void {
    if (this.shouldClearCache(appVersion)) {
      console.log('New app version detected, clearing caches...');
      this.setVersion(appVersion);
      // Don't auto-clear on init, let the app decide
    }
  }
}