import { Api } from "ak-api-http";
import { cuturamaBaseURL } from "@/config/api";
import type {
    ICuturamaEventsParams,
    CuturamaEventsResponse,
    CuturamaEvent,
    CreateOrderRequest,
    CreateOrderResponse,
    LancerPaiementRequest,
    LancerPaiementResponse,
    WaveVerifyResponse,
    GetOrderResponse,
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
    creerCommande(payload: CreateOrderRequest): Promise<CreateOrderResponse>;
    lancerPaiement(orderId: string | number, payload: LancerPaiementRequest): Promise<LancerPaiementResponse>;
    verifierPaiementWave(orderId: string | number): Promise<WaveVerifyResponse>;
    obtenirCommande(idOrRef: string | number): Promise<GetOrderResponse>;
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

    creerCommande(payload: CreateOrderRequest): Promise<CreateOrderResponse> {
        return cuturamaApi.request<CreateOrderResponse>({
            endpoint: `/v2/orders`,
            method: "POST",
            data: payload,
            service: "public",
        });
    },

    lancerPaiement(orderId: string | number, payload: LancerPaiementRequest): Promise<LancerPaiementResponse> {
        return cuturamaApi.request<LancerPaiementResponse>({
            endpoint: `/culturama/orders/${orderId}/pay`,
            method: "POST",
            data: payload,
            service: "public",
        });
    },

    verifierPaiementWave(orderId: string | number): Promise<WaveVerifyResponse> {
        return cuturamaApi.request<WaveVerifyResponse>({
            endpoint: `/culturama/orders/${orderId}/wave-verify`,
            method: "GET",
            service: "public",
        });
    },

    obtenirCommande(idOrRef: string | number): Promise<GetOrderResponse> {
        return cuturamaApi.request<GetOrderResponse>({
            endpoint: `/v2/orders/${idOrRef}`,
            method: "GET",
            service: "public",
        });
    },
};
