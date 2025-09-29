import EditorialTeam from '@/components/(public)/a-propos/editorial-team';
import Engagements from '@/components/(public)/a-propos/engagements';
import Mission from '@/components/(public)/a-propos/Mission';
import TitleBanner from '@/components/common/TitleBanner';
import MissionSignup from '@/components/don/MissionSignup';
import Content from '@/components/primitives/Content';
import React from 'react';

const Page = () => {
    return (
        <Content fullWidth className="pt-0">
             <TitleBanner title="a propos"  />
             <Mission/>
            <EditorialTeam />
            <Engagements/>
            <MissionSignup />
        </Content>
    );
}

export default Page;
