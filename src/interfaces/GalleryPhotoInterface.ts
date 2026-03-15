import type { ImageMetadata } from "astro";

export interface GalleryPhoto {
  id: number;
  image: ImageMetadata;
  title: string;
  category: string;
  date: string;
}
