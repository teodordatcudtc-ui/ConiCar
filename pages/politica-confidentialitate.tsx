import Head from 'next/head';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingContactButton from '@/components/FloatingContactButton';

export default function PoliticaConfidentialitate() {
  return (
    <>
      <Head>
        <title>Politica de Confidențialitate — ConiCar Service Auto & Vulcanizare</title>
        <meta
          name="description"
          content="Politica de confidențialitate ConiCar Service Auto & Vulcanizare. Informații despre protecția datelor personale și conformitatea GDPR."
        />
        <meta name="robots" content="noindex, nofollow" />
        <link rel="canonical" href="https://conicar.ro/politica-confidentialitate" />
      </Head>

      <Header />
      <main className="pt-8">
        <div className="container-custom section-padding">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold mb-6 text-primary">Politica de Confidențialitate</h1>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-sm text-gray-600 mb-8">Ultima actualizare: {new Date().toLocaleDateString('ro-RO', { year: 'numeric', month: 'long', day: 'numeric' })}</p>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-primary">1. Introducere</h2>
                <p className="mb-4">
                  ConiCar Service Auto & Vulcanizare („noi”, „noastră”, „serviciul nostru”) respectă confidențialitatea 
                  vizitatorilor site-ului nostru și se angajează să protejeze datele personale ale utilizatorilor. 
                  Această politică de confidențialitate explică modul în care colectăm, utilizăm, stocăm și protejăm 
                  informațiile dumneavoastră personale, în conformitate cu Regulamentul General privind Protecția Datelor (GDPR).
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-primary">2. Date de Contact</h2>
                <p className="mb-4">
                  Operatorul de date personale este:
                </p>
                <ul className="list-disc pl-6 mb-4">
                  <li><strong>Denumire:</strong> ConiCar Service Auto & Vulcanizare</li>
                  <li><strong>Adresă:</strong> Strada Ion Luca Caragiale 8, Dudu 077041</li>
                  <li><strong>Telefon:</strong> 0722178964</li>
                  <li><strong>Email:</strong> (contact prin formularul de pe site)</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-primary">3. Datele pe care le Colectăm</h2>
                <p className="mb-4">Colectăm următoarele tipuri de date personale:</p>
                <ul className="list-disc pl-6 mb-4">
                  <li><strong>Date de identificare:</strong> nume, prenume</li>
                  <li><strong>Date de contact:</strong> număr de telefon, adresă de email</li>
                  <li><strong>Date despre vehicul:</strong> marca, modelul, numărul de înmatriculare (opțional)</li>
                  <li><strong>Date tehnice:</strong> adresa IP, tipul browser-ului, paginile vizitate (prin cookies)</li>
                  <li><strong>Date de comunicare:</strong> mesajele trimise prin formularul de contact</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-primary">4. Scopul Prelucrării Datelor</h2>
                <p className="mb-4">Prelucrăm datele personale pentru următoarele scopuri:</p>
                <ul className="list-disc pl-6 mb-4">
                  <li>Procesarea și răspunderea la solicitările de programare și întrebări</li>
                  <li>Comunicarea cu clienții pentru serviciile oferite</li>
                  <li>Îmbunătățirea serviciilor și experienței utilizatorilor</li>
                  <li>Conformitatea cu obligațiile legale</li>
                  <li>Analiza traficului site-ului (prin cookies analitice)</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-primary">5. Baza Legală pentru Prelucrare</h2>
                <p className="mb-4">Prelucrăm datele personale pe baza următoarelor:</p>
                <ul className="list-disc pl-6 mb-4">
                  <li><strong>Consimțământ:</strong> pentru cookies și comunicări de marketing</li>
                  <li><strong>Executarea unui contract:</strong> pentru procesarea programărilor și oferirea serviciilor</li>
                  <li><strong>Interes legitim:</strong> pentru îmbunătățirea serviciilor</li>
                  <li><strong>Obligație legală:</strong> pentru conformitatea cu legislația aplicabilă</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-primary">6. Durata Stocării</h2>
                <p className="mb-4">
                  Stocăm datele personale doar pentru perioada necesară pentru îndeplinirea scopurilor pentru care au fost 
                  colectate sau pentru perioada impusă de lege. Datele de contact sunt păstrate până când utilizatorul 
                  solicită ștergerea sau până la expirarea perioadei legale de păstrare (de exemplu, pentru documente 
                  contabile: 10 ani).
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-primary">7. Partajarea Datelor</h2>
                <p className="mb-4">
                  Nu vindem, nu închiriem sau nu partajăm datele personale cu terți în scopuri comerciale. 
                  Datele pot fi partajate doar cu:
                </p>
                <ul className="list-disc pl-6 mb-4">
                  <li>Furnizori de servicii IT (pentru hosting și mentenanță site)</li>
                  <li>Autoritățile competente, dacă este cerut de lege</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-primary">8. Drepturile Dvs.</h2>
                <p className="mb-4">Conform GDPR, aveți următoarele drepturi:</p>
                <ul className="list-disc pl-6 mb-4">
                  <li><strong>Dreptul de acces:</strong> puteți solicita informații despre datele prelucrate</li>
                  <li><strong>Dreptul la rectificare:</strong> puteți solicita corectarea datelor incorecte</li>
                  <li><strong>Dreptul la ștergere:</strong> puteți solicita ștergerea datelor („dreptul de a fi uitat”)</li>
                  <li><strong>Dreptul la restricționare:</strong> puteți solicita limitarea prelucrării</li>
                  <li><strong>Dreptul la portabilitate:</strong> puteți solicita transferul datelor</li>
                  <li><strong>Dreptul de opoziție:</strong> puteți vă opune anumitor prelucrări</li>
                  <li><strong>Dreptul de a retrage consimțământul:</strong> puteți retrage consimțământul oricând</li>
                </ul>
                <p className="mb-4">
                  Pentru a exercita aceste drepturi, ne puteți contacta la numărul de telefon 0722178964 sau prin 
                  formularul de contact de pe site.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-primary">9. Securitatea Datelor</h2>
                <p className="mb-4">
                  Implementăm măsuri tehnice și organizatorice adecvate pentru protejarea datelor personale împotriva 
                  accesului neautorizat, pierderii, distrugerii sau modificării. Site-ul folosește conexiuni securizate 
                  (HTTPS) pentru protecția datelor în timpul transmisiei.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-primary">10. Cookies</h2>
                <p className="mb-4">
                  Site-ul nostru folosește cookies pentru îmbunătățirea experienței utilizatorilor. Pentru mai multe 
                  detalii, consultați <a href="/cookie-policy" className="text-accent hover:underline">Politica de Cookies</a>.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-primary">11. Modificări ale Politicii</h2>
                <p className="mb-4">
                  Ne rezervăm dreptul de a modifica această politică de confidențialitate. Modificările vor fi 
                  publicate pe această pagină cu data actualizării. Vă recomandăm să consultați periodic această 
                  pagină pentru a fi la curent cu modificările.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-primary">12. Contact</h2>
                <p className="mb-4">
                  Pentru întrebări sau solicitări privind prelucrarea datelor personale, ne puteți contacta:
                </p>
                <ul className="list-none mb-4">
                  <li><strong>Telefon:</strong> 0722178964</li>
                  <li><strong>Adresă:</strong> Strada Ion Luca Caragiale 8, Dudu 077041</li>
                </ul>
                <p className="mb-4">
                  Aveți, de asemenea, dreptul de a depune o plângere la Autoritatea Națională de Supraveghere a 
                  Prelucrării Datelor cu Caracter Personal (ANSPDCP) dacă considerați că prelucrarea datelor dvs. 
                  personale încalcă legislația aplicabilă.
                </p>
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

