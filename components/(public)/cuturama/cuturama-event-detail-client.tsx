"use client";

import { useCuturamaEventDetailQuery } from "@/features/cuturama/queries/cuturama-detail.query";
import { EventHero } from "./cuturama-event-hero";
import { EventContent } from "./cuturama-event-content";

interface CuturamaEventDetailClientProps {
    slug: string;
}

export function CuturamaEventDetailClient({ slug }: CuturamaEventDetailClientProps) {
    const { data: event, isLoading } = useCuturamaEventDetailQuery(slug);

    if (isLoading && !event) {
        return (
            <div className="min-h-screen bg-background">
                <div className="w-full h-48 bg-muted animate-pulse" />
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-4">
                    <div className="h-8 w-64 bg-muted animate-pulse rounded" />
                    <div className="h-48 bg-muted animate-pulse rounded-xl" />
                </div>
            </div>
        );
    }

    if (!event) {
        return (
            <div className="min-h-screen flex items-center justify-center text-muted-foreground text-lg">
                Événement introuvable.
            </div>
        );
    }

    return (
        <>
            <EventHero event={event} />
            <EventContent event={event} />
        </>
    );
}
