import Head from 'next/head';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingContactButton from '@/components/FloatingContactButton';
import ServiceCard from '@/components/ServiceCard';
import Link from 'next/link';

export default function Servicii() {
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
      description: 'Scanare computer și diagnostic electronic cu echipamente moderne. Identificăm rapid orice problemă și oferim raport detaliat cu estimări de costuri și timp pentru reparații. Folosim echipamente de ultimă generație pentru diagnostic precis.',
      benefits: [
        'Scanare OBD completă',
        'Diagnostic electronic',
        'Raport detaliat',
        'Estimare costuri și timp',
        'Consiliere reparații',
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
      description: 'Schimb complet kit ambreiaj cu piese de calitate. Lucrare profesională care asigură funcționare optimă a transmisiei. Folosim doar piese originale sau echivalente de înaltă calitate pentru durabilitate maximă.',
      benefits: [
        'Kit complet ambreiaj',
        'Piese originale sau echivalente',
        'Montaj profesional',
        'Garanție lucrare',
        'Verificare funcționalitate',
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
      description: 'Schimb preventiv sau reparator al kit-ului de distribuție. Folosim doar piese de calitate pentru siguranță maximă. Montaj precis cu verificare sincronizare pentru funcționare optimă.',
      benefits: [
        'Kit distribuție complet',
        'Curea și role',
        'Montaj precis',
        'Verificare sincronizare',
        'Garanție lucrare',
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
      description: 'Reparații complete tren de rulare: bielete, amortizoare, arcuri, rulmenți. Asigură confort și siguranță la condus. Verificăm și ajustăm geometria pentru uzura uniformă a anvelopelor.',
      benefits: [
        'Bielete și silent blocuri',
        'Amortizoare și arcuri',
        'Rulmenți roți',
        'Verificare geometrie',
        'Testare funcționalitate',
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
      description: 'Service complet sistem de frânare: plăcuțe, discuri, lichid frână, etrieri. Siguranță este prioritatea noastră. Verificăm toate componentele și testăm funcționalitatea pentru siguranță maximă.',
      benefits: [
        'Schimb plăcuțe și discuri',
        'Verificare etrieri',
        'Schimb lichid frână',
        'Testare funcționalitate',
        'Garanție lucrare',
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
      description: 'Reparații complexe motor: schimb piese, reparații bloc motor, cap cilindri, distribuție. Experiență și profesionalism garantat. Lucrăm cu toate tipurile de motoare, de la benzină la diesel.',
      benefits: [
        'Reparații bloc motor',
        'Schimb cap cilindri',
        'Reparații distribuție',
        'Garanție lucrare',
        'Consiliere tehnică',
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
      description: 'Service rapid pentru schimbul uleiului și filtrelor. Folosim doar produse de calitate superioară recomandate de producători. Schimbul se face în 30-45 de minute, perfect pentru o pauză rapidă.',
      benefits: [
        'Uleiuri premium (5W-30, 5W-40, 10W-40)',
        'Filtre originale sau echivalente',
        'Service rapid (30-45 min)',
        'Prețuri competitive',
        'Verificare nivel ulei inclusă',
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
      description: 'Revizii complete conform recomandărilor producătorului. Verificare sistematică a tuturor componentelor pentru menținerea vehiculului în stare optimă. Documentație completă și consiliere pentru întreținere preventivă.',
      benefits: [
        'Verificare completă',
        'Schimb piese uzate',
        'Documentație completă',
        'Consiliere întreținere',
        'Planificare următoare revizii',
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
      description: 'Restaurare și polish faruri pentru iluminare optimă. Eliminăm zgârieturile și opacitatea, refăcând transparența originală. Aplicăm protecție UV pentru menținerea rezultatului pe termen lung.',
      benefits: [
        'Eliminare zgârieturi',
        'Restaurare transparență',
        'Protecție UV',
        'Iluminare optimă',
        'Garanție lucrare',
      ],
    },
  ];

  return (
    <>
      <Head>
        <title>Servicii — ConiCar Service Auto | Diagnoză, Reparații, Revizii</title>
        <meta
          name="description"
          content="Servicii complete auto: diagnoză, schimbare kit ambreiaj, înlocuire distribuție, tren de rulare, sistem de frânare, reparații motoare, schimb ulei/filtre, revizii, polish faruri. ConiCar Service Auto, Dudu."
        />
        <meta name="keywords" content="servicii auto Dudu, diagnoză auto, kit ambreiaj, distribuție, tren rulare, sistem frânare, reparații motoare, schimb ulei, revizii auto, polish faruri" />
        <link rel="canonical" href="https://conicar.ro/servicii" />
        <meta property="og:title" content="Servicii — ConiCar Service Auto" />
        <meta property="og:description" content="Servicii complete auto: mecanică, vulcanizare, diagnoză" />
        <meta property="og:url" content="https://conicar.ro/servicii" />
      </Head>

      <Header />
      <main className="pt-8">
        <section className="section-padding pt-32 md:pt-24 bg-gradient-to-br from-primary to-primary-dark text-white">
          <div className="container-custom text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Serviciile noastre</h1>
            <p className="text-xl max-w-2xl mx-auto opacity-90">
              Oferim o gamă completă de servicii auto pentru toate nevoile tale
            </p>
          </div>
        </section>

        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <ServiceCard key={service.id} {...service} delay={index * 100} />
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding bg-gray-50">
          <div className="container-custom text-center">
            <h2 className="text-3xl font-bold mb-6 text-primary">Ai nevoie de ajutor?</h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Contactează-ne pentru o consultație gratuită sau programează o vizită
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact#programare" className="btn-primary">
                Programează acum
              </Link>
              <a href="tel:0722178964" className="btn-secondary">
                Sună acum
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingContactButton />
    </>
  );
}

