export type SiteConfig = typeof siteConfig;

export const locales = ["fr"];

export const siteConfig = {
  baseUrl: "https://www.catholikia.com",
  name: "Catholikia",
  description: "Le média catholique de l'Afrique francophone",
  navItems: [
    {
      key: "home",
      label: "Accueil",
      href: "/",
    },
    {
      key: "actualites",
      label: "Actualités",
      href: "/actualites",
    },
    {
      key: "effata",
      label: "Effata",
      href: "/effata",
    },
    {
      key: "vie-de-foi",
      label: "Pricing",
      href: "/vie-de-foi",
    },
    {
      key: "evenements",
      label: "Événements",
      href: "/evenements",
    },
    // {
    //   key: "parlons-en",
    //   label: "Parlons-en",
    //   href: "/parlons-en",
    // },
    {
      key: "lectio-divina",
      label: "lectio-divina",
      href: "/lectio-divina",
    },
    {
      key: "annuaire",
      label: "annuaire",
      href: "/annuaire",
    },
    {
      key: "tribunes",
      label: "Tribunes",
      href: "/tribunes",
    },
    {
      key: "a-propos",
      label: "A propos",
      href: "/a-propos",
    }
  ],
  links: {
    github: "https://github.com/LUNION-LAB-ORG/next-starter",
    docs: "https://github.com/LUNION-LAB-ORG/next-starter?tab=readme-ov-file#next-starter--architecture-standardis%C3%A9e-pour-projets-nextjs",
  },
};
