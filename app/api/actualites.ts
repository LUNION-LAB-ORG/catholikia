import { IActualite } from "@/features/actualite/types/actualite.type";

export const actualitesFakeData: IActualite[] = [
  {
    id: '1',
    title: 'Nouvelle application de prière lancée',
    image: '/images-examples/actualites/1.jpg',
    slug: '/actualites/nouvelle-application-de-priere-lancee',
    publishedAt: '2024-06-01',
    category: 'Technologie',
    country: 'France',
    authorName:'Jean Dupont',
    tags: ['application', 'prière', 'lancement'],
		content: `<p>Une nouvelle application de prière a été lancée pour aider les croyants à rester connectés spirituellement tout au long de la journée. L'application offre des fonctionnalités telles que des rappels de prière, des méditations guidées et une communauté en ligne pour partager des expériences de foi.</p>
		<p>Les développeurs de l'application espèrent qu'elle deviendra un outil précieux pour les personnes cherchant à approfondir leur relation avec Dieu.</p>`
	},
	{
		id: '2',
		title: 'Conférence sur l\'innovation religieuse',
		image: '/images-examples/actualites/2.jpg',
		slug: '/actualites/conference-innovation-religieuse',
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
		slug: '/actualites/lancement-podcast-chretien',
		publishedAt: '2024-06-10',
		category: 'Média',
		country: 'Suisse',
		authorName: 'Paul Martin',
		tags: ['podcast', 'chrétien', 'audio']
	},
  // 7 autres actualités avec des id uniques
  { id: '4', title: 'Actualité 4', image: '/images-examples/actualites/3.jpg', slug: '#', publishedAt: '2024-06-11', category: 'Média', country: 'Suisse', authorName:'Paul Martin', tags:['tag1'] },
  { id: '5', title: 'Actualité 5', image: '/images-examples/actualites/3.jpg', slug: '#', publishedAt: '2024-06-12', category: 'Média', country: 'Suisse', authorName:'Paul Martin', tags:['tag1'] },
  { id: '6', title: 'Actualité 6', image: '/images-examples/actualites/3.jpg', slug: '#', publishedAt: '2024-06-13', category: 'Média', country: 'Suisse', authorName:'Paul Martin', tags:['tag1'] },
  { id: '7', title: 'Actualité 7', image: '/images-examples/actualites/3.jpg', slug: '#', publishedAt: '2024-06-14', category: 'Média', country: 'Suisse', authorName:'Paul Martin', tags:['tag1'] },
  { id: '8', title: 'Actualité 8', image: '/images-examples/actualites/3.jpg', slug: '#', publishedAt: '2024-06-15', category: 'Média', country: 'Suisse', authorName:'Paul Martin', tags:['tag1'] },
  { id: '9', title: 'Actualité 9', image: '/images-examples/actualites/3.jpg', slug: '#', publishedAt: '2024-06-16', category: 'Média', country: 'Suisse', authorName:'Paul Martin', tags:['tag1'] },
  { id: '10', title: 'Actualité 10', image: '/images-examples/actualites/3.jpg', slug: '#', publishedAt: '2024-06-17', category: 'Média', country: 'Suisse', authorName:'Paul Martin', tags:['tag1'] },
];
