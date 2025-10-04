import { api } from "@/lib/api";
import { LaravelPaginatedResponse } from "@/types/api.type";
import { SearchParams } from "ak-api-http";
import { ITemoignage, ITemoignageParams } from "../types/vie-de-foi.type";

export interface IVieDeFoiAPI {
  obtenirTemoignages(params: ITemoignageParams): Promise<LaravelPaginatedResponse<ITemoignage>>;
  obtenirTemoignageParId(id: number): Promise<{ data: ITemoignage } | null>;
}

export const vieDeFoiAPI: IVieDeFoiAPI = {
  obtenirTemoignages(params: ITemoignageParams): Promise<LaravelPaginatedResponse<ITemoignage>> {
    return api.request<LaravelPaginatedResponse<ITemoignage>>({
      endpoint: `/testimonials`,
      method: "GET",
      searchParams: params as SearchParams,
    });
  },

  obtenirTemoignageParId(id: number): Promise<{ data: ITemoignage } | null> {
    return api.request<{ data: ITemoignage } | null>({
      endpoint: `/testimonials/${id}`,
      method: "GET",
    });
  },
};
