# Aikyara Company Website v0.4.0

A cinematic, dark product-company website for Aikyara, inspired by the immersive capability-led presentation used by modern aerospace companies while retaining an original Aikyara identity.

## Included

- Full-screen mission-control style homepage
- Canvas starfield and pointer-reactive ambient lighting
- Orbital system visualization with Sanskrit-rooted brand detail
- Scroll progress indicator and route-safe reveal transitions
- Product system cards and dedicated product information pages
- Kithub live external link
- Xchain and Parallel AI coming-soon information pages
- Cloud Backup development information page
- Services, company, downloads, support, privacy, and terms pages
- Responsive layouts and reduced-motion support

## Run locally

```powershell
npm install
npm run dev
```

Open `http://localhost:3000`.

## Production test

```powershell
npm run build
npm start
```

## Update an existing v0.3.0 project

The dependency versions did not change. Copy the v0.4.0 source files over the previous project, then clear the old build output:

```powershell
Remove-Item .\.next -Recurse -Force -ErrorAction SilentlyContinue
npm run build
npm start
```

Do not run `npm audit fix --force`; it can replace the current Next.js version with an incompatible major version.

## Before deployment

Replace placeholder values in `lib/site.js`, `app/layout.jsx`, `app/robots.js`, and `app/sitemap.js` with the final domain and support addresses.
