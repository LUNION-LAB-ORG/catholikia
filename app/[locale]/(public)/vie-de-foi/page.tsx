import FlashInfo from "@/components/(public)/accueil/flash-infos";
import Publicite from "@/components/(public)/publicites";
import {TestimonialsSection} from "@/components/(public)/vie-de-foi/testimonials-section";
import {VideoTestimonialsSection} from "@/components/(public)/vie-de-foi/video-testimonial-section";
import MissionSignup from "@/components/don/MissionSignup";
import Content from "@/components/primitives/Content";
import {prefetchTemoignageListQuery} from "@/features/vie-de-foi/queries/vie-de-foi-list.query";
import React from "react";
import TitleBanner from "@/components/common/TitleBanner";
import {Metadata} from "next";

export async function generateMetadata(): Promise<Metadata> {
	return {
		title: "Vie de foi",
		description: "Découvrez des témoignages inspirants et des vidéos édifiantes qui nourrissent votre vie de foi au quotidien.",
		openGraph: {
			title: "Vie de foi - Catholikia",
			description: "Découvrez des témoignages inspirants et des vidéos édifiantes qui nourrissent votre vie de foi au quotidien.",
			url: "https://www.catholikia.com/effata",
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

const VieDeFoiPage = () => {
	void prefetchTemoignageListQuery({page: 1, size: 2, inspirant: true});
	void prefetchTemoignageListQuery({page: 1, size: 6});
	return (
		<Content fullWidth className="pt-0">
			{/*<FoiSection />*/}
			<TitleBanner title="vie de foi" backgroundImage={"/assets/foi/bg.jpg"}/>
			<VideoTestimonialsSection/>
			<FlashInfo/>
			<TestimonialsSection/>
			<Publicite position="ACCUEIL_MIDDLE" orientation="horizontal"/>
			<MissionSignup/>
		</Content>
	);
};

export default VieDeFoiPage;
