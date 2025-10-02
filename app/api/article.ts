import { IActualite } from "@/features/actualite/types/actualite.type";

export const articlesFakeData: IActualite[] = [
	{
		id: "1",
		titre: "Nouvelle application de prière lancée",
		image: "/assets/effata/articles/article1.png",
		slug: "nouvelle-application-de-priere-lancee",
		date_publication: "2024-06-01",
		categorie: "Technologie",
		country: "France",
		auteur: {
			id: 'a1',
			name: 'Jean Dupont',
			email: 'jean.dupont@example.com',
			phone: '0123456789',
			created_at: '2024-01-01',
			updated_at: '2024-01-01'
		},
		contenu: `<p>Une nouvelle application de prière a été lancée pour aider les croyants à rester connectés spirituellement tout au long de la journée. L'application offre des fonctionnalités telles que des rappels de prière, des méditations guidées et une communauté en ligne pour partager des expériences de foi.</p>
		<p>Les développeurs de l'application espèrent qu'elle deviendra un outil précieux pour les personnes cherchant à approfondir leur relation avec Dieu.</p>`,
		tags: ["application", "prière", "lancement"],
		description: "Salutation du Saint-Père au Patriarche bouddhiste le jeudi 21 novembre 2019 au Temple Wat Ratchabophit Sathit Maha Simaram (Bangkok).",
	}
]