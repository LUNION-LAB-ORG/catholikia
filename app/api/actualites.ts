import { IActualite } from "@/features/actualite/types/actualite.type";

export const actualitesFakeData: IActualite[] = [
	{
		id: '1',
		titre: 'Nouvelle application de prière lancée',
		image: '/images-examples/actualites/1.jpg',
		slug: '/actualites/nouvelle-application-de-priere-lancee',
		date_publication: '2024-06-01',
		category: 'Technologie',
		country: 'France',
		auteur: {
			id: 'a1',
			name: 'Jean Dupont',
			email: 'jean.dupont@example.com',
			phone: '0123456789',
			created_at: '2024-01-01',
			updated_at: '2024-01-01'
		},
		tags: ['application', 'prière', 'lancement'],
		contenu: `<p>Une nouvelle application de prière a été lancée pour aider les croyants à rester connectés spirituellement tout au long de la journée. L'application offre des fonctionnalités telles que des rappels de prière, des méditations guidées et une communauté en ligne pour partager des expériences de foi.</p>
		<p>Les développeurs de l'application espèrent qu'elle deviendra un outil précieux pour les personnes cherchant à approfondir leur relation avec Dieu.</p>`
	},
]