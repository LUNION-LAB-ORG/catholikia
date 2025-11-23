import React from "react";
import getQueryClient from "@/lib/get-query-client";
import { addToast } from "@heroui/toast";
import { useQuery } from "@tanstack/react-query";
import { X } from "lucide-react";
import { obtenirTribuneParSlugAction } from "../actions/tribune.action";
import { tribuneKeyQuery } from "./index.query";

const queryClient = getQueryClient();

//1- Option de requête
export const tribuneDetailQueryOption = (slug: string) => {
    return {
        queryKey: tribuneKeyQuery("detail", slug),
        queryFn: async () => {
            if (!slug) throw new Error("Le slug de la tribune est requis");

            const result = await obtenirTribuneParSlugAction(slug);

            if (!result.success) {
                throw new Error(result.error);
            }

            return result.data;
        },
        enabled: !!slug,
    };
};

//2- Hook pour récupérer une tribune
export const useTribuneQuery = (slug: string) => {
    const query = useQuery(tribuneDetailQueryOption(slug));

    // Gestion des erreurs dans le hook
    React.useEffect(() => {
        if (query.isError && query.error) {
            addToast({
                title: "Erreur lors de la récupération de la tribune:",
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

//3. Prefetch d'une tribune
export const prefetchTribuneQuery = (slug: string) => {
    return queryClient.prefetchQuery(tribuneDetailQueryOption(slug));
};