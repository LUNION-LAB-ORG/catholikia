import React from "react";
import getQueryClient from "@/lib/get-query-client";
import { addToast } from "@heroui/toast";
import { useQuery } from "@tanstack/react-query";
import { X } from "lucide-react";
import { obtenirContributeurParIdAction } from "../actions/contributeur.action";
import { contributeurKeyQuery } from "./index.query";

const queryClient = getQueryClient();

//1- Option de requête
export const contributeurDetailQueryOption = (id: number) => {
    return {
        queryKey: contributeurKeyQuery("detail", id),
        queryFn: async () => {
            if (!id) throw new Error("L'ID du contributeur est requis");

            const result = await obtenirContributeurParIdAction(id);

            if (!result.success) {
                throw new Error(result.error);
            }

            return result.data;
        },
        enabled: !!id,
    };
};

//2- Hook pour récupérer un contributeur
export const useContributeurQuery = (id: number) => {
    const query = useQuery(contributeurDetailQueryOption(id));

    // Gestion des erreurs dans le hook
    React.useEffect(() => {
        if (query.isError && query.error) {
            addToast({
                title: "Erreur lors de la récupération du contributeur:",
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

//3. Prefetch d'un contributeur
export const prefetchContributeurQuery = (id: number) => {
    return queryClient.prefetchQuery(contributeurDetailQueryOption(id));
};