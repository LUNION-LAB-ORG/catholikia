import AnnuaireDioceses from '@/components/(public)/annuaire';
import TitleBanner from '@/components/common/TitleBanner';
import Content from '@/components/primitives/Content';
import React from 'react';

const AnnuairePage = () => {
  return (
    <Content>
      <TitleBanner title="ANNUAIRE DES DIOCESES DE COTE D'IVOIRE" />
      <AnnuaireDioceses />
    </Content>
  );
}

export default AnnuairePage;
