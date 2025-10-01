import {api} from "@/lib/api";
import {IActualite, IActualiteParams} from "../types/actualite.type";
import {PaginatedResponse} from "@/types/api.type";
import {SearchParams} from "ak-api-http";

export interface IActualiteAPI {
	obtenirToutesActualites(params: IActualiteParams): Promise<PaginatedResponse<IActualite>>;
	obtenirActualiteParSlug(slug: string): Promise<IActualite | null>;
}

export const actualiteAPI: IActualiteAPI = {
	obtenirToutesActualites(params: IActualiteParams): Promise<PaginatedResponse<IActualite>> {
		return api.request<PaginatedResponse<IActualite>>({
			endpoint: `/actualites`,
			method: "GET",
			searchParams: params as SearchParams,
		});
	},

	obtenirActualiteParSlug(slug: string): Promise<IActualite | null> {
		return api.request<IActualite | null>({
			endpoint: `/actualites/${slug}`,
			method: "GET",
		});
	},
};
