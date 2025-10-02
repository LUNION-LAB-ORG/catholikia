import Publicite from "@/components/(public)/publicites";
import ArticleList from "@/components/(public)/tribunes/article-list";
import Contributor from "@/components/(public)/tribunes/contributor";

import ProposerTexte from "@/components/(public)/tribunes/proposer-texte";
import TitleBanner from "@/components/common/TitleBanner";
import MissionSignup from "@/components/don/MissionSignup";
import Content from "@/components/primitives/Content";

const Page = () => {
  return (
    <Content fullWidth className="pt-0">
      <TitleBanner title="TRIBUNES" />
      <ArticleList />
      <Contributor />
      <ProposerTexte />
      <Publicite position="ACCUEIL_MIDDLE" orientation="horizontal" />
      <MissionSignup />
    </Content>
  );
};

export default Page;
