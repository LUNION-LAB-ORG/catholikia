import CuturamaBanner from "@/components/(public)/cuturama/cuturama-banner";
import CuturamaEventsList from "@/components/(public)/cuturama/cuturama-events-list";
import Publicite from "@/components/(public)/publicites";
import InvolvementSection from "@/components/don/involvement-section";
import MissionSignup from "@/components/don/MissionSignup";

import Content from "@/components/primitives/Content";

export default function CuturamaPage() {
    return (
        <Content fullWidth className="pt-0">
            <CuturamaBanner
                title="événements Culturama"
                backgroundImage="/assets/tribunes/bg.jpg"
            />
            <CuturamaEventsList />
            <Publicite position="ACCUEIL_MIDDLE" orientation="horizontal" />
            <MissionSignup />
        </Content>
    );
};