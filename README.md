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

4. Upload the original image to the existing `marius-meyer.org` site as well. The lightbox loads originals from `https://marius-meyer.org/user/pages/`, using these category folders:

   | Category | Original folder |
   | --- | --- |
   | Landscape | `01.landschaft` |
   | Animals | `02.tiere` |
   | City | `03.stadt` |
   | Abstract | `04.abstrakt` |
   | Night | `05.nacht` |

   For example, the landscape original in the JSON entry above must be available at `user/pages/01.landschaft/A7_12345.jpg`.

Run `npm run build` to check the changes. Push them to `main` to trigger the GitHub Actions deployment.

## GitHub Pages

The workflow builds the Astro site and deploys `dist/` through GitHub Actions when changes are pushed to `main`. Under **Settings → Pages → Build and deployment**, set the source to **GitHub Actions**. The project URL and base path are configured in `astro.config.mjs`.
