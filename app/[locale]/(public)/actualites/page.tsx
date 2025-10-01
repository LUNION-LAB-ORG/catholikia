import { ActualitesPage } from "@/components/(public)/actualites/actualite-page";
import CarouselActualite from "@/components/(public)/actualites/carousel/index";
import Publicite from "@/components/(public)/publicites";
import TitleBanner from "@/components/common/TitleBanner";
import MissionSignup from "@/components/don/MissionSignup";
import Content from "@/components/primitives/Content";
import { prefetchActualitesListQuery } from "@/features/actualite/queries/actualite-list.query";

const Page = async () => {
	await Promise.all([
		prefetchActualitesListQuery({ page: 1, limit: 3 }),
		prefetchActualitesListQuery({ page: 1, limit: 12, skip: 3 }),
	]);

	return (
		<Content fullWidth className="pt-0">
			<TitleBanner title="actualité" />
			<CarouselActualite />
			<Publicite position="ACCUEIL_MIDDLE" orientation="horizontal" />
			<ActualitesPage />
			<MissionSignup />
		</Content>
	);
};

export default Page;
