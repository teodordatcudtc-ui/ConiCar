'use client';

import { useState, useRef, useEffect } from 'react';

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  beforeAlt: string;
  afterAlt: string;
}

const BeforeAfterSlider = ({
  beforeImage,
  afterImage,
  beforeAlt,
  afterAlt,
}: BeforeAfterSliderProps) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  };

  const handleMouseDown = () => setIsDragging(true);
  const handleMouseUp = () => setIsDragging(false);
  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) handleMove(e.clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (isDragging && e.touches[0]) handleMove(e.touches[0].clientX);
  };

  useEffect(() => {
    const handleGlobalMouseUp = () => setIsDragging(false);
    if (isDragging) {
      document.addEventListener('mouseup', handleGlobalMouseUp);
      return () => document.removeEventListener('mouseup', handleGlobalMouseUp);
    }
  }, [isDragging]);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl cursor-col-resize select-none"
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onTouchMove={handleTouchMove}
      onTouchEnd={() => setIsDragging(false)}
    >
      {/* After Image */}
      <div className="absolute inset-0">
        <img
          src={afterImage}
          alt={afterAlt}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>

      {/* Before Image with clip */}
      <div
        className="absolute inset-0"
        style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
      >
        <img
          src={beforeImage}
          alt={beforeAlt}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>

      {/* Slider Handle */}
      <div
        className="absolute top-0 bottom-0 w-1 bg-accent shadow-lg z-10"
        style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
      >
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-accent rounded-full shadow-xl flex items-center justify-center touch-target cursor-grab active:cursor-grabbing"
          onMouseDown={handleMouseDown}
          onTouchStart={handleMouseDown}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="text-primary-dark"
          >
            <path d="M8 3v18M16 3v18" />
          </svg>
        </div>
      </div>

      {/* Labels */}
      <div className="absolute top-4 left-4 bg-black/70 text-white px-4 py-2 rounded-lg backdrop-blur-sm">
        Înainte
      </div>
      <div className="absolute top-4 right-4 bg-black/70 text-white px-4 py-2 rounded-lg backdrop-blur-sm">
        După
      </div>

      {/* Quick buttons for accessibility */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        <button
          onClick={() => setSliderPosition(50)}
          className="bg-white/90 text-primary px-4 py-2 rounded-lg text-sm font-semibold hover:bg-white transition-colors touch-target"
          aria-label="Afișează 50% înainte și 50% după"
        >
          50%
        </button>
        <button
          onClick={() => setSliderPosition(25)}
          className="bg-white/90 text-primary px-4 py-2 rounded-lg text-sm font-semibold hover:bg-white transition-colors touch-target"
          aria-label="Afișează 25% înainte"
        >
          25%
        </button>
        <button
          onClick={() => setSliderPosition(75)}
          className="bg-white/90 text-primary px-4 py-2 rounded-lg text-sm font-semibold hover:bg-white transition-colors touch-target"
          aria-label="Afișează 75% după"
        >
          75%
        </button>
      </div>
    </div>
  );
};

export default BeforeAfterSlider;

