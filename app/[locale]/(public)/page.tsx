import {Link} from "@heroui/link";
import Content from "@/components/primitives/Content";
import Title from "@/components/primitives/Title";
import {getTranslations} from "next-intl/server";
import HeroSection from "@/components/(public)/accueil/hero-section";
import Section from "@/components/primitives/Section";
import {actualitesFakeData} from "@/app/api/actualites";
import ActualiteCard from "@/components/(public)/actualites/actualite-card";
import {Button} from "@heroui/button";

export default async function Home() {
	const t = await getTranslations("actualites");

	return (
		<>
			<HeroSection/>
			<Content>
				<Section className="custom-container">
					<Title className="font-bebas text-[#151515]">
						{t("actualites_title")}
					</Title>
					<div className="flex flex-col">
						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-8">
							{actualitesFakeData.map((actualite, i) => (
								<ActualiteCard
									actualite={actualite}
									key={i}
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
			</Content>
		</>
	);
}
