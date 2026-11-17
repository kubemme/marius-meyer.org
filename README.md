# Marius Meyer — Fotografie

Eine responsive Astro-Demo für ein Fotografie-Portfolio, inspiriert vom
[Astro Photography Portfolio](https://github.com/rockem/astro-photography-portfolio).

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

Die Beispielbilder und Bildbeschreibungen liegen in `src/data/photos.ts`.
Passe dort die Bild-URLs, Kategorien und Ortsangaben an deine eigenen Arbeiten an.

## GitHub Pages

Der Push auf `main` baut die Astro-Seite und veröffentlicht `dist/` über GitHub Actions.
Stelle unter **Settings → Pages → Build and deployment** die Source auf **GitHub Actions**.
Die Projektseiten-URL und der Basispfad sind in `astro.config.mjs` konfiguriert.