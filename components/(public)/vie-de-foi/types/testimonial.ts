import { JSX } from "react";

// Chaque réalisation
export interface Achievement {
  icon: JSX.Element;
  text: string;
}

// Témoignage complet
export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  description: string;
  image: string;
  about: string;
  achievements: Achievement[];
  abouttab?: string[]; // tableau de chaînes de caractères
}
