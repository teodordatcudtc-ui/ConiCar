'use client';

import Link from 'next/link';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary-dark text-white">
      <div className="container-custom section-padding">
        {/* Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-bold text-lg mb-4 text-accent">ConiCar Service Auto</h3>
            <p className="text-sm opacity-90 mb-4">
              Service auto profesional în Dudu.
            </p>
            <div className="space-y-2 text-sm mb-4">
              <p className="flex items-center space-x-2">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <a href="tel:0722178964" className="hover:text-accent transition-colors">
                  0722178964
                </a>
              </p>
              <p className="flex items-start space-x-2">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="mt-0.5"
                >
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <span className="opacity-90">
                  Strada Ion Luca Caragiale 8<br />
                  Dudu 077041
                </span>
              </p>
            </div>
            {/* Social Media */}
            <div className="flex items-center space-x-3">
              <a
                href="https://www.facebook.com/profile.php?id=100063574297198"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary hover:bg-primary/80 p-2 rounded-lg transition-all duration-200 hover:scale-110"
                aria-label="Vizitează pagina noastră de Facebook"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="text-accent"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Link-uri rapide</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-accent transition-colors">
                  Acasă
                </Link>
              </li>
              <li>
                <Link href="/servicii" className="hover:text-accent transition-colors">
                  Servicii
                </Link>
              </li>
              <li>
                <Link href="/preturi" className="hover:text-accent transition-colors">
                  Prețuri
                </Link>
              </li>
              <li>
                <Link href="/despre" className="hover:text-accent transition-colors">
                  Despre Noi
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Servicii</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/servicii#diagnoza" className="hover:text-accent transition-colors">
                  Diagnoză
                </Link>
              </li>
              <li>
                <Link href="/servicii#kit-ambreiaj" className="hover:text-accent transition-colors">
                  Kit ambreiaj
                </Link>
              </li>
              <li>
                <Link href="/servicii#sistem-franare" className="hover:text-accent transition-colors">
                  Sistem de frânare
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Program</h4>
            <ul className="space-y-2 text-sm opacity-90">
              <li>Luni - Vineri: 08:00 - 18:00</li>
              <li>Sâmbătă: 09:00 - 14:00</li>
              <li>Duminică: Închis</li>
            </ul>
          </div>
        </div>

        {/* Legal Links */}
        <div className="border-t border-primary pt-6 pb-4">
          <div className="flex flex-wrap justify-center gap-4 text-xs md:text-sm opacity-75">
            <Link href="/politica-confidentialitate" className="hover:text-accent transition-colors">
              Politica de Confidențialitate
            </Link>
            <span className="opacity-50">|</span>
            <Link href="/termeni-conditii" className="hover:text-accent transition-colors">
              Termeni și Condiții
            </Link>
            <span className="opacity-50">|</span>
            <Link href="/cookie-policy" className="hover:text-accent transition-colors">
              Politica de Cookies
            </Link>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-primary pt-4 text-center text-sm opacity-75">
          <p>
            &copy; {currentYear} ConiCar Service Auto. Toate drepturile rezervate.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

