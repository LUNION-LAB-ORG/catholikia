import getQueryClient from "@/lib/get-query-client";
import { addToast } from "@heroui/toast";
import { useQuery } from "@tanstack/react-query";
import { X } from "lucide-react";
import React from "react";
import { obtenirEventParSlugAction } from "../actions/event.action";
import { eventKeyQuery } from "./index.query";

const queryClient = getQueryClient();

//1- Option de requête
export const eventQueryOption = (slug: string) => {
  return {
    queryKey: eventKeyQuery("detail", slug),
    queryFn: async () => {
      if (!slug) throw new Error("Le slug de l'event est requis");

      const result = await obtenirEventParSlugAction(slug);

      if (!result.success) {
        throw new Error(result.error);
      }

      return result.data;
    },
    enabled: !!slug,
  };
};

//2- Hook pour récupérer une actualité
export const useEffataQuery = (slug: string) => {
  const query = useQuery(eventQueryOption(slug));

  // Gestion des erreurs dans le hook
  React.useEffect(() => {
    if (query.isError && query.error) {
      addToast({
        title: "Erreur lors de la récupération de l'event:",
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
  return queryClient.prefetchQuery(eventQueryOption(slug));
};
