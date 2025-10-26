import React, { useState, useEffect, useRef } from 'react';

/**
 * LazyImage component với lazy loading và intersection observer
 * Tối ưu performance bằng cách chỉ tải images khi chúng xuất hiện trong viewport
 */
const LazyImage = ({ 
  src, 
  alt = '', 
  caption = '', 
  className = '',
  placeholderColor = 'bg-gray-700',
  aspectRatio = 'aspect-video' // aspect-video, aspect-square, aspect-[4/3], etc.
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const imgRef = useRef(null);

  useEffect(() => {
    // Intersection Observer để detect khi image vào viewport
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            observer.disconnect(); // Dừng observe sau khi đã vào viewport
          }
        });
      },
      {
        rootMargin: '50px', // Bắt đầu load trước khi vào viewport 50px
        threshold: 0.01
      }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => {
      if (observer) {
        observer.disconnect();
      }
    };
  }, []);

  const handleImageLoad = () => {
    setIsLoaded(true);
  };

  return (
    <figure ref={imgRef} className="my-6">
      <div className={`relative overflow-hidden rounded-lg ${aspectRatio} ${className}`}>
        {/* Placeholder */}
        {!isLoaded && (
          <div 
            className={`absolute inset-0 ${placeholderColor} animate-pulse flex items-center justify-center`}
          >
            <svg 
              className="w-12 h-12 text-gray-500" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" 
              />
            </svg>
          </div>
        )}

        {/* Actual Image - chỉ render khi vào viewport */}
        {isInView && (
          <img
            src={src}
            alt={alt}
            onLoad={handleImageLoad}
            className={`
              w-full h-full object-cover transition-opacity duration-300
              ${isLoaded ? 'opacity-100' : 'opacity-0'}
            `}
            loading="lazy"
          />
        )}
      </div>

      {/* Caption */}
      {caption && (
        <figcaption className="text-sm text-gray-400 dark:text-gray-500 mt-2 text-center">
          {caption}
        </figcaption>
      )}
    </figure>
  );
};

export default LazyImage;
