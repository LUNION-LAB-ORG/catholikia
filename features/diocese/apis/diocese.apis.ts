import { api } from "@/lib/api";
import { LaravelPaginatedResponse } from "@/types/api.type";
import { SearchParams } from "nuqs";
import { IDiocese, IDioceseParams } from "../types/diocese.type";

export interface IDioceseAPI {
  obtenirTousLesDioceses(
    params: IDioceseParams
  ): Promise<LaravelPaginatedResponse<IDiocese>>;
  obtenirDioceseParSlug(slug: string): Promise<IDiocese | null>;
}

export const dioceseApi: IDioceseAPI = {
  obtenirTousLesDioceses(
    params: IDioceseParams
  ): Promise<LaravelPaginatedResponse<IDiocese>> {
    return api.request<LaravelPaginatedResponse<IDiocese>>({
      endpoint: `/dioceses`,
      method: "GET",
      searchParams: params as SearchParams,
    });
  },
  obtenirDioceseParSlug(slug: string): Promise<IDiocese | null> {
    return api.request<IDiocese>({
      endpoint: `/dioceses/${slug}`,
      method: "GET",
    });
  },
};
