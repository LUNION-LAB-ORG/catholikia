"use client";

import Section from "@/components/primitives/Section";
import Title from "@/components/primitives/Title";
import {useActualitesListQuery} from '@/features/actualite/queries/actualite-list.query';
import {Button} from "@heroui/button";
import {Link} from "@heroui/link";
import {useTranslations} from "next-intl";
import ActualiteCardSkeleton from "@/components/(public)/actualites/actualite-card-skeleton";
import dynamic from "next/dynamic";

const ActualiteCard = dynamic(
	() => import("@/components/(public)/actualites/actualite-card"),
	{ssr: false}
);

const ActualiteErrors = dynamic(
	() => import("@/components/(public)/actualites/actualite-errors"),
	{ssr: false}
);

function ActualitesRecentesSection() {
	const t = useTranslations("actualites");
	const {
		data,
		isLoading,
		error,
		isError,
		refetch,
		isFetching
	} = useActualitesListQuery({page: 1, limit: 6});

	const actualites = data?.data || [];
	const showLoadingState = isLoading || isFetching;

	return (
		<Section className="custom-container">
			<Title className="font-bebas text-[#151515]">
				{t("actualites_title")}
			</Title>
			<div className="flex flex-col px-4">
				{isError ? <ActualiteErrors isError={isError} error={error} refetch={refetch}/> :
					<>
						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-8">
							{showLoadingState && Array.from({length: 6}).map((_, index) => (
								<ActualiteCardSkeleton key={index}/>
							))}
							{!showLoadingState && actualites.map((actualite) => (
								<ActualiteCard
									actualite={actualite}
									key={actualite.id}
								/>
							))}
						</div>
						<Button
							as={Link}
							href="/actualites"
							color="primary"
							className="rounded-full mx-auto uppercase text-[#151515] text-sm font-bold mt-8"
						>
							{t("voir_plus")}
						</Button>
					</>
				}
			</div>
		</Section>
	);
}

export default ActualitesRecentesSection;