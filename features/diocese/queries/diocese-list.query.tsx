import React from "react";

import { useQuery } from "@tanstack/react-query";
import getQueryClient from "@/lib/get-query-client";
import { obtenirTousLesDiocesesAction } from "../actions/diocese.action";
import { IDioceseParams } from "../types/diocese.type";
import { dioceseKeyQuery } from "./index.query";
import { addToast } from "@heroui/toast";
import { X } from "lucide-react";

const queryClient = getQueryClient();

//1- Option de requête optimisée
export const dioceseQueryOption = (
    dioceseParamsDTO: IDioceseParams
) => {
    return {
        queryKey: dioceseKeyQuery("list", dioceseParamsDTO),
        queryFn: async () => {
            const result = await obtenirTousLesDiocesesAction(dioceseParamsDTO);
            if (!result.success) {
                throw new Error(
                    result.error || "Erreur lors de la récupération des diocèses"
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

//2- Hook pour récupérer les diocèses
export const useDioceseListQuery = (
    dioceseParamsDTO: IDioceseParams
) => {
    const query = useQuery(dioceseQueryOption(dioceseParamsDTO));

    // Gestion des erreurs dans le hook
    React.useEffect(() => {
        if (query.isError && query.error) {
            addToast({
                title: "Erreur lors de la récupération des diocèses:",
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

//3. Prefetch de la liste des diocèses
export const prefetchDioceseListQuery = (
    dioceseParamsDTO: IDioceseParams
) => {
    return queryClient.prefetchQuery(dioceseQueryOption(dioceseParamsDTO));
};