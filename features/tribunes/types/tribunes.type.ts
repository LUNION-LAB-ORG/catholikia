export interface ITribunes {
  id: number;
  image: string;
  title: string;
  excerpt: string;
  author: string;
  temps: string;
  date: string;
  article_une: boolean;
  theme: string;
}

export interface ITribunesParams {
  id?: number;
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
  id: number;
  name: string;
  title: string;
  image: string;
}
export interface IContributorParams {
  id?: number;
  name?: string;
  title?: string;
  image?: string;
}