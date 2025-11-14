'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

const ContactBar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      // Ascunde la scroll down, arată la scroll up
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 bg-primary text-white shadow-2xl z-40 transition-transform duration-300 ${
        isVisible ? 'translate-y-0' : 'translate-y-full'
      }`}
    >
      <div className="container-custom px-4 py-3">
        <div className="flex flex-col sm:flex-row items-center justify-between space-y-2 sm:space-y-0">
          <div className="flex items-center space-x-4 text-sm">
            <a
              href="tel:0722178964"
              className="flex items-center space-x-2 hover:text-accent transition-colors touch-target"
              aria-label="Sună la 0722178964"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              <span className="font-semibold">0722178964</span>
            </a>
            <span className="hidden sm:inline opacity-75">|</span>
            <span className="hidden sm:inline opacity-90">
              L-V: 08:00-18:00 | S: 09:00-14:00
            </span>
          </div>
          <Link
            href="/contact#programare"
            className="bg-accent text-primary-dark hover:bg-accent/90 px-6 py-2 rounded-lg font-semibold transition-all duration-200 hover:scale-105 touch-target"
            aria-label="Programează o vizită"
          >
            Programează
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ContactBar;

