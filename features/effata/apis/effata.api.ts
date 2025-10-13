import { data } from './../../../components/(protected)/dashboard/common/data';
import { IEffataCategorie, IRelatedEffata } from './../types/effata.type';
import { api } from "@/lib/api";
import { IEffata, IEffataParams } from "../types/effata.type";
import { LaravelPaginatedResponse } from "@/types/api.type";
import { SearchParams } from "ak-api-http";

export interface IEffataAPI {
	obtenirToutesEffatas(params: IEffataParams): Promise<LaravelPaginatedResponse<IEffata>>;
	obtenirEffataParSlug(slug: string): Promise<{ data: IEffata; related: IRelatedEffata[] } | null>;
	obtenirToutesCategoriesEffata(): Promise<{ data: IEffataCategorie[] }>;
}

export const effataAPI: IEffataAPI = {
	obtenirToutesEffatas(params: IEffataParams): Promise<LaravelPaginatedResponse<IEffata>> {
		return api.request<LaravelPaginatedResponse<IEffata>>({
			endpoint: `/effatas`,
			method: "GET",
			searchParams: params as SearchParams,
		});
	},

	obtenirEffataParSlug(slug: string): Promise<{ data: IEffata; related: IRelatedEffata[] } | null> {
		return api.request<{ data: IEffata; related: IRelatedEffata[] } | null>({
			endpoint: `/effatas/${slug}`,
			method: "GET",
		});
	},

	obtenirToutesCategoriesEffata(): Promise<{ data: IEffataCategorie[] }> {
		return api.request<{ data: IEffataCategorie[] }>({
			endpoint: `/effata-categories`,
			method: "GET",
		});
	}
};
