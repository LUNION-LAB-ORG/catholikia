import AnnuaireDioceses from '@/components/(public)/annuaire';
import TitleBanner from '@/components/common/TitleBanner';
import Content from '@/components/primitives/Content';
import React from 'react';

const AnnuairePage = () => {
	return (
		<Content fullWidth className="pt-0">
			<TitleBanner backgroundImage={"/assets/annuaire/bg.jpg"} title="ANNUAIRE DES DIOCESES DE COTE D'IVOIRE"/>
			<AnnuaireDioceses/>
		</Content>
	);
}

export default AnnuairePage;
