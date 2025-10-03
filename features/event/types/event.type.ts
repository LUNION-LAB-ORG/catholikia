// types/events.type.ts

/** -------------------------------
 * Représente un évènement
 * ------------------------------- */
export interface IEvent {
  id: number;
  title: string;
  contenu: string; // HTML string
  slug: string;
  image: string; // URL
  published_at: string; // ISO date
  created_at: string; // ISO date
  updated_at: string; // ISO date
}

/** -------------------------------
 * Lien de pagination
 * ------------------------------- */
export interface IPaginationLink {
  url: string | null;
  label: string;
  active: boolean;
}

/** -------------------------------
 * Métadonnées de pagination
 * ------------------------------- */
export interface IPaginationMeta {
  current_page: number;
  from: number;
  last_page: number;
  links: IPaginationLink[];
  path: string;
  per_page: number;
  to: number;
  total: number;
}

/** -------------------------------
 * Liens de navigation pagination
 * ------------------------------- */
export interface IPaginationLinks {
  first: string | null;
  last: string | null;
  prev: string | null;
  next: string | null;
}

/** -------------------------------
 * Réponse API des évènements
 * ------------------------------- */
export interface IEventApiResponse {
  data: IEvent[];
  links: IPaginationLinks;
  meta: IPaginationMeta;
}
// types/events.type.ts

/** -------------------------------
 * Paramètres de filtrage/recherche
 * pour la liste des évènements
 * ------------------------------- */
export interface IEventParams {
  page?: number;      // numéro de page
  size?: number;      // nombre d’éléments par page
  skip?: number;      // offset (si nécessaire)
  country?: string;   // filtrer par pays
  category?: string;  // filtrer par catégorie
  tag?: string;       // filtrer par tag
  titre?: string;     // rechercher par titre
}
