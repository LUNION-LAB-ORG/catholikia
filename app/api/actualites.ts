import {IActualite} from "@/features/actualite/types/actualite.type";

export const actualitesFakeData: IActualite[] = [
	{
		id: '1',
		title: 'Nouvelle application de prière lancée',
		image: '/images-examples/actualites/1.jpg',
		url: '/actualites/nouvelle-application-de-priere-lancee',
		publishedAt: '2024-06-01',
		category: 'Technologie',
		country: 'France',
		authorName:'Jean Dupont',
		tags: ['application', 'prière', 'lancement']
	},
	{
		id: '2',
		title: 'Conférence sur l\'innovation religieuse',
		image: '/images-examples/actualites/2.jpg',
		url: '/actualites/conference-innovation-religieuse',
		publishedAt: '2024-06-05',
		category: 'Événement',
		country: 'Belgique',
		authorName: 'Marie Lambert',
		tags: ['conférence', 'innovation', 'religion']
	},
	{
		id: '3',
		title: 'Lancement d\'un podcast chrétien',
		image: '/images-examples/actualites/3.jpg',
		url: '/actualites/lancement-podcast-chretien',
		publishedAt: '2024-06-10',
		category: 'Média',
		country: 'Suisse',
		authorName: 'Paul Martin',
		tags: ['podcast', 'chrétien', 'audio']
	}
];