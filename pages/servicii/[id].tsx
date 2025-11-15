import Head from 'next/head';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingContactButton from '@/components/FloatingContactButton';
import Link from 'next/link';
import { useState } from 'react';

// Funcție pentru SVG-uri fallback (folosită când imaginea reală nu există)
const getServiceImageSVG = (serviceId: string) => {
  const images: Record<string, React.ReactNode> = {
    diagnoza: (
      <div className="w-full h-64 md:h-96 bg-gradient-to-br from-primary/20 to-primary-dark/20 rounded-2xl p-8 flex items-center justify-center">
        <svg width="100%" height="100%" viewBox="0 0 400 300" className="max-w-md">
          <rect x="50" y="50" width="300" height="200" rx="10" fill="none" stroke="#204a97" strokeWidth="3" />
          <line x1="50" y1="150" x2="350" y2="150" stroke="#204a97" strokeWidth="2" />
          <circle cx="100" cy="100" r="15" fill="#f6d607" />
          <circle cx="200" cy="100" r="15" fill="#f6d607" />
          <circle cx="300" cy="100" r="15" fill="#f6d607" />
          <path d="M 80 200 Q 120 180, 160 200 T 240 200 T 320 200" fill="none" stroke="#204a97" strokeWidth="3" />
          <text x="200" y="270" textAnchor="middle" fill="#204a97" fontSize="20" fontWeight="bold">OBD Diagnostic</text>
        </svg>
      </div>
    ),
    'kit-ambreiaj': (
      <div className="w-full h-64 md:h-96 bg-gradient-to-br from-primary/20 to-primary-dark/20 rounded-2xl p-8 flex items-center justify-center">
        <svg width="100%" height="100%" viewBox="0 0 400 300" className="max-w-md">
          <circle cx="200" cy="150" r="80" fill="none" stroke="#204a97" strokeWidth="4" />
          <circle cx="200" cy="150" r="40" fill="none" stroke="#f6d607" strokeWidth="3" />
          <path d="M 200 70 L 200 50 M 200 230 L 200 250 M 70 150 L 50 150 M 330 150 L 350 150" stroke="#204a97" strokeWidth="3" strokeLinecap="round" />
          <circle cx="200" cy="150" r="10" fill="#204a97" />
          <text x="200" y="270" textAnchor="middle" fill="#204a97" fontSize="18" fontWeight="bold">Kit Ambreiaj</text>
        </svg>
      </div>
    ),
    'kit-distributie': (
      <div className="w-full h-64 md:h-96 bg-gradient-to-br from-primary/20 to-primary-dark/20 rounded-2xl p-8 flex items-center justify-center">
        <svg width="100%" height="100%" viewBox="0 0 400 300" className="max-w-md">
          <circle cx="200" cy="150" r="60" fill="none" stroke="#204a97" strokeWidth="4" />
          <circle cx="200" cy="150" r="20" fill="#f6d607" />
          <path d="M 200 90 L 200 70 M 200 210 L 200 230" stroke="#204a97" strokeWidth="3" strokeLinecap="round" />
          <circle cx="140" cy="150" r="15" fill="#204a97" />
          <circle cx="260" cy="150" r="15" fill="#204a97" />
          <text x="200" y="270" textAnchor="middle" fill="#204a97" fontSize="18" fontWeight="bold">Distribuție</text>
        </svg>
      </div>
    ),
    'tren-rulare': (
      <div className="w-full h-64 md:h-96 bg-gradient-to-br from-primary/20 to-primary-dark/20 rounded-2xl p-8 flex items-center justify-center">
        <svg width="100%" height="100%" viewBox="0 0 400 300" className="max-w-md">
          <circle cx="100" cy="200" r="40" fill="none" stroke="#204a97" strokeWidth="4" />
          <circle cx="100" cy="200" r="25" fill="none" stroke="#f6d607" strokeWidth="3" />
          <circle cx="300" cy="200" r="40" fill="none" stroke="#204a97" strokeWidth="4" />
          <circle cx="300" cy="200" r="25" fill="none" stroke="#f6d607" strokeWidth="3" />
          <rect x="80" y="100" width="240" height="20" rx="10" fill="#204a97" />
          <path d="M 100 120 L 100 200 M 300 120 L 300 200" stroke="#204a97" strokeWidth="3" />
          <text x="200" y="270" textAnchor="middle" fill="#204a97" fontSize="18" fontWeight="bold">Tren Rulare</text>
        </svg>
      </div>
    ),
    'sistem-franare': (
      <div className="w-full h-64 md:h-96 bg-gradient-to-br from-primary/20 to-primary-dark/20 rounded-2xl p-8 flex items-center justify-center">
        <svg width="100%" height="100%" viewBox="0 0 400 300" className="max-w-md">
          <circle cx="200" cy="150" r="70" fill="none" stroke="#204a97" strokeWidth="5" />
          <circle cx="200" cy="150" r="50" fill="none" stroke="#f6d607" strokeWidth="4" />
          <rect x="190" y="80" width="20" height="20" rx="5" fill="#204a97" />
          <rect x="190" y="200" width="20" height="20" rx="5" fill="#204a97" />
          <text x="200" y="270" textAnchor="middle" fill="#204a97" fontSize="18" fontWeight="bold">Sistem Frânare</text>
        </svg>
      </div>
    ),
    'reparatii-motoare': (
      <div className="w-full h-64 md:h-96 bg-gradient-to-br from-primary/20 to-primary-dark/20 rounded-2xl p-8 flex items-center justify-center">
        <svg width="100%" height="100%" viewBox="0 0 400 300" className="max-w-md">
          <rect x="80" y="80" width="240" height="140" rx="10" fill="none" stroke="#204a97" strokeWidth="4" />
          <rect x="80" y="60" width="240" height="30" rx="5" fill="#204a97" />
          <circle cx="150" cy="150" r="20" fill="#f6d607" />
          <circle cx="200" cy="150" r="20" fill="#f6d607" />
          <circle cx="250" cy="150" r="20" fill="#f6d607" />
          <path d="M 200 130 L 200 110 M 200 170 L 200 190" stroke="#204a97" strokeWidth="3" />
          <text x="200" y="270" textAnchor="middle" fill="#204a97" fontSize="18" fontWeight="bold">Motor</text>
        </svg>
      </div>
    ),
    'schimb-ulei-filtre': (
      <div className="w-full h-64 md:h-96 bg-gradient-to-br from-primary/20 to-primary-dark/20 rounded-2xl p-8 flex items-center justify-center">
        <svg width="100%" height="100%" viewBox="0 0 400 300" className="max-w-md">
          <path d="M 200 50 L 200 30 L 180 30 L 200 50 L 220 30 L 200 50" fill="#204a97" />
          <rect x="160" y="50" width="80" height="180" rx="10" fill="none" stroke="#204a97" strokeWidth="4" />
          <rect x="170" y="60" width="60" height="160" rx="5" fill="#f6d607" opacity="0.6" />
          <circle cx="200" cy="100" r="15" fill="#204a97" />
          <text x="200" y="270" textAnchor="middle" fill="#204a97" fontSize="18" fontWeight="bold">Ulei & Filtre</text>
        </svg>
      </div>
    ),
    vulcanizare: (
      <div className="w-full h-64 md:h-96 bg-gradient-to-br from-primary/20 to-primary-dark/20 rounded-2xl p-8 flex items-center justify-center">
        <svg width="100%" height="100%" viewBox="0 0 400 300" className="max-w-md">
          <circle cx="200" cy="150" r="80" fill="none" stroke="#204a97" strokeWidth="5" />
          <circle cx="200" cy="150" r="50" fill="none" stroke="#f6d607" strokeWidth="4" />
          <circle cx="200" cy="150" r="20" fill="#204a97" />
          <text x="200" y="270" textAnchor="middle" fill="#204a97" fontSize="18" fontWeight="bold">Vulcanizare</text>
        </svg>
      </div>
    ),
    'geometrie-3d': (
      <div className="w-full h-64 md:h-96 bg-gradient-to-br from-primary/20 to-primary-dark/20 rounded-2xl p-8 flex items-center justify-center">
        <svg width="100%" height="100%" viewBox="0 0 400 300" className="max-w-md">
          <rect x="50" y="50" width="300" height="200" rx="10" fill="none" stroke="#204a97" strokeWidth="3" opacity="0.5" />
          <line x1="200" y1="50" x2="200" y2="250" stroke="#204a97" strokeWidth="2" />
          <line x1="50" y1="150" x2="350" y2="150" stroke="#204a97" strokeWidth="2" />
          <circle cx="200" cy="150" r="30" fill="#f6d607" opacity="0.7" />
          <circle cx="200" cy="150" r="10" fill="#204a97" />
          <path d="M 200 120 L 200 150 L 230 150" fill="none" stroke="#204a97" strokeWidth="3" />
          <text x="200" y="270" textAnchor="middle" fill="#204a97" fontSize="18" fontWeight="bold">Geometrie 3D</text>
        </svg>
      </div>
    ),
    echilibrare: (
      <div className="w-full h-64 md:h-96 bg-gradient-to-br from-primary/20 to-primary-dark/20 rounded-2xl p-8 flex items-center justify-center">
        <svg width="100%" height="100%" viewBox="0 0 400 300" className="max-w-md">
          <circle cx="200" cy="150" r="70" fill="none" stroke="#204a97" strokeWidth="4" />
          <circle cx="200" cy="150" r="50" fill="none" stroke="#f6d607" strokeWidth="3" />
          <circle cx="200" cy="150" r="30" fill="none" stroke="#204a97" strokeWidth="2" />
          <circle cx="200" cy="150" r="10" fill="#204a97" />
          <circle cx="150" cy="150" r="8" fill="#f6d607" />
          <circle cx="250" cy="150" r="8" fill="#f6d607" />
          <text x="200" y="270" textAnchor="middle" fill="#204a97" fontSize="18" fontWeight="bold">Echilibrare</text>
        </svg>
      </div>
    ),
    'indreptare-roluri-jante': (
      <div className="w-full h-64 md:h-96 bg-gradient-to-br from-primary/20 to-primary-dark/20 rounded-2xl p-8 flex items-center justify-center">
        <svg width="100%" height="100%" viewBox="0 0 400 300" className="max-w-md">
          <circle cx="200" cy="150" r="80" fill="none" stroke="#204a97" strokeWidth="5" />
          <circle cx="200" cy="150" r="60" fill="none" stroke="#f6d607" strokeWidth="4" />
          <path d="M 120 150 L 200 150 M 280 150 L 200 150 M 200 70 L 200 150 M 200 230 L 200 150" stroke="#204a97" strokeWidth="3" />
          <circle cx="200" cy="150" r="15" fill="#204a97" />
          <text x="200" y="270" textAnchor="middle" fill="#204a97" fontSize="16" fontWeight="bold">Îndreptare Jante</text>
        </svg>
      </div>
    ),
    dejantat: (
      <div className="w-full h-64 md:h-96 bg-gradient-to-br from-primary/20 to-primary-dark/20 rounded-2xl p-8 flex items-center justify-center">
        <svg width="100%" height="100%" viewBox="0 0 400 300" className="max-w-md">
          <circle cx="200" cy="150" r="70" fill="none" stroke="#204a97" strokeWidth="5" />
          <circle cx="200" cy="150" r="50" fill="none" stroke="#f6d607" strokeWidth="4" />
          <path d="M 200 80 L 200 50 M 200 220 L 200 250" stroke="#204a97" strokeWidth="4" strokeLinecap="round" />
          <circle cx="200" cy="150" r="20" fill="#204a97" />
          <text x="200" y="270" textAnchor="middle" fill="#204a97" fontSize="18" fontWeight="bold">Dejantat</text>
        </svg>
      </div>
    ),
  };
  
  return images[serviceId] || images.vulcanizare;
};

