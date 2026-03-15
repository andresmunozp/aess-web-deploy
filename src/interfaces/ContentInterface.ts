export interface HeroContent {
  title: string;
  description: string;
}

export interface AboutContent {
  title: string;
  description: string;
  mission: {
    title: string;
    description: string;
  };
  vision: {
    title: string;
    description: string;
  };
  values: {
    title: string;
    paragraphs: {
      question: string;
      description: string;
    }[];
  };
}

export interface ContactContent {
  title: string;
  subtitle: string;
  socialMediaText: string;
  form: {
    labels: {
      name: string;
      email: string;
      message: string;
    };
    submitButton: string;
    submitButtonLoading: string;
    notification: {
      success: {
        emoji: string;
        title: string;
        message: string;
      };
    };
  };
}

export interface JoinUsContent {
  title: string;
  description: string;
  buttonText: string;
}

export interface HeaderContent {
  nav: {
    about: string;
    divisions: string;
    contact: string;
  };
  logoAlt: string;
  mobileMenu: {
    openAriaLabel: string;
    closeAriaLabel: string;
    links: {
      home: string;
      about: string;
      projects: string;
      blog: string;
      contact: string;
    };
  };
}

export interface FooterContent {
  description: string;
  recommendedMaterial: {
    title: string;
    links: { text: string; url: string }[];
  };
  interestLinks: {
    title: string;
    links: { text: string; url: string }[];
  };
  socialMediaText: string;
  copyright: string;
  designedBy: {
    text: string;
    linkText: string;
    linkUrl: string;
    linkAriaLabel: string;
  };
}

export interface SiteContent {
  hero: HeroContent;
  about: AboutContent;
  contact: ContactContent;
  joinUs: JoinUsContent;
  header: HeaderContent;
  footer: FooterContent;
}
