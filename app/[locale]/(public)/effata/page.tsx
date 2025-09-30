import {ArticlesPage} from '@/components/(public)/effata/article-page';
import {EffataSection} from '@/components/(public)/effata/effata-section';
import Content from '@/components/primitives/Content';
import React from 'react';
import Publicite from "@/components/(public)/publicites";
import MissionSignup from "@/components/don/MissionSignup";

const EffataPage = () => {
	return (
		<Content fullWidth className="pt-0 ">
			<EffataSection/>
			<ArticlesPage/>
			<Publicite position="EFFATA_BOTTOM"/>
			<MissionSignup/>
		</Content>
	);
}

export default EffataPage;
