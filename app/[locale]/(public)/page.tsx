import Content from "@/components/primitives/Content";
import HeroSection from "@/components/(public)/accueil/hero-section";
import ActualitesRecentesSection from "@/components/(public)/accueil/actualites-recentes-section";

import ActualitesVaticanSection from "@/components/(public)/accueil/actualites-vatican-section";
import Publicite from "@/components/(public)/publicites";
import InvolvementSection from "@/components/don/InvolvementSection";
import MediaPartnersLogos from "@/components/don/MediaPartnersLogos";

export default async function Home() {
  return (
    <Content>
      <HeroSection />
      <ActualitesRecentesSection />
      <ActualitesVaticanSection />
      <InvolvementSection />
      <MediaPartnersLogos />
    </Content>
  );
}
