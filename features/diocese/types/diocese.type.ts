export interface IRepresentant {
  nom: string;
  titre: string;
  rang: string;
  photo: string;
  annee_prise: string;
}

export interface IDiocese {
  id: number;
  nom: string;
  region?: string;
  image?: string;
  representant: IRepresentant;
  departement: string;
  ville: string;
  contact: string;
  email: string;
  date_creation: string;
}

export interface IDioceseParams {
  nom?: string;
  region?: string;
  ville?: string;
  page?: number;
  size?: number;
}