// Componentă wrapper pentru imagine
const ServiceImageWrapper = ({ serviceId }: { serviceId: string }) => {
  const [imageError, setImageError] = useState(false);

  const imageNames: Record<string, string> = {
    diagnoza: 'diagnoza.jpg',
    'kit-ambreiaj': 'kit-ambreiaj.jpg',
    'kit-distributie': 'kit-distributie.jpg',
    'tren-rulare': 'tren-rulare.jpg',
    'sistem-franare': 'sistem-franare.jpg',
    'reparatii-motoare': 'reparatii-motoare.jpg',
    'schimb-ulei-filtre': 'schimb-ulei-filtre.jpg',
    vulcanizare: 'vulcanizare.jpg',
    'geometrie-3d': 'geometrie-3d.jpg',
    echilibrare: 'echilibrare.jpg',
    'indreptare-roluri-jante': 'indreptare-roluri-jante.jpg',
    dejantat: 'dejantat.jpg',
  };

  const imageName = imageNames[serviceId] || 'vulcanizare.jpg';
  const imagePath = `/images/servicii/${imageName}`;

  if (imageError) {
    return getServiceImageSVG(serviceId);
  }

  return (
    <div className="w-full h-64 md:h-96 bg-gradient-to-br from-primary/20 to-primary-dark/20 rounded-2xl overflow-hidden relative">
      <Image
        src={imagePath}
        alt={`${serviceId} service`}
        fill
        className="object-cover"
        onError={() => setImageError(true)}
        priority
      />
    </div>
  );
};

