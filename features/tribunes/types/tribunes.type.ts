export interface ITribunes {
  id: string;
  author: string;
  position: string;
  titre: string;
  slug: string;
  contenu: string;
  image: string;
  published_at: string;
  article_une: boolean;
  theme: string;
}

export interface ITribunesParams {
  id?: string;
  image?: string;
  title?: string;
  excerpt?: string;
  author?: string;
  temps?: string;
  date?: string;
  article_une?: boolean;
  theme?: string;
  page: number;
  size: number;
  skip?: number;
}

export interface IContributor {
  id: string;
  name: string;
  title: string;
  image: string;
  themes: string[];
  biography: string;
  email: string;
  phone: string;
}

export interface IContributorParams {
  id?: string;
  name?: string;
  title?: string;
  image?: string;
}