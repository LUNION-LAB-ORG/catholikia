import { ActualitesPage } from "@/components/(public)/actualites/actualite-page";
import CarouselActualite from "@/components/(public)/actualites/carousel/index";
import Publicite from "@/components/(public)/publicites";
import TitleBanner from "@/components/common/TitleBanner";
import MissionSignup from "@/components/don/MissionSignup";

const Page = () => {
  return (
    <div>
      <TitleBanner title="actualité" />
      <CarouselActualite />
      <Publicite position="ACCUEIL_MIDDLE" orientation="horizontal" />
      <ActualitesPage />
    <MissionSignup />
    </div>
  );
};

export default Page;
