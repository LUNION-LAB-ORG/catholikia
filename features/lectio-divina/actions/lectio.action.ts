"use server";

import { ActionResponse, LaravelPaginatedResponse } from "@/types/api.type";
import { lectioAPI } from "../apis/lectio.api";
import { ILectio, ILectioSearchParams } from "../types/lectio.type";
import { handleServerActionError } from "@/utils/handleServerActionError";

export const obtenirToutesLectiosAction = async (params: ILectioSearchParams): Promise<ActionResponse<LaravelPaginatedResponse<ILectio>>> => {
    try {
        const data = await lectioAPI.obtenirToutesLectios(params);
        return {
            success: true,
            data: data,
            message: "Lectio Divinas obtenues avec succès",
        }
    } catch (error) {
        return handleServerActionError(error, "Erreur lors de la récupération des lectio divinas");
    }
}

export const obtenirLectioParIdAction = async (id: string): Promise<ActionResponse<ILectio | null>> => {
    try {
        const data = await lectioAPI.obtenirLectioParId(id);
        return {
            success: true,
            data: data?.data || null,
            message: data ? "Lectio Divina obtenue avec succès" : "Lectio Divina non trouvée",
        }
    } catch (error) {
        return handleServerActionError(error, "Erreur lors de la récupération de la lectio divina");
    }
}
