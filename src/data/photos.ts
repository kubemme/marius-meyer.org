import galleryData from './galleries.json';

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
  })),
);
