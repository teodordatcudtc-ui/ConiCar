'use client';

import { useState, useRef, useEffect } from 'react';
import ServiceCard from './ServiceCard';

interface Service {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  benefits: string[];
  delay?: number;
}

interface ServiceCarouselProps {
  services: Service[];
}

const ServiceCarousel = ({ services }: ServiceCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  const scrollToIndex = (index: number) => {
    if (!carouselRef.current) return;
    const firstCard = carouselRef.current.querySelector('[data-carousel-item]') as HTMLElement;
    if (!firstCard) return;
    
    const cardWidth = firstCard.offsetWidth;
    const gap = 16; // 1rem = 16px (gap-4)
    const scrollLeft = index * (cardWidth + gap);
    
    carouselRef.current.scrollTo({
      left: scrollLeft,
      behavior: 'smooth',
    });
    setCurrentIndex(index);
  };

  const nextSlide = () => {
    const next = (currentIndex + 1) % services.length;
    scrollToIndex(next);
  };

  const prevSlide = () => {
    const prev = (currentIndex - 1 + services.length) % services.length;
    scrollToIndex(prev);
  };

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const handleScroll = () => {
      const firstCard = carousel.querySelector('[data-carousel-item]') as HTMLElement;
      if (!firstCard) return;
      
      const cardWidth = firstCard.offsetWidth;
      const gap = 16; // 1rem = 16px (gap-4)
      const scrollLeft = carousel.scrollLeft;
      const newIndex = Math.round(scrollLeft / (cardWidth + gap));
      setCurrentIndex(newIndex);
    };

    // Use scrollend event if available for more accurate index tracking
    if ('onscrollend' in carousel) {
      carousel.addEventListener('scrollend', handleScroll, { passive: true });
    } else {
      // Fallback: use scroll with debounce
      let scrollTimeout: NodeJS.Timeout;
      const handleScrollDebounced = () => {
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(handleScroll, 100);
      };
      carousel.addEventListener('scroll', handleScrollDebounced, { passive: true });
      
      return () => {
        carousel.removeEventListener('scroll', handleScrollDebounced);
        clearTimeout(scrollTimeout);
      };
    }
    
    return () => {
      if ('onscrollend' in carousel) {
        carousel.removeEventListener('scrollend', handleScroll);
      }
    };
  }, []);

  return (
    <div className="md:hidden relative">
      <div
        ref={carouselRef}
        className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide gap-4 pb-4"
        style={{ 
          scrollbarWidth: 'none', 
          msOverflowStyle: 'none',
          scrollSnapType: 'x mandatory',
          WebkitOverflowScrolling: 'touch',
          overscrollBehaviorX: 'contain',
        }}
      >
        {services.map((service, index) => (
          <div
            key={service.id}
            data-carousel-item
            className="flex-shrink-0 w-[85vw] snap-center snap-always"
            style={{
              scrollSnapAlign: 'center',
              scrollSnapStop: 'always',
            }}
          >
            <ServiceCard {...service} delay={0} />
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white shadow-lg rounded-full p-2 touch-target z-10"
        aria-label="Serviciu anterior"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polyline points="15 18 9 12 15 6" />
        </svg>
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white shadow-lg rounded-full p-2 touch-target z-10"
        aria-label="Serviciu următor"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polyline points="9 18 15 12 9 6" />
        </svg>
      </button>

      {/* Dots Indicator */}
      <div className="flex justify-center space-x-1.5 mt-4">
        {services.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollToIndex(index)}
            className={`h-1.5 rounded-full transition-all touch-target ${
              index === currentIndex ? 'bg-primary w-4' : 'bg-gray-300 w-1.5'
            }`}
            aria-label={`Mergi la serviciul ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ServiceCarousel;

