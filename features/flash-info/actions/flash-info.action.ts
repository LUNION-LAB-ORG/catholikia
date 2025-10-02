"use server"


import { ActionResponse, PaginatedResponse } from "@/types/api.type";
import { handleServerActionError } from "@/utils/handleServerActionError";
import { IFlash } from "../types/flash-info.type";
import { flashApi } from "../apis/flash-info.apis";


export const obtenirToutesExclusivitesAction = async (): Promise<ActionResponse<PaginatedResponse<IFlash>>> => {
	try {
		const data = await flashApi.obtenirToutesExclusivites();
		return {
			success: true,
			data: data,
			message: "Exclusivités obtenues avec succès",
		};
	} catch (error) {
		return handleServerActionError(error, "Erreur lors de la récupération des exclusivités");
	}
};