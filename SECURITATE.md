# Recomandări Securitate - ConiCar Service Auto

## Content Security Policy (CSP)

Exemplu de configurare CSP pentru site. Adaugă acest header în configurația server-ului web.

### Nginx

```nginx
add_header Content-Security-Policy "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.google.com https://www.gstatic.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https:; connect-src 'self' https://www.google.com; frame-src 'self' https://www.google.com;";
```

### Apache (.htaccess)

```apache
<IfModule mod_headers.c>
    Header set Content-Security-Policy "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.google.com https://www.gstatic.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https:; connect-src 'self' https://www.google.com; frame-src 'self' https://www.google.com;"
</IfModule>
```

## Headers de Securitate Recomandate

### Nginx

```nginx
# X-Frame-Options
add_header X-Frame-Options "SAMEORIGIN" always;

# X-Content-Type-Options
add_header X-Content-Type-Options "nosniff" always;

# X-XSS-Protection
add_header X-XSS-Protection "1; mode=block" always;

# Referrer-Policy
add_header Referrer-Policy "strict-origin-when-cross-origin" always;

# Permissions-Policy
add_header Permissions-Policy "geolocation=(), microphone=(), camera=()" always;
```

### Apache (.htaccess)

```apache
<IfModule mod_headers.c>
    Header set X-Frame-Options "SAMEORIGIN"
    Header set X-Content-Type-Options "nosniff"
    Header set X-XSS-Protection "1; mode=block"
    Header set Referrer-Policy "strict-origin-when-cross-origin"
    Header set Permissions-Policy "geolocation=(), microphone=(), camera=()"
</IfModule>
```

## HTTPS (Obligatoriu pentru Producție)

- Obține un certificat SSL (Let's Encrypt gratuit)
- Configurează redirect de la HTTP la HTTPS
- Folosește HSTS (HTTP Strict Transport Security)

### Exemplu Nginx cu SSL

```nginx
server {
    listen 80;
    server_name conicar.ro www.conicar.ro;
    return 301 https://$server_name$request_uri;
}

server {
    listen 443 ssl http2;
    server_name conicar.ro www.conicar.ro;
    
    ssl_certificate /path/to/cert.pem;
    ssl_certificate_key /path/to/key.pem;
    
    # SSL Configuration
    ssl_protocols TLSv1.2 TLSv1.3;
    ssl_ciphers HIGH:!aNULL:!MD5;
    ssl_prefer_server_ciphers on;
    
    # HSTS
    add_header Strict-Transport-Security "max-age=31536000; includeSubDomains" always;
    
    root /path/to/out;
    index index.html;
    
    location / {
        try_files $uri $uri/ $uri.html /index.html;
    }
}
```

## Rate Limiting pentru Formular

### Nginx

```nginx
limit_req_zone $binary_remote_addr zone=form_limit:10m rate=5r/m;

location /api/appointment {
    limit_req zone=form_limit burst=2 nodelay;
    # ... rest of config
}
```

## Variabile de Mediu

**NU** comite următoarele în repository:
- Chei API (reCAPTCHA, Google Maps, etc.)
- Credențiale de bază de date
- Token-uri de autentificare

Folosește fișiere `.env.local` (care sunt în `.gitignore`):

```env
NEXT_PUBLIC_RECAPTCHA_SITE_KEY=your_site_key_here
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_api_key_here
```

## Validare Input Formular

- Validarea client-side este implementată în `components/AppointmentForm.tsx`
- **IMPORTANT:** Adaugă validare server-side pentru producție
- Sanitizează toate input-urile pe server
- Folosește reCAPTCHA v3 pentru protecție spam

## Backup-uri

- Fă backup-uri regulate ale codului și bazei de date (dacă există)
- Stochează backup-urile într-o locație sigură
- Testează procesul de restore periodic

## Actualizări

- Păstrează toate dependențele actualizate
- Monitorizează vulnerabilitățile (folosește `npm audit`)
- Actualizează Next.js și alte pachete când apar versiuni noi

## Monitorizare

- Configurează logging pentru erori
- Monitorizează traficul și accesările suspecte
- Folosește servicii precum Sentry pentru error tracking (opțional)

