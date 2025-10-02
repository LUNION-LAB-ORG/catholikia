import { api } from "@/lib/api";
import { PaginatedResponse } from "@/types/api.type";
import { SearchParams } from "nuqs";
import { IDiocese, IDioceseParams } from "../types/diocese.type";

export interface IDioceseAPI {
  // 🔥 pas de pagination

  obtenirTousLesDioceses(
    params: IDioceseParams
  ): Promise<PaginatedResponse<IDiocese>>; // 🔥 avec pagination
}

export const tribunesApi: IDioceseAPI = {
  obtenirTousLesDioceses(
    params: IDioceseParams
  ): Promise<PaginatedResponse<IDiocese>> {
    return api.request<PaginatedResponse<IDiocese>>({
      endpoint: `/dioceses`,
      method: "GET",
      searchParams: params as SearchParams,
    });
  },
};
