/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#204a97',
          dark: '#163a7a',
        },
        accent: {
          DEFAULT: '#f6d607',
        },
        secondary: {
          DEFAULT: '#b5aeb6',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-up': 'fadeUp 0.6s cubic-bezier(0.22, 0.9, 0.36, 1)',
        'fade-in': 'fadeIn 0.4s ease-out',
        'slide-in': 'slideIn 0.5s cubic-bezier(0.22, 0.9, 0.36, 1)',
        'draw-path': 'drawPath 0.9s cubic-bezier(0.22, 0.9, 0.36, 1)',
      },
      keyframes: {
        fadeUp: {
          '0%': {
            opacity: '0',
            transform: 'translateY(24px) scale(0.98)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0) scale(1)',
          },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideIn: {
          '0%': {
            opacity: '0',
            transform: 'translateX(-20px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0)',
          },
        },
        drawPath: {
          '0%': {
            strokeDashoffset: '1000',
          },
          '100%': {
            strokeDashoffset: '0',
          },
        },
      },
    },
  },
  plugins: [],
}

