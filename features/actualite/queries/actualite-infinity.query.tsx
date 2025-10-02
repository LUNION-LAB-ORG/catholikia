import React from "react";

import { useInfiniteQuery } from "@tanstack/react-query";
import getQueryClient from "@/lib/get-query-client";
import { IActualite } from "../types/actualite.type";
import { PaginatedResponse } from "@/types/api.type";
import { obtenirToutesActualitesAction } from "../actions/actualite.action";
import { IActualiteParams } from "../types/actualite.type";
import { actualiteKeyQuery } from "./index.query";
import { addToast } from "@heroui/toast";
import { X } from "lucide-react";

const queryClient = getQueryClient();

//1- Option de requête
export const actualitesInfinityQueryOption = (
    actualitesParamsDTO: IActualiteParams
) => {
    return {
        queryKey: actualiteKeyQuery("infinity", actualitesParamsDTO),
        queryFn: async ({ pageParam = 1 }) => {
            const result = await obtenirToutesActualitesAction({
                ...actualitesParamsDTO,
                page: pageParam,
            });

            if (!result.success) {
                throw new Error(
                    result.error || "Erreur lors de la récupération des actualités"
                );
            }

            return result.data!;
        },

        initialPageParam: 1,

        getNextPageParam: (lastPage: PaginatedResponse<IActualite>) => {
            const hasNextPage = lastPage.meta.totalPages > lastPage.meta.page;
            return hasNextPage ? lastPage.meta.page + 1 : undefined;
        },

        getPreviousPageParam: (firstPage: PaginatedResponse<IActualite>) => {
            return firstPage.meta.page > 1 ? firstPage.meta.page - 1 : undefined;
        },

        placeholderData: (previousData: any) => previousData,
        staleTime: 30 * 1000, //30 secondes
        refetchOnWindowFocus: false, //Ne pas refetch lors du focus de la fenetre
        refetchOnMount: true, //Refetch lors du mount
    };
};

//2- Hook pour récupérer les actualités avec pagination infinie
export const useActualitesInfinityQuery = (
    actualitesParamsDTO: IActualiteParams
) => {
    const query = useInfiniteQuery(actualitesInfinityQueryOption(actualitesParamsDTO));

    // Gestion des erreurs dans le hook
    React.useEffect(() => {
        if (query.isError && query.error) {
            addToast({
                title: "Erreur lors de la récupération des actualités:",
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

//3. Prefetch de la requête infinie
export const prefetchActualitesInfinityQuery = (
    actualitesParamsDTO: IActualiteParams
) => {
    return queryClient.prefetchInfiniteQuery(actualitesInfinityQueryOption(actualitesParamsDTO));
};