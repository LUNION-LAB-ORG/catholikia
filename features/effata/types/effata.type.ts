export interface IEffata {
	id: string;
	title: string;
	image: string;
	publishedAt: string;
	slug: string;
	tags: string[];
	country?: string;
	category?: string;
	authorName?: string;
	content?: string;
	description?: string;
}

export interface IEffataParams {
	page?: number;
	limit?: number;
	skip?: number;
	country?: string;
	category?: string;
	tag?: string;
	search?: string;
}