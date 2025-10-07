
import CurrentLectioDivina from "@/components/(public)/lectio-divina/current-lectio-divina";
import LectioDivinaHero from "@/components/(public)/lectio-divina/lectio-divina-hero";
import LectioDivinaIntro from "@/components/(public)/lectio-divina/lectio-divina-intro";
import LectioDivinaSteps from "@/components/(public)/lectio-divina/lectio-divina-steps";
import Publicite from "@/components/(public)/publicites";
import MissionSignup from "@/components/don/MissionSignup";
import Content from "@/components/primitives/Content";

const LectioDivinaPage = () => {
  return (
    <Content fullWidth className="pt-0">
      <LectioDivinaHero title="Lectio divina" />
      <LectioDivinaIntro />
      <LectioDivinaSteps />
      <CurrentLectioDivina />
      <Publicite position="ACCUEIL_MIDDLE" orientation="horizontal" />
      <MissionSignup />
    </Content>
  );
};

export default LectioDivinaPage;
