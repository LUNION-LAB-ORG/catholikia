import FlashInfo from "@/components/(public)/accueil/flash-infos";
import Publicite from "@/components/(public)/publicites";
import {TestimonialsSection} from "@/components/(public)/vie-de-foi/testimonials-section";
import {VideoTestimonialsSection} from "@/components/(public)/vie-de-foi/video-testimonial-section";
import MissionSignup from "@/components/don/MissionSignup";
import Content from "@/components/primitives/Content";
import {prefetchTemoignageListQuery} from "@/features/vie-de-foi/queries/vie-de-foi-list.query";
import React from "react";
import TitleBanner from "@/components/common/TitleBanner";

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
