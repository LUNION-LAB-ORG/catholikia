"use server";

import { ActionResponse, LaravelPaginatedResponse } from "@/types/api.type";
import { tribunesApi } from "../apis/tribunes.apis";
import { ITribunes, ITribunesParams } from "../types/tribunes.type";
import { handleServerActionError } from "@/utils/handleServerActionError";

export const obtenirToutesLesTribunesAction = async (params: ITribunesParams): Promise<ActionResponse<LaravelPaginatedResponse<ITribunes>>> => {
    try {
        const data = await tribunesApi.obtenirToutesLesTribunes(params);
        return {
            success: true,
            data: data,
            message: "Tribunes obtenues avec succès",
        }
    } catch (error) {
        return handleServerActionError(error, "Erreur lors de la récupération des tribunes");
    }
}

export const obtenirTribuneParSlugAction = async (slug: string): Promise<ActionResponse<ITribunes | null>> => {
    try {
        const data = await tribunesApi.obtenirTribuneParSlug(slug);
        return {
            success: true,
            data: data?.data || null,
            message: data ? "Tribune obtenue avec succès" : "Tribune non trouvée",
        }
    } catch (error) {
        return handleServerActionError(error, "Erreur lors de la récupération de la tribune");
    }
}
