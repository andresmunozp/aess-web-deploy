import type { SiteContent } from "@/interfaces/ContentInterface";

export const siteContent: SiteContent = {
  hero: {
    title: "AESS Unicauca",
    description:
      "Somos jóvenes que transforman la pasión por el espacio en proyectos reales, tecnología e impacto social. Creamos conocimiento, inspiramos nuevas generaciones y construimos futuro.",
  },

  about: {
    title: "Sobre nosotros",
    description:
      "Nuestros miembros son estudiantes, profesores y personas de todas las carreras de la Universidad del Cauca, unidos por el interés mutuo de entender el universo a través de las ciencias aeroespaciales. El capítulo estudiantil IEEE AESS Universidad del Cauca es un espacio que busca fomentar el conocimiento científico, el empoderamiento social de hombres, mujeres y niños, y en desarrollar proyectos tecnológicos de alto impacto en el municipio de Popayán, en el departamento del Cauca, en colombia y en el mundo.Todo lo nuestro trabajo se construye sobre cinco pilares: Solidaridad, Organización, Competitividad, Educación e Investigación, que reúnen el conocimiento que hemos desarrollado con el tiempo. Desde ahí, conectamos con la Juventud y generamos Transformación real en la sociedad.",
    mission: {
      title: "Misión",
      description:
        "Contribuir al avance y desarrollo de la ciencia y la tecnología aeroespacial mediante la aceleración del conocimiento, el desarrollo sostenible de proyectos innovadores y el desarrollo del potencial humano en jóvenes líderes. Buscamos desarrollar nuevos conceptos y tecnologías que permitan explorar nuevos horizontes en el espacio y mejorar la calidad de vida en la Tierra. Nuestro objetivo es ser una fuerza aceleradora del conocimiento en el campo aeroespacial, contribuyendo a disminuir la desigualdad científica y tecnológica de la humanidad y los jóvenes colombianos.",
    },
    vision: {
      title: "Visión",
      description:
        "AESS se proyecta hacia 2030 como un referente nacional e internacional en el ecosistema aeroespacial, articulando investigación, innovación y formación de talento. Junto a aliados estratégicos, impulsa la consolidación de un laboratorio aeroespacial de alto nivel que fortalezca procesos educativos y científicos para niños, niñas y jóvenes universitarios, promoviendo vocaciones STEM, proyectos tecnológicos y alianzas nacionales e internacionales con impacto sostenible.",
    },
    values: {
      title: "Valores",
      paragraphs: [
        {
          question: "¿Qué queremos hacer?",
          description:
            "Despertar y fortalecer el interés por la investigación científica a través de proyectos con enfoque educativo, social y científico, así como mediante eventos de divulgación en ciencias espaciales con ponentes nacionales e internacionales. Además, buscamos impulsar ideas e investigaciones innovadoras en el área aeroespacial, fortaleciendo el capítulo AESS de la Universidad del Cauca.",
        },
        {
          question: "¿Cómo lo hacemos?",
          description:
            "Fortaleciendo el interés y la participación de estudiantes y profesionales en las ciencias espaciales en el departamento del Cauca, ampliando sus conocimientos y creando las condiciones para el desarrollo de ideas innovadoras que aporten al crecimiento del sector aeroespacial a nivel nacional e internacional.",
        },
      ],
    },
  },

  contact: {
    title: "Contáctanos",
    subtitle: "¿Tienes algo en mente? háznoslo saber",
    socialMediaText: "Redes sociales de AESS Unicauca:",
    form: {
      labels: {
        name: "Nombre:",
        email: "Correo electrónico:",
        message: "Mensaje:",
      },
      submitButton: "Enviar",
      submitButtonLoading: "Enviando...",
      notification: {
        success: {
          emoji: "🚀",
          title: "¡Mensaje enviado al espacio!",
          message:
            "Tu mensaje ha sido lanzado exitosamente. Nuestro equipo de astronautas lo revisará pronto.",
        },
      },
    },
  },

  joinUs: {
    title: "EL CONOCIMIENTO EN ACCIÓN",
    description:
      "En AESS Unicauca los procesos nacen desde la juventud y se fortalecen a través de la educación. El conocimiento se construye mediante la investigación, se organiza a través del trabajo conjunto y se pone a prueba en entornos competitivos. Así logramos transformar nuestro entorno, inspirando una cultura solidaria que vuelve a impulsar nuevos procesos. Este enfoque guía cada proyecto, iniciativa y espacio de formación que desarrollamos como comunidad.",
    buttonText: "Contáctanos",
  },

  header: {
    nav: {
      about: "Nosotros",
      divisions: "Divisiones",
      contact: "Contacto",
    },
    logoAlt: "AESS Unicauca",
    mobileMenu: {
      openAriaLabel: "Abrir menú",
      closeAriaLabel: "Cerrar menú",
      links: {
        home: "Inicio",
        about: "Nosotros",
        projects: "Proyectos",
        blog: "Blog",
        contact: "Contacto",
      },
    },
  },

  footer: {
    description:
      "¡Empoderando a la juventud! Ciencia, tecnología y liderazgo al servicio del suroccidente colombiano.",
    recommendedMaterial: {
      title: "Material recomendado",
      links: [
        { text: "NASA – National Aeronautics and Space Administration", url: "https://www.nasa.gov" },
        { text: "ESA – European Space Agency", url: "https://www.esa.int" },
        { text: "IEEE Aerospace & Electronic Systems Society (AESS)", url: "https://ieee-aess.org" },
        { text: "AIAA – American Institute of Aeronautics and Astronautics", url: "https://www.aiaa.org" },
        { text: "arXiv (Physics, Aerospace, Systems)", url: "https://arxiv.org" },
      ],
    },
    interestLinks: {
      title: "Enlaces de interes",
      links: [
        { text: "NASA – National Aeronautics and Space Administration", url: "https://www.nasa.gov" },
        { text: "NASA Technical Reports Server (NTRS)", url: "https://ntrs.nasa.gov" },
        { text: "NASA Open Data Portal", url: "https://data.nasa.gov" },
        { text: "ESA – European Space Agency", url: "https://www.esa.int" },
        { text: "JAXA – Japan Aerospace Exploration Agency", url: "https://www.jaxa.jp" },
        { text: "CNES – Centre National d'Études Spatiales (Francia)", url: "https://cnes.fr" },
        { text: "Fuerza Aeroespacial Colombiana", url: "https://www.fac.mil.co" },
      ],
    },
    socialMediaText: "Sigue a AESS en redes sociales",
    copyright: "2026 AESS Unicauca",
    designedBy: {
      text: "Diseñado por",
      linkText: "Dresan",
      linkUrl: "https://dresan.dev",
      linkAriaLabel: "Visitar el sitio web de Dresan",
    },
  },
};
