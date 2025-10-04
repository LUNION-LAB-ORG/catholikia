import React from "react";
import getQueryClient from "@/lib/get-query-client";
import { addToast } from "@heroui/toast";
import { useQuery } from "@tanstack/react-query";
import { X } from "lucide-react";
import { obtenirTemoignageParIdAction } from "../actions/vie-de-foi.action";
import { vieDeFoiKeyQuery } from "./index.query";

const queryClient = getQueryClient();

//1- Option de requête
export const temoignageDetailQueryOption = (id: number) => {
    return {
        queryKey: vieDeFoiKeyQuery("detail", id),
        queryFn: async () => {
            if (!id) throw new Error("L'ID du témoignage est requis");

            const result = await obtenirTemoignageParIdAction(id);

            if (!result.success) {
                throw new Error(result.error);
            }

            return result.data;
        },
        enabled: !!id,
    };
};

//2- Hook pour récupérer un témoignage
export const useTemoignageQuery = (id: number) => {
    const query = useQuery(temoignageDetailQueryOption(id));

    // Gestion des erreurs dans le hook
    React.useEffect(() => {
        if (query.isError && query.error) {
            addToast({
                title: "Erreur lors de la récupération du témoignage:",
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

//3. Prefetch d'un témoignage
export const prefetchTemoignageQuery = (id: number) => {
    return queryClient.prefetchQuery(temoignageDetailQueryOption(id));
};