import Image from "next/image";
import { MapPin, Calendar, Ticket } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/navigation";
import type { CuturamaEvent } from "./cuturama.types";

interface EventCardProps {
    event: CuturamaEvent;
}

export function EventCard({ event }: EventCardProps) {
    return (
        <Link href={`/cuturama/${event.slug}`} className="block group">
        <Card className="overflow-hidden gap-0 py-0 transition-shadow group-hover:shadow-md">
            {/* Image */}
            <div className="relative w-full h-44">
                <Image
                    src={event.image}
                    alt={event.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
            </div>

            <CardContent className="p-3 flex flex-col gap-2 flex-1">
                {/* Badge catégorie */}
                <Badge variant="outline" className="self-start text-[11px] rounded-full">
                    {event.category}
                </Badge>

                {/* Titre */}
                <h3 className="font-bold text-sm leading-tight">
                    {event.title}
                </h3>

                {/* Lieu */}
                <div className="flex items-start gap-1.5 text-muted-foreground text-xs">
                    <MapPin className="size-3.5 mt-0.5 shrink-0" />
                    <span>{event.location} | {event.city}</span>
                </div>

                {/* Date */}
                <div className="flex items-center gap-1.5 text-muted-foreground text-xs">
                    <Calendar className="size-3.5 shrink-0" />
                    <span>{event.date} | {event.time}</span>
                </div>

                {/* Organisateur + Prix */}
                <div className="flex items-center justify-between mt-auto pt-1">
                    <span className="text-xs text-muted-foreground">
                        Par <span className="font-semibold text-foreground">{event.organizer}</span>
                    </span>
                    <div className="flex items-center gap-1 text-[#fe0000] font-bold text-xs">
                        <Ticket className="size-3.5" />
                        <span>{event.price ?? "Gratuit"}</span>
                    </div>
                </div>

                {/* Bouton */}
                <Button
                    className="mt-1 w-full rounded-full bg-[#f5a623] hover:bg-[#e09510] text-white font-bold text-xs uppercase tracking-wide"
                    size="sm"
                    asChild
                >
                    <span>Acheter Ticket</span>
                </Button>
            </CardContent>
        </Card>
        </Link>
    );
}
