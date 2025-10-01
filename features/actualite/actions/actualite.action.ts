"use server";

import { ActionResponse, PaginatedResponse } from "@/types/api.type";
import { actualiteAPI } from "../apis/actualite.api";
import { IActualite, IActualiteParams } from "../types/actualite.type";
import { handleServerActionError } from "@/utils/handleServerActionError";

export const obtenirToutesActualitesAction = async (params: IActualiteParams): Promise<ActionResponse<PaginatedResponse<IActualite>>> => {
    try {
        const data = await actualiteAPI.obtenirToutesActualites(params);
        return {
            success: true,
            data: data,
            message: "Actualités obtenues avec succès",
        }
    } catch (error) {
        return handleServerActionError(error, "Erreur lors de la récupération des actualités");
    }
}

export const obtenirActualiteParSlugAction = async (slug: string): Promise<ActionResponse<IActualite | null>> => {
    try {
        const data = await actualiteAPI.obtenirActualiteParSlug(slug);
        return {
            success: true,
            data: data,
            message: data ? "Actualité obtenue avec succès" : "Actualité non trouvée",
        }
    } catch (error) {
        return handleServerActionError(error, "Erreur lors de la récupération de l'actualité");
    }
}
