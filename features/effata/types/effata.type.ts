import { IActualite } from "@/features/actualite/types/actualite.type";

export interface IEffata extends Omit<IActualite, 'related'> {
  published_at: string; // Date de publication
  related?: IRelatedEffata[]; // Articles liés
}

export interface IRelatedEffata extends Omit<IEffata, 'related'> { }

export interface IEffataParams {
  page?: number;
  size?: number;
  skip?: number;
  country?: string;
  category?: string;
  tag?: string;
  titre?: string;
}