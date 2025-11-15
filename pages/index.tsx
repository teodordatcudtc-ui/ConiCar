import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingContactButton from '@/components/FloatingContactButton';
import Hero from '@/components/Hero';
import ServiceCard from '@/components/ServiceCard';
import ServiceCarousel from '@/components/ServiceCarousel';
import Gallery from '@/components/Gallery';
import Testimonials from '@/components/Testimonials';
import WorkProcess from '@/components/WorkProcess';

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
      description: 'Servicii profesionale de diagnostic auto electronic folosind echipamente OBD moderne. Echipamentul nostru de diagnostic identifică rapid și precis orice problemă a vehiculului, oferind raporturi detaliate cu estimări exacte de costuri și timp necesar pentru reparații.',
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
      description: 'Servicii specializate de înlocuire completă a kit-ului de ambreiaj utilizând exclusiv piese de calitate superioară. Lucrarea noastră profesională garantează funcționarea optimă și durabilă a sistemului de transmisie, asigurând o experiență de condus lină și sigură.',
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
      description: 'Servicii complete de înlocuire a kit-urilor de distribuție, atât pentru mentenanță preventivă cât și pentru reparații. Folosim exclusiv piese originale sau echivalente de înaltă calitate pentru a asigura siguranță maximă și performanță optimă a motorului.',
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
      description: 'Reparații complete și profesionale ale sistemului de tren de rulare, incluzând înlocuirea bieletelor, amortizoarelor, arcurilor și rulmenților. Serviciile noastre asigură confort superior la condus, siguranță sporită și o experiență de condus stabilă pe toate tipurile de drumuri.',
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
      description: 'Servicii complete de verificare, întreținere și reparații pentru întregul sistem de frânare, incluzând înlocuirea plăcuțelor, discurilor, lichidului de frână și reparații ale etrierilor. Siguranța ta este prioritatea noastră absolută, iar toate lucrările sunt efectuate conform standardelor de securitate auto.',
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
      description: 'Servicii specializate de reparații complexe pentru motoare, incluzând înlocuirea pieselor uzate, reparații ale blocului motor, capului cilindrilor și sistemului de distribuție. Experiența vastă a echipei noastre și profesionalismul garantat asigură că vehiculul tău primește cea mai bună îngrijire posibilă.',
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
      description: 'Servicii rapide și eficiente pentru schimbul uleiului motorului și al tuturor filtrelor vehiculului. Folosim exclusiv produse de calitate superioară recomandate de producătorii auto, asigurând protecție optimă și performanță maximă pentru motorul tău.',
      benefits: [
        'Uleiuri premium',
        'Filtre originale sau echivalente',
        'Service rapid (30-45 min)',
        'Prețuri competitive',
      ],
    },
    {
      id: 'vulcanizare',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10" />
          <circle cx="12" cy="12" r="6" />
        </svg>
      ),
      title: 'Vulcanizare',
      description: 'Servicii complete și profesionale de vulcanizare, incluzând îndreptarea rolurilor de jante, echilibrarea roților, dejantarea anvelopelor și reglarea geometriei 3D. Oferim soluții profesionale și moderne pentru toate nevoile tale legate de anvelope și jante, folosind echipamente de ultimă generație.',
      benefits: [
        'Îndreptare roluri jante',
        'Echilibrare',
        'Dejantat',
        'Geometrie 3D',
      ],
    },
  ];

  const galleryImages = [
    {
      src: '/images/galerie/atelier-zona-lucru.jpg',
      alt: 'Atelier ConiCar Service Auto - zona de lucru',
      thumbnail: '/images/galerie/atelier-zona-lucru.jpg',
    },
    {
      src: '/images/galerie/diagnostic-echipamente.jpg',
      alt: 'Diagnostic auto cu echipamente moderne',
      thumbnail: '/images/galerie/diagnostic-echipamente.jpg',
    },
    {
      src: '/images/galerie/reparatie-motor.jpg',
      alt: 'Reparație motor la ConiCar',
      thumbnail: '/images/galerie/reparatie-motor.jpg',
    },
    {
      src: '/images/galerie/vulcanizare-montaj.jpg',
      alt: 'Serviciu vulcanizare și montaj anvelope',
      thumbnail: '/images/galerie/vulcanizare-montaj.jpg',
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
        <title>ConiCar Service Auto & Vulcanizare Dudu</title>
        <meta
          name="description"
          content="Service auto profesional în Dudu. Diagnoză electronică, reparații motoare, vulcanizare, geometrie 3D. Peste 5 ani experiență. Programează acum!"
        />
        <meta name="keywords" content="service auto Dudu, vulcanizare Dudu, diagnoză auto Dudu, kit ambreiaj, distribuție auto, tren rulare, sistem frânare, reparații motoare, schimb ulei Dudu, îndreptare jante, echilibrare, geometrie 3D" />
        <meta name="author" content="ConiCar Service Auto" />
        <link rel="canonical" href="https://conicar.ro/" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />

        {/* Google Analytics */}
        {process.env.NEXT_PUBLIC_GA_ID && (
          <>
            <script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
            />
            <script
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
                `,
              }}
            />
          </>
        )}

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
              Serviciile Noastre
            </h2>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
              Oferim o gamă completă de servicii auto profesionale pentru toate nevoile tale
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
                Vezi lista completă de servicii
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
                <h2 className="text-2xl md:text-3xl font-bold mb-6">
                  Diagnostic și Geometrie 3D
                </h2>
                <p className="text-lg mb-4 opacity-90 leading-relaxed">
                  ConiCar Service Auto & Vulcanizare folosește echipamente de ultimă generație pentru diagnostic precis și rapid al tuturor sistemelor vehiculului. Tehnologia noastră de geometrie 3D asigură reglarea perfectă a roților, optimizând uzura anvelopelor și îmbunătățind stabilitatea la condus. Echipamentele noastre moderne permit identificarea rapidă a problemelor și oferirea de soluții eficiente pentru toate tipurile de vehicule.
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
                    <span>Geometrie 3D pentru reglare precisă roți</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>Raport detaliat cu recomandări</span>
                  </li>
                </ul>
              </div>
              <div className="relative w-full h-64 md:h-96 rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/images/servicii/echilibrare.jpg"
                  alt="Echipament echilibrare și geometrie 3D pentru reglare precisă roți"
                  fill
                  className="object-cover"
                  loading="lazy"
                  quality={80}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Gallery */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-primary">
              Galeria Noastră
            </h2>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
              Vizualizează atelierul nostru și echipamentele moderne
            </p>
            <Gallery images={galleryImages} />
          </div>
        </section>

        {/* Testimonials */}
        <Testimonials testimonials={testimonials} />

        {/* Social Sharing */}
        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <div className="max-w-2xl mx-auto text-center">
              <h3 className="text-2xl font-bold mb-4 text-primary">Distribuie serviciile noastre</h3>
              <p className="text-gray-600 mb-6">Ajută-ne să ajungem la mai mulți clienți</p>
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent('https://conicar.ro')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors"
                  aria-label="Distribuie pe Facebook"
                >
                  <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                  <span>Facebook</span>
                </a>
                <a
                  href={`https://wa.me/?text=${encodeURIComponent('ConiCar Service Auto & Vulcanizare Dudu - Service auto profesional! https://conicar.ro')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg transition-colors"
                  aria-label="Distribuie pe WhatsApp"
                >
                  <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                  </svg>
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingContactButton />
    </>
  );
}

