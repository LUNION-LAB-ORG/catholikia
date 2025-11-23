import EditorialTeam from '@/components/(public)/a-propos/editorial-team';
import Engagements from '@/components/(public)/a-propos/engagements';
import Mission from '@/components/(public)/a-propos/Mission';
import TitleBanner from '@/components/common/TitleBanner';
import MissionSignup from '@/components/don/MissionSignup';
import Content from '@/components/primitives/Content';
import React from 'react';

const AProposPage = () => {
	return (
		<Content fullWidth className="pt-0">
			<TitleBanner backgroundImage="/assets/about/bg.jpg" title="a propos"/>
			<Mission/>
			<EditorialTeam/>
			<Engagements/>
			<MissionSignup/>
		</Content>
	);
}

export default AProposPage;