// Date detaliate pentru fiecare serviciu
const serviceDetails: Record<string, {
  title: string;
  icon: React.ReactNode;
  description: string;
  fullDescription: string;
  benefits: string[];
  process: string[];
  whyChoose: string[];
  priceRange?: string;
}> = {
  diagnoza: {
    title: 'Diagnoză',
    icon: (
      <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
    description: 'Scanare computer și diagnostic electronic cu echipamente moderne',
    fullDescription: 'Oferim servicii complete de diagnostic auto folosind echipamente de ultimă generație. Identificăm rapid orice problemă a vehiculului tău și oferim raporturi detaliate cu estimări precise de costuri și timp pentru reparații.',
    benefits: [
      'Scanare OBD completă pentru toate sistemele',
      'Diagnostic electronic avansat',
      'Raport detaliat cu coduri de eroare',
      'Estimare precisă costuri și timp',
      'Consiliere profesională pentru reparații',
      'Verificare post-reparație inclusă',
    ],
    process: [
      'Conectăm echipamentul de diagnostic la portul OBD al vehiculului',
      'Scanăm toate sistemele electronice (motor, transmisie, ABS, airbag, etc.)',
      'Analizăm codurile de eroare și parametrii în timp real',
      'Generăm raport detaliat cu toate problemele identificate',
      'Oferim recomandări și estimări pentru reparații',
    ],
    whyChoose: [
      'Echipamente de ultimă generație compatibile cu toate mărcile',
      'Experiență de peste 5 ani în diagnostic auto',
      'Raporturi clare și ușor de înțeles',
      'Diagnostic rapid în 30-60 de minute',
    ],
    priceRange: '50-250 RON',
  },
  'kit-ambreiaj': {
    title: 'Schimbare Kit Ambreiaj',
    icon: (
      <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v4M12 18v4M2 12h4M18 12h4" />
      </svg>
    ),
    description: 'Schimb complet kit ambreiaj cu piese de calitate',
    fullDescription: 'Serviciu complet de schimbare kit ambreiaj cu piese originale sau echivalente de înaltă calitate. Lucrare profesională care asigură funcționare optimă a transmisiei și durabilitate pe termen lung.',
    benefits: [
      'Kit complet ambreiaj (disc, plăcuțe, rulment)',
      'Piese originale sau echivalente premium',
      'Montaj profesional de către mecanicieni experimentați',
      'Garanție completă pentru lucrare și piese',
      'Verificare funcționalitate post-montaj',
      'Testare în condiții reale de conducere',
    ],
    process: [
      'Diagnostic pentru identificarea problemei',
      'Demontare transmisie și vechiul kit ambreiaj',
      'Verificare volant motor și ajustare dacă e necesar',
      'Montaj kit nou ambreiaj',
      'Reglare pedala ambreiaj',
      'Testare funcționalitate completă',
    ],
    whyChoose: [
      'Folosim doar piese de calitate superioară',
      'Experiență cu toate tipurile de transmisii',
      'Lucrare garantată cu documentație completă',
      'Timp de execuție optimizat',
    ],
    priceRange: '800-1500 RON',
  },
  'kit-distributie': {
    title: 'Înlocuire Kit-uri de Distribuție',
    icon: (
      <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" />
      </svg>
    ),
    description: 'Schimb preventiv sau reparator al kit-ului de distribuție',
    fullDescription: 'Serviciu esențial pentru siguranța motorului. Înlocuim kit-ul de distribuție (curea, role, pompa de apă) cu piese de calitate pentru a preveni avariile costisitoare ale motorului.',
    benefits: [
      'Kit distribuție complet (curea, role, pompa apă)',
      'Piese originale sau echivalente de calitate',
      'Montaj precis cu verificare sincronizare',
      'Garanție lucrare și piese',
      'Verificare tensiune corectă',
      'Documentație pentru următorul schimb',
    ],
    process: [
      'Demontare curea veche și componente',
      'Verificare starea rolelor și pompei de apă',
      'Montaj kit nou cu sincronizare precisă',
      'Reglare tensiune corectă',
      'Verificare funcționare și testare',
      'Notare kilometraj pentru următorul schimb',
    ],
    whyChoose: [
      'Prevenim avarii costisitoare ale motorului',
      'Folosim doar piese de încredere',
      'Sincronizare precisă pentru funcționare optimă',
      'Consiliere pentru întreținere preventivă',
    ],
    priceRange: '400-1200 RON',
  },
  'tren-rulare': {
    title: 'Înlocuire Subansamble Tren de Rulare',
    icon: (
      <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="6" cy="18" r="3" />
        <circle cx="18" cy="18" r="3" />
        <path d="M6 18h12M6 15v-6M18 15v-6" />
      </svg>
    ),
    description: 'Reparații complete tren de rulare',
    fullDescription: 'Servicii complete de reparație și înlocuire componentelor trenului de rulare pentru confort și siguranță maximă la condus. Verificăm și ajustăm geometria pentru uzura uniformă a anvelopelor.',
    benefits: [
      'Bielete și silent blocuri noi',
      'Amortizoare și arcuri de calitate',
      'Rulmenți roți noi',
      'Verificare și reglare geometrie',
      'Testare funcționalitate completă',
      'Garanție pentru toate componentele',
    ],
    process: [
      'Diagnostic complet tren de rulare',
      'Identificare componente uzate',
      'Demontare și înlocuire piese',
      'Reglare geometrie roți',
      'Echilibrare roți',
      'Testare în condiții reale',
    ],
    whyChoose: [
      'Confort și siguranță îmbunătățite',
      'Uzură uniformă a anvelopelor',
      'Piese de calitate pentru durabilitate',
      'Verificare completă a sistemului',
    ],
    priceRange: '150-400 RON per componentă',
  },
  'sistem-franare': {
    title: 'Verificare și Reparații Sistem de Frânare',
    icon: (
      <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" />
        <path d="M8 12h8" />
      </svg>
    ),
    description: 'Service complet sistem de frânare',
    fullDescription: 'Siguranța este prioritatea noastră. Oferim verificare și reparații complete pentru sistemul de frânare: plăcuțe, discuri, lichid frână, etrieri. Verificăm toate componentele și testăm funcționalitatea pentru siguranță maximă.',
    benefits: [
      'Schimb plăcuțe și discuri frână',
      'Verificare etrieri și cilindri',
      'Schimb lichid frână și purjare',
      'Verificare sistem ABS',
      'Testare funcționalitate completă',
      'Garanție pentru toate lucrările',
    ],
    process: [
      'Verificare vizuală sistem frânare',
      'Măsurare grosime discuri și plăcuțe',
      'Verificare etrieri și cilindri',
      'Schimb componente uzate',
      'Purjare și schimb lichid frână',
      'Testare funcționalitate și eficiență',
    ],
    whyChoose: [
      'Siguranță maximă garantată',
      'Verificare completă a tuturor componentelor',
      'Piese de calitate pentru performanță',
      'Testare riguroasă post-reparație',
    ],
    priceRange: '150-500 RON per axă',
  },
  'reparatii-motoare': {
    title: 'Înlocuiri și Reparații Motoare',
    icon: (
      <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="2" y="6" width="20" height="12" rx="2" />
        <path d="M6 6V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v2" />
        <path d="M12 10v4M8 12h8" />
      </svg>
    ),
    description: 'Reparații complexe motor',
    fullDescription: 'Reparații complexe și profesionale pentru toate tipurile de motoare. De la schimburi simple de piese la reparații majore ale blocului motor, capului cilindrilor și distribuției. Experiență și profesionalism garantat.',
    benefits: [
      'Reparații bloc motor complete',
      'Schimb cap cilindri și garnituri',
      'Reparații distribuție și sincronizare',
      'Schimb bujii, bobine, senzori',
      'Reparații sistem răcire',
      'Garanție pentru toate lucrările',
    ],
    process: [
      'Diagnostic complet motor',
      'Identificare problemă și planificare reparație',
      'Demontare componente necesare',
      'Reparație sau înlocuire piese',
      'Montaj și sincronizare',
      'Testare și verificare funcționalitate',
    ],
    whyChoose: [
      'Experiență cu toate tipurile de motoare',
      'Piese originale sau echivalente premium',
      'Reparații durabile și de calitate',
      'Consiliere tehnică profesională',
    ],
    priceRange: '500-2000 RON',
  },
  'schimb-ulei-filtre': {
    title: 'Schimb Ulei / Filtre',
    icon: (
      <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
      </svg>
    ),
    description: 'Service rapid pentru schimbul uleiului și filtrelor',
    fullDescription: 'Service rapid și eficient pentru schimbul uleiului și filtrelor. Folosim doar produse de calitate superioară recomandate de producători. Schimbul se face în 30-45 de minute, perfect pentru o pauză rapidă.',
    benefits: [
      'Uleiuri premium (5W-30, 5W-40, 10W-40, etc.)',
      'Filtre originale sau echivalente',
      'Service rapid (30-45 minute)',
      'Prețuri competitive',
      'Verificare nivel ulei inclusă',
      'Consiliere pentru următorul schimb',
    ],
    process: [
      'Verificare nivel și calitate ulei vechi',
      'Demontare filtru ulei vechi',
      'Drenare completă ulei vechi',
      'Montaj filtru nou',
      'Adăugare ulei nou conform specificațiilor',
      'Verificare nivel final și testare',
    ],
    whyChoose: [
      'Produse de calitate superioară',
      'Service rapid fără programare',
      'Prețuri transparente și competitive',
      'Consiliere pentru întreținere optimă',
    ],
    priceRange: '150-400 RON',
  },
  vulcanizare: {
    title: 'Vulcanizare',
    icon: (
      <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="6" />
      </svg>
    ),
    description: 'Servicii complete de vulcanizare',
    fullDescription: 'Servicii complete de vulcanizare: îndreptare roluri jante, echilibrare, dejantat, geometrie 3D. Oferim soluții profesionale pentru toate nevoile tale legate de anvelope și jante. Folosim echipamente moderne pentru precizie maximă.',
    benefits: [
      'Îndreptare roluri jante',
      'Echilibrare profesională',
      'Dejantat și montaj anvelope',
      'Geometrie 3D pentru reglare precisă',
      'Garanție pentru toate lucrările',
      'Echipamente moderne și precise',
    ],
    process: [
      'Verificare starea jantelor și anvelopelor',
      'Demontare anvelope dacă e necesar',
      'Reparație sau înlocuire componente',
      'Echilibrare roți',
      'Reglare geometrie 3D',
      'Testare și verificare finală',
    ],
    whyChoose: [
      'Echipamente 3D de ultimă generație',
      'Precizie maximă pentru uzură uniformă',
      'Servicii complete într-un singur loc',
      'Experiență în toate tipurile de jante',
    ],
    priceRange: '20-300 RON',
  },
  'geometrie-3d': {
    title: 'Geometrie 3D',
    icon: (
      <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="2" y="2" width="20" height="20" rx="2" />
        <path d="M12 2v20M2 12h20" />
        <circle cx="12" cy="12" r="2" />
      </svg>
    ),
    description: 'Reglare precisă geometrie roți cu echipamente 3D moderne',
    fullDescription: 'Geometrie 3D pentru reglarea precisă a unghiurilor roților. Folosim echipamente de ultimă generație care măsoară cu precizie unghiurile de convergență, divergență și înclinare pentru uzură uniformă a anvelopelor și siguranță maximă.',
    benefits: [
      'Măsurare precisă cu tehnologie 3D',
      'Reglare convergență și divergență',
      'Reglare unghi înclinare (camber)',
      'Reglare unghi pivot (caster)',
      'Raport detaliat cu măsurători',
      'Garanție pentru reglare',
    ],
    process: [
      'Montare senzori 3D pe roți',
      'Măsurare unghiuri curente',
      'Comparare cu specificațiile producătorului',
      'Reglare precisă a tuturor unghiurilor',
      'Verificare finală măsurători',
      'Raport detaliat cu valorile finale',
    ],
    whyChoose: [
      'Echipamente 3D de ultimă generație',
      'Precizie maximă pentru toate mărcile',
      'Uzură uniformă a anvelopelor',
      'Siguranță și confort îmbunătățite',
    ],
    priceRange: '150-250 RON',
  },
  echilibrare: {
    title: 'Echilibrare',
    icon: (
      <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="6" />
        <path d="M12 2v4M12 18v4M2 12h4M18 12h4" />
      </svg>
    ),
    description: 'Echilibrare profesională a roților',
    fullDescription: 'Echilibrare profesională a roților pentru o conducere lină și fără vibrații. Folosim echipamente moderne care detectează cu precizie dezechilibrul și aplică greutățile necesare pentru o distribuție uniformă.',
    benefits: [
      'Echilibrare precisă cu echipamente moderne',
      'Eliminare vibrații la viteză',
      'Uzură uniformă a anvelopelor',
      'Confort îmbunătățit la condus',
      'Prelungire durată de viață anvelope',
      'Garanție pentru lucrare',
    ],
    process: [
      'Montare roată pe echipament de echilibrare',
      'Măsurare dezechilibru static și dinamic',
      'Calculare greutăți necesare',
      'Aplicare greutăți în pozițiile corecte',
      'Verificare finală echilibrare',
      'Testare la diferite viteze',
    ],
    whyChoose: [
      'Echipamente moderne și precise',
      'Echilibrare statică și dinamică',
      'Rezultate imediate și vizibile',
      'Serviciu rapid (15-20 minute)',
    ],
    priceRange: '30-50 RON per roată',
  },
  'indreptare-roluri-jante': {
    title: 'Îndreptare Roluri Jante',
    icon: (
      <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="6" />
        <path d="M12 2v4M12 18v4M2 12h4M18 12h4" />
      </svg>
    ),
    description: 'Reparație și îndreptare jante deteriorate',
    fullDescription: 'Serviciu profesional de îndreptare și reparare jante deteriorate. Restabilim forma originală a jantelor afectate de impacturi sau uzură, asigurând atât aspectul estetic, cât și funcționalitatea optimă. Folosim echipamente specializate pentru precizie maximă.',
    benefits: [
      'Îndreptare jante deteriorate',
      'Reparație fisuri și deformări',
      'Restaurare formă originală',
      'Verificare echilibrare post-reparație',
      'Garanție pentru lucrare',
      'Echipamente specializate moderne',
    ],
    process: [
      'Verificare starea jantelor și identificare defectelor',
      'Demontare anvelope dacă e necesar',
      'Îndreptare și reparare deformări',
      'Verificare integritate structurală',
      'Echilibrare jantă după reparație',
      'Montaj anvelope și testare finală',
    ],
    whyChoose: [
      'Echipamente specializate pentru îndreptare',
      'Experiență cu toate tipurile de jante',
      'Restaurare completă a funcționalității',
      'Prețuri competitive',
    ],
    priceRange: '100-300 RON per jantă',
  },
  dejantat: {
    title: 'Dejantat',
    icon: (
      <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="6" />
        <path d="M12 2v4M12 18v4" />
      </svg>
    ),
    description: 'Montaj și demontaj profesional de anvelope',
    fullDescription: 'Serviciu rapid și profesional de dejantat (demontaj) și montaj anvelope. Folosim echipamente moderne care protejează atât janta, cât și anvelopa în timpul operațiunii. Serviciu esențial pentru schimbarea anvelopelor sezoniere sau reparații.',
    benefits: [
      'Demontaj anvelope fără deteriorare',
      'Montaj anvelope noi sau refolosite',
      'Protecție jantă și anvelopă',
      'Echipamente moderne și precise',
      'Serviciu rapid (15-20 minute)',
      'Garanție pentru lucrare',
    ],
    process: [
      'Demontare anvelopă veche de pe jantă',
      'Verificare starea jantei',
      'Curățare și pregătire jantă',
      'Montaj anvelopă nouă sau refolosită',
      'Verificare etanșeitate',
      'Echilibrare dacă e necesar',
    ],
    whyChoose: [
      'Echipamente moderne care protejează janta',
      'Serviciu rapid și eficient',
      'Experiență cu toate tipurile de jante',
      'Prețuri accesibile',
    ],
    priceRange: '20-40 RON per roată',
  },
};

export default function ServiceDetail() {
  const router = useRouter();
  const { id } = router.query;
  
  const service = id ? serviceDetails[id as string] : null;

  if (!service) {
    return (
      <>
        <Head>
          <title>Serviciu negăsit — ConiCar Service Auto & Vulcanizare</title>
        </Head>
        <Header />
        <main className="pt-8">
          <section className="section-padding pt-32 md:pt-24">
            <div className="container-custom text-center">
              <h1 className="text-4xl font-bold mb-4 text-primary">Serviciu negăsit</h1>
              <p className="text-gray-600 mb-8">Serviciul căutat nu există.</p>
              <Link href="/servicii" className="btn-primary">
                Înapoi la servicii
              </Link>
            </div>
          </section>
        </main>
        <Footer />
        <FloatingContactButton />
      </>
    );
  }

  return (
    <>
      <Head>
        <title>{service.title} — ConiCar Service Auto & Vulcanizare</title>
        <meta
          name="description"
          content={`${service.description}. ${service.fullDescription}`}
        />
        <meta name="keywords" content={`${service.title}, service auto Dudu, ConiCar`} />
        <link rel="canonical" href={`https://conicar.ro/servicii/${id}`} />
      </Head>

      <Header />
      <main className="pt-8">
        {/* Hero Section */}
        <section className="section-padding pt-32 md:pt-24 bg-gradient-to-br from-primary to-primary-dark text-white">
          <div className="container-custom">
            <Link href="/servicii" className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="mr-2">
                <polyline points="15 18 9 12 15 6" />
              </svg>
              Înapoi la servicii
            </Link>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex items-center justify-center w-20 h-20 bg-white/10 rounded-2xl text-white">
                    {service.icon}
                  </div>
                  <h1 className="text-4xl md:text-5xl font-bold">{service.title}</h1>
                </div>
                <p className="text-xl opacity-90 max-w-2xl">{service.fullDescription}</p>
              </div>
              <div className="order-first md:order-last">
                <ServiceImageWrapper serviceId={id as string} />
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <h2 className="text-3xl font-bold text-primary mb-8 text-center">Ce include serviciul</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {service.benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="bg-gray-50 rounded-xl p-6 border border-gray-200 hover:border-primary transition-colors"
                >
                  <div className="flex items-start space-x-3">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#f6d607"
                      strokeWidth="2.5"
                      className="flex-shrink-0 mt-0.5"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span className="text-gray-700 font-medium">{benefit}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <h2 className="text-3xl font-bold text-primary mb-8 text-center">Cum lucrăm</h2>
            <div className="max-w-4xl mx-auto">
              <div className="space-y-6">
                {service.process.map((step, index) => (
                  <div
                    key={index}
                    className="flex items-start space-x-4 bg-white rounded-xl p-6 shadow-md"
                  >
                    <div className="flex-shrink-0 w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold">
                      {index + 1}
                    </div>
                    <p className="text-gray-700 text-lg pt-2">{step}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Section */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <h2 className="text-3xl font-bold text-primary mb-8 text-center">De ce să ne alegi</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {service.whyChoose.map((reason, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-xl p-6 border border-primary/20"
                >
                  <div className="flex items-start space-x-3">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#204a97"
                      strokeWidth="2.5"
                      className="flex-shrink-0 mt-0.5"
                    >
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                      <polyline points="22 4 12 14.01 9 11.01" />
                    </svg>
                    <span className="text-gray-700 font-medium">{reason}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Price & CTA Section */}
        <section className="section-padding bg-primary-dark text-white">
          <div className="container-custom text-center">
            {service.priceRange && (
              <div className="mb-8">
                <p className="text-lg opacity-90 mb-2">Preț orientativ</p>
                <p className="text-4xl font-bold text-accent">{service.priceRange}</p>
                <p className="text-sm opacity-75 mt-2">Prețul poate varia în funcție de modelul vehiculului</p>
              </div>
            )}
            <h2 className="text-3xl font-bold mb-6">Pregătit să începem?</h2>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Contactează-ne pentru o ofertă personalizată sau programează o vizită
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact#programare" className="btn-primary text-lg px-8 py-4">
                Programează acum
              </Link>
              <a href="tel:0722178964" className="btn-secondary text-lg px-8 py-4">
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

