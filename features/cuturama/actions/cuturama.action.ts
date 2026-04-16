import { ActionResponse } from "@/types/api.type";
import { handleServerActionError } from "@/utils/handleServerActionError";
import { cuturamaAPI } from "../apis/cuturama.api";
import type {
    ICuturamaEventsParams,
    CuturamaEventsResponse,
    CuturamaEvent,
} from "../types/cuturama.type";

export const obtenirTousEvenementsAction = async (
    params: ICuturamaEventsParams
): Promise<ActionResponse<CuturamaEventsResponse>> => {
    try {
        const data = await cuturamaAPI.obtenirTousEvenements(params);
        return {
            success: true,
            data,
            message: "Événements récupérés avec succès",
        };
    } catch (error) {
        return handleServerActionError(error, "Erreur lors de la récupération des événements");
    }
};

export const obtenirEvenementParSlugAction = async (
    slug: string
): Promise<ActionResponse<CuturamaEvent>> => {
    try {
        const data = await cuturamaAPI.obtenirEvenementParSlug(slug);
        return {
            success: true,
            data,
            message: "Événement récupéré avec succès",
        };
    } catch (error) {
        return handleServerActionError(error, "Erreur lors de la récupération de l'événement");
    }
};
