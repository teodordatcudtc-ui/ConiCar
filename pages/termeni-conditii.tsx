import Head from 'next/head';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingContactButton from '@/components/FloatingContactButton';

export default function TermeniConditii() {
  return (
    <>
      <Head>
        <title>Termeni și Condiții — ConiCar Service Auto & Vulcanizare</title>
        <meta
          name="description"
          content="Termeni și condiții de utilizare a site-ului ConiCar Service Auto & Vulcanizare. Condiții generale de prestare servicii."
        />
        <meta name="robots" content="noindex, nofollow" />
        <link rel="canonical" href="https://conicar.ro/termeni-conditii" />
      </Head>

      <Header />
      <main className="pt-8">
        <div className="container-custom section-padding">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold mb-6 text-primary">Termeni și Condiții</h1>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-sm text-gray-600 mb-8">Ultima actualizare: {new Date().toLocaleDateString('ro-RO', { year: 'numeric', month: 'long', day: 'numeric' })}</p>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-primary">1. Prezentare Generală</h2>
                <p className="mb-4">
                  Acești termeni și condiții reglementează utilizarea site-ului web al ConiCar Service Auto & Vulcanizare 
                  („site-ul”, „serviciul nostru”) și prestarea serviciilor de service auto și vulcanizare. Prin accesarea 
                  și utilizarea acestui site, acceptați acești termeni și condiții în totalitate.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-primary">2. Informații despre Serviciu</h2>
                <p className="mb-4">
                  <strong>Denumire:</strong> ConiCar Service Auto & Vulcanizare<br />
                  <strong>Adresă:</strong> Strada Ion Luca Caragiale 8, Dudu 077041<br />
                  <strong>Telefon:</strong> 0722178964<br />
                  <strong>Program:</strong> Luni-Vineri: 08:00-18:00, Sâmbătă: 09:00-14:00, Duminică: Închis
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-primary">3. Utilizarea Site-ului</h2>
                <p className="mb-4">Utilizarea site-ului este permisă doar în scopuri legale și în conformitate cu acești termeni. Vă angajați să:</p>
                <ul className="list-disc pl-6 mb-4">
                  <li>Nu utilizați site-ul în moduri care să încalce legile aplicabile</li>
                  <li>Nu încercați să accesați zone restricționate ale site-ului</li>
                  <li>Nu transmiteți conținut malițios sau virusi</li>
                  <li>Nu utilizați site-ul pentru activități frauduloase sau înșelătoare</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-primary">4. Programări și Servicii</h2>
                <p className="mb-4">
                  <strong>4.1. Programări:</strong> Programările pot fi făcute prin telefon sau prin formularul de contact. 
                  Rezervările sunt confirmate telefonic sau prin mesaj. Ne rezervăm dreptul de a anula sau modifica o 
                  programare în cazuri excepționale, cu notificare prealabilă.
                </p>
                <p className="mb-4">
                  <strong>4.2. Prețuri:</strong> Prețurile afișate pe site sunt orientative și pot varia în funcție de 
                  complexitatea lucrării, tipul de piese necesare și starea vehiculului. Prețul final va fi comunicat 
                  după diagnostic și acordul clientului.
                </p>
                <p className="mb-4">
                  <strong>4.3. Diagnostic:</strong> Înainte de orice reparație, efectuăm un diagnostic pentru a identifica 
                  problema exactă și a oferi o estimare de preț. Diagnosticul poate fi facturat separat dacă clientul 
                  nu acceptă reparația propusă.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-primary">5. Garanții</h2>
                <p className="mb-4">
                  <strong>5.1. Garanție lucrare:</strong> Oferim garanție pentru lucrările efectuate, conform legislației 
                  aplicabile. Perioada de garanție variază în funcție de tipul de serviciu și va fi comunicată la momentul 
                  predării vehiculului.
                </p>
                <p className="mb-4">
                  <strong>5.2. Garanție piese:</strong> Piesele de schimb beneficiază de garanție de la producător. 
                  Documentele de garanție vor fi furnizate clientului.
                </p>
                <p className="mb-4">
                  <strong>5.3. Excluderi garanție:</strong> Garanția nu acoperă daunele cauzate de utilizare necorespunzătoare, 
                  accidente, modificări neautorizate sau uzură normală.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-primary">6. Responsabilitate</h2>
                <p className="mb-4">
                  <strong>6.1. Limitări:</strong> ConiCar Service Auto & Vulcanizare nu este responsabil pentru daune 
                  indirecte, consecvențiale sau speciale rezultate din utilizarea serviciilor noastre, cu excepția cazurilor 
                  de neglijență dovedită.
                </p>
                <p className="mb-4">
                  <strong>6.2. Proprietatea vehiculului:</strong> Clientul rămâne proprietarul vehiculului în timpul 
                  reparației. Ne angajăm să păstrăm vehiculul în siguranță și să respectăm standardele de securitate.
                </p>
                <p className="mb-4">
                  <strong>6.3. Obiecte personale:</strong> Clientul este responsabil să îndepărteze obiectele personale 
                  din vehicul înainte de predare. Nu ne asumăm responsabilitatea pentru obiectele lăsate în vehicul.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-primary">7. Plata</h2>
                <p className="mb-4">
                  <strong>7.1. Modalități de plată:</strong> Acceptăm plata în numerar și prin card bancar. Plata se 
                  efectuează la finalizarea lucrării, înainte de predarea vehiculului.
                </p>
                <p className="mb-4">
                  <strong>7.2. Facturare:</strong> Emitem facturi fiscale pentru toate serviciile prestate. Clientul 
                  primește factura la finalizarea lucrării.
                </p>
                <p className="mb-4">
                  <strong>7.3. Depozit:</strong> Pentru lucrări de valoare mare sau piese comandate special, poate fi 
                  solicitat un avans sau depozit.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-primary">8. Proprietate Intelectuală</h2>
                <p className="mb-4">
                  Conținutul site-ului (text, imagini, logo-uri, design) este proprietatea ConiCar Service Auto & Vulcanizare 
                  și este protejat de legile privind drepturile de autor. Utilizarea neautorizată a conținutului este interzisă.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-primary">9. Link-uri către Site-uri Terțe</h2>
                <p className="mb-4">
                  Site-ul poate conține link-uri către site-uri terțe. Nu suntem responsabili pentru conținutul sau 
                  politicile de confidențialitate ale acestor site-uri terțe.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-primary">10. Modificări ale Termenilor</h2>
                <p className="mb-4">
                  Ne rezervăm dreptul de a modifica acești termeni și condiții oricând. Modificările vor fi publicate 
                  pe această pagină. Utilizarea continuă a site-ului după modificări constituie acceptarea noilor termeni.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-primary">11. Legea Aplicabilă</h2>
                <p className="mb-4">
                  Acești termeni și condiții sunt guvernați de legile României. Orice dispute vor fi rezolvate de instanțele 
                  competente din România.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-primary">12. Contact</h2>
                <p className="mb-4">
                  Pentru întrebări despre acești termeni și condiții, ne puteți contacta:
                </p>
                <ul className="list-none mb-4">
                  <li><strong>Telefon:</strong> 0722178964</li>
                  <li><strong>Adresă:</strong> Strada Ion Luca Caragiale 8, Dudu 077041</li>
                  <li><strong>Program:</strong> Luni-Vineri: 08:00-18:00, Sâmbătă: 09:00-14:00</li>
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

