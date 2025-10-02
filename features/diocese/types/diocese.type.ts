export interface IDiocese {
  id: number;
  name: string;
  region?: string;
  image?: string;
}

export interface IDioceseParams {
  name?: string;
  region?: string;
  page?: number;
  limit?: number;
}
