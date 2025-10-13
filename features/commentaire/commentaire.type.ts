export interface IEntity {
  entityId: string;
  entityType: string;
}

export interface ICommentaire {
  id: string;
  nom: string;
  email: string;
  message: string;
  entityId: IEntity['entityId'];
  entityType: IEntity['entityType'];
  created_at: string;
  updated_at: string;
}

export interface ICommentaireSearchParams {
  entityId: IEntity['entityId'];
  entityType: IEntity['entityType'];
  page?: number;
  size?: number;
}