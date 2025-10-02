
import Content from "@/components/primitives/Content";
import React from "react";
import BibleReadingDay from "@/components/(public)/lectio-divina/bible-reading-day";
import Publicite from "@/components/(public)/publicites";
import MissionSignup from "@/components/don/MissionSignup";
import LectioDivinaSteps from "@/components/(public)/lectio-divina/lectio-divina-steps";
import LectioDivinaHero from "@/components/(public)/lectio-divina/lectio-divina-hero";
import Programe from "@/components/(public)/lectio-divina/programe";
import LectioDivinaIntro from "@/components/(public)/lectio-divina/lectio-divina-intro";

const LectioDivinaPage = () => {
  return (
    <Content fullWidth className="pt-0">
      <LectioDivinaHero title="Lectio divina" />
      <LectioDivinaIntro />
      <LectioDivinaSteps />
      <Programe />
      <BibleReadingDay />
      <Publicite position="ACCUEIL_MIDDLE" orientation="horizontal" />
      <MissionSignup />
    </Content>
  );
};

export default LectioDivinaPage;
