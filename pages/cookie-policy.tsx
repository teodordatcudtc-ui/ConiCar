import Head from 'next/head';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingContactButton from '@/components/FloatingContactButton';

export default function CookiePolicy() {
  return (
    <>
      <Head>
        <title>Politica de Cookies — ConiCar Service Auto & Vulcanizare</title>
        <meta
          name="description"
          content="Politica de cookies ConiCar Service Auto & Vulcanizare. Informații despre utilizarea cookies pe site-ul nostru."
        />
        <meta name="robots" content="noindex, nofollow" />
        <link rel="canonical" href="https://conicar.ro/cookie-policy" />
      </Head>

      <Header />
      <main className="pt-8">
        <div className="container-custom section-padding">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold mb-6 text-primary">Politica de Cookies</h1>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-sm text-gray-600 mb-8">Ultima actualizare: {new Date().toLocaleDateString('ro-RO', { year: 'numeric', month: 'long', day: 'numeric' })}</p>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-primary">1. Ce sunt Cookies-urile?</h2>
                <p className="mb-4">
                  Cookies-urile sunt fișiere text mici care sunt plasate pe dispozitivul dvs. (computer, tabletă sau 
                  telefon mobil) când vizitați un site web. Cookies-urile permit site-ului să-și amintească acțiunile și 
                  preferințele dvs. (cum ar fi autentificarea, limba, dimensiunea fontului și alte preferințe de afișare) 
                  pe o perioadă de timp, astfel încât să nu trebuiască să le reintroduceți de fiecare dată când reveniți 
                  pe site sau navigați de la o pagină la alta.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-primary">2. Cum Folosim Cookies-urile?</h2>
                <p className="mb-4">
                  ConiCar Service Auto & Vulcanizare folosește cookies pentru a îmbunătăți experiența dvs. pe site-ul nostru. 
                  Cookies-urile ne ajută să:
                </p>
                <ul className="list-disc pl-6 mb-4">
                  <li>Îmbunătățim funcționalitatea site-ului</li>
                  <li>Analizăm modul în care site-ul este utilizat (prin servicii analitice)</li>
                  <li>Personalizăm conținutul și anunțurile</li>
                  <li>Asigurăm securitatea site-ului</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-primary">3. Tipuri de Cookies Folosite</h2>
                
                <h3 className="text-xl font-semibold mb-3 text-primary mt-6">3.1. Cookies Strict Necesare</h3>
                <p className="mb-4">
                  Aceste cookies sunt esențiale pentru funcționarea site-ului și nu pot fi dezactivate în sistemele noastre. 
                  Ele sunt de obicei setate doar ca răspuns la acțiunile dvs., cum ar fi setarea preferințelor de confidențialitate, 
                  conectarea sau completarea formularelor.
                </p>

                <h3 className="text-xl font-semibold mb-3 text-primary mt-6">3.2. Cookies de Performanță și Analiză</h3>
                <p className="mb-4">
                  Aceste cookies ne permit să numărăm vizitele și sursele de trafic, astfel încât să putem măsura și îmbunătăți 
                  performanța site-ului nostru. Ne ajută să știm care pagini sunt cele mai populare și mai puțin populare și 
                  să vedem cum vizitatorii se mișcă în jurul site-ului. Toate informațiile pe care le colectează aceste cookies 
                  sunt agregate și, prin urmare, anonime.
                </p>

                <h3 className="text-xl font-semibold mb-3 text-primary mt-6">3.3. Cookies de Funcționalitate</h3>
                <p className="mb-4">
                  Aceste cookies permit site-ului să ofere funcționalități și personalizare îmbunătățite. Pot fi setate de noi 
                  sau de furnizori terți ale căror servicii am adăugat pe paginile noastre.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-primary">4. Cookies de la Terți</h2>
                <p className="mb-4">
                  În unele cazuri, folosim cookies de la terți pentru a analiza utilizarea site-ului și a îmbunătăți serviciile. 
                  Aceste servicii terțe pot include:
                </p>
                <ul className="list-disc pl-6 mb-4">
                  <li><strong>Google Analytics:</strong> pentru analiza traficului și comportamentului utilizatorilor</li>
                  <li><strong>Servicii de rețele sociale:</strong> pentru integrarea cu platformele de social media (dacă aplicabil)</li>
                </ul>
                <p className="mb-4">
                  Aceste servicii terțe au propriile politici de confidențialitate și de cookies, pe care le recomandăm să le 
                  consultați.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-primary">5. Durata Cookies-urilor</h2>
                <p className="mb-4">
                  Cookies-urile pot fi:
                </p>
                <ul className="list-disc pl-6 mb-4">
                  <li><strong>Cookies de sesiune:</strong> temporare și se șterg automat când închideți browser-ul</li>
                  <li><strong>Cookies persistente:</strong> rămân pe dispozitivul dvs. pentru o perioadă determinată sau până 
                  când le ștergeți manual</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-primary">6. Gestionarea Cookies-urilor</h2>
                <p className="mb-4">
                  Puteți controla și/sau șterge cookies-urile după cum doriți. Puteți șterge toate cookies-urile care sunt deja 
                  pe computerul dvs. și puteți seta majoritatea browserelor pentru a preveni plasarea acestora. Cu toate acestea, 
                  dacă faceți acest lucru, este posibil să trebuiască să ajustați manual anumite preferințe de fiecare dată când 
                  vizitați un site, iar unele servicii și funcționalități pot să nu funcționeze.
                </p>
                <p className="mb-4">
                  <strong>Cum să gestionați cookies-urile în browser-ul dvs.:</strong>
                </p>
                <ul className="list-disc pl-6 mb-4">
                  <li><strong>Google Chrome:</strong> Setări → Confidențialitate și securitate → Cookies</li>
                  <li><strong>Mozilla Firefox:</strong> Opțiuni → Confidențialitate și securitate → Cookies</li>
                  <li><strong>Safari:</strong> Preferințe → Confidențialitate → Cookies</li>
                  <li><strong>Microsoft Edge:</strong> Setări → Cookies și permisiuni site</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-primary">7. Consimțământul pentru Cookies</h2>
                <p className="mb-4">
                  Prin continuarea utilizării site-ului nostru după ce ați văzut banner-ul de cookies (dacă este prezent), 
                  acceptați utilizarea cookies-urilor în conformitate cu această politică. Dacă nu acceptați utilizarea 
                  cookies-urilor, vă rugăm să dezactivați cookies-urile în setările browser-ului dvs. sau să încetați 
                  utilizarea site-ului.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-primary">8. Modificări ale Politicii de Cookies</h2>
                <p className="mb-4">
                  Ne rezervăm dreptul de a modifica această politică de cookies oricând. Modificările vor fi publicate 
                  pe această pagină cu data actualizării. Vă recomandăm să consultați periodic această pagină pentru a fi 
                  la curent cu modificările.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-primary">9. Contact</h2>
                <p className="mb-4">
                  Pentru întrebări despre utilizarea cookies-urilor pe site-ul nostru, ne puteți contacta:
                </p>
                <ul className="list-none mb-4">
                  <li><strong>Telefon:</strong> 0722178964</li>
                  <li><strong>Adresă:</strong> Strada Ion Luca Caragiale 8, Dudu 077041</li>
                </ul>
              </section>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <FloatingContactButton />
    </>
  );
}

