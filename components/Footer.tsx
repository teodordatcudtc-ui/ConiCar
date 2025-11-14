'use client';

import Link from 'next/link';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary-dark text-white">
      <div className="container-custom section-padding">
        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
          <a
            href="tel:0722178964"
            className="bg-primary hover:bg-primary/90 p-6 rounded-lg text-center transition-all duration-200 hover:scale-105 touch-target flex flex-col items-center justify-center space-y-2"
            aria-label="Sună la 0722178964"
          >
            <svg
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="text-accent"
            >
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            <span className="font-semibold text-lg">Sună</span>
            <span className="text-sm opacity-90">0722178964</span>
          </a>

          <a
            href="https://wa.me/40722178964?text=Bună!%20Aș%20dori%20să%20programez%20o%20vizită%20la%20ConiCar%20Service%20Auto."
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary hover:bg-primary/90 p-6 rounded-lg text-center transition-all duration-200 hover:scale-105 touch-target flex flex-col items-center justify-center space-y-2"
            aria-label="Trimite mesaj pe WhatsApp"
          >
            <svg
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="text-accent"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
            </svg>
            <span className="font-semibold text-lg">WhatsApp</span>
            <span className="text-sm opacity-90">Trimite mesaj</span>
          </a>

          <Link
            href="/contact#programare"
            className="bg-accent text-primary-dark hover:bg-accent/90 p-6 rounded-lg text-center transition-all duration-200 hover:scale-105 touch-target flex flex-col items-center justify-center space-y-2 font-semibold"
            aria-label="Programează o vizită"
          >
            <svg
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
              <line x1="16" y1="2" x2="16" y2="6" />
              <line x1="8" y1="2" x2="8" y2="6" />
              <line x1="3" y1="10" x2="21" y2="10" />
            </svg>
            <span className="text-lg">Programează</span>
          </Link>
        </div>

        {/* Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-bold text-lg mb-4 text-accent">ConiCar Service Auto</h3>
            <p className="text-sm opacity-90 mb-4">
              Service auto profesional în Dudu.
            </p>
            <div className="space-y-2 text-sm">
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
              <li>
                <Link href="/servicii#revizii" className="hover:text-accent transition-colors">
                  Revizii
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

        {/* Copyright */}
        <div className="border-t border-primary pt-8 text-center text-sm opacity-75">
          <p>
            &copy; {currentYear} ConiCar Service Auto. Toate drepturile rezervate.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

