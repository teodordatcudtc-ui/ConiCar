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
      id: 'vulcanizare',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10" />
          <circle cx="12" cy="12" r="6" />
        </svg>
      ),
      title: 'Vulcanizare',
      description: 'Servicii complete de vulcanizare: îndreptare roluri jante, echilibrare, dejantat, geometrie 3D. Oferim soluții profesionale pentru toate nevoile tale legate de anvelope și jante. Folosim echipamente moderne pentru precizie maximă.',
      benefits: [
        'Îndreptare roluri jante',
        'Echilibrare',
        'Dejantat',
        'Geometrie 3D',
        'Garanție lucrare',
      ],
    },
  ];

  return (
    <>
      <Head>
        <title>Servicii — ConiCar Service Auto & Vulcanizare | Diagnoză, Reparații</title>
        <meta
          name="description"
          content="Servicii complete auto: diagnoză, schimbare kit ambreiaj, înlocuire distribuție, tren de rulare, sistem de frânare, reparații motoare, schimb ulei/filtre, vulcanizare. ConiCar Service Auto & Vulcanizare, Dudu."
        />
        <meta name="keywords" content="servicii auto Dudu, vulcanizare Dudu, diagnoză auto, kit ambreiaj, distribuție, tren rulare, sistem frânare, reparații motoare, schimb ulei, îndreptare jante, echilibrare, geometrie 3D" />
        <link rel="canonical" href="https://conicar.ro/servicii/" />
        <meta property="og:title" content="Servicii — ConiCar Service Auto & Vulcanizare" />
        <meta property="og:description" content="Servicii complete auto: mecanică, vulcanizare (îndreptare jante, echilibrare, dejantat, geometrie 3D), diagnoză" />
        <meta property="og:url" content="https://conicar.ro/servicii" />
      </Head>

      <Header />
      <main className="pt-8">
        <section className="section-padding pt-32 md:pt-40 bg-gradient-to-br from-primary to-primary-dark text-white">
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
              {services.filter(service => service.id !== 'vulcanizare').map((service, index) => (
                <ServiceCard key={service.id} {...service} delay={index * 100} />
              ))}
            </div>
          </div>
        </section>

        {/* Secțiune specială pentru Vulcanizare */}
        {(() => {
          const vulcanizareService = services.find(s => s.id === 'vulcanizare');
          if (!vulcanizareService) return null;
          
          const vulcanizareServices = [
            { name: 'Geometrie 3D', description: 'Reglare precisă geometrie roți cu echipamente 3D moderne pentru uzură uniformă și siguranță maximă' },
            { name: 'Echilibrare', description: 'Echilibrare profesională a roților pentru o conducere lină și fără vibrații' },
            { name: 'Îndreptare roluri jante', description: 'Reparație și îndreptare jante deteriorate pentru aspect și funcționalitate optimă' },
            { name: 'Dejantat', description: 'Montaj și demontaj profesional de anvelope cu echipamente moderne' },
          ];

          return (
            <section className="section-padding bg-white">
              <div className="container-custom">
                <div className="text-center mb-12">
                  <div className="flex items-center justify-center w-20 h-20 mx-auto mb-4 bg-primary/10 rounded-xl text-primary">
                    {vulcanizareService.icon}
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">{vulcanizareService.title}</h2>
                  <p className="text-lg text-gray-600 max-w-2xl mx-auto">{vulcanizareService.description}</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {vulcanizareServices.map((service, index) => {
                    const serviceId = service.name === 'Geometrie 3D' ? 'geometrie-3d' :
                                     service.name === 'Echilibrare' ? 'echilibrare' :
                                     service.name === 'Îndreptare roluri jante' ? 'indreptare-roluri-jante' :
                                     service.name === 'Dejantat' ? 'dejantat' :
                                     'vulcanizare';
                    return (
                      <Link
                        key={index}
                        href={`/servicii/${serviceId}`}
                        className="bg-gradient-to-br from-white to-gray-50 rounded-xl p-6 shadow-md border-2 border-gray-200 hover:shadow-xl hover:border-primary hover:-translate-y-1 transition-all duration-300 block"
                      >
                        <h3 className="text-lg font-bold text-primary mb-3">{service.name}</h3>
                        <p className="text-sm text-gray-600 leading-relaxed mb-4">{service.description}</p>
                        <span className="text-primary font-semibold text-sm inline-flex items-center">
                          Află mai mult
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="ml-2">
                            <polyline points="9 18 15 12 9 6" />
                          </svg>
                        </span>
                      </Link>
                    );
                  })}
                </div>
              </div>
            </section>
          );
        })()}

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

