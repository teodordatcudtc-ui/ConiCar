'use client';

import { useState, useEffect } from 'react';

interface Testimonial {
  name: string;
  rating: number;
  text: string;
  service?: string;
}

interface TestimonialsProps {
  testimonials: Testimonial[];
}

const Testimonials = ({ testimonials }: TestimonialsProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <svg
        key={i}
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill={i < rating ? '#f6d607' : '#b5aeb6'}
        className="inline-block"
      >
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ));
  };

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-primary">
          Ce spun clienții noștri
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Suntem mândri de feedback-ul pozitiv al clienților noștri
        </p>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-xl relative">
            <div className="absolute top-6 left-6 text-6xl text-primary/10 font-serif">
              "
            </div>
            <div className="relative z-10">
              <div className="flex justify-center mb-4">
                {renderStars(testimonials[currentIndex].rating)}
              </div>
              <p className="text-lg md:text-xl text-gray-700 mb-6 italic text-center">
                "{testimonials[currentIndex].text}"
              </p>
              <div className="text-center">
                <p className="font-semibold text-primary text-lg">
                  {testimonials[currentIndex].name}
                </p>
                {testimonials[currentIndex].service && (
                  <p className="text-sm text-gray-500 mt-1">
                    Serviciu: {testimonials[currentIndex].service}
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* Navigation dots */}
          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 touch-target ${
                  index === currentIndex
                    ? 'bg-primary w-8'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Afișează testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

