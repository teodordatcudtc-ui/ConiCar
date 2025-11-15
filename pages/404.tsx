import Head from 'next/head';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Custom404() {
  return (
    <>
      <Head>
        <title>Pagina nu a fost găsită — ConiCar Service Auto & Vulcanizare</title>
        <meta name="robots" content="noindex, nofollow" />
      </Head>

      <Header />
      <main className="pt-32 pb-16 min-h-screen flex items-center">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center">
            <div className="mb-8">
              <h1 className="text-6xl md:text-8xl font-bold text-primary mb-4">404</h1>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
                Pagina nu a fost găsită
              </h2>
              <p className="text-gray-600 mb-8 text-lg">
                Ne pare rău, dar pagina pe care o căutați nu există sau a fost mutată.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link
                href="/"
                className="btn-primary px-8 py-4 inline-block text-center"
              >
                Înapoi la pagina principală
              </Link>
              <Link
                href="/servicii"
                className="btn-secondary px-8 py-4 inline-block text-center"
              >
                Vezi serviciile noastre
              </Link>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="font-semibold text-lg mb-4 text-primary">Link-uri utile:</h3>
              <ul className="flex flex-wrap justify-center gap-4 text-sm">
                <li>
                  <Link href="/" className="text-primary hover:text-accent transition-colors">
                    Acasă
                  </Link>
                </li>
                <li>
                  <Link href="/servicii" className="text-primary hover:text-accent transition-colors">
                    Servicii
                  </Link>
                </li>
                <li>
                  <Link href="/preturi" className="text-primary hover:text-accent transition-colors">
                    Prețuri
                  </Link>
                </li>
                <li>
                  <Link href="/despre" className="text-primary hover:text-accent transition-colors">
                    Despre Noi
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-primary hover:text-accent transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

