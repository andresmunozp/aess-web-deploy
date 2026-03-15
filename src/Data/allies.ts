import type { Ally } from "@/interfaces/AllyInterface";

// Configuración de rutas - Solo cambiar aquí si la carpeta cambia
const ALLIES_IMAGE_PATH = "/assets/images/allies";

export const allies: Ally[] = [
  {
    id: "semilleto-ing-aeroespacial",
    name: "Semillero de Ingeniería Aeroespacial",
    logoSrc: `${ALLIES_IMAGE_PATH}/semillero-aeroespacial.webp`,
    logoAlt: "Logo del Semillero de Ingeniería Aeroespacial",
    description:
      "Pertenece al grupo de investigación SIDICO del programa de ingeniería física de la universidad del cauca.",
    website: "https://www.instagram.com/siasemillero",
    category: "university",
  },
  {
    id: "inmersivetech",
    name: "Semillero de InmersiveTech",
    logoSrc: `${ALLIES_IMAGE_PATH}/immersivetech.webp`,
    logoAlt: "Logo del Semillero de InmersiveTech",
    description:
      "Semillero de investigación en tecnologías inmersivas de la Facultad de Ingeniería Electrónica y Telecomunicaciones de la Universidad del Cauca.",
    website: "https://www.instagram.com/semilleroimmersivetech",
    category: "university",
  },
  {
    id: "observatorio-astronomico-francisco-jose-de-caldas",
    name: "Observatorio Astronómico Francisco José de Caldas",
    logoSrc: `${ALLIES_IMAGE_PATH}/observatorio-francisco.webp`,
    logoAlt: "Logo del Observatorio Astronómico Francisco José de Caldas",
    description:
      "Divulgación de eventos de protección ambiental y de Astronomía en Popayán.",
    website: "https://www.instagram.com/astroparaiso",
    category: "organization",
  },
  {
    id: "andromeda",
    name: "Grupo Andrómeda",
    logoSrc: `${ALLIES_IMAGE_PATH}/andromeda.webp`,
    logoAlt: "Logo del Grupo Andrómeda",
    description:
      "Aliado estratégico para la realización de eventos de divulgación del conocimiento a la comunidad y la enseñanza de la astronomía.",
    website: "https://www.instagram.com/andromedagrupo/",
    category: "university",
  },
];
