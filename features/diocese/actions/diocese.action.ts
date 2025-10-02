"use server";

import { ActionResponse, LaravelPaginatedResponse } from "@/types/api.type";
import { dioceseApi } from "../apis/diocese.apis";
import { IDiocese, IDioceseParams } from "../types/diocese.type";
import { handleServerActionError } from "@/utils/handleServerActionError";

export const obtenirTousLesDiocesesAction = async (params: IDioceseParams): Promise<ActionResponse<LaravelPaginatedResponse<IDiocese>>> => {
    try {
        const data = await dioceseApi.obtenirTousLesDioceses(params);
        return {
            success: true,
            data: data,
            message: "Diocèses obtenus avec succès",
        }
    } catch (error) {
        return handleServerActionError(error, "Erreur lors de la récupération des diocèses");
    }
}

export const obtenirDioceseParSlugAction = async (slug: string): Promise<ActionResponse<IDiocese | null>> => {
    try {
        const data = await dioceseApi.obtenirDioceseParSlug(slug);
        return {
            success: true,
            data: data,
            message: data ? "Diocèse obtenu avec succès" : "Diocèse non trouvé",
        }
    } catch (error) {
        return handleServerActionError(error, "Erreur lors de la récupération du diocèse");
    }
}
