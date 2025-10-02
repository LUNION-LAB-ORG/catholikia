import { api } from "@/lib/api";
import { IEffata, IEffataParams } from "../types/effata.type";
import { LaravelPaginatedResponse } from "@/types/api.type";
import { SearchParams } from "ak-api-http";

export interface IEffataAPI {
	obtenirToutesEffatas(params: IEffataParams): Promise<LaravelPaginatedResponse<IEffata>>;
	obtenirEffataParSlug(slug: string): Promise<{ data: IEffata } | null>;
}

export const effataAPI: IEffataAPI = {
	obtenirToutesEffatas(params: IEffataParams): Promise<LaravelPaginatedResponse<IEffata>> {
		return api.request<LaravelPaginatedResponse<IEffata>>({
			endpoint: `/effatas`,
			method: "GET",
			searchParams: params as SearchParams,
		});
	},

	obtenirEffataParSlug(slug: string): Promise<{ data: IEffata } | null> {
		return api.request<{ data: IEffata } | null>({
			endpoint: `/effatas/${slug}`,
			method: "GET",
		});
	},
};
