import React from "react";

import { useQuery } from "@tanstack/react-query";
import getQueryClient from "@/lib/get-query-client";
import { obtenirToutesEffatasAction } from "../actions/effata.action";
import { IEffataParams } from "../types/effata.type";
import { effataKeyQuery } from "./index.query";
import { addToast } from "@heroui/toast";
import { X } from "lucide-react";

const queryClient = getQueryClient();

//1- Option de requête optimisée
export const effataQueryOption = (
    actualitesParamsDTO: IEffataParams
) => {
    return {
        queryKey: effataKeyQuery("list", actualitesParamsDTO),
        queryFn: async () => {
            const result = await obtenirToutesEffatasAction(actualitesParamsDTO);
            if (!result.success) {
                throw new Error(
                    result.error || "Erreur lors de la récupération des effatas"
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

//2- Hook pour récupérer les actualités
export const useEffataListQuery = (
    actualitesParamsDTO: IEffataParams
) => {
    const query = useQuery(effataQueryOption(actualitesParamsDTO));

    // Gestion des erreurs dans le hook
    React.useEffect(() => {
        if (query.isError && query.error) {
            addToast({
                title: "Erreur lors de la récupération des effatas:",
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

//3. Prefetch de la liste des actualités
export const prefetchEffataListQuery = (
    actualitesParamsDTO: IEffataParams
) => {
    return queryClient.prefetchQuery(effataQueryOption(actualitesParamsDTO));
};