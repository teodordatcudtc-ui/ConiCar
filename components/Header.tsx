'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import TopBar from './TopBar';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize(); // Check on mount
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleResize, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const navLinks = [
    { href: '/', label: 'Acasă' },
    { href: '/servicii', label: 'Servicii' },
    { href: '/preturi', label: 'Prețuri' },
    { href: '/despre', label: 'Despre Noi' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <>
      <TopBar />
      <header
        className={`fixed left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-lg top-0'
            : 'bg-white/90 backdrop-blur-sm'
        }`}
        style={{ top: isScrolled ? '0' : isMobile ? 'calc(60px + env(safe-area-inset-top))' : '32px' }}
      >
      <nav className="container-custom section-padding py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="transition-transform duration-300 group-hover:rotate-12"
            >
              <circle cx="20" cy="20" r="18" stroke="#204a97" strokeWidth="2.5" />
              <circle cx="20" cy="20" r="12" stroke="#f6d607" strokeWidth="2" />
              <path
                d="M20 8 L20 32 M8 20 L32 20"
                stroke="#204a97"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
            <span className="text-xl font-bold text-primary">ConiCar</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative font-medium transition-colors duration-200 touch-target flex items-center ${
                  pathname === link.href
                    ? 'text-primary font-semibold'
                    : 'text-gray-700 hover:text-primary'
                }`}
              >
                {link.label}
                {pathname === link.href && (
                  <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-accent rounded-full" />
                )}
              </Link>
            ))}
            <Link
              href="/contact#programare"
              className="btn-primary ml-4"
              aria-label="Programează o vizită"
            >
              Programează
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden touch-target flex flex-col justify-center items-center space-y-1.5 p-2"
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            <span
              className={`block w-6 h-0.5 bg-primary transition-all duration-300 ${
                isOpen ? 'rotate-45 translate-y-2' : ''
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-primary transition-all duration-300 ${
                isOpen ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-primary transition-all duration-300 ${
                isOpen ? '-rotate-45 -translate-y-2' : ''
              }`}
            />
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isOpen ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="flex flex-col space-y-4 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`font-medium py-2 px-4 rounded-lg transition-colors touch-target ${
                  pathname === link.href
                    ? 'text-primary bg-primary/10 font-semibold'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact#programare"
              onClick={() => setIsOpen(false)}
              className="btn-primary text-center mt-2"
            >
              Programează
            </Link>
          </div>
        </div>
      </nav>
    </header>
    </>
  );
};

export default Header;

