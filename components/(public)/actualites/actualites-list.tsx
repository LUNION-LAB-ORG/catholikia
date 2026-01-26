"use client";
import Section from "@/components/primitives/Section";
import {useActualiteList} from "@/features/actualite/hooks/useActualiteList";
import {CustomPagination} from "../../common/custom-pagination";
import NoData from "@/components/common/no-data";
import CategorieButtonFilter from "@/components/common/filters/categorie-button-filter";
import dynamic from "next/dynamic";
import ActualiteCardSkeleton from "@/components/(public)/actualites/actualite-card-skeleton";

const ActualiteCard = dynamic(
	() => import("@/components/(public)/actualites/actualite-card"),
	{ssr: false}
);

export const ActualitesList = () => {

	const {
		actualites,
		onPaginationChange,
		meta,
		categories,
		filters,
		onFilterChange,
		isLoading: isLoadingActualites,
		isLoadingCategories,
	} = useActualiteList();
	const totalPages = meta?.last_page || 1;
	const currentPage = meta?.current_page || 1;

	return (
		<Section className="min-h-screen bg-background custom-container py-12 px-4">
			<div>
				{/* Titre principal */}
				<h1 className="text-4xl font-bold text-news-title-dark mb-12 tracking-wide">
					Les informations les plus récentes du moment...
				</h1>

				<div className="mb-8">
					<h3 className="text-sm font-bold text-[#595959] mb-4">Catégories</h3>
					<div className="flex flex-wrap items-center gap-2 mb-4">
						{isLoadingCategories && Array.from({length: 5}).map((_, index) => (
							<div
								key={index}
								className="h-8 w-20 bg-gray-200 rounded-full animate-pulse"
							/>
						))}
						{categories.map((category) => (
							<CategorieButtonFilter
								key={category.id}
								category={{
									id: category.id,
									nom: category.name
								}}
								onPress={() => {
									if (filters.category_id === category.id) {
										onFilterChange({category_id: undefined});
									} else {
										onFilterChange({category_id: category.id});
									}
								}}
								isSelected={filters.category_id == category.id}
							/>
						))}
					</div>
				</div>

				{(actualites.length === 0 && !isLoadingActualites) && <NoData message="Aucune actualité disponible pour le moment."/>}
				{/* Grille d'actualités */}
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
					{isLoadingActualites && Array.from({length: filters.limit}).map((_, index) => (
						<ActualiteCardSkeleton key={index}/>
					))}
					{!isLoadingActualites && actualites.map((actualite) => (
						<ActualiteCard
							key={actualite.id}
							actualite={actualite}
						/>
					))}
				</div>

				{/* Pagination */}
				{totalPages > 1 && (
					<CustomPagination
						currentPage={currentPage}
						totalPages={totalPages}
						onPageChange={(page) => onPaginationChange(page)}
					/>)}
			</div>
		</Section>
	);
};
