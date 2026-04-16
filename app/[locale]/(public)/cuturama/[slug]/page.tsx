import { Metadata } from "next";
import { CuturamaEventDetailClient } from "@/components/(public)/cuturama/cuturama-event-detail-client";
import Publicite from "@/components/(public)/publicites";
import MissionSignup from "@/components/don/MissionSignup";

type Props = {
    params: Promise<{ slug: string; locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    return {
        title: "Événement – Culturama",
        description: "Découvrez cet événement sur Culturama.",
        openGraph: { url: `/culturama/${slug}` },
    };
}

export default async function CuturamaEventDetailPage({ params }: Props) {
    const { slug } = await params;

    return (
        <div className="min-h-screen bg-background">
            <CuturamaEventDetailClient slug={slug} />
            <Publicite position="ACCUEIL_MIDDLE" orientation="horizontal" />
            <MissionSignup />
        </div>
    );
}
