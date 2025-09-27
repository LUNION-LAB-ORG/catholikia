export interface IActualite {
	id: string;
	title: string;
	image: string;
	publishedAt: string;
	slug: string;
	tags: string[];
	country?: string;
	category?: string;
	authorName?: string;
	content?:string;
	description?:string;
}