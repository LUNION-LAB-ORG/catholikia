import React from "react";

import { useQuery } from "@tanstack/react-query";
import getQueryClient from "@/lib/get-query-client";
import { obtenirTousLesTemoignagesAction } from "../actions/vie-de-foi.action";
import { ITemoignageParams } from "../types/vie-de-foi.type";
import { vieDeFoiKeyQuery } from "./index.query";
import { addToast } from "@heroui/toast";
import { X } from "lucide-react";

const queryClient = getQueryClient();

//1- Option de requête optimisée
export const temoignageQueryOption = (
    temoignageParams: ITemoignageParams
) => {
    return {
        queryKey: vieDeFoiKeyQuery("list", temoignageParams),
        queryFn: async () => {
            const result = await obtenirTousLesTemoignagesAction(temoignageParams);
            if (!result.success) {
                throw new Error(
                    result.error || "Erreur lors de la récupération des témoignages"
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

//2- Hook pour récupérer les témoignages
export const useTemoignageListQuery = (
    temoignageParams: ITemoignageParams
) => {
    const query = useQuery(temoignageQueryOption(temoignageParams));

    // Gestion des erreurs dans le hook
    React.useEffect(() => {
        if (query.isError && query.error) {
            addToast({
                title: "Erreur lors de la récupération des témoignages:",
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

//3. Prefetch de la liste des témoignages
export const prefetchTemoignageListQuery = (
    temoignageParams: ITemoignageParams
) => {
    return queryClient.prefetchQuery(temoignageQueryOption(temoignageParams));
};