'use client';

import { useState } from 'react';

interface GalleryImage {
  src?: string;
  alt?: string;
  thumbnail?: string;
  available?: boolean;
}

interface GalleryProps {
  images: GalleryImage[];
}

const Gallery = ({ images }: GalleryProps) => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const openLightbox = (index: number) => {
    setSelectedImage(index);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'unset';
  };

  const navigateImage = (direction: 'prev' | 'next') => {
    if (selectedImage === null) return;
    if (direction === 'prev') {
      setSelectedImage(selectedImage > 0 ? selectedImage - 1 : images.length - 1);
    } else {
      setSelectedImage(selectedImage < images.length - 1 ? selectedImage + 1 : 0);
    }
  };

  return (
    <>
      {/* Mobile carousel */}
      <div className="md:hidden">
        <div className="flex overflow-x-auto space-x-4 snap-x snap-mandatory pb-2">
          {images.map((image, index) => {
            const isAvailable = image.available !== false && Boolean(image.src);

            return (
              <div
                key={`mobile-${index}`}
                className={`relative flex-none w-3/4 aspect-square overflow-hidden rounded-lg snap-center ${
                  isAvailable ? 'cursor-pointer group' : 'border border-dashed border-gray-300 bg-gray-50 flex items-center justify-center text-gray-400'
                }`}
                onClick={isAvailable ? () => openLightbox(index) : undefined}
                role={isAvailable ? 'button' : undefined}
                tabIndex={isAvailable ? 0 : -1}
                onKeyDown={
                  isAvailable
                    ? (e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          e.preventDefault();
                          openLightbox(index);
                        }
                      }
                    : undefined
                }
                aria-label={isAvailable && image.alt ? `Deschide imaginea ${image.alt}` : undefined}
              >
                {isAvailable ? (
                  <>
                    <img
                      src={image.thumbnail || image.src}
                      alt={image.alt || 'Imagine galerie ConiCar'}
                      className="w-full h-full object-cover transition-transform durataon-300 group-hover:scale-105"
                      loading="lazy"
                      decoding="async"
                      width={400}
                      height={400}
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                      <svg
                        width="32"
                        height="32"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="white"
                        strokeWidth="2"
                        className="opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        <circle cx="11" cy="11" r="8" />
                        <path d="M21 21l-4.35-4.35" />
                      </svg>
                    </div>
                  </>
                ) : (
                  <span className="text-sm font-semibold uppercase tracking-wide">În curând</span>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Desktop grid */}
      <div className="hidden md:grid grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((image, index) => (
          <div
            key={`desktop-${index}`}
            className="relative aspect-square overflow-hidden rounded-lg cursor-pointer group"
            onClick={() => openLightbox(index)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                openLightbox(index);
              }
            }}
            aria-label={`Deschide imaginea ${image.alt}`}
          >
            <img
              src={image.thumbnail || image.src}
              alt={image.alt}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              loading="lazy"
              decoding="async"
              width={400}
              height={400}
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
              <svg
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2"
                className="opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <circle cx="11" cy="11" r="8" />
                <path d="M21 21l-4.35-4.35" />
              </svg>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {selectedImage !== null && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
          aria-label="Lightbox galerie"
        >
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white hover:text-accent transition-colors touch-target z-10"
            aria-label="Închide lightbox"
          >
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              navigateImage('prev');
            }}
            className="absolute left-4 text-white hover:text-accent transition-colors touch-target z-10"
            aria-label="Imaginea anterioară"
          >
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              navigateImage('next');
            }}
            className="absolute right-4 text-white hover:text-accent transition-colors touch-target z-10"
            aria-label="Imaginea următoare"
          >
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>

          <div onClick={(e) => e.stopPropagation()} className="max-w-6xl max-h-full">
            <img
              src={images[selectedImage].src}
              alt={images[selectedImage].alt}
              className="max-w-full max-h-[90vh] object-contain"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Gallery;

