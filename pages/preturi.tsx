import Head from 'next/head';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingContactButton from '@/components/FloatingContactButton';
import Link from 'next/link';

export default function Preturi() {
  const pricingCategories = [
    {
      category: 'Diagnoză',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
          <line x1="8" y1="21" x2="16" y2="21" />
          <line x1="12" y1="17" x2="12" y2="21" />
        </svg>
      ),
      services: [
        { name: 'Scanare computer OBD', price: '50-100 RON', note: 'Diagnostic complet electronic' },
        { name: 'Diagnostic complet vehicul', price: '150-250 RON', note: 'Inspectie detaliată și raport' },
      ],
    },
    {
      category: 'Schimb Ulei / Filtre',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
        </svg>
      ),
      services: [
        { name: 'Schimb ulei motor (5W-30/5W-40)', price: '150-250 RON', note: 'Prețul include uleiul și manopera' },
        { name: 'Schimb filtru ulei', price: '30-50 RON', note: 'Doar manoperă' },
        { name: 'Schimb filtru aer', price: '40-80 RON', note: 'Include filtru și manoperă' },
        { name: 'Schimb filtru habitaclu', price: '50-100 RON', note: 'Include filtru și manoperă' },
        { name: 'Service complet (ulei + toate filtrele)', price: '250-400 RON', note: 'Pachet complet' },
      ],
    },
    {
      category: 'Schimbare Kit Ambreiaj',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10" />
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v4M12 18v4M2 12h4M18 12h4" />
        </svg>
      ),
      services: [
        { name: 'Schimb kit ambreiaj complet', price: '800-1500 RON', note: 'Include kit complet și manoperă' },
        { name: 'Schimb disc ambreiaj', price: '400-800 RON', note: 'Include disc și manoperă' },
      ],
    },
    {
      category: 'Înlocuire Kit-uri de Distribuție',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10" />
          <path d="M12 6v6l4 2" />
        </svg>
      ),
      services: [
        { name: 'Schimb curea distribuție', price: '400-800 RON', note: 'Include curea și manoperă' },
        { name: 'Schimb kit distribuție complet', price: '600-1200 RON', note: 'Include curea, role și manoperă' },
      ],
    },
    {
      category: 'Înlocuire Subansamble Tren de Rulare',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="6" cy="18" r="3" />
          <circle cx="18" cy="18" r="3" />
          <path d="M6 18h12M6 15v-6M18 15v-6" />
        </svg>
      ),
      services: [
        { name: 'Schimb bielete', price: '150-300 RON', note: 'Per bielă, include manoperă' },
        { name: 'Schimb silent blocuri', price: '100-200 RON', note: 'Per bucată, include manoperă' },
        { name: 'Schimb amortizoare (per bucată)', price: '200-400 RON', note: 'Include amortizor și manoperă' },
        { name: 'Schimb rulmenți roți', price: '150-300 RON', note: 'Per roată, include manoperă' },
      ],
    },
    {
      category: 'Verificare și Reparații Sistem de Frânare',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10" />
          <path d="M12 6v6l4 2" />
          <path d="M8 12h8" />
        </svg>
      ),
      services: [
        { name: 'Schimb plăcuțe frână (axa)', price: '150-250 RON', note: 'Include piese și manoperă' },
        { name: 'Schimb discuri frână (axa)', price: '300-500 RON', note: 'Include piese și manoperă' },
        { name: 'Schimb lichid frână', price: '100-150 RON', note: 'Include lichid și manoperă' },
        { name: 'Verificare sistem frânare', price: '50-100 RON', note: 'Inspectie completă' },
      ],
    },
    {
      category: 'Înlocuiri și Reparații Motoare',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="2" y="6" width="20" height="12" rx="2" />
          <path d="M6 6V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v2" />
          <path d="M12 10v4M8 12h8" />
        </svg>
      ),
      services: [
        { name: 'Reparații bloc motor', price: '500-2000 RON', note: 'Preț variabil în funcție de complexitate' },
        { name: 'Schimb cap cilindri', price: '800-1500 RON', note: 'Include cap și manoperă' },
        { name: 'Schimb bujii (set)', price: '80-200 RON', note: 'Depinde de numărul cilindrilor' },
        { name: 'Reparații distribuție', price: '400-1000 RON', note: 'Preț variabil' },
      ],
    },
    {
      category: 'Vulcanizare',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10" />
          <circle cx="12" cy="12" r="6" />
        </svg>
      ),
      services: [
        { name: 'Îndreptare roluri jante', price: '100-300 RON', note: 'Preț per jantă, în funcție de complexitate' },
        { name: 'Echilibrare', price: '30-50 RON', note: 'Preț per roată' },
        { name: 'Dejantat', price: '20-40 RON', note: 'Preț per roată' },
        { name: 'Geometrie 3D', price: '150-250 RON', note: 'Reglare completă geometrie roți' },
      ],
    },
  ];

  return (
    <>
      <Head>
        <title>Prețuri — ConiCar Service Auto & Vulcanizare | Tarife Service Auto Dudu</title>
        <meta
          name="description"
          content="Prețuri transparente pentru servicii auto: schimb ulei, vulcanizare, mecanică, diagnoză. ConiCar Service Auto & Vulcanizare, Dudu. Contactează-ne pentru ofertă personalizată."
        />
        <meta name="keywords" content="prețuri service auto Dudu, tarife vulcanizare, cost schimb ulei, preț reparații auto" />
        <link rel="canonical" href="https://conicar.ro/preturi" />
        <meta property="og:title" content="Prețuri — ConiCar Service Auto & Vulcanizare" />
        <meta property="og:description" content="Prețuri transparente pentru servicii auto" />
        <meta property="og:url" content="https://conicar.ro/preturi" />
      </Head>

      <Header />
      <main className="pt-8">
        <section className="section-padding pt-32 md:pt-40 bg-gradient-to-br from-primary to-primary-dark text-white">
          <div className="container-custom text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Prețuri</h1>
            <p className="text-xl max-w-2xl mx-auto opacity-90">
              Prețuri transparente și competitive pentru toate serviciile noastre
            </p>
          </div>
        </section>

        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
              {pricingCategories.map((category, catIndex) => (
                <div key={catIndex} className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="text-primary flex-shrink-0">{category.icon}</div>
                    <h2 className="text-2xl font-bold text-primary">{category.category}</h2>
                  </div>
                  <div className="space-y-3">
                    {category.services.map((service, index) => (
                      <div
                        key={index}
                        className="bg-gray-50 rounded-lg p-5 border-l-4 border-accent hover:bg-gray-100 transition-colors"
                      >
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                          <div className="flex-1">
                            <h3 className="font-semibold text-gray-900 mb-1">{service.name}</h3>
                            {service.note && (
                              <p className="text-sm text-gray-600 mt-1">{service.note}</p>
                            )}
                          </div>
                          <div className="text-right md:text-left md:min-w-[140px]">
                            <span className="text-xl md:text-2xl font-bold text-primary">{service.price}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 bg-accent/10 border-2 border-accent rounded-2xl p-8 text-center max-w-3xl mx-auto">
              <h3 className="text-2xl font-bold text-primary mb-4">Notă importantă</h3>
              <p className="text-gray-700 mb-4">
                Prețurile afișate sunt orientative și pot varia în funcție de modelul vehiculului,
                tipul de piese necesare și complexitatea lucrării. Pentru o ofertă exactă, vă
                rugăm să ne contactați.
              </p>
              <p className="text-gray-700 mb-6">
                Toate prețurile includ TVA. Oferim garanție pentru toate lucrările efectuate.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact#programare" className="btn-primary">
                  Solicită ofertă
                </Link>
                <a href="tel:0722178964" className="btn-secondary">
                  Sună pentru detalii
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

