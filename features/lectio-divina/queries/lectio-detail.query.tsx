import React from "react";
import getQueryClient from "@/lib/get-query-client";
import { addToast } from "@heroui/toast";
import { useQuery } from "@tanstack/react-query";
import { X } from "lucide-react";
import { obtenirLectioParIdAction } from "../actions/lectio.action";
import { lectioKeyQuery } from "./index.query";

const queryClient = getQueryClient();

//1- Option de requête détail Lectio
export const lectioDetailQueryOption = (id: string) => {
    return {
        queryKey: lectioKeyQuery("detail", id),
        queryFn: async () => {
            if (!id) throw new Error("L'id de la lectio divina est requis");

            const result = await obtenirLectioParIdAction(id);

            if (!result.success) {
                throw new Error(result.error);
            }

            return result.data;
        },
        enabled: !!id,
    };
};

//2- Hook pour récupérer une lectio divina
export const useLectioDetailQuery = (id: string) => {
    const query = useQuery(lectioDetailQueryOption(id));

    // Gestion des erreurs dans le hook
    React.useEffect(() => {
        if (query.isError && query.error) {
            addToast({
                title: "Erreur lors de la récupération de la lectio divina:",
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

//3. Prefetch d'une lectio divina
export const prefetchLectioDetailQuery = (id: string) => {
    return queryClient.prefetchQuery(lectioDetailQueryOption(id));
};