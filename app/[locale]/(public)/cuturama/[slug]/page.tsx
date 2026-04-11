import { notFound } from "next/navigation";
import { Metadata } from "next";
import { FAKE_EVENTS } from "@/components/(public)/cuturama/cuturama.data";
import { EventHero } from "@/components/(public)/cuturama/cuturama-event-hero";
import { EventContent } from "@/components/(public)/cuturama/cuturama-event-content";
import Publicite from "@/components/(public)/publicites";
import MissionSignup from "@/components/don/MissionSignup";

type Props = {
    params: Promise<{ slug: string; locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const event = FAKE_EVENTS.find((e) => e.slug === slug);
    return {
        title: event ? `${event.title} – Culturama` : "Événement – Culturama",
        description: event?.description?.slice(0, 160) ?? "Découvrez cet événement sur Culturama.",
    };
}

export default async function CuturamaEventDetailPage({ params }: Props) {
    const { slug } = await params;
    const event = FAKE_EVENTS.find((e) => e.slug === slug);

    if (!event) notFound();

    return (
        <div className="min-h-screen bg-background">
            {/* Hero : barre titre + image + spot pub */}
            <EventHero event={event} />

            {/* Stepper + contenu dynamique selon étape (client) */}
            <EventContent event={event} />

            <Publicite position="ACCUEIL_MIDDLE" orientation="horizontal" />
            <MissionSignup />
        </div>
    );
}
