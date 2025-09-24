import React from 'react';
import Title from "@/components/primitives/Title";
import {actualitesFakeData} from "@/app/api/actualites";
import ActualiteCard from "@/components/(public)/actualites/actualite-card";
import {Button} from "@heroui/button";
import {Link} from "@heroui/link";
import Section from "@/components/primitives/Section";
import {getTranslations} from "next-intl/server";

async function Index() {
	const t = await getTranslations("actualites");

	return (
		<Section className="custom-container">
			<Title className="font-bebas text-[#151515]">
				{t("actualites_title")}
			</Title>
			<div className="flex flex-col px-4">
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-8">
					{actualitesFakeData.map((actualite) => (
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