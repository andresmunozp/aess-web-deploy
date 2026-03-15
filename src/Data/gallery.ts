import type { GalleryPhoto } from "@/interfaces/GalleryPhotoInterface";
import image2012 from "@/assets/images/gallery/2012.webp";
import imageAnfitrion from "@/assets/images/gallery/anfitrion.webp";
import imageEquipo from "@/assets/images/gallery/equipo.webp";
import imageComunitario from "@/assets/images/gallery/comnunitario.webp";
import imageObservatorio from "@/assets/images/gallery/observatorio.webp";
import imageFotoGrupal from "@/assets/images/gallery/foto-grupal.webp";
import imageMomentaria from "@/assets/images/gallery/momentaria.webp";

export const galleryPhotos: GalleryPhoto[] = [
  {
    id: 1,
    image: image2012,
    title: "Conferencia Anual de Innovacion",
    category: "Conferencias",
    date: "15 Mar 2025",
  },
  {
    id: 2,
    image: imageAnfitrion,
    title: "Encuentro de Lideres Estudiantiles",
    category: "Conferencias",
    date: "28 Abr 2025",
  },
  {
    id: 3,
    image: imageEquipo,
    title: "Jornada de Integracion del Equipo",
    category: "Equipo",
    date: "10 May 2025",
  },
  {
    id: 4,
    image: imageComunitario,
    title: "Actividad de Impacto Comunitario",
    category: "Comunidad",
    date: "24 Jun 2025",
  },
  {
    id: 5,
    image: imageObservatorio,
    title: "Noche de Observacion en el Observatorio",
    category: "Observacion",
    date: "08 Jul 2025",
  },
  {
    id: 6,
    image: imageFotoGrupal,
    title: "Cierre de Temporada con el Capitulo",
    category: "Equipo",
    date: "19 Ago 2025",
  },
  {
    id: 7,
    image: imageMomentaria,
    title: "Laboratorio Abierto de Ciencia Aplicada",
    category: "Comunidad",
    date: "02 Sep 2025",
  },
];
