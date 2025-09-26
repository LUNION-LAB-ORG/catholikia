import Index from '@/components/(public)/annuaire';
import TitleBanner from '@/components/common/TitleBanner';
import React from 'react';

const Page = () => {
    return (
        <div>
              <TitleBanner className='' title="ANNUAIRE DES DIOCESES DE COTE D'IVOIRE" />
            <Index />
        </div>
    );
}

export default Page;
