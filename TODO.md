# TO-DO List - ConiCar Service Auto

## Verificări După Generare

### 1. Instalare Dependențe
- [ ] Rulează `npm install` pentru a instala toate dependențele
- [ ] Verifică că toate pachetele s-au instalat corect (fără erori)

### 2. Configurări Necesare

#### reCAPTCHA v3
- [ ] Obține cheia site de la Google reCAPTCHA (https://www.google.com/recaptcha/admin)
- [ ] Adaugă cheia în `components/AppointmentForm.tsx` (căută comentariul `// TODO: Adaugă cheia site`)
- [ ] Instalează pachetul `react-google-recaptcha-v3` dacă dorești integrare completă
- [ ] Sau folosește varianta simplă cu mailto: (deja implementată)

#### Google Analytics (Opțional)
- [ ] Obține tracking ID de la Google Analytics
- [ ] Adaugă script-ul în `pages/_app.tsx` sau `pages/_document.tsx`

#### WhatsApp Business
- [ ] Verifică că link-ul WhatsApp este corect (format: `https://wa.me/40722178964`)
- [ ] Testează link-ul pe dispozitiv mobil

### 3. Imagini și Assets

#### Imagini Placeholder
- [ ] Înlocuiește toate imaginile placeholder cu fotografii reale
- [ ] Optimizează toate imaginile (WebP + fallback)
- [ ] Verifică că toate imaginile au alt text descriptiv
- [ ] Creează thumbnails pentru galerie (400×400px sau 400×300px)

#### Logo și Favicon
- [ ] Creează favicon.ico (16×16, 32×32, 48×48)
- [ ] Creează logo SVG sau PNG pentru header
- [ ] Adaugă logo în directorul `/public/images/`

#### OG Image
- [ ] Creează imagine Open Graph (1200×630px) cu logo și text
- [ ] Salvează ca `/public/images/og-image.jpg`

### 4. Conținut și Text

#### Verificare Text
- [ ] Verifică toate textele pentru erori de scriere
- [ ] Personalizează conținutul după nevoi
- [ ] Actualizează testimoniale cu date reale (dacă există)

#### Prețuri
- [ ] Verifică și actualizează prețurile în `pages/preturi.tsx`
- [ ] Asigură-te că prețurile sunt actuale și corecte

### 5. SEO și Meta Tags

#### Verificare SEO
- [ ] Verifică că toate paginile au title tags unice
- [ ] Verifică meta descriptions (150-160 caractere)
- [ ] Verifică că toate link-urile canonice sunt corecte
- [ ] Testează JSON-LD cu Google Rich Results Test (https://search.google.com/test/rich-results)

#### Sitemap și Robots
- [ ] Actualizează data în `public/sitemap.xml` (câmpul `<lastmod>`)
- [ ] Verifică că URL-urile din sitemap sunt corecte
- [ ] Testează accesul la `/sitemap.xml` și `/robots.txt`

### 6. Funcționalități

#### Formular Programare
- [ ] Testează formularul de programare
- [ ] Verifică că validarea funcționează corect
- [ ] Testează fallback-ul mailto: când JavaScript este dezactivat
- [ ] Configurează endpoint-ul backend pentru submit (dacă există)

#### Link-uri și Navigare
- [ ] Testează toate link-urile de navigare
- [ ] Verifică că link-urile externe au `rel="noopener noreferrer"`
- [ ] Testează click-to-call pe telefon
- [ ] Testează link-ul WhatsApp

#### Animații
- [ ] Verifică că animațiile funcționează corect
- [ ] Testează pe diferite browsere (Chrome, Firefox, Safari, Edge)
- [ ] Verifică performanța animațiilor (nu ar trebui să lag)

### 7. Responsive și Mobile

#### Testare Mobile
- [ ] Testează site-ul pe telefon (iOS și Android)
- [ ] Verifică că meniul hamburger funcționează
- [ ] Verifică că toate butoanele au touch targets >= 44px
- [ ] Testează formularul pe mobil
- [ ] Verifică că Google Maps se afișează corect pe mobil

#### Breakpoints
- [ ] Testează pe tabletă (768px - 1024px)
- [ ] Verifică layout-ul pe desktop (1920px+)
- [ ] Verifică că textul este lizibil pe toate dimensiunile

### 8. Performanță

#### Optimizare
- [ ] Rulează Lighthouse audit (țintă: ≥90 pentru mobil și desktop)
- [ ] Optimizează imagini (reduce dimensiunea fișierelor)
- [ ] Verifică că CSS și JS sunt minimizate în producție
- [ ] Verifică lazy loading pentru imagini

#### Core Web Vitals
- [ ] Verifică LCP (Largest Contentful Paint) < 2.5s
- [ ] Verifică FID (First Input Delay) < 100ms
- [ ] Verifică CLS (Cumulative Layout Shift) < 0.1

### 9. Accesibilitate (A11y)

#### Testare Accesibilitate
- [ ] Testează navigarea cu tastatură (Tab, Enter, Escape)
- [ ] Verifică contrast text/background (WCAG AA/AAA)
- [ ] Testează cu screen reader (NVDA, JAWS, VoiceOver)
- [ ] Verifică că toate imaginile au alt text
- [ ] Verifică focus states pentru toate elementele interactive

### 10. Securitate

#### Configurări Securitate
- [ ] Configurează HTTPS pe server (obligatoriu pentru producție)
- [ ] Adaugă Content-Security-Policy headers (exemplu în documentație)
- [ ] Verifică că nu există informații sensibile în cod
- [ ] Configurează rate limiting pentru formular (pe server)

### 11. Testare Finală

#### Testare Cross-Browser
- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Edge (latest)
- [ ] Mobile browsers (iOS Safari, Chrome Mobile)

#### Testare Funcționalități
- [ ] Toate paginile se încarcă corect
- [ ] Navigarea între pagini funcționează
- [ ] Formularele funcționează
- [ ] Link-urile externe funcționează
- [ ] Google Maps se încarcă
- [ ] Animațiile funcționează

### 12. Deploy

#### Pregătire Deploy
- [ ] Rulează `npm run build` și verifică că nu există erori
- [ ] Testează site-ul static generat în directorul `out/`
- [ ] Configurează server-ul web (Nginx, Apache, etc.)
- [ ] Configurează domeniul și SSL certificate
- [ ] Actualizează URL-urile în sitemap și robots.txt cu domeniul real

#### Post-Deploy
- [ ] Verifică că site-ul este accesibil public
- [ ] Submit sitemap la Google Search Console
- [ ] Verifică că Google Maps funcționează
- [ ] Testează toate funcționalitățile pe site-ul live

## Note Importante

- **NU** comite chei API sau informații sensibile în repository
- Folosește variabile de mediu pentru configurări sensibile
- Testează site-ul înainte de deploy pe producție
- Fă backup-uri regulate
- Monitorizează performanța după deploy

