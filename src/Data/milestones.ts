import type { Milestone } from "@/interfaces/MilestoneInterface";

const urlBase = "assets/images/milestones";

export const milestones: Milestone[] = [
  {
    id: "fundacion-observatorio",
    milestone: "2012 – Fundación del Observatorio Astronómico Francisco José de Caldas",
    url: `${urlBase}/2012.webp`,
    keyMoment:
      "Se funda el Observatorio Astronómico Francisco José de Caldas (OAFJC), ubicado cerca de Cajete, Popayán, como un espacio dedicado a la observación astronómica, la formación académica y la divulgación científica. Este observatorio se convierte en el punto de partida para el desarrollo de procesos educativos y comunitarios en ciencias espaciales en la región.",
  },
  {
    id: "ana-martinez",
    milestone: "2016 – Creación del Grupo de Divulgación Andrómeda",
    url: `${urlBase}/observatorio.webp`,
    keyMoment:
      "Nace el Grupo de Divulgación Andrómeda con el objetivo de acercar la astronomía y las ciencias espaciales a la comunidad, mediante actividades educativas, talleres, charlas y experiencias de divulgación científica dirigidas a públicos diversos, fortaleciendo el vínculo entre ciencia y sociedad."
  },
  {
    id: "trabajo-comunitario",
    milestone: "2016–2019 – Divulgación científica y trabajo comunitario",
    url: `${urlBase}/comunitario.webp`,
    keyMoment:
      "El Observatorio Astronómico Francisco José de Caldas y el Grupo Andrómeda articulan esfuerzos para desarrollar festivales de astronomía, jornadas de observación, actividades comunitarias y espacios de formación científica. Este trabajo conjunto consolida una comunidad académica activa y sienta las bases para la participación en iniciativas académicas y científicas de mayor alcance."
  },
    {
    id: "carlos-rodriguez",
    milestone: "2019–2020 – Proyección internacional y desarrollo tecnológicoo",
    url: `${urlBase}/anfitrion.webp`,
    keyMoment:
      "Un grupo de seis jóvenes inicia su participación en el Programa Espacial Universitario (PEU) de la UNAM, México, alcanzando las semifinales del Concurso Iberoamericano de Satélites Enlatados (CanSat). En paralelo, se desarrollan proyectos tecnológicos y biomédicos como CardioLux, presentado en la conferencia CinC 2020, y se participa en retos internacionales como el NASA Space Apps Challenge COVID-19 y el MIT COVID-19 Challenge, obteniendo reconocimientos y resultados destacados."
  },
    {
    id: "equipo-aess-2020",
    milestone: "2020 – Consolidación como capítulo estudiantil IEEE AESS Universidad del Cauca",
    url: `${urlBase}/equipo.webp`,
    keyMoment:
      "El 27 de mayo de 2020 el grupo se consolida oficialmente como capítulo estudiantil IEEE Aerospace and Electronic Systems Society (AESS) ante la Rama Estudiantil IEEE de la Universidad del Cauca, marcando un punto clave en su evolución organizacional y fortaleciendo su proyección académica, científica e internacional."
  },
];
