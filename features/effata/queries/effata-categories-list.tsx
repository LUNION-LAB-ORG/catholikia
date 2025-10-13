import React from "react";

import { useQuery } from "@tanstack/react-query";
import getQueryClient from "@/lib/get-query-client";
import { obtenirToutesCategoriesEffataAction } from "../actions/effata.action";
import { effataKeyQuery } from "./index.query";
import { addToast } from "@heroui/toast";
import { X } from "lucide-react";

const queryClient = getQueryClient();

//1- Option de requête pour les catégories d'effata
export const effataCategoriesQueryOption = () => {
    return {
        queryKey: effataKeyQuery("categories"),
        queryFn: async () => {
            const result = await obtenirToutesCategoriesEffataAction();
            if (!result.success) {
                throw new Error(
                    result.error || "Erreur lors de la récupération des catégories d'effata"
                );
            }
            return result.data!;
        },
        staleTime: 5 * 60 * 1000, // 5 minutes (les catégories changent rarement)
        refetchOnWindowFocus: false,
        refetchOnMount: false, // Pas besoin de refetch au mount car les catégories sont statiques
    };
};

//2- Hook pour récupérer les catégories d'effata
export const useEffataCategoriesQuery = () => {
    const query = useQuery(effataCategoriesQueryOption());

    // Gestion des erreurs dans le hook
    React.useEffect(() => {
        if (query.isError && query.error) {
            addToast({
                title: "Erreur lors de la récupération des catégories d'effata:",
                description:
                    query.error instanceof Error
                        ? query.error.message
                        : "Erreur inconnue",
                icon: <X />,
                color: "danger",
            });
        }
    }, [query.isError, query.error]);

    return query;
};

//3. Prefetch des catégories d'effata
export const prefetchEffataCategoriesQuery = () => {
    return queryClient.prefetchQuery(effataCategoriesQueryOption());
};