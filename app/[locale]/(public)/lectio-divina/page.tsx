import LectioDivinaEtape from "@/components/(public)/lectio-divina/lectio-divina-etape";
import LectioDivinaHero from "@/components/(public)/lectio-divina/lectio-divina-hero";
import LectioDivina from "@/components/(public)/lectio-divina/lectio-divina";
import Content from "@/components/primitives/Content";
import React from "react";
import BibleReadingDay from "@/components/(public)/lectio-divina/bible-reading-day";
import Publicite from "@/components/(public)/publicites";
import MissionSignup from "@/components/don/MissionSignup";

const LectioDivinaPage = () => {
  return (
    <Content fullWidth className="pt-0">
      <LectioDivinaHero title="Lectio divina" />
      <LectioDivina />
      <LectioDivinaEtape />
      <BibleReadingDay />
      <Publicite position="ACCUEIL_MIDDLE" orientation="horizontal" />
      <MissionSignup />
    </Content>
  );
};

export default LectioDivinaPage;
