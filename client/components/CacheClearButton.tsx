import { CacheManager } from '@/lib/cache';

/**
 * Force cache clear component for debugging
 */
export default function CacheClearButton() {
  const handleClearCache = async () => {
    if (confirm('This will clear all cached data and reload the page. Continue?')) {
      await CacheManager.clearAllCaches();
    }
  };

  // Only show in development or when needed
  if (import.meta.env.PROD) return null;

  return (
    <button
      onClick={handleClearCache}
      className="fixed bottom-4 right-4 bg-red-500 text-white px-4 py-2 rounded shadow-lg hover:bg-red-600 z-50"
      title="Clear cache and reload"
    >
      🗑️ Clear Cache
    </button>
  );
}