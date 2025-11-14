import Head from 'next/head';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingContactButton from '@/components/FloatingContactButton';
import Hero from '@/components/Hero';
import ServiceCard from '@/components/ServiceCard';
import ServiceCarousel from '@/components/ServiceCarousel';
import Gallery from '@/components/Gallery';
import Testimonials from '@/components/Testimonials';
import WorkProcess from '@/components/WorkProcess';
import DiagnosticAnimation from '@/components/DiagnosticAnimation';

export default function Home() {
  const services = [
    {
      id: 'diagnoza',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
          <line x1="8" y1="21" x2="16" y2="21" />
          <line x1="12" y1="17" x2="12" y2="21" />
        </svg>
      ),
      title: 'Diagnoză',
      description: 'Scanare computer și diagnostic electronic cu echipamente moderne. Identificăm rapid orice problemă și oferim raport detaliat cu estimări de costuri.',
      benefits: [
        'Scanare OBD completă',
        'Diagnostic electronic',
        'Raport detaliat',
        'Estimare costuri și timp',
      ],
    },
    {
      id: 'kit-ambreiaj',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10" />
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v4M12 18v4M2 12h4M18 12h4" />
        </svg>
      ),
      title: 'Schimbare Kit Ambreiaj',
      description: 'Schimb complet kit ambreiaj cu piese de calitate. Lucrare profesională care asigură funcționare optimă a transmisiei.',
      benefits: [
        'Kit complet ambreiaj',
        'Piese originale sau echivalente',
        'Montaj profesional',
        'Garanție lucrare',
      ],
    },
    {
      id: 'kit-distributie',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10" />
          <path d="M12 6v6l4 2" />
        </svg>
      ),
      title: 'Înlocuire Kit-uri de Distribuție',
      description: 'Schimb preventiv sau reparator al kit-ului de distribuție. Folosim doar piese de calitate pentru siguranță maximă.',
      benefits: [
        'Kit distribuție complet',
        'Curea și role',
        'Montaj precis',
        'Verificare sincronizare',
      ],
    },
    {
      id: 'tren-rulare',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="6" cy="18" r="3" />
          <circle cx="18" cy="18" r="3" />
          <path d="M6 18h12M6 15v-6M18 15v-6" />
        </svg>
      ),
      title: 'Înlocuire Subansamble Tren de Rulare',
      description: 'Reparații complete tren de rulare: bielete, amortizoare, arcuri, rulmenți. Asigură confort și siguranță la condus.',
      benefits: [
        'Bielete și silent blocuri',
        'Amortizoare și arcuri',
        'Rulmenți roți',
        'Verificare geometrie',
      ],
    },
    {
      id: 'sistem-franare',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10" />
          <path d="M12 6v6l4 2" />
          <path d="M8 12h8" />
        </svg>
      ),
      title: 'Verificare și Reparații Sistem de Frânare',
      description: 'Service complet sistem de frânare: plăcuțe, discuri, lichid frână, etrieri. Siguranță este prioritatea noastră.',
      benefits: [
        'Schimb plăcuțe și discuri',
        'Verificare etrieri',
        'Schimb lichid frână',
        'Testare funcționalitate',
      ],
    },
    {
      id: 'reparatii-motoare',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="2" y="6" width="20" height="12" rx="2" />
          <path d="M6 6V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v2" />
          <path d="M12 10v4M8 12h8" />
        </svg>
      ),
      title: 'Înlocuiri și Reparații Motoare',
      description: 'Reparații complexe motor: schimb piese, reparații bloc motor, cap cilindri, distribuție. Experiență și profesionalism garantat.',
      benefits: [
        'Reparații bloc motor',
        'Schimb cap cilindri',
        'Reparații distribuție',
        'Garanție lucrare',
      ],
    },
    {
      id: 'schimb-ulei-filtre',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
        </svg>
      ),
      title: 'Schimb Ulei / Filtre',
      description: 'Service rapid pentru schimbul uleiului și filtrelor. Folosim doar produse de calitate superioară recomandate de producători.',
      benefits: [
        'Uleiuri premium',
        'Filtre originale sau echivalente',
        'Service rapid (30-45 min)',
        'Prețuri competitive',
      ],
    },
    {
      id: 'revizii',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polyline points="9 11 12 14 22 4" />
          <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
        </svg>
      ),
      title: 'Revizii',
      description: 'Revizii complete conform recomandărilor producătorului. Verificare sistematică a tuturor componentelor pentru menținerea vehiculului în stare optimă.',
      benefits: [
        'Verificare completă',
        'Schimb piese uzate',
        'Documentație completă',
        'Consiliere întreținere',
      ],
    },
    {
      id: 'polish-faruri',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="5" />
          <line x1="12" y1="1" x2="12" y2="3" />
          <line x1="12" y1="21" x2="12" y2="23" />
          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
          <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
          <line x1="1" y1="12" x2="3" y2="12" />
          <line x1="21" y1="12" x2="23" y2="12" />
        </svg>
      ),
      title: 'Polish Faruri',
      description: 'Restaurare și polish faruri pentru iluminare optimă. Eliminăm zgârieturile și opacitatea, refăcând transparența originală.',
      benefits: [
        'Eliminare zgârieturi',
        'Restaurare transparență',
        'Protecție UV',
        'Iluminare optimă',
      ],
    },
  ];

  const galleryImages = [
    {
      src: 'data:image/svg+xml,%3Csvg width="400" height="300" xmlns="http://www.w3.org/2000/svg"%3E%3Crect width="400" height="300" fill="%23204a97"/%3E%3Csvg x="50%25" y="50%25" transform="translate(-32,-32)" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"%3E%3Cpath d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/%3E%3C/svg%3E%3C/svg%3E',
      alt: 'Atelier ConiCar Service Auto - zona de lucru',
      thumbnail: 'data:image/svg+xml,%3Csvg width="400" height="300" xmlns="http://www.w3.org/2000/svg"%3E%3Crect width="400" height="300" fill="%23204a97"/%3E%3Csvg x="50%25" y="50%25" transform="translate(-32,-32)" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"%3E%3Cpath d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/%3E%3C/svg%3E%3C/svg%3E',
    },
    {
      src: 'data:image/svg+xml,%3Csvg width="400" height="300" xmlns="http://www.w3.org/2000/svg"%3E%3Crect width="400" height="300" fill="%23204a97"/%3E%3Csvg x="50%25" y="50%25" transform="translate(-32,-32)" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"%3E%3Crect x="2" y="3" width="20" height="14" rx="2" ry="2"/%3E%3Cline x1="8" y1="21" x2="16" y2="21"/%3E%3Cline x1="12" y1="17" x2="12" y2="21"/%3E%3C/svg%3E%3C/svg%3E',
      alt: 'Diagnostic auto cu echipamente moderne',
      thumbnail: 'data:image/svg+xml,%3Csvg width="400" height="300" xmlns="http://www.w3.org/2000/svg"%3E%3Crect width="400" height="300" fill="%23204a97"/%3E%3Csvg x="50%25" y="50%25" transform="translate(-32,-32)" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"%3E%3Crect x="2" y="3" width="20" height="14" rx="2" ry="2"/%3E%3Cline x1="8" y1="21" x2="16" y2="21"/%3E%3Cline x1="12" y1="17" x2="12" y2="21"/%3E%3C/svg%3E%3C/svg%3E',
    },
    {
      src: 'data:image/svg+xml,%3Csvg width="400" height="300" xmlns="http://www.w3.org/2000/svg"%3E%3Crect width="400" height="300" fill="%23204a97"/%3E%3Csvg x="50%25" y="50%25" transform="translate(-32,-32)" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"%3E%3Crect x="2" y="6" width="20" height="12" rx="2"/%3E%3Cpath d="M6 6V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v2"/%3E%3Cpath d="M12 10v4M8 12h8"/%3E%3C/svg%3E%3C/svg%3E',
      alt: 'Reparație motor la ConiCar',
      thumbnail: 'data:image/svg+xml,%3Csvg width="400" height="300" xmlns="http://www.w3.org/2000/svg"%3E%3Crect width="400" height="300" fill="%23204a97"/%3E%3Csvg x="50%25" y="50%25" transform="translate(-32,-32)" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"%3E%3Crect x="2" y="6" width="20" height="12" rx="2"/%3E%3Cpath d="M6 6V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v2"/%3E%3Cpath d="M12 10v4M8 12h8"/%3E%3C/svg%3E%3C/svg%3E',
    },
    {
      src: 'data:image/svg+xml,%3Csvg width="400" height="300" xmlns="http://www.w3.org/2000/svg"%3E%3Crect width="400" height="300" fill="%23204a97"/%3E%3Csvg x="50%25" y="50%25" transform="translate(-32,-32)" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"%3E%3Ccircle cx="12" cy="12" r="10"/%3E%3Ccircle cx="12" cy="12" r="6"/%3E%3C/svg%3E%3C/svg%3E',
      alt: 'Serviciu vulcanizare și montaj anvelope',
      thumbnail: 'data:image/svg+xml,%3Csvg width="400" height="300" xmlns="http://www.w3.org/2000/svg"%3E%3Crect width="400" height="300" fill="%23204a97"/%3E%3Csvg x="50%25" y="50%25" transform="translate(-32,-32)" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"%3E%3Ccircle cx="12" cy="12" r="10"/%3E%3Ccircle cx="12" cy="12" r="6"/%3E%3C/svg%3E%3C/svg%3E',
    },
  ];

  const testimonials = [
    {
      name: 'Ion Popescu',
      rating: 5,
      text: 'Serviciu excelent! Am venit pentru schimb ulei și filtre, totul a fost rapid și profesional. Recomand cu încredere!',
      service: 'Schimb ulei și filtre',
    },
    {
      name: 'Maria Ionescu',
      rating: 5,
      text: 'Am reparat frânele la ConiCar și sunt foarte mulțumită. Prețuri corecte, lucrare de calitate și personal prietenos.',
      service: 'Reparație frâne',
    },
    {
      name: 'Alexandru Georgescu',
      rating: 5,
      text: 'Cea mai bună vulcanizare din zonă! Am reparat un pneu și am montat anvelope noi. Totul perfect!',
      service: 'Vulcanizare',
    },
  ];

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'ConiCar Service Auto',
    image: 'https://conicar.ro/images/logo.jpg',
    '@id': 'https://conicar.ro',
    url: 'https://conicar.ro',
    telephone: '0722178964',
    priceRange: '$$',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Strada Ion Luca Caragiale 8',
      addressLocality: 'Dudu',
      postalCode: '077041',
      addressCountry: 'RO',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 44.459728399894374,
      longitude: 25.983753976880603,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '08:00',
        closes: '18:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Saturday',
        opens: '09:00',
        closes: '14:00',
      },
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5',
      reviewCount: '3',
    },
  };

  return (
    <>
      <Head>
        <title>ConiCar Service Auto — Service auto & vulcanizare | Dudu</title>
        <meta
          name="description"
          content="ConiCar Service Auto - service auto profesional în Dudu. Diagnoză, kit ambreiaj, distribuție, tren rulare, sistem frânare, reparații motoare, schimb ulei/filtre, revizii, polish faruri. Programează acum!"
        />
        <meta name="keywords" content="service auto Dudu, diagnoză auto Dudu, kit ambreiaj, distribuție auto, tren rulare, sistem frânare, reparații motoare, schimb ulei Dudu, revizie auto ConiCar, polish faruri" />
        <meta name="author" content="ConiCar Service Auto" />
        <link rel="canonical" href="https://conicar.ro/" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://conicar.ro/" />
        <meta property="og:title" content="ConiCar Service Auto — Service auto & vulcanizare" />
        <meta
          property="og:description"
          content="Service auto profesional în Dudu. Calitate, rapiditate, prețuri corecte."
        />
        <meta property="og:image" content="https://conicar.ro/images/og-image.jpg" />
        <meta property="og:locale" content="ro_RO" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="ConiCar Service Auto" />
        <meta name="twitter:description" content="Service auto profesional în Dudu" />
        <meta name="twitter:image" content="https://conicar.ro/images/og-image.jpg" />

        {/* JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </Head>

      <Header />
      <main className="pt-8">
        <Hero />

        {/* Servicii Section */}
        <section id="servicii" className="section-padding bg-white">
          <div className="container-custom">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-primary">
              Serviciile noastre
            </h2>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
              Oferim o gamă completă de servicii auto pentru toate nevoile tale
            </p>
            {/* Desktop Grid */}
            <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-8">
              {services.slice(0, 6).map((service, index) => (
                <ServiceCard
                  key={service.id}
                  {...service}
                  delay={index * 120}
                />
              ))}
            </div>
            {/* Mobile Carousel */}
            <ServiceCarousel services={services.slice(0, 6)} />
            <div className="text-center mt-12">
              <Link
                href="/servicii"
                className="btn-primary text-lg px-8 py-4 inline-block"
              >
                Vezi toate serviciile
              </Link>
            </div>
          </div>
        </section>


        {/* Work Process */}
        <WorkProcess />

        {/* Diagnostic Animation Section */}
        <section className="section-padding bg-primary-dark text-white">
          <div className="container-custom">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Diagnostic Modern
                </h2>
                <p className="text-lg mb-4 opacity-90">
                  Folosim echipamente de ultimă generație pentru diagnostic precis și rapid.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center space-x-3">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>Scanare computer OBD</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>Diagnostic electronic complet</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>Raport detaliat cu recomandări</span>
                  </li>
                </ul>
              </div>
              <DiagnosticAnimation />
            </div>
          </div>
        </section>

        {/* Gallery */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-primary">
              Galerie
            </h2>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
              Descoperă atelierul nostru și echipa
            </p>
            <Gallery images={galleryImages} />
          </div>
        </section>

        {/* Testimonials */}
        <Testimonials testimonials={testimonials} />
      </main>
      <Footer />
      <FloatingContactButton />
    </>
  );
}

