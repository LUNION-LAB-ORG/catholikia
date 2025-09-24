import Content from "@/components/primitives/Content";
import HeroSection from "@/components/(public)/accueil/hero-section";
import ActualitesRecentesSection from "@/components/(public)/accueil/actualites-recentes-section";
import Publicite from "@/components/(public)/publicites";
import ActualitesVaticanSection from "@/components/(public)/accueil/actualites-vatican-section";
import FlashInfo from "@/components/(public)/accueil/flash-infos";

export default async function Home() {

	return (
		<>
			<HeroSection/>
			<Content fullWidth>
				<ActualitesRecentesSection/>
				<FlashInfo/>
				<Publicite
					position="ACCUEIL_MIDDLE"
					orientation="horizontal"
				/>
				<ActualitesVaticanSection />
			</Content>
		</>
	);
}
