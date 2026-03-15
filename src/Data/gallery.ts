import type { GalleryPhoto } from "@/interfaces/GalleryPhotoInterface";

const GALLERY_IMAGE_PATH = "/assets/images/gallery";

export const galleryPhotos: GalleryPhoto[] = [
  {
    id: 1,
    url: `${GALLERY_IMAGE_PATH}/2012.webp`,
    title: "Conferencia Anual de Innovacion",
    category: "Conferencias",
    date: "15 Mar 2025",
  },
  {
    id: 2,
    url: `${GALLERY_IMAGE_PATH}/anfitrion.webp`,
    title: "Encuentro de Lideres Estudiantiles",
    category: "Conferencias",
    date: "28 Abr 2025",
  },
  {
    id: 3,
    url: `${GALLERY_IMAGE_PATH}/equipo.webp`,
    title: "Jornada de Integracion del Equipo",
    category: "Equipo",
    date: "10 May 2025",
  },
  {
    id: 4,
    url: `${GALLERY_IMAGE_PATH}/comnunitario.webp`,
    title: "Actividad de Impacto Comunitario",
    category: "Comunidad",
    date: "24 Jun 2025",
  },
  {
    id: 5,
    url: `${GALLERY_IMAGE_PATH}/observatorio.webp`,
    title: "Noche de Observacion en el Observatorio",
    category: "Observacion",
    date: "08 Jul 2025",
  },
  {
    id: 6,
    url: `${GALLERY_IMAGE_PATH}/foto-grupal.webp`,
    title: "Cierre de Temporada con el Capitulo",
    category: "Equipo",
    date: "19 Ago 2025",
  },
  {
    id: 7,
    url: `${GALLERY_IMAGE_PATH}/momentaria.webp`,
    title: "Laboratorio Abierto de Ciencia Aplicada",
    category: "Comunidad",
    date: "02 Sep 2025",
  },
];
