import Publicite from "@/components/(public)/publicites";
import ArticleList from "@/components/(public)/tribunes/article-list";
import { Contributors } from "@/components/(public)/tribunes/contributors";
import ProposerTexte from "@/components/(public)/tribunes/proposer-texte";
import { SubmitText } from "@/components/(public)/tribunes/submit-text";
import TitleBanner from "@/components/common/TitleBanner";
import MissionSignup from "@/components/don/MissionSignup";
import Content from "@/components/primitives/Content";
import React from "react";

const Page = () => {
  return (
    <Content>
      <TitleBanner title="TRIBUNES" />
      <ArticleList />
      <Contributors />
      <ProposerTexte />
      <Publicite position="ACCUEIL_MIDDLE" orientation="horizontal" />
      <MissionSignup />
    </Content>
  );
};

export default Page;
