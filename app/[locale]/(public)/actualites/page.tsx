import {ActualitesList} from "@/components/(public)/actualites/actualites-list";
import CarouselActualite from "@/components/(public)/actualites/carousel/index";
import Publicite from "@/components/(public)/publicites";
import TitleBanner from "@/components/common/TitleBanner";
import MissionSignup from "@/components/don/MissionSignup";
import Content from "@/components/primitives/Content";
import {prefetchActualitesListQuery} from "@/features/actualite/queries/actualite-list.query";
import {Metadata} from "next";
import {SearchParams} from "nuqs";
import {loadActualiteSearchParams} from "@/features/actualite/filters/actualite.filter";

export async function generateMetadata(): Promise<Metadata> {
	return {
		title: "Actualités",
		description: "Restez informé des dernières nouvelles, événements et articles inspirants de la communauté catholique.",
		openGraph: {
			title: "Actualités - Catholikia",
			description: "Restez informé des dernières nouvelles, événements et articles inspirants de la communauté catholique.",
			url: "https://www.catholikia.com/actualites",
			siteName: "Catholikia",
			locale: "fr_FR",
			type: "website",
			images: [
				{
					url: "https://www.catholikia.com/og-image.jpg",
					width: 1200,
					height: 630,
					alt: "Actualités - Catholikia",
				},
			],
		},
	}
}

type PageProps = {
	searchParams: Promise<SearchParams>
}

const ActualitesPage = async ({searchParams}: PageProps) => {
	const {
		page,
		limit,
		category_id,
	} = await loadActualiteSearchParams(searchParams);

	await Promise.all([
		prefetchActualitesListQuery({page: 1, limit: 3}),
		prefetchActualitesListQuery({page, limit, category_id}),
	]);

	return (
		<Content fullWidth className="pt-0">
			<TitleBanner backgroundImage={"/assets/actualites/bg.jpg"} title="actualités"/>
			<CarouselActualite/>
			<Publicite position="ACCUEIL_MIDDLE" orientation="horizontal"/>
			<ActualitesList/>
			<MissionSignup/>
		</Content>
	);
};

export default ActualitesPage;
