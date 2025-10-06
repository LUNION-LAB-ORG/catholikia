export interface IEntity {
  entityId: string;
  entityType: string;
}

export interface ICommentaire {
  id: string;
  fullname: string;
  email: string;
  comments: string;
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