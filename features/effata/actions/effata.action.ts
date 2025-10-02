"use server";

import { ActionResponse, LaravelPaginatedResponse } from "@/types/api.type";
import { effataAPI } from "../apis/effata.api";
import { IEffata, IEffataParams } from "../types/effata.type";
import { handleServerActionError } from "@/utils/handleServerActionError";

export const obtenirToutesEffatasAction = async (params: IEffataParams): Promise<ActionResponse<LaravelPaginatedResponse<IEffata>>> => {
    try {
        const data = await effataAPI.obtenirToutesEffatas(params);
        return {
            success: true,
            data: data,
            message: "Effatas obtenues avec succès",
        }
    } catch (error) {
        return handleServerActionError(error, "Erreur lors de la récupération des effatas");
    }
}

export const obtenirEffataParSlugAction = async (slug: string): Promise<ActionResponse<IEffata | null>> => {
    try {
        const data = await effataAPI.obtenirEffataParSlug(slug);
        return {
            success: true,
            data: data?.data || null,
            message: data ? "Effata obtenue avec succès" : "Effata non trouvée",
        }
    } catch (error) {
        return handleServerActionError(error, "Erreur lors de la récupération de l'effata");
    }
}
