import React from "react";
import getQueryClient from "@/lib/get-query-client";
import { addToast } from "@heroui/toast";
import { useQuery } from "@tanstack/react-query";
import { X } from "lucide-react";
import { obtenirDioceseParSlugAction } from "../actions/diocese.action";
import { dioceseKeyQuery } from "./index.query";

const queryClient = getQueryClient();

//1- Option de requête
export const dioceseDetailQueryOption = (slug: string) => {
    return {
        queryKey: dioceseKeyQuery("detail", slug),
        queryFn: async () => {
            if (!slug) throw new Error("Le slug du diocèse est requis");

            const result = await obtenirDioceseParSlugAction(slug);

            if (!result.success) {
                throw new Error(result.error);
            }

            return result.data;
        },
        enabled: !!slug,
    };
};

//2- Hook pour récupérer un diocèse
export const useDioceseQuery = (slug: string) => {
    const query = useQuery(dioceseDetailQueryOption(slug));

    // Gestion des erreurs dans le hook
    React.useEffect(() => {
        if (query.isError && query.error) {
            addToast({
                title: "Erreur lors de la récupération du diocèse:",
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

//3. Prefetch d'un diocèse
export const prefetchDioceseQuery = (slug: string) => {
    return queryClient.prefetchQuery(dioceseDetailQueryOption(slug));
};