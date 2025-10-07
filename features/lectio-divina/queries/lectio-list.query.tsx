import React from "react";

import { useQuery } from "@tanstack/react-query";
import getQueryClient from "@/lib/get-query-client";
import { obtenirToutesLectiosAction } from "../actions/lectio.action";
import { ILectioSearchParams } from "../types/lectio.type";
import { lectioKeyQuery } from "./index.query";
import { addToast } from "@heroui/toast";
import { X } from "lucide-react";

const queryClient = getQueryClient();

//1- Option de requête optimisée
export const lectioQueryOption = (
    lectioParamsDTO: ILectioSearchParams
) => {
    return {
        queryKey: lectioKeyQuery("list", lectioParamsDTO),
        queryFn: async () => {
            const result = await obtenirToutesLectiosAction(lectioParamsDTO);
            if (!result.success) {
                throw new Error(
                    result.error || "Erreur lors de la récupération des lectio divinas"
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

//2- Hook pour récupérer les lectio divinas
export const useLectioListQuery = (
    lectioParamsDTO: ILectioSearchParams
) => {
    const query = useQuery(lectioQueryOption(lectioParamsDTO));

    // Gestion des erreurs dans le hook
    React.useEffect(() => {
        if (query.isError && query.error) {
            addToast({
                title: "Erreur lors de la récupération des lectio divinas:",
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

//3. Prefetch de la liste des lectio divinas
export const prefetchLectioListQuery = (
    lectioParamsDTO: ILectioSearchParams
) => {
    return queryClient.prefetchQuery(lectioQueryOption(lectioParamsDTO));
};