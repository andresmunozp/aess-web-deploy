export interface Ally {
  id: string;
  name: string;
  logoSrc: string;
  logoAlt: string;
  description: string;
  website?: string;
  category: "university" | "company" | "organization" | "government";
}
