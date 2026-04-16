import { useQuery, useQueryClient } from "@tanstack/react-query";
import { obtenirTousEvenementsAction } from "../actions/cuturama.action";
import { cuturamaKeyQuery } from "./index.query";
import type { CuturamaEvent, CuturamaEventsResponse } from "../types/cuturama.type";

// Cherche l'événement dans le cache de la liste (évite un appel réseau si déjà chargé)
const findInListCache = (
    queryClient: ReturnType<typeof useQueryClient>,
    slug: string
): CuturamaEvent | undefined => {
    const allListQueries = queryClient.getQueriesData<CuturamaEventsResponse>({
        queryKey: cuturamaKeyQuery("list"),
    });
    for (const [, data] of allListQueries) {
        const found = data?.data.find((e) => e.slug === slug);
        if (found) return found;
    }
    return undefined;
};

// Hook
export const useCuturamaEventDetailQuery = (slug: string) => {
    const queryClient = useQueryClient();

    return useQuery<CuturamaEvent>({
        queryKey: cuturamaKeyQuery("detail", slug),
        queryFn: async () => {
            // 1. Cherche d'abord dans le cache (navigation depuis la liste)
            const cached = findInListCache(queryClient, slug);
            if (cached) return cached;

            // 2. Sinon, appelle le endpoint liste et filtre par slug
            const result = await obtenirTousEvenementsAction({ page: 1 });
            if (!result.success || !result.data) {
                throw new Error("Erreur lors de la récupération des événements");
            }
            const event = result.data.data.find((e) => e.slug === slug);
            if (!event) {
                throw new Error("Événement introuvable");
            }
            // Met en cache la liste récupérée
            queryClient.setQueryData(
                cuturamaKeyQuery("list", { page: 1 }),
                result.data
            );
            return event;
        },
        initialData: () => findInListCache(queryClient, slug),
        staleTime: 60 * 1000,
        refetchOnWindowFocus: false,
        refetchOnMount: false,
    });
};
