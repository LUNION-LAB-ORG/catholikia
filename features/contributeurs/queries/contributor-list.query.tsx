import React from "react";

import { useQuery } from "@tanstack/react-query";
import getQueryClient from "@/lib/get-query-client";
import { obtenirTopCinqContributeursAction } from "../actions/contributeur.action";
import { contributeurKeyQuery } from "./index.query";
import { addToast } from "@heroui/toast";
import { X } from "lucide-react";

const queryClient = getQueryClient();

//1- Option de requête optimisée pour le top 5
export const topCinqContributeursQueryOption = () => {
    return {
        queryKey: contributeurKeyQuery("top-five"),
        queryFn: async () => {
            const result = await obtenirTopCinqContributeursAction();
            if (!result.success) {
                throw new Error(
                    result.error || "Erreur lors de la récupération du top 5 des contributeurs"
                );
            }
            return result.data!;
        },
        placeholderData: (previousData: any) => previousData,
        staleTime: 30 * 1000, //30 secondes
        refetchOnWindowFocus: false, //Ne pas refetch lors du focus de la fenetre
        refetchOnMount: true, //Refetch lors du mount
    };
};

//2- Hook pour récupérer le top 5 des contributeurs
export const useTopCinqContributeursQuery = () => {
    const query = useQuery(topCinqContributeursQueryOption());

    // Gestion des erreurs dans le hook
    React.useEffect(() => {
        if (query.isError && query.error) {
            addToast({
                title: "Erreur lors de la récupération du top 5 des contributeurs:",
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

//3. Prefetch du top 5 des contributeurs
export const prefetchTopCinqContributeursQuery = () => {
    return queryClient.prefetchQuery(topCinqContributeursQueryOption());
};