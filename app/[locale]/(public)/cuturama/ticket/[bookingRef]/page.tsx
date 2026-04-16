import { Metadata } from "next";
import { TicketPageClient } from "@/components/(public)/cuturama/cuturama-ticket-page-client";

type Props = {
    params: Promise<{ bookingRef: string; locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { bookingRef } = await params;
    return {
        title: `Billet ${bookingRef} – Cuturama`,
        description: "Consultez et téléchargez votre billet Cuturama.",
    };
}

export default async function CuturamaTicketPage({ params }: Props) {
    const { bookingRef } = await params;

    return <TicketPageClient bookingRef={bookingRef} />;
}
