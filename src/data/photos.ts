import galleryData from './galleries.json';

const originalFolders: Record<string, string> = {
  landschaft: '01.landschaft',
  tiere: '02.tiere',
  stadt: '03.stadt',
  abstrakt: '04.abstrakt',
  nacht: '05.nacht',
};

export const galleryCategories = galleryData.map(({ slug, title, photos }) => ({
  slug,
  title,
  count: photos.length,
}));

export const photos = galleryData.flatMap((gallery) =>
  gallery.photos.map((photo, index) => ({
    title: `Foto ${String(index + 1).padStart(2, '0')}`,
    category: gallery.title,
    categorySlug: gallery.slug,
    location: `Galerie ${gallery.title}`,
    image: photo.src,
    alt: photo.alt,
    original: `https://marius-meyer.org/user/pages/${originalFolders[gallery.slug]}/${encodeURIComponent(photo.filename)}`,
  })),
);
