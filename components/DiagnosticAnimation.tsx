'use client';

import { useEffect, useRef } from 'react';

const DiagnosticAnimation = () => {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;

    const paths = svg.querySelectorAll('path');
    paths.forEach((path, index) => {
      const length = path.getTotalLength();
      path.style.strokeDasharray = `${length}`;
      path.style.strokeDashoffset = `${length}`;
      path.style.animation = `drawPath 1.2s cubic-bezier(0.22, 0.9, 0.36, 1) forwards ${index * 0.2}s`;
    });
  }, []);

  return (
    <div className="flex items-center justify-center p-8 bg-primary/5 rounded-2xl">
      <svg
        ref={svgRef}
        width="300"
        height="150"
        viewBox="0 0 300 150"
        className="w-full max-w-md"
        aria-label="Animație diagnostic auto"
      >
        {/* Grid background */}
        <defs>
          <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
            <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#b5aeb6" strokeWidth="0.5" opacity="0.3" />
          </pattern>
        </defs>
        <rect width="300" height="150" fill="url(#grid)" />

        {/* Waveform lines */}
        <path
          d="M 20 75 Q 60 45, 100 75 T 180 75 T 260 75"
          fill="none"
          stroke="#204a97"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <path
          d="M 20 100 Q 60 70, 100 100 T 180 100 T 260 100"
          fill="none"
          stroke="#f6d607"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <path
          d="M 20 50 Q 60 80, 100 50 T 180 50 T 260 50"
          fill="none"
          stroke="#204a97"
          strokeWidth="2"
          strokeLinecap="round"
        />

        {/* Signal points - removed pentru design mai clean */}
      </svg>
    </div>
  );
};

export default DiagnosticAnimation;

