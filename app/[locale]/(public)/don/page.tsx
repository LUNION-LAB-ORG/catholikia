import TitleBanner from '@/components/common/TitleBanner';
import InvolvementSection from '@/components/don/InvolvementSection';
import MediaPartnersLogos from '@/components/don/MediaPartnersLogos';
import MissionSignup from '@/components/don/MissionSignup';
import Content from '@/components/primitives/Content';
import React from 'react';

const Page = () => {
    return (
        <div>
            <TitleBanner title='don'  />
            <MissionSignup />
            
        </div>
    );
}

export default Page;
