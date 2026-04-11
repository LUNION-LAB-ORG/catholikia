import { Calendar, MapPin, Ticket } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import type { CuturamaEvent } from "./cuturama.types";

interface EventDetailProps {
    event: CuturamaEvent;
}

export function EventDetail({ event }: EventDetailProps) {
    return (
        <div className="flex flex-col gap-8">
            {/* ── DÉTAILS ── */}
            <section>
                <h2 className="text-[#fe0000] font-extrabold text-2xl sm:text-3xl uppercase tracking-wide mb-4">
                    Détails
                </h2>

                {event.description && (
                    <p className="text-sm text-muted-foreground leading-relaxed whitespace-pre-line mb-6">
                        {event.description}
                    </p>
                )}

                <Card>
                    <CardContent className="p-0 divide-y">
                        {/* Calendrier */}
                        <div className="flex items-start gap-4 px-5 py-4">
                            <span className="text-sm font-semibold text-muted-foreground w-28 shrink-0">
                                Calendrier
                            </span>
                            <div className="flex flex-col gap-1 text-sm">
                                <div className="flex items-center gap-2 text-[#fe0000] font-medium">
                                    <Calendar className="size-4 shrink-0" />
                                    <span>{event.date}</span>
                                </div>
                                <div className="flex items-center gap-2 text-muted-foreground">
                                    <Calendar className="size-4 shrink-0 opacity-0" />
                                    <span>{event.time}</span>
                                </div>
                            </div>
                        </div>

                        <Separator />

                        {/* Localisation */}
                        <div className="flex items-center gap-4 px-5 py-4">
                            <span className="text-sm font-semibold text-muted-foreground w-28 shrink-0">
                                Localisation
                            </span>
                            <div className="flex items-center gap-2 text-sm text-[#fe0000] font-medium">
                                <MapPin className="size-4 shrink-0" />
                                <span>{event.location}</span>
                            </div>
                        </div>

                        <Separator />

                        {/* Billetterie */}
                        <div className="flex items-center gap-4 px-5 py-4">
                            <span className="text-sm font-semibold text-muted-foreground w-28 shrink-0">
                                Billetterie
                            </span>
                            <div className="flex items-center gap-2 text-sm text-[#fe0000] font-medium">
                                <Ticket className="size-4 shrink-0" />
                                <span>Ticket : {event.price}</span>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </section>

            {/* ── EMPLACEMENT ── */}
            <section>
                <h2 className="text-[#fe0000] font-extrabold text-2xl sm:text-3xl uppercase tracking-wide mb-4">
                    Emplacement
                </h2>

                <div className="w-full h-72 rounded-xl overflow-hidden border">
                    {event.mapEmbedUrl ? (
                        <iframe
                            src={event.mapEmbedUrl}
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title={`Carte – ${event.location}`}
                        />
                    ) : (
                        <div className="w-full h-full bg-muted flex items-center justify-center text-muted-foreground text-sm">
                            Carte non disponible
                        </div>
                    )}
                </div>
            </section>
        </div>
    );
}
