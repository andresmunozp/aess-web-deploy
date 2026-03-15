import type { Division } from "@/interfaces/DivisionInterface";

// Configuración de rutas - Solo cambiar aquí si la carpeta cambia
const DIVISIONS_IMAGE_PATH = "/assets/images";

export const divisions: Division[] = [
  {
    id: "astronautica",
    imageSrc: `${DIVISIONS_IMAGE_PATH}/astronautica.webp`,
    imageAlt: "División de Astronáutica",
    division: "Semillero de Astronáutica",
  },
  {
    id: "aeronautica",
    imageSrc: `${DIVISIONS_IMAGE_PATH}/aeronautica.webp`,
    imageAlt: "División de Aeronáutica",
    division: "Semillero de Aeronáutica",
  },
  {
    id: "astronomia",
    imageSrc: `${DIVISIONS_IMAGE_PATH}/astronomia.webp`,
    imageAlt: "División de Astronomía",
    division: "Semillero de Astronomía",
  },
  {
    id: "tecnologias-inmersivas",
    imageSrc: `${DIVISIONS_IMAGE_PATH}/tecnologias-inmersivas.webp`,
    imageAlt: "División de Tecnologías Inmersivas",
    division: "Semillero de Tecnologías Inmersivas",
  },
    {
    id: "ai-4",
    imageSrc: `${DIVISIONS_IMAGE_PATH}/ai-4.webp`,
    imageAlt: "División de Inteligencia Artificial 4.0",
    division: "Semillero de Inteligencia Artificial 4.0",
  },
];
