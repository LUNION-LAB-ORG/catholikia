import {faFacebookF, faTiktok, faXTwitter, faYoutube} from "@fortawesome/free-brands-svg-icons";

export const locales = ["fr"];

export const siteConfig = {
	baseUrl: "https://www.catholikia.com",
	address: "Abidjan, Cocody, Bingerville",
	phone: "+225 01 02 03 04 05",
	email: "info@catholikia.com",
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
			label: "Vie de foi",
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
			label: "Lectio-divina",
			href: "/lectio-divina",
		},
		{
			key: "annuaire",
			label: "Annuaire",
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
	socialLinks: [
		{icon: faFacebookF, label: "Facebook", href: "https://www.facebook.com/share/1cv7T6TuHN/?mibextid=wwXIfr"},
		{icon: faTiktok, label: "Tiktok", href: "https://www.tiktok.com/@catholikia?_r=1&_t=ZM-91rccFcld4S"},
		{icon: faYoutube, label: "Youtube", href: "https://www.youtube.com/@Catholikia"},
		{icon: faXTwitter, label: "X", href: "https://x.com/catholikia"},
	],
	links: {
		github: "https://github.com/LUNION-LAB-ORG/next-starter",
		docs: "https://github.com/LUNION-LAB-ORG/next-starter?tab=readme-ov-file#next-starter--architecture-standardis%C3%A9e-pour-projets-nextjs",
	},
};
