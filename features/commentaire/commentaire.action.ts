"use server";

import { commentaireApi } from "@/features/commentaire/commentaire.api";
import { CommentaireAddDTO } from "@/features/commentaire/commentaire.schema";
import { ICommentaire, ICommentaireSearchParams } from "@/features/commentaire/commentaire.type";
import { LaravelPaginatedResponse } from "@/types/api.type";
import { handleServerActionError } from "@/utils/handleServerActionError";

// Types de réponse génériques
interface ActionResponse<T> {
    success: boolean;
    data?: T;
    message?: string;
    error?: string;
}

export const ajouterCommentaireAction = async (formdata: CommentaireAddDTO): Promise<ActionResponse<any>> => {
    try {
        const data = await commentaireApi.ajouterCommentaire(formdata);
        
        return {
            success: true,
            data,
            message: "Commentaire ajouté avec succès",
        };
    } catch (error) {
        return handleServerActionError(error, "Erreur lors de l'ajout du commentaire");
    }
};

export const obtenirCommentairesAction = async (params: ICommentaireSearchParams): Promise<ActionResponse<LaravelPaginatedResponse<ICommentaire>>> => {
    try {
        const data = await commentaireApi.obtenirCommentaires(params);

        return {
            success: true,
            data,
            message: "Commentaires obtenus avec succès",
        };
    } catch (error) {
        return handleServerActionError(error, "Erreur lors de la récupération des commentaires");
    }
};

