import CarouselActualite from '@/components/(public)/actualites/carousel/index';
import TitleBanner from '@/components/common/TitleBanner';
import React from 'react';

const Page = () => {
    return (
        <div>
            <TitleBanner title='actualité' />
            <CarouselActualite/>
        </div>
    );
}

export default Page;
