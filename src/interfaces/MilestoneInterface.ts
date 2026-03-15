import type { ImageMetadata } from "astro";

export interface Milestone {
  id: string;
  milestone: string;
  photoSrc: ImageMetadata;
  keyMoment: string;
}
