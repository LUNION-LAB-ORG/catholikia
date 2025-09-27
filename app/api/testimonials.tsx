import { Testimonial } from "@/components/(public)/vie-de-foi/types/testimonial";
import {
  IconCalendarEvent,
  IconClockHour3,
  IconLaurelWreath2Filled,
  IconNavigation,
} from "@tabler/icons-react";
import {
  Award,
  Briefcase,
  GraduationCap,
  Paintbrush,
  Rocket,
  Users,
} from "lucide-react";

const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Marie-Claire Kouassi",
    role: "Architecte",
    company: "Studio Architecture",
    description:
      "Concevoir des espaces qui reflètent les valeurs architecturales et environnementales.",
    image: "/assets/foi/contact2.jpg",
    about:
      "Architecte passionnée par la création d'espaces durables et innovants, j'ai fondé mon studio pour répondre aux défis architecturaux contemporains.",
    achievements: [
      {
        icon: <IconNavigation size={18} />,
        text: "Conception de 15+ bâtiments écologiques",
      },
      {
        icon: <IconCalendarEvent size={18} />,
        text: "Prix national d'architecture durable 2023",
      },
    ],
    abouttab: [
      "Forte expérience dans l’architecture durable",
      "Passionnée par la formation et le mentorat",
      "Engagée dans l’innovation environnementale",
    ],
  },
  {
    id: "2",
    name: "Boris Ebrotié",
    role: "Entrepreneur",
    company: "Tech Innovations",
    description:
      "L'entrepreneuriat est aboutir comme nouveau de sa vie et notre voyage collectif.",
    image: "/assets/foi/contact2.jpg",
    about:
      "Entrepreneur visionnaire dans le domaine technologique, je développe des solutions innovantes pour transformer les entreprises africaines.",
    achievements: [
      {
        icon: <IconNavigation size={18} />,
        text: "Conception de 15+ bâtiments écologiques",
      },
      {
        icon: <IconCalendarEvent size={18} />,
        text: "Prix national d'architecture durable 2023",
      },
    ],
    abouttab: [
      "Expert en innovation technologique",
      "Passionné par le développement entrepreneurial",
      "Accompagnement de startups africaines",
    ],
  },
  {
    id: "3",
    name: "Fatou Ouattara",
    role: "Consultante Business",
    company: "Business Solutions",
    description:
      "Mon rôles consistent d'affiner de ma foi et de mon héritage culturel.",
    image: "/assets/foi/contact2.jpg",
    about:
      "Mes valeurs racontent l'histoire de ma foi et de mon héritage culturel. À Abidjan, Côte d'Ivoire.",
    achievements: [
      {
        icon: <IconNavigation size={18} />,
        text: "Conception de 15+ bâtiments écologiques",
      },
      {
        icon: <IconCalendarEvent size={18} />,
        text: "Prix national d'architecture durable 2023",
      },
    ],
    abouttab: [
      "Conseil en stratégie d'entreprise",
      "Accompagnement des PME locales",
      "Expertise en transformation digitale",
    ],
  },
  {
    id: "4",
    name: "Seydou Koné",
    role: "Développeur",
    company: "Digital Agency",
    description:
      "Créer des solutions techniques pour accompagner les entreprises dans leur transformation numérique.",
    image: "/assets/foi/contact2.jpg",
    about:
      "Développeur full-stack passionné par l'innovation technologique et l'impact social des solutions digitales.",
    achievements: [
      {
        icon: <IconNavigation size={18} />,
        text: "Conception de 15+ bâtiments écologiques",
      },
      {
        icon: <IconCalendarEvent size={18} />,
        text: "Prix national d'architecture durable 2023",
      },
    ],
    abouttab: [
      "Spécialiste développement web et mobile",
      "Formation de jeunes développeurs",
      "Passionné par les nouvelles technologies",
    ],
  },
  {
    id: "5",
    name: "Aicha Bamba",
    role: "Artiste",
    company: "Atelier Créatif",
    description:
      "L'art africain contemporain exprimé par l'évolution artistique et la tradition.",
    image: "/assets/foi/contact2.jpg",
    about:
      "Artiste contemporaine engagée, je mélange traditions africaines et techniques modernes pour créer un art unique.",
    achievements: [
      {
        icon: <IconNavigation size={18} />,
        text: "Conception de 15+ bâtiments écologiques",
      },
      {
        icon: <IconCalendarEvent size={18} />,
        text: "Prix national d'architecture durable 2023",
      },
    ],
    abouttab: [
      "Art contemporain africain",
      "Expositions internationales",
      "Ateliers et mentorat artistique",
    ],
  },
  {
    id: "6",
    name: "Luc Simi",
    role: "Consultant",
    company: "Business Advisory",
    description:
      "Optimiser les performances des entreprises par un développement métier dans l'industrie moderne.",
    image: "/assets/foi/contact2.jpg",
    about:
      "Consultant senior spécialisé dans l'optimisation des processus métiers et la transformation organisationnelle.",
    achievements: [
      {
        icon: <IconNavigation size={18} />,
        text: "Conception de 15+ bâtiments écologiques",
      },
      {
        icon: <IconCalendarEvent size={18} />,
        text: "Prix national d'architecture durable 2023",
      },
    ],
    abouttab: [
      "Expertise en conseil stratégique",
      "Optimisation des processus métiers",
      "Formations et accompagnement",
    ],
  },
   {
    id: "7",
    name: "Luc Simi",
    role: "Consultant",
    company: "Business Advisory",
    description:
      "Optimiser les performances des entreprises par un développement métier dans l'industrie moderne.",
    image: "/assets/foi/contact2.jpg",
    about:
      "Consultant senior spécialisé dans l'optimisation des processus métiers et la transformation organisationnelle.",
    achievements: [
      {
        icon: <IconNavigation size={18} />,
        text: "Conception de 15+ bâtiments écologiques",
      },
      {
        icon: <IconCalendarEvent size={18} />,
        text: "Prix national d'architecture durable 2023",
      },
    ],
    abouttab: [
      "Expertise en conseil stratégique",
      "Optimisation des processus métiers",
      "Formations et accompagnement",
    ],
  },
   {
    id: "9",
    name: "Luc Simi",
    role: "Consultant",
    company: "Business Advisory",
    description:
      "Optimiser les performances des entreprises par un développement métier dans l'industrie moderne.",
    image: "/assets/foi/contact2.jpg",
    about:
      "Consultant senior spécialisé dans l'optimisation des processus métiers et la transformation organisationnelle.",
    achievements: [
      {
        icon: <IconNavigation size={18} />,
        text: "Conception de 15+ bâtiments écologiques",
      },
      {
        icon: <IconCalendarEvent size={18} />,
        text: "Prix national d'architecture durable 2023",
      },
    ],
    abouttab: [
      "Expertise en conseil stratégique",
      "Optimisation des processus métiers",
      "Formations et accompagnement",
    ],
  },
];

export default testimonials;
