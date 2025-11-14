# Ghid Comenzi - ConiCar Service Auto

Acest ghid explică pașii necesari pentru a instala, rula și construi site-ul ConiCar Service Auto.

## Instalare Inițială

### 1. Instalare Dependențe

```bash
npm install
```

**Ce face:** Instalează toate pachetele necesare definite în `package.json`, inclusiv Next.js, React, Tailwind CSS, TypeScript și alte dependențe.

**Timp estimat:** 2-5 minute (depinde de viteza internetului)

---

## Rulare în Modul Dezvoltare

### 2. Pornire Server Dezvoltare

```bash
npm run dev
```

**Ce face:** Pornește server-ul de dezvoltare Next.js care:
- Compilează codul TypeScript/React
- Activează hot-reload (schimbările se văd automat)
- Servește site-ul la `http://localhost:3000`

**Cum folosești:**
- Deschide browser-ul la `http://localhost:3000`
- Site-ul se actualizează automat la fiecare modificare
- Apasă `Ctrl+C` în terminal pentru a opri server-ul

**Timp estimat:** 10-30 secunde pentru prima compilare

---

## Construire pentru Producție

### 3. Build Site Static

```bash
npm run build
```

**Ce face:** 
- Compilează și optimizează toate fișierele
- Generează versiunea statică a site-ului în directorul `out/`
- Minimizează CSS și JavaScript
- Optimizează imagini (dacă sunt configurate)
- Generează HTML static pentru fiecare pagină

**Rezultat:** Directorul `out/` conține toate fișierele statice necesare pentru deploy.

**Timp estimat:** 1-3 minute

---

## Servire Site Static (După Build)

### Opțiunea 1: Folosind `serve` (Recomandat)

```bash
npx serve out
```

**Ce face:**
- Servește fișierele statice din directorul `out/`
- Site-ul va fi disponibil la `http://localhost:3000` (sau alt port dacă 3000 e ocupat)

**Instalare globală (opțional):**
```bash
npm install -g serve
serve out
```

---

### Opțiunea 2: Folosind Python HTTP Server

```bash
python -m http.server 8000 -d out
```

**Ce face:**
- Folosește server-ul HTTP integrat din Python
- Servește site-ul la `http://localhost:8000`
- Funcționează pe orice sistem cu Python instalat

**Notă:** Pentru Python 3, folosește `python3` în loc de `python`:
```bash
python3 -m http.server 8000 -d out
```

---

### Opțiunea 3: Folosind Node.js `http-server`

```bash
npx http-server out -p 8000
```

**Ce face:**
- Servește site-ul static la `http://localhost:8000`
- Include opțiuni avansate pentru cache și compresie

---

## Comenzi Utile Suplimentare

### Linting (Verificare Cod)

```bash
npm run lint
```

**Ce face:** Verifică codul pentru erori de sintaxă și probleme de stil (dacă ESLint este configurat).

---

### Export Static (Alternativ)

```bash
npm run export
```

**Ce face:** Rulează build-ul și apoi export-ul static (echivalent cu `npm run build` pentru configurația noastră).

---

## Deploy pe Server

### Pași Generali pentru Deploy

1. **Construiește site-ul:**
   ```bash
   npm run build
   ```

2. **Copiază conținutul directorului `out/` pe server:**
   - Folosind FTP/SFTP
   - Sau folosind Git și deploy automat
   - Sau folosind servicii precum Vercel, Netlify, etc.

3. **Configurează server-ul web:**
   - **Nginx:** Configurează un server block care servește din directorul `out/`
   - **Apache:** Configurează DocumentRoot să pointeze la `out/`
   - **Vercel/Netlify:** Deploy automat din Git

---

## Exemplu Configurare Nginx

```nginx
server {
    listen 80;
    server_name conicar.ro www.conicar.ro;
    
    root /path/to/out;
    index index.html;
    
    location / {
        try_files $uri $uri/ $uri.html /index.html;
    }
    
    # Cache pentru assets statice
    location ~* \.(jpg|jpeg|png|gif|ico|css|js|svg|webp)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
}
```

---

## Exemplu Configurare Apache (.htaccess)

Creează un fișier `.htaccess` în directorul `out/`:

```apache
RewriteEngine On
RewriteBase /

# Redirect to HTTPS (dacă ai SSL)
RewriteCond %{HTTPS} off
RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]

# Serve index.html pentru rute
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule ^(.*)$ /index.html [L]

# Cache pentru assets
<IfModule mod_expires.c>
    ExpiresActive On
    ExpiresByType image/jpg "access plus 1 year"
    ExpiresByType image/jpeg "access plus 1 year"
    ExpiresByType image/png "access plus 1 year"
    ExpiresByType image/webp "access plus 1 year"
    ExpiresByType text/css "access plus 1 year"
    ExpiresByType application/javascript "access plus 1 year"
</IfModule>
```

---

## Troubleshooting

### Eroare: "Port 3000 already in use"

**Soluție:** Folosește alt port:
```bash
PORT=3001 npm run dev
```

### Eroare: "Module not found"

**Soluție:** Reinstalează dependențele:
```bash
rm -rf node_modules package-lock.json
npm install
```

### Build eșuează

**Soluție:** 
1. Verifică erorile în terminal
2. Verifică că toate fișierele necesare există
3. Rulează `npm run lint` pentru a identifica probleme

---

## Structura Directoarelor După Build

```
conicar/
├── out/                    # Site-ul static generat (după build)
│   ├── index.html
│   ├── servicii/
│   ├── preturi/
│   ├── despre/
│   ├── contact/
│   ├── _next/             # Assets compilate
│   └── images/            # Imagini
├── pages/                 # Paginile Next.js
├── components/            # Componente React
├── public/               # Assets statice
├── styles/               # Stiluri CSS
└── package.json          # Dependențe
```

---

## Rezumat Comenzi Rapide

```bash
# Instalare
npm install

# Dezvoltare
npm run dev

# Build producție
npm run build

# Servire static (după build)
npx serve out
# sau
python -m http.server 8000 -d out
```

---

## Suport

Pentru probleme sau întrebări, consultă:
- Documentația Next.js: https://nextjs.org/docs
- Documentația Tailwind CSS: https://tailwindcss.com/docs
- README.md din proiect

