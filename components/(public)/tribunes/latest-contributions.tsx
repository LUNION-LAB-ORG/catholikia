"use client";
import LoadingIndicator from "@/components/common/LoadingIndicator";
import NoData from "@/components/common/no-data";
import Section from "@/components/primitives/Section";
import Title from "@/components/primitives/Title";
import {TribuneCard} from "./tribune-card";
import {CustomPagination} from "@/components/common/custom-pagination";
import {useTribunesList} from "@/features/tribunes/hooks/use-tribunes-list";

export const LatestContributions = () => {
	const {
		onPaginationChange,
		meta,
		tribunes,
		isLoading
	} = useTribunesList()

	const totalPages = meta?.last_page || 1;
	const currentPage = meta?.current_page || 1;

	if (isLoading) {
		return <LoadingIndicator/>;
	}

	if (tribunes.length === 0 && !isLoading) {
		return <NoData
			message="Aucun article trouvé"
		/>;
	}

	return (
		<Section className="">
			<div className="text-2xl font-bold text-foreground mb-8 tracking-tight">
				<Title>Dernières contributions</Title>
			</div>
			<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
				{tribunes.map((tribune) => (
					<TribuneCard
						key={tribune.id}
						tribune={tribune}
					/>
				))}
			</div>
			{totalPages > 1 && (
				<CustomPagination
					currentPage={currentPage}
					totalPages={totalPages}
					onPageChange={(page) => onPaginationChange(page)}
				/>)}
		</Section>
	);
};
