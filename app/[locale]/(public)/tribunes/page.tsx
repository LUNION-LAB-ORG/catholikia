import Publicite from "@/components/(public)/publicites";
import ArticleList from "@/components/(public)/tribunes/article-list";
import Contributor from "@/components/(public)/tribunes/contributor";

import ProposerTexte from "@/components/(public)/tribunes/proposer-texte";
import TitleBanner from "@/components/common/TitleBanner";
import MissionSignup from "@/components/don/MissionSignup";
import Content from "@/components/primitives/Content";
import { prefetchTribuneListQuery } from "@/features/tribunes/queries/tribune-list.query";

const TribunesPage = async () => {
  void prefetchTribuneListQuery({
    page: 1,
    size:6,
  })
  return (
    <Content fullWidth className="pt-0">
      <TitleBanner
        title="tribunes"
        backgroundImage="/assets/tribunes/bg.jpg"
      />
      <ArticleList />
      <Contributor />
      <ProposerTexte />
      <Publicite position="ACCUEIL_MIDDLE" orientation="horizontal" />
      <MissionSignup />
    </Content>
  );
};

export default TribunesPage;
