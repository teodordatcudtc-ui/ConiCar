import Head from 'next/head';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingContactButton from '@/components/FloatingContactButton';
import AppointmentForm from '@/components/AppointmentForm';

export default function Contact() {
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
  };

  return (
    <>
      <Head>
        <title>Contact — ConiCar Service Auto | Programează o Vizită</title>
        <meta
          name="description"
          content="Contactează ConiCar Service Auto din Dudu. Telefon: 0722178964. Programează o vizită sau solicită o ofertă."
        />
        <meta name="keywords" content="contact ConiCar, service auto Dudu, programare service auto, telefon service auto" />
        <link rel="canonical" href="https://conicar.ro/contact" />
        <meta property="og:title" content="Contact — ConiCar Service Auto" />
        <meta property="og:description" content="Contactează-ne pentru programare sau ofertă" />
        <meta property="og:url" content="https://conicar.ro/contact" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </Head>

      <Header />
      <main className="pt-8">
        <section className="section-padding pt-32 md:pt-24 bg-gradient-to-br from-primary to-primary-dark text-white">
          <div className="container-custom text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact</h1>
            <p className="text-xl max-w-2xl mx-auto opacity-90">
              Suntem aici să te ajutăm. Contactează-ne sau programează o vizită
            </p>
          </div>
        </section>

        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Info */}
              <div>
                <h2 className="text-3xl font-bold text-primary mb-8">Informații de contact</h2>
                
                <div className="space-y-6 mb-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#204a97"
                        strokeWidth="2"
                      >
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-gray-900 mb-1">Telefon</h3>
                      <a
                        href="tel:0722178964"
                        className="text-primary hover:text-primary-dark text-lg font-medium"
                      >
                        0722178964
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#204a97"
                        strokeWidth="2"
                      >
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-gray-900 mb-1">Adresă</h3>
                      <p className="text-gray-700">
                        Strada Ion Luca Caragiale 8<br />
                        Dudu 077041
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#204a97"
                        strokeWidth="2"
                      >
                        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                        <line x1="16" y1="2" x2="16" y2="6" />
                        <line x1="8" y1="2" x2="8" y2="6" />
                        <line x1="3" y1="10" x2="21" y2="10" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-gray-900 mb-1">Program</h3>
                      <p className="text-gray-700">
                        <strong>Luni - Vineri:</strong> 08:00 - 18:00<br />
                        <strong>Sâmbătă:</strong> 09:00 - 14:00<br />
                        <strong>Duminică:</strong> Închis
                      </p>
                    </div>
                  </div>
                </div>

                {/* Google Maps */}
                <div className="mb-8">
                  <h3 className="font-semibold text-lg text-gray-900 mb-4">Locația noastră</h3>
                  <div className="rounded-lg overflow-hidden shadow-lg">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3822.894979092452!2d25.983753976880603!3d44.459728399894374!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b2016a6457ccd5%3A0x70cec2288ab8fdf3!2sConiCar%20Service%20Auto%20%26%20Vulcanizare%20Auto!5e1!3m2!1sen!2sro!4v1763126008704!5m2!1sen!2sro"
                      width="100%"
                      height="300"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Locația ConiCar Service Auto"
                    />
                  </div>
                </div>
              </div>

              {/* Appointment Form */}
              <div id="programare">
                <h2 className="text-3xl font-bold text-primary mb-8">Programează o vizită</h2>
                <AppointmentForm />
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

