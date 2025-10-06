import { api } from "@/lib/api";
import { ILectio, ILectioSearchParams } from "../types/lectio.type";
import { LaravelPaginatedResponse } from "@/types/api.type";
import { SearchParams } from "ak-api-http";

export interface ILectioAPI {
	obtenirToutesLectios(params: ILectioSearchParams): Promise<LaravelPaginatedResponse<ILectio>>;
	obtenirLectioParId(id: string): Promise<{ data: ILectio } | null>;
}

export const lectioAPI: ILectioAPI = {
	obtenirToutesLectios(params: ILectioSearchParams): Promise<LaravelPaginatedResponse<ILectio>> {
		return api.request<LaravelPaginatedResponse<ILectio>>({
			endpoint: `/lexio_divinas`,
			method: "GET",
			searchParams: params as SearchParams,
		});
	},

	obtenirLectioParId(id: string): Promise<{ data: ILectio } | null> {
		return api.request<{ data: ILectio } | null>({
			endpoint: `/lexio_divinas/${id}`,
			method: "GET",
		});
	},
};
