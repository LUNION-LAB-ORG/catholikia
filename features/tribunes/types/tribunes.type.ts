// types/article.ts
export  interface ITribunes {
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
export enum UtilisateurRole {
  AGENT = "AGENT",
  ADMIN = "ADMIN",
}

export enum UtilisateurStatus {
  ACTIVE = "ACTIVE",
  INACTIVE = "INACTIVE",
  DELETED = "DELETED",
}

// export interface IUtilisateur {
//   id: string;
//   email: string;
//   firstName: string;
//   lastName: string;
//   phoneNumber: string;
//   role: UtilisateurRole;
//   status: UtilisateurStatus;
//   isPasswordChangeRequired: boolean;
//   createdAt: string;
//   updatedAt: string;
//   deletedAt: string | null;
// }

// types/article.ts

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
}


// types/contributor.ts

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


export interface IUtilisateurDeleteResponse {
  success: true,
  message: string,
};
