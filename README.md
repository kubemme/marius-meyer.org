# marius-meyer.org — Astro

An Astro version of [marius-meyer.org](https://marius-meyer.org/), featuring landscape, animals, city, abstract, and night photography, as well as About, privacy policy, and legal notice pages.

## Run locally

```sh
npm install
npm run dev
```

## Production build

```sh
npm run build
npm run preview
```

## Add photos

Gallery data is stored in `src/data/galleries.json`. Local thumbnail images live under `public/images/gallery/`.

1. Add an optimized thumbnail to the matching category folder. Existing thumbnails are about 250 pixels high. Continue the numbering used in that folder, for example `22.jpg` for a new landscape photo.
2. Add an entry to that category in `src/data/galleries.json`:

   ```json
   {
     "src": "images/gallery/landschaft/22.jpg",
     "filename": "A7_12345.jpg"
   }
   ```

   No `alt` field is needed. The `filename` must match the original image's filename.
3. The gallery layout assumes a 3:2 aspect ratio by default. For any other thumbnail ratio, add its width-to-height ratio to `photoAspectRatios` in `src/data/photos.ts`, for example:

   ```ts
   'images/gallery/landschaft/22.jpg': 167 / 250,
   ```

4. Add the original image to `public/images/originals/<category>/` with the same filename. The lightbox loads originals locally from `/images/originals/<category>/`:

   | Category | Folder |
   | --- | --- |
   | Landscape | `public/images/originals/landschaft/` |
   | Animals | `public/images/originals/tiere/` |
   | City | `public/images/originals/stadt/` |
   | Abstract | `public/images/originals/abstrakt/` |
   | Night | `public/images/originals/nacht/` |

   For example, the landscape original in the JSON entry above must be available at `public/images/originals/landschaft/A7_12345.jpg`.

Run `npm run build` to check the changes. Push them to `main` to trigger the GitHub Actions deployment.

## GitHub Pages

The workflow builds the Astro site and deploys `dist/` through GitHub Actions when changes are pushed to `main`. Under **Settings → Pages → Build and deployment**, set the source to **GitHub Actions**. The custom domain is `marius-meyer.org` (configured in `public/CNAME`), and the canonical site URL is set in `astro.config.mjs`. Point the domain's DNS records to GitHub Pages and confirm the custom domain under **Settings → Pages**.
