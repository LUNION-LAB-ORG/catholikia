import { IActualite } from "@/features/actualite/types/actualite.type";

export interface IEffata extends IActualite {
	published_at: string; // Date de publication
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