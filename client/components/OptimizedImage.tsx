import { useState, useEffect, useRef } from 'react';
import { getAssetPath } from '@/lib/assets';

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  loading?: 'lazy' | 'eager';
  priority?: boolean;
  bustCache?: boolean;
  placeholder?: string;
  sizes?: string;
}

export default function OptimizedImage({ 
  src, 
  alt, 
  className = '', 
  loading = 'lazy',
  priority = false,
  bustCache = false,
  placeholder = 'No-Image-Placeholder.svg',
  sizes
}: OptimizedImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  const finalSrc = bustCache ? `${getAssetPath(src)}?v=${Date.now()}` : getAssetPath(src);

  useEffect(() => {
    // Preload critical images
    if (priority) {
      const preloadLink = document.createElement('link');
      preloadLink.rel = 'preload';
      preloadLink.as = 'image';
      preloadLink.href = finalSrc;
      if (sizes) preloadLink.setAttribute('imagesizes', sizes);
      document.head.appendChild(preloadLink);
      
      // Cleanup
      return () => {
        if (document.head.contains(preloadLink)) {
          document.head.removeChild(preloadLink);
        }
      };
    }
  }, [finalSrc, priority, sizes]);

  const handleLoad = () => {
    setIsLoaded(true);
    setHasError(false);
  };

  const handleError = () => {
    setHasError(true);
    setIsLoaded(true);
  };

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {!isLoaded && (
        <div className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-pulse rounded">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-shimmer" />
        </div>
      )}
      <img
        ref={imgRef}
        src={hasError ? getAssetPath(placeholder) : finalSrc}
        alt={alt}
        className={`w-full h-full object-cover transition-all duration-500 ${isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-105'}`}
        loading={priority ? 'eager' : loading}
        decoding="async"
        sizes={sizes}
        fetchPriority={priority ? 'high' : 'auto'}
        onLoad={handleLoad}
        onError={handleError}
      />
      {hasError && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100 text-gray-400 text-sm">
          Image unavailable
        </div>
      )}
    </div>
  );
}

// Add shimmer animation styles
const shimmerStyles = `
@keyframes shimmer {
  0% { transform: translateX(-100%); }
  100% { transform: translateX(100%); }
}
.animate-shimmer {
  animation: shimmer 1.5s infinite;
}
`;

// Inject styles if not already present
if (typeof document !== 'undefined' && !document.getElementById('shimmer-styles')) {
  const style = document.createElement('style');
  style.id = 'shimmer-styles';
  style.textContent = shimmerStyles;
  document.head.appendChild(style);
}