import Content from "@/components/primitives/Content";
import HeroSection from "@/components/(public)/accueil/hero-section";
import ActualitesRecentesSection from "@/components/(public)/accueil/actualites-recentes-section";

import ActualitesVaticanSection from "@/components/(public)/accueil/actualites-vatican-section";
import FlashInfo from "@/components/(public)/accueil/flash-infos";
import Publicite from "@/components/(public)/publicites";
import InvolvementSection from "@/components/don/InvolvementSection";
import MediaPartnersLogos from "@/components/don/MediaPartnersLogos";
import EvenementList from "@/components/(public)/evenement/EvenementList";
import EvenementsSection from "@/components/(public)/evenement/EvenementsSection";

export default async function Home() {

	return (
		<>
			<HeroSection/>
			<Content fullWidth>
				<ActualitesRecentesSection/>
				{/*<FlashInfo/>*/}
				<Publicite
					position="ACCUEIL_MIDDLE"
					orientation="horizontal"
				/>
				<ActualitesVaticanSection />
				<InvolvementSection />
				<EvenementList />
				{/* <EvenementsSection/> */}
				<MediaPartnersLogos />
			</Content>
		</>
	);
}
