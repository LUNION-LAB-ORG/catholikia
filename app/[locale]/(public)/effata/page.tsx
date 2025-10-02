import { ArticlesPage } from '@/components/(public)/effata/article-page';
import { EffataSection } from '@/components/(public)/effata/effata-section';
import Content from '@/components/primitives/Content';
import React from 'react';
import Publicite from "@/components/(public)/publicites";
import MissionSignup from "@/components/don/MissionSignup";
import { prefetchEffataListQuery } from '@/features/effata/queries/effata-list.query';

const EffataPage = () => {
  prefetchEffataListQuery({ page: 1, limit: 9, search: '' });
  return (
    <Content fullWidth className="pt-0 ">
      <EffataSection />
      <ArticlesPage />
      <Publicite position="EFFATA_BOTTOM" />
      <MissionSignup />
    </Content>
  );
}

export default EffataPage;
