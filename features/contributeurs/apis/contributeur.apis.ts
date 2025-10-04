import { api } from "@/lib/api";
import { IContributeur, IContributeurParams } from "../types/contributeur.type";
import { SearchParams } from "ak-api-http";
import { LaravelPaginatedResponse } from "@/types/api.type";

export interface IContributeurAPI {
    obtenirTopCinqContributeurs(): Promise<LaravelPaginatedResponse<IContributeur>>;
    obtenirContributeurParId(id: number): Promise<{ data: IContributeur } | null>;
}

export const contributeurApi: IContributeurAPI = {
    obtenirTopCinqContributeurs(): Promise<LaravelPaginatedResponse<IContributeur>> {
        return api.request<LaravelPaginatedResponse<IContributeur>>({
            endpoint: `/contributors/top/five`,
            method: "GET",
        });
    },

    obtenirContributeurParId(id: number): Promise<{ data: IContributeur } | null> {
        return api.request<{ data: IContributeur } | null>({
            endpoint: `/contributors/${id}`,
            method: "GET",
        });
    },
};
