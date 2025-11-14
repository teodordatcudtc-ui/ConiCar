'use client';

const TopBar = () => {
  return (
    <div className="bg-primary-dark text-white text-xs md:text-sm py-1 md:py-2">
      <div className="container-custom px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-1 md:gap-0">
          <div className="flex justify-center md:justify-start flex-col md:flex-row md:items-center md:space-x-6 gap-1 md:gap-0">
            <a
              href="tel:0722178964"
              className="flex items-center justify-center space-x-2 hover:text-accent transition-colors touch-target"
              aria-label="Sună la 0722178964"
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="flex-shrink-0"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              <span>0722178964</span>
            </a>
            <div className="hidden md:flex items-center space-x-2">
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="flex-shrink-0"
              >
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <span className="text-xs md:text-sm">Strada Ion Luca Caragiale 8, Dudu 077041</span>
            </div>
          </div>
          <div className="hidden md:block text-xs md:text-sm font-medium opacity-95">
            L-V: 08:00-18:00 | S: 09:00-14:00
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;

