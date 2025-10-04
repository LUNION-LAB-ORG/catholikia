import FlashInfo from "@/components/(public)/accueil/flash-infos";
import Publicite from "@/components/(public)/publicites";
import { FoiSection } from "@/components/(public)/vie-de-foi/foi-section";
import { TestimonialsSection } from "@/components/(public)/vie-de-foi/testimonials-section";
import { VideoTestimonialsSection } from "@/components/(public)/vie-de-foi/video-testimonial-section";
import MissionSignup from "@/components/don/MissionSignup";
import Content from "@/components/primitives/Content";
import { prefetchTemoignageListQuery } from "@/features/vie-de-foi/queries/vie-de-foi-list.query";
import React from "react";

const VieDeFoiPage = () => {
  prefetchTemoignageListQuery({ page: 1, size: 2, inspirant: true });
  prefetchTemoignageListQuery({ page: 1, size: 6 });
  return (
    <Content fullWidth className="pt-0">
      <FoiSection />
      <VideoTestimonialsSection />
      <FlashInfo />
      <TestimonialsSection />
      <Publicite position="ACCUEIL_MIDDLE" orientation="horizontal" />
      <MissionSignup />
    </Content>
  );
};

export default VieDeFoiPage;
