export interface IDiocese {
  id: number;
  name: string;
  region?: string;
  image?: string;
}

export interface IDioceseParams {
  search?: string;
  region?: string;
  page?: number;
  limit?: number;
}
