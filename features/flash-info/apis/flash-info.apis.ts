import { api } from "@/lib/api";
import { PaginatedResponse } from "@/types/api.type";
import { IFlash } from "../types/flash-info.type";


export interface IFlashAPI {
	obtenirToutesExclusivites(): Promise<PaginatedResponse<IFlash>>;
}

export const flashApi: IFlashAPI = {
	obtenirToutesExclusivites(): Promise<PaginatedResponse<IFlash>> {
		return api.request<PaginatedResponse<IFlash>>({
			endpoint: `/exclusivities`,
			method: "GET",
		});
	},
};