export type SiteConfig = typeof siteConfig;

export const locales = ["fr"];

export const siteConfig = {
  name: "Catholikia",
  description: "Le média catholique de l'Afrique francophone",
  navItems: [
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
      key: "parlons-en",
      label: "Parlons-en",
      href: "/parlons-en",
    },
    {
      key: "culturama",
      label: "Culturama",
      href: "/culturama",
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

  navMenuItems: [
    {
      key: "profile",
      label: "Profile",
      href: "/profile",
    },
    {
      key: "dashboard",
      label: "Dashboard",
      href: "/dashboard",
    },
    {
      key: "projects",
      label: "Projects",
      href: "/projects",
    },
    {
      key: "team",
      label: "Team",
      href: "/team",
    },
    {
      key: "calendar",
      label: "Calendar",
      href: "/calendar",
    },
    {
      key: "settings",
      label: "Settings",
      href: "/settings",
    },
    {
      key: "help_feedback",
      label: "Help & Feedback",
      href: "/help-feedback",
    }
  ],
  links: {
    github: "https://github.com/LUNION-LAB-ORG/next-starter",
    docs: "https://github.com/LUNION-LAB-ORG/next-starter?tab=readme-ov-file#next-starter--architecture-standardis%C3%A9e-pour-projets-nextjs",
  },
};
