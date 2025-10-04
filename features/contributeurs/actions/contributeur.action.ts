"use server";

import { ActionResponse, LaravelPaginatedResponse } from "@/types/api.type";
import { contributeurApi } from "../apis/contributeur.apis";
import { IContributeur } from "../types/contributeur.type";
import { handleServerActionError } from "@/utils/handleServerActionError";

export const obtenirTopCinqContributeursAction = async (): Promise<ActionResponse<LaravelPaginatedResponse<IContributeur>>> => {
    try {
        const data = await contributeurApi.obtenirTopCinqContributeurs();
        return {
            success: true,
            data: data,
            message: "Top 5 contributeurs obtenus avec succès",
        }
    } catch (error) {
        return handleServerActionError(error, "Erreur lors de la récupération du top 5 des contributeurs");
    }
}

export const obtenirContributeurParIdAction = async (id: number): Promise<ActionResponse<IContributeur | null>> => {
    try {
        const data = await contributeurApi.obtenirContributeurParId(id);
        return {
            success: true,
            data: data?.data || null,
            message: data ? "Contributeur obtenu avec succès" : "Contributeur non trouvé",
        }
    } catch (error) {
        return handleServerActionError(error, "Erreur lors de la récupération du contributeur");
    }
}
