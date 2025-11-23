"use client";
import React from 'react';
import Section from "@/components/primitives/Section";
import {useEventList} from "@/features/event/hooks/useEventList";
import EvenementItem from "@/components/(public)/evenement/evenements-list-section/evenement-item";
import EvenementItemSkeleton from "@/components/(public)/evenement/evenements-list-section/evenement-item-skeleton";
import {CustomPagination} from "@/components/common/custom-pagination";

function EvenementListSection() {
	const {
		events,
		meta,
		isLoading,
		isError,
		isFetching,
		refetch,
		onPaginationChange
	} = useEventList()

	const { last_page: totalPages = 1, current_page: currentPage = 1 } = meta || {};

	return (
		<Section className="custom-container">
			{isError ? (
				<div className="text-center">
					<p className="text-red-600 mb-2">
						Une erreur est survenue lors du chargement des événements.
					</p>
					<button
						type="button"
						className="inline-block px-4 py-2 bg-blue-600 text-white rounded"
						onClick={() => refetch()}
					>
						Réessayer
					</button>
				</div>
			) : isLoading ? (
				<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
					{Array.from({length: 3}).map((_, i) => (
						<EvenementItemSkeleton key={i}/>
					))}
				</div>
			) : events.length === 0 ? (
				<div>
					<p className="text-center">Aucun événement trouvé.</p>
				</div>
			) : (
				<>
					<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
						{events.map((event, index) => (
							<EvenementItem event={event} key={index}/>
						))}
					</div>
					{isFetching && (
						<p className="text-sm text-gray-500 text-center mt-4">Mise à jour...</p>
					)}
					{totalPages > 1 && (
						<CustomPagination
							currentPage={currentPage}
							totalPages={totalPages}
							onPageChange={(page) => onPaginationChange(page)}
						/>)}
				</>
			)}
		</Section>
	);
}

export default EvenementListSection;