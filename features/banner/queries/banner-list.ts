import React from "react";
import { useQuery } from "@tanstack/react-query";
import getQueryClient from "@/lib/get-query-client";
import { bannersKeyQuery } from "@/features/banner/queries/index.query";
import {obtenirToutesBannieresAction} from "@/features/banner/banner.action";

const queryClient = getQueryClient();

// 1- Option de requête optimisée
export const bannerListQueryOption = () => ({
	queryKey: bannersKeyQuery("list"),
	queryFn: async () => {
		const result = await obtenirToutesBannieresAction();
		if (!result.success) {
			throw new Error("Erreur lors de la récupération des bannières");
		}
		return result.data!;
	},
	placeholderData: (previousData: any) => previousData,
	staleTime: 30 * 1000,
	refetchOnWindowFocus: false,
	refetchOnMount: true,
});

export const useBannerListQuery = () => {
	const query = useQuery(bannerListQueryOption());

	// Gestion des erreurs dans le hook
	React.useEffect(() => {
		if (query.isError && query.error) {
			console.error("Erreur lors de la récupération des bannières:", query.error);
		}
	}, [query]);

	return query;
};

// Fonction pour précharger les bannières appelée dans les pages
export const prefetchBannerListQuery = () => {
	return queryClient.prefetchQuery(bannerListQueryOption());
};
