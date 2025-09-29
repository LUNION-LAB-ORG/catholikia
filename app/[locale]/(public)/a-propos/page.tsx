import EditorialTeam from '@/components/(public)/a-propos/editorial-team';
import Engagements from '@/components/(public)/a-propos/engagements';
import Mission from '@/components/(public)/a-propos/Mission';
import TitleBanner from '@/components/common/TitleBanner';
import React from 'react';

const Page = () => {
    return (
        <div>
             <TitleBanner title="a propos" />
             <Mission/>
            <EditorialTeam />
            <Engagements/>
        </div>
    );
}

export default Page;
