import { api } from "@/lib/api";
import { IActualite, IActualiteCategorie, IActualiteParams } from "../types/actualite.type";
import { LaravelPaginatedResponse } from "@/types/api.type";
import { SearchParams } from "ak-api-http";

export interface IActualiteAPI {
	obtenirToutesActualites(params: IActualiteParams): Promise<LaravelPaginatedResponse<IActualite>>;
	obtenirActualiteParSlug(slug: string): Promise<{ data: IActualite, related: IActualite[] } | null>;
	obtenirToutesCategories(): Promise<{ data: IActualiteCategorie[] }>;
}

export const actualiteAPI: IActualiteAPI = {
	obtenirToutesActualites(params: IActualiteParams): Promise<LaravelPaginatedResponse<IActualite>> {
		return api.request<LaravelPaginatedResponse<IActualite>>({
			endpoint: `/actualites`,
			method: "GET",
			searchParams: {
				...params,
				size: params.limit,
			} as SearchParams,
		});
	},

	obtenirActualiteParSlug(slug: string): Promise<{ data: IActualite, related: IActualite[] } | null> {
		return api.request<{ data: IActualite, related: IActualite[] } | null>({
			endpoint: `/actualites/${slug}`,
			method: "GET",
		});
	},

	obtenirToutesCategories(): Promise<{ data: IActualiteCategorie[] }> {
		return api.request<{ data: IActualiteCategorie[] }>({
			endpoint: `/categories`,
			method: "GET",
		});
	}
};
