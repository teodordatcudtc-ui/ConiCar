import Head from 'next/head';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingContactButton from '@/components/FloatingContactButton';
import Link from 'next/link';
import WorkProcess from '@/components/WorkProcess';

export default function Despre() {
  return (
    <>
      <Head>
        <title>Despre Noi — ConiCar Service Auto & Vulcanizare | Echipa și Experiența Noastră</title>
        <meta
          name="description"
          content="ConiCar Service Auto & Vulcanizare - service auto profesional în Dudu. Echipa noastră de mecanicieni experimentați oferă servicii de calitate de peste 5 ani: mecanică și vulcanizare."
        />
        <meta name="keywords" content="despre ConiCar, service auto Dudu, vulcanizare Dudu, mecanicieni experimentați, istoric service auto" />
        <link rel="canonical" href="https://conicar.ro/despre" />
        <meta property="og:title" content="Despre Noi — ConiCar Service Auto & Vulcanizare" />
        <meta property="og:description" content="Echipa și experiența ConiCar Service Auto & Vulcanizare" />
        <meta property="og:url" content="https://conicar.ro/despre" />
      </Head>

      <Header />
      <main className="pt-8">
        <section className="section-padding pt-32 md:pt-40 bg-gradient-to-br from-primary to-primary-dark text-white">
          <div className="container-custom text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Despre Noi</h1>
            <p className="text-xl max-w-2xl mx-auto opacity-90">
              Experiență, profesionalism și pasiune pentru service auto
            </p>
          </div>
        </section>

        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <div className="prose prose-lg max-w-none">
                <h2 className="text-3xl font-bold text-primary mb-6">ConiCar Service Auto & Vulcanizare</h2>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  ConiCar Service Auto & Vulcanizare este un service auto profesional situat în Dudu,
                  dedicat oferirii de servicii de calitate superioară pentru toate tipurile de vehicule.
                  Cu o experiență de peste 5 ani în domeniu, echipa noastră de mecanicieni
                  experimentați se angajează să ofere soluții rapide, eficiente și la prețuri corecte.
                  Oferim atât servicii de mecanică, cât și servicii complete de vulcanizare.
                </p>

                <h3 className="text-2xl font-bold text-primary mb-4 mt-8">Misiunea noastră</h3>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  Misiunea noastră este să oferim servicii auto de cea mai înaltă calitate, folosind
                  echipamente moderne și piese de calitate, într-un mediu profesional și prietenos.
                  Ne străduim să construim relații de încredere cu clienții noștri prin transparență,
                  onestitate și respect pentru fiecare vehicul pe care îl reparam.
                </p>

                <h3 className="text-2xl font-bold text-primary mb-4 mt-8">De ce să ne alegi?</h3>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start space-x-3">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#f6d607"
                      strokeWidth="2.5"
                      className="flex-shrink-0 mt-1"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <div>
                      <strong className="text-primary">Experiență</strong>
                      <p className="text-gray-700">
                        Peste 5 ani de experiență în service auto și mii de clienți mulțumiți
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#f6d607"
                      strokeWidth="2.5"
                      className="flex-shrink-0 mt-1"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <div>
                      <strong className="text-primary">Echipamente moderne</strong>
                      <p className="text-gray-700">
                        Folosim echipamente de diagnostic și reparație de ultimă generație
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#f6d607"
                      strokeWidth="2.5"
                      className="flex-shrink-0 mt-1"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <div>
                      <strong className="text-primary">Piese de calitate</strong>
                      <p className="text-gray-700">
                        Lucrăm doar cu piese originale sau echivalente de înaltă calitate
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#f6d607"
                      strokeWidth="2.5"
                      className="flex-shrink-0 mt-1"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <div>
                      <strong className="text-primary">Garanție</strong>
                      <p className="text-gray-700">
                        Oferim garanție pentru toate lucrările efectuate
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#f6d607"
                      strokeWidth="2.5"
                      className="flex-shrink-0 mt-1"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <div>
                      <strong className="text-primary">Prețuri corecte</strong>
                      <p className="text-gray-700">
                        Transparență totală în prețuri, fără surprize neplăcute
                      </p>
                    </div>
                  </li>
                </ul>

                <h3 className="text-2xl font-bold text-primary mb-4 mt-8">Locația noastră</h3>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  Ne găsești în Dudu, la Strada Ion Luca Caragiale 8, într-o
                  locație ușor accesibilă, cu parcare disponibilă pentru clienți. Suntem deschiși
                  Luni-Vineri între 08:00-18:00 și Sâmbătă între 09:00-14:00.
                </p>
              </div>
            </div>
          </div>
        </section>

        <WorkProcess />

        <section className="section-padding bg-gray-50">
          <div className="container-custom text-center">
            <h2 className="text-3xl font-bold mb-6 text-primary">Vrei să ne cunoști mai bine?</h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Contactează-ne sau programează o vizită la service-ul nostru
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact#programare" className="btn-primary">
                Programează o vizită
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

