import { PaginatedResponse } from "@/types/api.type";
import { IContributor, IContributorParams, ITribunes, ITribunesParams } from "../types/tribunes.type";
import { api } from "@/lib/api";
import { SearchParams } from "nuqs";

export interface ITribunesAPI {
  obtenirToutesLesTribunes(
    params: ITribunesParams
  ): Promise<PaginatedResponse<ITribunes>>;
  
  obtenirTousLesContributors(
    params?: IContributorParams
  ): Promise<IContributor[]>; // 🔥 retourne un tableau simple
}

export const tribunesApi: ITribunesAPI = {
  obtenirToutesLesTribunes(params: ITribunesParams): Promise<PaginatedResponse<ITribunes>> {
    return api.request<PaginatedResponse<ITribunes>>({
      endpoint: `/tribunes`,
      method: "GET",
      searchParams: params as SearchParams,
    });
  },

  obtenirTousLesContributors(params?: IContributorParams): Promise<IContributor[]> {
    return api.request<IContributor[]>({
      endpoint: `/contributors`, // 🔥 liste brute
      method: "GET",
      searchParams: params as SearchParams,
    });
  },
};
