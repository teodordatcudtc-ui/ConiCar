# ConiCar Service Auto - Site Web

Site web profesional pentru ConiCar Service Auto & Vulcanizare, construit cu Next.js. Site-ul este complet funcțional, optimizat pentru SEO, mobile-first și include toate funcționalitățile necesare pentru un service auto modern.

## 🚀 Quick Start

### Instalare dependențe
```bash
npm install
```

### Rulare în modul dezvoltare
```bash
npm run dev
```
Site-ul va fi disponibil la `http://localhost:3000`

### Build pentru producție
```bash
npm run build
```
Generează site-ul static în directorul `out/`

### Servire site static
După build, poți servi site-ul static cu:
```bash
npx serve out
```
sau
```bash
python -m http.server 8000 -d out
```

## 📚 Documentație Completă

- **[TODO.md](./TODO.md)** - Lista completă de verificări pas cu pas
- **[GHID_COMENZI.md](./GHID_COMENZI.md)** - Ghid detaliat cu toate comenzile și explicații
- **[SECURITATE.md](./SECURITATE.md)** - Recomandări securitate și configurații
- **[LIVRARE_FINALA.md](./LIVRARE_FINALA.md)** - Lista completă de fișiere și funcționalități

## 🛠️ Tehnologii

- **Next.js 14** - Framework React pentru producție
- **TypeScript** - Type safety
- **Tailwind CSS** - Stilizare modernă
- **Framer Motion** - Animații fluide
- **React Hooks** - State management

## 📁 Structură Proiect

```
conicar/
├── pages/          # Paginile Next.js (index, servicii, preturi, despre, contact)
├── components/     # Componente reutilizabile (Header, Footer, Hero, etc.)
├── public/         # Resurse statice (imagini, robots.txt, sitemap.xml)
├── styles/         # Stiluri globale (Tailwind + CSS custom)
└── ...
```

## ✨ Funcționalități

- ✅ 5 pagini complete (Acasă, Servicii, Prețuri, Despre, Contact)
- ✅ Design responsive mobile-first
- ✅ Animații și microinteracțiuni
- ✅ Formular programare cu validare
- ✅ Galerie cu lightbox
- ✅ Before/After slider interactiv
- ✅ Timeline proces de lucru
- ✅ Testimoniale cu rating
- ✅ SEO complet (meta tags, JSON-LD, sitemap, robots)
- ✅ Accesibilitate (A11y) - WCAG AA/AAA
- ✅ Optimizări performanță

## ⚙️ Configurări Necesare

1. **reCAPTCHA v3** - Adaugă cheia site în `components/AppointmentForm.tsx`
2. **Google Analytics** (opțional) - Adaugă tracking ID în `pages/_app.tsx`
3. **Imagini** - Înlocuiește placeholder-urile cu fotografii reale (vezi `public/images/placeholder-info.md`)

## 🎨 Paleta de Culori

- **Primar:** `#204a97` (Albastru închis)
- **Accent:** `#f6d607` (Galben strălucitor)
- **Secundar:** `#b5aeb6` (Gri-lavandă)

## 📞 Informații Business

- **Nume:** ConiCar Service Auto
- **Telefon:** 0722178964
- **Adresă:** Strada Ion Luca Caragiale 8, Dudu 077041
- **Program:** L-V: 08:00-18:00, S: 09:00-14:00, D: Închis

## 🔍 SEO

Site-ul include:
- Meta tags optimizate pentru fiecare pagină
- JSON-LD LocalBusiness schema complet
- Sitemap.xml
- Robots.txt
- Open Graph tags
- Twitter Cards
- Canonical URLs

## 📝 Pași Următori

1. Rulează `npm install` pentru a instala dependențele
2. Consultă **TODO.md** pentru lista completă de verificări
3. Înlocuiește imaginile placeholder cu fotografii reale
4. Configurează reCAPTCHA (opțional)
5. Rulează `npm run build` pentru a genera site-ul static
6. Deploy directorul `out/` pe server

Pentru detalii complete, consultă **GHID_COMENZI.md**.

