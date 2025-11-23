"use server";

import { ActionResponse, LaravelPaginatedResponse } from "@/types/api.type";
import { handleServerActionError } from "@/utils/handleServerActionError";
import { actualiteAPI } from "../apis/actualite.api";
import { IActualite, IActualiteCategorie, IActualiteParams } from "../types/actualite.type";

export const obtenirToutesActualitesAction = async (params: IActualiteParams): Promise<ActionResponse<LaravelPaginatedResponse<IActualite>>> => {
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
        const response = await actualiteAPI.obtenirActualiteParSlug(slug);
        if (response) {
            response.data.related = response.related;
        }

        return {
            success: true,
            data: response?.data,
            message: response?.data ? "Actualité obtenue avec succès" : "Actualité non trouvée",
        }
    } catch (error) {
        return handleServerActionError(error, "Erreur lors de la récupération de l'actualité");
    }
}

export const obtenirToutesCategoriesAction = async (): Promise<ActionResponse<IActualiteCategorie[]>> => {
    try {
        const data = await actualiteAPI.obtenirToutesCategories();
        return {
            success: true,
            data: data.data,
            message: "Catégories obtenues avec succès",
        }
    } catch (error) {
        return handleServerActionError(error, "Erreur lors de la récupération des catégories");
    }
}
