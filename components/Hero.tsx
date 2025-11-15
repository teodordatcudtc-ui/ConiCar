'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Hero = () => {
  const [pathDrawn, setPathDrawn] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const svgRef = useRef<SVGSVGElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setPathDrawn(true);
    }, 900);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        setMousePosition({
          x: ((e.clientX - rect.left) / rect.width) * 100,
          y: ((e.clientY - rect.top) / rect.height) * 100,
        });
      }
    };

    const hero = heroRef.current;
    if (hero) {
      hero.addEventListener('mousemove', handleMouseMove);
      return () => hero.removeEventListener('mousemove', handleMouseMove);
    }
  }, []);

  return (
    <section 
      ref={heroRef}
      className="relative pt-32 pb-12 md:pt-28 md:pb-16 overflow-hidden bg-gradient-to-br from-primary via-primary-dark to-[#0f2a5a]"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero/hero-background.jpg"
          alt="Atelier ConiCar Service Auto & Vulcanizare Dudu - zona de lucru profesională cu echipamente moderne"
          fill
          className="object-cover opacity-30"
          priority
          quality={85}
        />
        {/* Dark overlay pentru întunecare */}
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Animated Background Pattern */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(246, 214, 7, 0.3) 0%, transparent 50%)`,
            transition: 'background-position 0.3s ease-out',
          }}
        />
      </div>

      {/* Background Image cu mașină - SVG mai complex */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 1920 800"
            preserveAspectRatio="xMidYMid slice"
            className="w-full h-full"
          >
            <defs>
              <linearGradient id="carGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{ stopColor: '#f6d607', stopOpacity: 0.5 }} />
                <stop offset="50%" style={{ stopColor: '#f6d607', stopOpacity: 0.3 }} />
                <stop offset="100%" style={{ stopColor: '#f6d607', stopOpacity: 0.1 }} />
              </linearGradient>
              <filter id="glow">
                <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
                <feMerge>
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>
            {/* Silueta mașină stilizată - mai mare și mai vizibilă */}
            <g transform="translate(0, 50)">
              <path
                d="M200 400 Q300 300 450 320 L600 320 Q750 320 900 340 L1100 340 Q1250 340 1400 360 L1500 380 Q1600 400 1650 450 L1700 500 Q1750 550 1750 600 L1750 700 Q1750 750 1700 780 L1500 800 Q1300 820 1100 820 L700 820 Q500 820 400 800 L250 780 Q150 750 100 700 L50 650 Q0 600 0 550 L0 450 Q0 400 50 380 Z"
                fill="url(#carGradient)"
                filter="url(#glow)"
              />
              {/* Detalii mașină - roți */}
              <circle cx="500" cy="500" r="90" fill="none" stroke="#f6d607" strokeWidth="4" opacity="0.4" />
              <circle cx="500" cy="500" r="60" fill="none" stroke="#f6d607" strokeWidth="2" opacity="0.3" />
              <circle cx="1400" cy="500" r="90" fill="none" stroke="#f6d607" strokeWidth="4" opacity="0.4" />
              <circle cx="1400" cy="500" r="60" fill="none" stroke="#f6d607" strokeWidth="2" opacity="0.3" />
              {/* Geamuri */}
              <rect x="800" y="350" width="250" height="120" rx="15" fill="none" stroke="#f6d607" strokeWidth="3" opacity="0.3" />
              <line x1="925" y1="350" x2="925" y2="470" stroke="#f6d607" strokeWidth="2" opacity="0.2" />
              {/* Faruri */}
              <circle cx="200" cy="380" r="25" fill="#f6d607" opacity="0.4" filter="url(#glow)" />
              <circle cx="1720" cy="450" r="25" fill="#f6d607" opacity="0.4" filter="url(#glow)" />
            </g>
          </svg>
        </div>
      </div>

      {/* Overlay pentru contrast - gradient mai complex */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/15 to-black/25 z-0" />

      {/* Parallax background elements - mai multe și mai dinamice */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-10 left-10 w-64 h-64 bg-accent/8 rounded-full blur-3xl animate-float" />
        <div className="absolute top-32 right-10 w-80 h-80 bg-accent/8 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-20 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 right-1/4 w-72 h-72 bg-accent/6 rounded-full blur-3xl animate-float" style={{ animationDelay: '1.5s' }} />
      </div>

      {/* Geometric shapes decorative */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-32 h-32 border-2 border-accent/20 rotate-45 animate-float" style={{ animationDelay: '0.5s' }} />
        <div className="absolute bottom-32 left-32 w-24 h-24 border-2 border-accent/15 rotate-12 animate-float" style={{ animationDelay: '1.2s' }} />
        <div className="absolute top-1/3 right-1/3 w-16 h-16 border-2 border-accent/25 rotate-45" />
      </div>

      {/* SVG Car Outline Animation - mai mare și mai vizibil */}
      <div className="absolute top-16 left-1/2 transform -translate-x-1/2 z-10 opacity-25">
        <svg
          ref={svgRef}
          width="500"
          height="300"
          viewBox="0 0 600 400"
          className="w-full max-w-lg h-auto"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="strokeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" style={{ stopColor: '#f6d607', stopOpacity: 1 }} />
              <stop offset="100%" style={{ stopColor: '#f6d607', stopOpacity: 0.5 }} />
            </linearGradient>
          </defs>
          <path
            d="M100 250 Q150 200 200 200 L350 200 Q400 200 450 220 L480 240 Q500 260 500 280 L500 320 Q500 340 480 360 L450 370 Q400 380 350 380 L200 380 Q150 380 120 360 L80 340 Q60 320 60 300 L60 280 Q60 260 80 250 Z"
            fill="none"
            stroke="url(#strokeGradient)"
            strokeWidth="3"
            strokeDasharray="1000"
            strokeDashoffset={pathDrawn ? 0 : 1000}
            className="transition-all duration-900 ease-[cubic-bezier(0.22,0.9,0.36,1)]"
            filter="url(#glow)"
          />
        </svg>
      </div>

      {/* Content - cu mai multe efecte */}
      <div className="relative z-20 container-custom px-4 sm:px-6 lg:px-8 text-center text-white">
        <div
          className={`transition-all duration-600 ${
            pathDrawn
              ? 'opacity-100 translate-y-0 scale-100'
              : 'opacity-0 translate-y-8 scale-95'
          }`}
          style={{ transitionDelay: pathDrawn ? '200ms' : '0ms' }}
        >
          {/* Badge deasupra titlului */}
          <div className="inline-block mb-4 px-3 py-1.5 bg-accent/20 backdrop-blur-sm border border-accent/30 rounded-full animate-fade-up">
            <span className="text-xs md:text-sm font-semibold text-accent">✓ Service Auto Profesional</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 animate-fade-up">
            <span className="block bg-gradient-to-r from-white via-white to-accent bg-clip-text text-transparent drop-shadow-2xl">
              ConiCar Service Auto
            </span>
            <span className="block text-accent mt-1 drop-shadow-lg">& Vulcanizare Dudu</span>
          </h1>
          
          <p className="text-sm md:text-base mb-6 max-w-xl mx-auto opacity-90 animate-fade-up" style={{ animationDelay: '300ms' }}>
            Calitate, rapiditate, prețuri corecte. Experiență de peste 5 ani în service auto și vulcanizare.
          </p>

          {/* Stats badges - mai compacte */}
          <div className="flex flex-wrap justify-center gap-3 mb-6 animate-fade-up" style={{ animationDelay: '400ms' }}>
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg px-3 py-1.5">
              <div className="text-xl font-bold text-accent">5+</div>
              <div className="text-xs opacity-90">Ani experiență</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg px-3 py-1.5">
              <div className="text-xl font-bold text-accent">1000+</div>
              <div className="text-xs opacity-90">Clienți mulțumiți</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg px-3 py-1.5">
              <div className="text-xl font-bold text-accent">24/7</div>
              <div className="text-xs opacity-90">Disponibilitate</div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center animate-fade-up" style={{ animationDelay: '500ms' }}>
            <Link
              href="/contact#programare"
              className="btn-primary text-sm md:text-base px-6 md:px-8 py-3 md:py-4 shadow-2xl hover:shadow-accent/50 transform hover:scale-105 transition-all duration-300 relative overflow-hidden group"
            >
              <span className="relative z-10">Programează o vizită</span>
              <span className="absolute inset-0 bg-gradient-to-r from-accent to-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Link>
            <Link
              href="/servicii"
              className="btn-secondary text-sm md:text-base px-6 md:px-8 py-3 md:py-4 bg-white/10 backdrop-blur-sm border-2 border-white/30 hover:bg-white/20 hover:border-white/50 transform hover:scale-105 transition-all duration-300"
            >
              Vezi serviciile
            </Link>
          </div>
        </div>
      </div>

    </section>
  );
};

export default Hero;

