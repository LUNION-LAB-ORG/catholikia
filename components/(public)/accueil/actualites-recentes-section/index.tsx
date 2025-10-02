"use client";
import ActualiteCard from "@/components/(public)/actualites/actualite-card";
import Section from "@/components/primitives/Section";
import Title from "@/components/primitives/Title";
import { useActualitesListQuery } from '@/features/actualite/queries/actualite-list.query';
import { Button } from "@heroui/button";
import { Link } from "@heroui/link";
import { useTranslations } from "next-intl";

function Index() {
	const t = useTranslations("actualites");
	const {
		data,
		isLoading,
		error,
		isError,
		isFetching
	} = useActualitesListQuery({ page: 1, limit: 6 });

	const actualites = data?.data || [];

	return (
		<Section className="custom-container">
			<Title className="font-bebas text-[#151515]">
				{t("actualites_title")}
			</Title>
			<div className="flex flex-col px-4">
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-8">
					{actualites.map((actualite) => (
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
			</div>
		</Section>
	);
}

export default Index;