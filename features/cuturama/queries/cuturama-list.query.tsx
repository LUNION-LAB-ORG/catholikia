import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { obtenirTousEvenementsAction } from "../actions/cuturama.action";
import type { ICuturamaEventsParams } from "../types/cuturama.type";
import { cuturamaKeyQuery } from "./index.query";

// 1 — Query options
export const cuturamaEventsListQueryOption = (params: ICuturamaEventsParams) => ({
    queryKey: cuturamaKeyQuery("list", params),
    queryFn: async () => {
        const result = await obtenirTousEvenementsAction(params);

        
        if (!result.success) {
            throw new Error(
                result.error || "Erreur lors de la récupération des événements"
            );
        }
        return result.data!;
    },
    placeholderData: keepPreviousData,
    staleTime: 60 * 1000,
    refetchOnWindowFocus: false,
    refetchOnMount: true,
});

// 2 — Hook
export const useCuturamaEventsListQuery = (params: ICuturamaEventsParams) => {
    return useQuery(cuturamaEventsListQueryOption(params));
};
