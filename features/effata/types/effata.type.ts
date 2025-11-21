import {IActualite} from "@/features/actualite/types/actualite.type";

export interface IEffata extends Omit<IActualite, 'related'> {
	published_at: string; // Date de publication
	related?: IRelatedEffata[]; // Articles liés
}

export interface IEffataCategorie {
	id: string;
	nom: string;
	enfants?: Omit<IEffataCategorie, 'enfants'>[];
}

export interface IRelatedEffata extends Omit<IEffata, 'related'> {
}

export interface IEffataParams {
	page?: number;
	size?: number;
	skip?: number;
	country?: string;
	categorie?: string;
	tag?: string;
	titre?: string;
}