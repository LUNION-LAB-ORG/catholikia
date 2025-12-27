import React from "react";

import {useQuery} from "@tanstack/react-query";
import getQueryClient from "@/lib/get-query-client";
import {obtenirToutesActualitesAction} from "../actions/actualite.action";
import {IActualiteParams} from "../types/actualite.type";
import {actualiteKeyQuery} from "./index.query";
import {addToast} from "@heroui/toast";
import {X} from "lucide-react";

const queryClient = getQueryClient();

//1- Option de requête optimisée
export const actualitesListQueryOption = (
	actualitesParamsDTO: IActualiteParams
) => {
	return {
		queryKey: actualiteKeyQuery("list", actualitesParamsDTO),
		queryFn: async () => {
			const startTime = performance.now();
			const result = await obtenirToutesActualitesAction(actualitesParamsDTO);
			const endTime = performance.now();
			const duration = endTime - startTime;

			console.log(`[QUERY] Temps de fetch: ${duration.toFixed(2)}ms (${(duration / 1000).toFixed(2)}s)`);

			if (!result.success) {
				throw new Error(
					result.error || "Erreur lors de la récupération des actualités"
				);
			}
			return result.data!;
		},
		placeholderData: (previousData: any) => previousData,
		staleTime: 60 * 1000, // 60 secondes de
		refetchOnWindowFocus: false, //Ne pas refetch lors du focus de la fenetre
		refetchOnMount: true, //Refetch lors du mount
	};
};

//2- Hook pour récupérer les actualités
export const useActualitesListQuery = (
	actualitesParamsDTO: IActualiteParams
) => {
	const query = useQuery(actualitesListQueryOption(actualitesParamsDTO));

	// Gestion des erreurs dans le hook
	React.useEffect(() => {
		if (query.isError && query.error) {
			addToast({
				title: "Erreur lors de la récupération des actualités:",
				description:
					query.error instanceof Error
						? query.error.message
						: "Erreur inconnue",
				icon: <X/>,
				color: "danger",
			});
		}
	}, [query.isError, query.error]);

	return query;
};

//3. Prefetch de la liste des actualités
export const prefetchActualitesListQuery = (
	actualitesParamsDTO: IActualiteParams
) => {
	return queryClient.prefetchQuery(actualitesListQueryOption(actualitesParamsDTO));
};