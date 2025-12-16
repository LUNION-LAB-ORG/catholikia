import {LaravelPaginatedResponse} from '@/types/api.type';
import {ICommentaire, ICommentaireSearchParams} from "@/features/commentaire/commentaire.type";
import {api} from "@/lib/api";
import {SearchParams} from 'ak-api-http';

export interface ICommentaireApi {
	ajouterCommentaire(data: FormData): Promise<any>;

	obtenirCommentaires(
		params: ICommentaireSearchParams
	): Promise<LaravelPaginatedResponse<ICommentaire>>;
}

export const commentaireApi: ICommentaireApi = {
	ajouterCommentaire(data: FormData): Promise<any> {
		const entityType = data.get("entityType")?.toString().toLowerCase();
		const entityIdKey = `${entityType}_id`;
		data.append(entityIdKey, data.get("entityId")?.toString() || "");
		data.delete("entityId");
		data.delete("entityType");
		return api.request<any>({
			endpoint: `/commentaires-${entityType}`,
			method: "POST",
			data,
			config: {
				headers: {
					'Content-Type': 'multipart/form-data',
				},
			}
		});
	},

	obtenirCommentaires(params: ICommentaireSearchParams): Promise<LaravelPaginatedResponse<ICommentaire>> {
		const entityType = params.entityType == 'lexio_divinas' ? 'lexiodivinas' : params.entityType;
		return api.request<LaravelPaginatedResponse<ICommentaire>>({
			endpoint: `commentaires-${entityType}`,
			method: "GET",
			searchParams: {
				page: params.page,
				size: params.size
			} as SearchParams,
		})
	}
}