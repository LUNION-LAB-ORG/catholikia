import { Api } from "ak-api-http";
import { cuturamaBaseURL } from "@/config/api";
import type {
    ICuturamaEventsParams,
    CuturamaEventsResponse,
    CuturamaEvent,
} from "../types/cuturama.type";
import type { SearchParams } from "ak-api-http";

const cuturamaApi = new Api({
    baseUrl: cuturamaBaseURL,
    timeout: 10000,
    headers: {
        "Content-Type": "application/json",
    },
    maxRetries: 3,
    retryDelay: 5000,
    debug: process.env.NODE_ENV !== "production",
});

export interface ICuturamaAPI {
    obtenirTousEvenements(params: ICuturamaEventsParams): Promise<CuturamaEventsResponse>;
    obtenirEvenementParSlug(slug: string): Promise<CuturamaEvent>;
}

export const cuturamaAPI: ICuturamaAPI = {
    obtenirTousEvenements(params: ICuturamaEventsParams): Promise<CuturamaEventsResponse> {
        return cuturamaApi.request<CuturamaEventsResponse>({
            endpoint: `/culturama/events`,
            method: "GET",
            searchParams: {
                ...(params.category && params.category !== "Tous" ? { category: params.category } : {}),
                ...(params.page ? { page: params.page } : {}),
                ...(params.search ? { search: params.search } : {}),
            } as SearchParams,
        });
    },

    obtenirEvenementParSlug(slug: string): Promise<CuturamaEvent> {
        return cuturamaApi.request<CuturamaEvent>({
            endpoint: `/cuturama/events/${slug}`,
            method: "GET",
        });
    },
};
