import React from "react";

import { useQuery } from "@tanstack/react-query";
import getQueryClient from "@/lib/get-query-client";
import { obtenirToutesLesTribunesAction } from "../actions/tribune.action";
import { ITribunesParams } from "../types/tribunes.type";
import { tribuneKeyQuery } from "./index.query";
import { addToast } from "@heroui/toast";
import { X } from "lucide-react";

const queryClient = getQueryClient();

//1- Option de requête optimisée
export const tribuneQueryOption = (
    tribuneParamsDTO: ITribunesParams
) => {
    return {
        queryKey: tribuneKeyQuery("list", tribuneParamsDTO),
        queryFn: async () => {
            const result = await obtenirToutesLesTribunesAction(tribuneParamsDTO);
            if (!result.success) {
                throw new Error(
                    result.error || "Erreur lors de la récupération des tribunes"
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

//2- Hook pour récupérer les tribunes
export const useTribuneListQuery = (
    tribuneParamsDTO: ITribunesParams
) => {
    const query = useQuery(tribuneQueryOption(tribuneParamsDTO));

    // Gestion des erreurs dans le hook
    React.useEffect(() => {
        if (query.isError && query.error) {
            addToast({
                title: "Erreur lors de la récupération des tribunes:",
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

//3. Prefetch de la liste des tribunes
export const prefetchTribuneListQuery = (
    tribuneParamsDTO: ITribunesParams
) => {
    return queryClient.prefetchQuery(tribuneQueryOption(tribuneParamsDTO));
};