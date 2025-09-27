
export interface IActualite {
	id: string;
	title: string;
	image: string;
	publishedAt: string;
	shortDescription?: string;
	url: string;
	tags: string[];
	country?: string;
	category?: string;
	authorName?: string;
	content?:string
}