export interface IActualite {
	id: string;
	titre: string;
	image: string;
	date_publication: string;
	slug: string;
	tags: string[];
	country?: string;
	category?: string;
	authorName?: string;
	contenu?: string;
	description?: string;
}

export interface IActualiteParams {
	page?: number;
	limit?: number;
	skip?: number;
	country?: string;
	category?: string;
	tag?: string;
	q?: string;
}