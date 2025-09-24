import {IFlashInfo} from "@/features/flash-info/types/flash-info.type";

export const flashInfosFakeData: IFlashInfo[] = [
	{
		id: "1",
		title: "Mise à jour",
		body: "Notre application a été mise à jour avec de nouvelles fonctionnalités passionnantes.",
		link: "https://example.com/update-details"
	},
	{
		id: "2",
		title: "Maintenance",
		body: "Une maintenance programmée aura lieu ce week-end. Certains services pourraient être indisponibles.",
		link: "https://example.com/maintenance-info"
	},
	{
		id: "3",
		title: "Nouveau partenariat",
		body: "Nous sommes ravis d'annoncer un nouveau partenariat avec une entreprise leader du secteur.",
		link: "https://example.com/partnership-details"
	}
]