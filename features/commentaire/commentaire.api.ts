import { LaravelPaginatedResponse } from './../../types/api.type';
import { ICommentaire, ICommentaireSearchParams } from "@/features/commentaire/commentaire.type";
import { CommentaireAddDTO } from "@/features/commentaire/commentaire.schema";
import { api } from "@/lib/api";
import { SearchParams } from 'ak-api-http';

export interface ICommentaireApi {
	ajouterCommentaire(data: CommentaireAddDTO): Promise<any>;
	obtenirCommentaires(
		params: ICommentaireSearchParams
	): Promise<LaravelPaginatedResponse<ICommentaire>>;
}

export const commentaireApi: ICommentaireApi = {
	ajouterCommentaire(data: CommentaireAddDTO): Promise<any> {
		const entityType = data.entityType.toLowerCase();
		const entityIdKey = `${entityType}_id`;
		return api.request<any>({
			endpoint: `/commentaires-${entityType}`,
			method: "POST",
			data: {
				[entityIdKey]: data.entityId,
				nom: data.fullName,
				email: data.email,
				message: data.comment,
			},
		});
	},

	obtenirCommentaires(params: ICommentaireSearchParams): Promise<LaravelPaginatedResponse<ICommentaire>> {
		return api.request<LaravelPaginatedResponse<ICommentaire>>({
			endpoint: `${params.entityType}s/${params.entityId}/${params.entityType}`,
			method: "GET",
			searchParams: {
				page: params.page,
				size: params.size
			} as SearchParams,
		})
	}
}