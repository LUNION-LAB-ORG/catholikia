
import { api } from "@/lib/api";
import { LaravelPaginatedResponse } from "@/types/api.type";
import { SearchParams } from "ak-api-http";
import {  IEvent, IEventParams } from "../types/event.type";

export interface IEventAPI {
	obtenirToutesEvents(params: IEventParams): Promise<LaravelPaginatedResponse<IEvent>>;
	obtenirEventParSlug(slug: string): Promise<{ data: IEvent } | null>;
}

export const eventAPI: IEventAPI = {
	obtenirToutesEvents(params: IEventParams): Promise<LaravelPaginatedResponse<IEvent>> {
		return api.request<LaravelPaginatedResponse<IEvent>>({
			endpoint: `/events`,
			method: "GET",
			searchParams: params as SearchParams,
		});
	},

	obtenirEventParSlug(slug: string): Promise<{ data: IEvent } | null> {
		return api.request<{ data: IEvent } | null>({
			endpoint: `/events/${slug}`,
			method: "GET",
		});
	},
};
