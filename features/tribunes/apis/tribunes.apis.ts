import { LaravelPaginatedResponse } from "@/types/api.type";
import { IContributor, IContributorParams, ITribunes, ITribunesParams } from "../types/tribunes.type";
import { api } from "@/lib/api";
import { SearchParams } from "ak-api-http";

export interface ITribunesAPI {
  obtenirToutesLesTribunes(
    params: ITribunesParams
  ): Promise<LaravelPaginatedResponse<ITribunes>>;

  obtenirTousLesContributors(
    params?: IContributorParams
  ): Promise<IContributor[]>;

  obtenirTribuneParSlug(slug: string): Promise<{ data: ITribunes } | null>;
}

export const tribunesApi: ITribunesAPI = {
  obtenirToutesLesTribunes(params: ITribunesParams): Promise<LaravelPaginatedResponse<ITribunes>> {
    return api.request<LaravelPaginatedResponse<ITribunes>>({
      endpoint: `/tribunes`,
      method: "GET",
      searchParams: params as SearchParams,
    });
  },

  obtenirTousLesContributors(params?: IContributorParams): Promise<IContributor[]> {
    return api.request<IContributor[]>({
      endpoint: `/contributors`,
      method: "GET",
      searchParams: params as SearchParams,
    });
  },

  obtenirTribuneParSlug(slug: string): Promise<{ data: ITribunes } | null> {
    return api.request<{ data: ITribunes }>({
      endpoint: `/tribunes/${slug}`,
      method: "GET",
    });
  },
};
