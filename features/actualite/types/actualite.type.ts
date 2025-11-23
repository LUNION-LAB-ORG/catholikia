export interface IActualite {
  id: string;
  titre: string;
  image: string;
  date_publication: string;
  slug: string;
  tags: string[];
  country?: string;
  categorie?: {
    id: number;
    name: string;
    nom: string;
    created_at: string;
  };
  auteur: {
    id: string;
    name: string;
    email: string;
    phone: string;
    created_at: string;
    updated_at: string;
  };
  contenu: string;
  description?: string;
  related?: IRelatedActualite[];
}

export interface IActualiteCategorie {
  id: string;
  name: string;
  description?: string;
}

export interface IRelatedActualite extends Omit<IActualite, 'related'> { }

export interface IActualiteParams {
  page?: number;
  limit?: number;
  skip?: number;
  country?: string;
  category_id?: string;
  tag?: string;
  q?: string;
}