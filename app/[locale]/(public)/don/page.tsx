import TitleBanner from '@/components/common/TitleBanner';
import MissionSignup from '@/components/don/MissionSignup';
import Content from '@/components/primitives/Content';
import React from 'react';

const DonPage = () => {
    return (
        <Content>
            <TitleBanner title='don'  />
            <MissionSignup />
        </Content>
    );
}

export default DonPage;
