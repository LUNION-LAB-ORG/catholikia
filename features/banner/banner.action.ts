"use server"

import { ActionResponse, PaginatedResponse } from "@/types";
import { handleServerActionError } from "@/utils/handleServerActionError";
import {bannerAPI} from "@/features/banner/banner.api";
import {IBanner} from "@/features/banner/banner.type";

export const obtenirToutesBannieresAction = async (): Promise<ActionResponse<PaginatedResponse<IBanner>>> => {
	try {
		const data = await bannerAPI.obtenirToutesBannieres();
		return {
			success: true,
			data: data,
			message: "Bannières obtenues avec succès",
		};
	} catch (error) {
		return handleServerActionError(error, "Erreur lors de la récupération des bannières");
	}
};
