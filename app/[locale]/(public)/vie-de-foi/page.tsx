import FlashInfo from '@/components/(public)/accueil/flash-infos';
import Publicite from '@/components/(public)/publicites';
import { FoiSection } from '@/components/(public)/vie-de-foi/foi-section';
import { TestimonialsSection } from '@/components/(public)/vie-de-foi/testimonials-section';
import { VideoTestimonialsSection } from '@/components/(public)/vie-de-foi/video-testimonial-section';
import MissionSignup from '@/components/don/MissionSignup';
import React from 'react';

const Page = () => {
    return (
        <div>
            <FoiSection/>
            <VideoTestimonialsSection/>
            <FlashInfo/>
            <TestimonialsSection/>
            <Publicite
                                position="ACCUEIL_MIDDLE"
                                orientation="horizontal"
                            />
            <MissionSignup />

        </div>
    );
}

export default Page;
