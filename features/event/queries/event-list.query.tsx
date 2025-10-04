import React from "react";

import getQueryClient from "@/lib/get-query-client";
import { addToast } from "@heroui/toast";
import { useQuery } from "@tanstack/react-query";
import { X } from "lucide-react";
import { IEventParams } from "../types/event.type";
import { eventKeyQuery } from "./index.query";
import { obtenirToutesEventsAction } from "../actions/event.action";

const queryClient = getQueryClient();

//1- Option de requête optimisée
export const eventQueryOption = (eventParamsDTO: IEventParams) => {
  return {
    queryKey: eventKeyQuery("list", eventParamsDTO),
    queryFn: async () => {
      const result = await obtenirToutesEventsAction(eventParamsDTO);
      if (!result.success) {
        throw new Error(
          result.error || "Erreur lors de la récupération des events"
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
export const useEventListQuery = (eventParamsDTO: IEventParams) => {
  const query = useQuery(eventQueryOption(eventParamsDTO));

  // Gestion des erreurs dans le hook
  React.useEffect(() => {
    if (query.isError && query.error) {
      addToast({
        title: "Erreur lors de la récupération des events:",
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
export const prefetchEventListQuery = (eventParamsDTO: IEventParams) => {
  return queryClient.prefetchQuery(eventQueryOption(eventParamsDTO));
};
