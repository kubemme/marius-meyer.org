import galleryData from './galleries.json';

const originalFolders: Record<string, string> = {
  landschaft: '01.landschaft',
  tiere: '02.tiere',
  stadt: '03.stadt',
  abstrakt: '04.abstrakt',
  nacht: '05.nacht',
};

const photoAspectRatios: Record<string, number> = {
  'images/gallery/landschaft/03.jpg': 444 / 250,
  'images/gallery/landschaft/04.jpg': 444 / 250,
  'images/gallery/landschaft/07.jpeg': 444 / 250,
  'images/gallery/landschaft/11.jpg': 167 / 250,
  'images/gallery/landschaft/12.jpg': 444 / 250,
  'images/gallery/landschaft/13.jpg': 167 / 250,
  'images/gallery/landschaft/16.jpg': 167 / 250,
  'images/gallery/landschaft/20.jpg': 167 / 250,
  'images/gallery/tiere/01.jpg': 444 / 250,
  'images/gallery/tiere/02.jpg': 200 / 250,
  'images/gallery/tiere/05.jpg': 167 / 250,
  'images/gallery/tiere/07.jpg': 188 / 250,
  'images/gallery/tiere/09.jpg': 167 / 250,
  'images/gallery/tiere/11.jpg': 1,
  'images/gallery/tiere/12.jpg': 188 / 250,
  'images/gallery/tiere/17.jpg': 333 / 250,
  'images/gallery/stadt/01.jpg': 444 / 250,
  'images/gallery/stadt/02.jpg': 444 / 250,
  'images/gallery/stadt/03.jpg': 167 / 250,
  'images/gallery/stadt/10.jpeg': 378 / 250,
  'images/gallery/abstrakt/02.jpg': 166 / 250,
  'images/gallery/abstrakt/03.jpg': 167 / 250,
  'images/gallery/abstrakt/06.jpg': 166 / 250,
  'images/gallery/abstrakt/08.jpg': 167 / 250,
  'images/gallery/abstrakt/12.jpg': 333 / 250,
  'images/gallery/abstrakt/13.jpg': 333 / 250,
  'images/gallery/nacht/01.jpeg': 167 / 250,
  'images/gallery/nacht/02.jpg': 167 / 250,
  'images/gallery/nacht/03.jpg': 167 / 250,
  'images/gallery/nacht/04.jpg': 167 / 250,
  'images/gallery/nacht/05.jpg': 167 / 250,
  'images/gallery/nacht/06.jpg': 179 / 250,
  'images/gallery/nacht/07.jpg': 167 / 250,
  'images/gallery/nacht/08.jpg': 168 / 250,
};

export const galleryCategories = galleryData.map(({ slug, title, photos }) => ({
  slug,
  title,
  count: photos.length,
}));

export const photos = galleryData.flatMap((gallery) =>
  gallery.photos.map((photo) => ({
    category: gallery.title,
    categorySlug: gallery.slug,
    image: photo.src,
    aspectRatio: photoAspectRatios[photo.src] ?? 1.5,
    original: `https://marius-meyer.org/user/pages/${originalFolders[gallery.slug]}/${encodeURIComponent(photo.filename)}`,
  })),
);
