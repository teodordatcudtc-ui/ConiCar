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
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    setStartX(e.touches[0].pageX - (carouselRef.current?.offsetLeft || 0));
    setScrollLeft(carouselRef.current?.scrollLeft || 0);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging || !carouselRef.current) return;
    e.preventDefault();
    const x = e.touches[0].pageX - (carouselRef.current.offsetLeft || 0);
    const walk = (x - startX) * 2;
    carouselRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  const scrollToIndex = (index: number) => {
    if (!carouselRef.current) return;
    const cardWidth = carouselRef.current.offsetWidth;
    carouselRef.current.scrollTo({
      left: index * cardWidth,
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
      const cardWidth = carousel.offsetWidth;
      const newIndex = Math.round(carousel.scrollLeft / cardWidth);
      setCurrentIndex(newIndex);
    };

    carousel.addEventListener('scroll', handleScroll);
    return () => carousel.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="md:hidden relative">
      <div
        ref={carouselRef}
        className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide gap-4 pb-4"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {services.map((service, index) => (
          <div
            key={service.id}
            className="flex-shrink-0 w-[85vw] snap-center"
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
      <div className="flex justify-center space-x-2 mt-4">
        {services.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollToIndex(index)}
            className={`w-2 h-2 rounded-full transition-all touch-target ${
              index === currentIndex ? 'bg-primary w-6' : 'bg-gray-300'
            }`}
            aria-label={`Mergi la serviciul ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ServiceCarousel;

