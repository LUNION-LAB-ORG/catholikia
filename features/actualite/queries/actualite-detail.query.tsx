import React from "react";

import getQueryClient from "@/lib/get-query-client";
import { addToast } from "@heroui/toast";
import { useQuery } from "@tanstack/react-query";
import { X } from "lucide-react";
import { obtenirActualiteParSlugAction } from "../actions/actualite.action";
import { actualiteKeyQuery } from "./index.query";

const queryClient = getQueryClient();

//1- Option de requête
export const actualiteQueryOption = (slug: string) => {
    return {
        queryKey: actualiteKeyQuery("detail", slug),
        queryFn: async () => {
            if (!slug) throw new Error("Le slug de l'actualité est requis");

            const result = await obtenirActualiteParSlugAction(slug);

            if (!result.success) {
                throw new Error(result.error);
            }

            return result.data;
        },
        enabled: !!slug,
    };
};

//2- Hook pour récupérer une actualité
export const useActualiteQuery = (slug: string) => {
    const query = useQuery(actualiteQueryOption(slug));

    // Gestion des erreurs dans le hook
    React.useEffect(() => {
        if (query.isError && query.error) {
            addToast({
                title: "Erreur lors de la récupération de l'actualité:",
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

//3. Prefetch d'une actualité
export const prefetchActualiteQuery = (slug: string) => {
    return queryClient.prefetchQuery(actualiteQueryOption(slug));
};