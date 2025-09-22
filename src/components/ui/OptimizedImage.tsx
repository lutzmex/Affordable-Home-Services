import Image from "next/image";
import { useState, useEffect } from "react";

interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  fill?: boolean;
  className?: string;
  priority?: boolean;
  quality?: number;
  sizes?: string;
  placeholder?: "blur" | "empty";
  blurDataURL?: string;
  loading?: "lazy" | "eager";
  onClick?: () => void;
}

/**
 * OptimizedImage component for Leak Detection App
 *
 * Features:
 * - Automatic format selection (AVIF/WebP fallback)
 * - Responsive sizing
 * - Loading states
 * - Error handling
 * - SEO optimized
 */
export default function OptimizedImage({
  src,
  alt,
  width,
  height,
  fill = false,
  className = "",
  priority = false,
  quality = 85,
  sizes,
  placeholder = "empty",
  blurDataURL,
  loading = "lazy",
  onClick,
  ...props
}: OptimizedImageProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  // Generate responsive sizes based on image type
  const getResponsiveSizes = () => {
    if (sizes) return sizes;

    // Auto-detect image type and provide appropriate sizes
    const filename = src.toLowerCase();

    if (filename.includes("hero") || filename.includes("banner")) {
      return "(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 50vw";
    }

    if (filename.includes("logo")) {
      return "(max-width: 640px) 120px, (max-width: 1024px) 160px, 200px";
    }

    if (filename.includes("icon")) {
      return "(max-width: 640px) 32px, (max-width: 1024px) 48px, 64px";
    }

    if (filename.includes("thumb")) {
      return "(max-width: 640px) 150px, (max-width: 1024px) 200px, 250px";
    }

    // Default responsive sizes
    return fill
      ? "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
      : undefined;
  };

  // Enhanced quality based on image priority
  const getQuality = () => {
    if (priority) return Math.max(quality, 90); // Higher quality for priority images

    const filename = src.toLowerCase();
    if (filename.includes("logo") || filename.includes("hero")) {
      return Math.max(quality, 85);
    }

    return quality;
  };

  // Generate blur placeholder for better UX
  const getBlurDataURL = () => {
    if (blurDataURL) return blurDataURL;

    // Simple base64 blur placeholder
    return "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k=";
  };

  // Handle image load completion
  const handleLoad = () => {
    setIsLoading(false);
  };

  // Handle image load error
  const handleError = () => {
    setHasError(true);
    setIsLoading(false);
    console.warn(`Failed to load image: ${src}`);
  };

  // Error state
  if (hasError) {
    return (
      <div
        className={`bg-gray-100 border-2 border-dashed border-gray-300 flex items-center justify-center text-gray-500 ${className}`}
        style={{ width, height }}
      >
        <div className="text-center p-4">
          <div className="text-2xl mb-2">🖼️</div>
          <div className="text-sm">Image not available</div>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`relative ${isLoading ? "animate-pulse bg-gray-200 rounded" : ""}`}
    >
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        fill={fill}
        className={`transition-opacity duration-300 ${
          isLoading ? "opacity-0" : "opacity-100"
        } ${className}`}
        priority={priority}
        quality={getQuality()}
        sizes={getResponsiveSizes()}
        placeholder={placeholder}
        blurDataURL={getBlurDataURL()}
        loading={loading}
        onLoad={handleLoad}
        onError={handleError}
        onClick={onClick}
        {...props}
      />

      {/* Loading indicator */}
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-8 h-8 border-2 border-blue-200 border-t-blue-600 rounded-full animate-spin"></div>
        </div>
      )}
    </div>
  );
}

// Helper function to preload critical images
export function preloadImage(src: string) {
  if (typeof window !== "undefined") {
    const link = document.createElement("link");
    link.rel = "preload";
    link.as = "image";
    link.href = src;
    document.head.appendChild(link);
  }
}

// Hook for lazy loading images
export function useLazyImage(src: string, threshold = 0.1) {
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      { threshold },
    );

    const element = document.querySelector(`[data-src="${src}"]`);
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, [src, threshold]);

  return shouldLoad;
}
