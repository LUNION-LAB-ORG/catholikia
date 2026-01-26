"use client";

import ActualiteCard from "./article-card";

import Section from "@/components/primitives/Section";

import LoadingIndicator from "@/components/common/LoadingIndicator";
import NoData from "@/components/common/no-data";
import {useEffataList} from "@/features/effata/hooks/useEffataList";
import EffataFilters from "./effata-filters";
import {CustomPagination} from "@/components/common/custom-pagination";

export const EffataList = () => {
	const {effatas, meta, isLoading, error, onPaginationChange} = useEffataList();

	if (isLoading) {
		return <LoadingIndicator/>;
	}

	if (error) {
		return <div className="text-red-500">Erreur lors du chargement des articles.</div>;
	}


	return (
		<Section className="min-h-screen bg-background py-12 px-4">
			<div className="custom-container">
				{/* Titre principal */}
				<h1 className="text-4xl font-bold text-news-title-dark mb-12 tracking-wide">
					La porte ouverte sur le monde...
				</h1>
				<EffataFilters/>
				{/* Grille d'actualités */}
				{effatas.length > 0 && (
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
						{effatas.map((actualite) => (
							<ActualiteCard
								key={actualite.id}
								effata={actualite}
								options={{
									withDescription: true,
									withAuthor: true,
									withShare: true,
									withCategory: false,
									withCountry: true,
									withTags: true,
								}}
							/>
						))}
					</div>
				)}
				{effatas.length === 0 && <NoData message="Aucun article trouvé."/>}

				<CustomPagination
					currentPage={meta?.current_page || 1}
					totalPages={meta?.last_page || 1}
					onPageChange={onPaginationChange}
				/>
			</div>
		</Section>
	);
};
