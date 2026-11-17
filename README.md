# marius-meyer.org — Astro

Astro-Portierung der Website [marius-meyer.org](https://marius-meyer.org/) mit den
Fotogalerien Landschaft, Tiere, Stadt, Abstrakt und Nacht sowie Über mich,
Datenschutz und Impressum.

## Lokal starten

```sh
npm install
npm run dev
```

## Produktions-Build

```sh
npm run build
npm run preview
```

Galerieinhalte liegen in `src/data/galleries.json`; die zugehörigen Bilddateien befinden
sich unter `public/images/gallery/`.

## GitHub Pages

Der Push auf `main` baut die Astro-Seite und veröffentlicht `dist/` über GitHub Actions.
Stelle unter **Settings → Pages → Build and deployment** die Source auf **GitHub Actions**.
Die Projektseiten-URL und der Basispfad sind in `astro.config.mjs` konfiguriert.