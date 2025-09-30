import Content from "@/components/primitives/Content";
import HeroSection from "@/components/(public)/accueil/hero-section";
import ActualitesRecentesSection from "@/components/(public)/accueil/actualites-recentes-section";
import ActualitesVaticanSection from "@/components/(public)/accueil/actualites-vatican-section";
import FlashInfo from "@/components/(public)/accueil/flash-infos";
import Publicite from "@/components/(public)/publicites";
import EvenementList from "@/components/(public)/evenement/EvenementList";
import InvolvementSection from "@/components/don/involvement-section";
import MissionSignup from "@/components/don/MissionSignup";
import React from "react";

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
				<EvenementList />
				<InvolvementSection />
				<MissionSignup />
			</Content>
		</>
	);
}
