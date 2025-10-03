import Content from "@/components/primitives/Content";
import HeroSection from "@/components/(public)/accueil/hero-section";
import ActualitesRecentesSection from "@/components/(public)/accueil/actualites-recentes-section";
import ActualitesVaticanSection from "@/components/(public)/accueil/actualites-vatican-section";
import FlashInfo from "@/components/(public)/accueil/flash-infos";
import Publicite from "@/components/(public)/publicites";
import EvenementSection from "@/components/(public)/evenement/evenement-section";
import InvolvementSection from "@/components/don/involvement-section";
import MissionSignup from "@/components/don/MissionSignup";
import React from "react";

export default async function Home() {
  return (
    <Content fullWidth className="pt-0">
      <HeroSection />
      <ActualitesRecentesSection />
      <FlashInfo />
      <Publicite position="ACCUEIL_MIDDLE" orientation="horizontal" />
      <ActualitesVaticanSection />
      <EvenementSection />
      <InvolvementSection />
      <MissionSignup />
    </Content>
  );
}
