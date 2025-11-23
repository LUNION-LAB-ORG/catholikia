"use server";

import { ActionResponse, LaravelPaginatedResponse } from "@/types/api.type";
import { vieDeFoiAPI } from "../apis/vie-de-foi.api";
import { ITemoignage, ITemoignageParams } from "../types/vie-de-foi.type";
import { handleServerActionError } from "@/utils/handleServerActionError";
import { normalizeTemoignage } from "../utils/temoignage.util";

export const obtenirTousLesTemoignagesAction = async (params: ITemoignageParams): Promise<ActionResponse<LaravelPaginatedResponse<ITemoignage>>> => {
    try {
        const data = await vieDeFoiAPI.obtenirTemoignages(params);

        // Normaliser les témoignages (convertir inspirant en boolean)
        const normalizedData = {
            ...data,
            data: data.data.map(normalizeTemoignage)
        };

        return {
            success: true,
            data: normalizedData,
            message: "Témoignages obtenus avec succès",
        }
    } catch (error) {
        return handleServerActionError(error, "Erreur lors de la récupération des témoignages");
    }
}

export const obtenirTemoignageParIdAction = async (id: number): Promise<ActionResponse<ITemoignage | null>> => {
    try {
        const data = await vieDeFoiAPI.obtenirTemoignageParId(id);

        // Normaliser le témoignage si trouvé
        const normalizedTemoignage = data?.data ? normalizeTemoignage(data.data) : null;

        return {
            success: true,
            data: normalizedTemoignage,
            message: data ? "Témoignage obtenu avec succès" : "Témoignage non trouvé",
        }
    } catch (error) {
        return handleServerActionError(error, "Erreur lors de la récupération du témoignage");
    }
}
