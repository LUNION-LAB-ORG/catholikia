"use server";

import { ActionResponse, LaravelPaginatedResponse } from "@/types/api.type";
import { handleServerActionError } from "@/utils/handleServerActionError";

import { IEvent, IEventParams } from "../types/event.type";
import { eventAPI } from "../apis/event.api";

export const obtenirToutesEventsAction = async (params: IEventParams): Promise<ActionResponse<LaravelPaginatedResponse<IEvent>>> => {
    try {
        const data = await eventAPI.obtenirToutesEvents(params);
        return {
            success: true,
            data: data,
            message: "Events obtenues avec succès",
        }
    } catch (error) {
        return handleServerActionError(error, "Erreur lors de la récupération des event");
    }
}

export const obtenirEventParSlugAction = async (slug: string): Promise<ActionResponse<IEvent | null>> => {
    try {
        const data = await eventAPI.obtenirEventParSlug(slug);
        return {
            success: true,
            data: data?.data || null,
            message: data ? "Event obtenue avec succès" : "Event non trouvée",
        }
    } catch (error) {
        return handleServerActionError(error, "Erreur lors de la récupération de l'event");
    }
}
