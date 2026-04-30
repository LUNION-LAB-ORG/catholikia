"use client";

import { useState } from "react";
import { Minus, Plus } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ContactOrganizerModal } from "./cuturama-contact-organizer-modal";
import type { CartItem, CuturamaEvent, TicketType } from "./cuturama.types";

interface TicketQuantities {
    [ticketId: string]: number;
}

interface TicketSelectorProps {
    event: CuturamaEvent;
    onProceed?: (items: CartItem[], firstTicket?: TicketType) => void;
}

export function TicketSelector({ event, onProceed }: TicketSelectorProps) {
    const tickets = event.ticketTypes;

    const [contactOpen, setContactOpen] = useState(false);
    const [quantities, setQuantities] = useState<TicketQuantities>(
        Object.fromEntries(tickets.map((t) => [t.id, 0]))
    );

    const total = tickets.reduce(
        (sum, t) => sum + (quantities[t.id] ?? 0) * t.price,
        0
    );

    const increment = (id: string) =>
        setQuantities((prev) => ({ ...prev, [id]: (prev[id] ?? 0) + 1 }));

    const decrement = (id: string) =>
        setQuantities((prev) => ({ ...prev, [id]: Math.max(0, (prev[id] ?? 0) - 1) }));

    return (
        <div className="flex flex-col gap-4">
            {/* ── Sélection des tickets ── */}
            <Card>
                <CardContent className="p-4 flex flex-col gap-4">
                    <h3 className="font-semibold text-sm">Choisissez vos tickets</h3>

                    <div className="flex flex-col gap-3">
                        {tickets.map((ticket) => (
                            <div key={ticket.id} className="flex flex-col gap-1">
                                <div className="flex items-center justify-between">
                                    <div className="flex flex-col">
                                        <span className="text-xs text-muted-foreground">{ticket.name}</span>
                                        {ticket.remaining === 0 ? (
                                            <span className="text-[10px] text-red-500 font-medium">Épuisé</span>
                                        ) : (
                                            <span className="text-[10px] text-muted-foreground">{ticket.remaining} place{ticket.remaining > 1 ? "s" : ""} restante{ticket.remaining > 1 ? "s" : ""}</span>
                                        )}
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Button
                                            variant="outline"
                                            size="icon"
                                            className="size-6 rounded-full border-[#fe0000] text-[#fe0000] hover:bg-[#fe0000] hover:text-white"
                                            onClick={() => decrement(ticket.id)}
                                            disabled={quantities[ticket.id] === 0}
                                        >
                                            <Minus className="size-3" />
                                        </Button>
                                        <span className="w-5 text-center text-sm font-medium">
                                            {quantities[ticket.id] ?? 0}
                                        </span>
                                        <Button
                                            variant="outline"
                                            size="icon"
                                            className="size-6 rounded-full border-[#fe0000] text-[#fe0000] hover:bg-[#fe0000] hover:text-white"
                                            onClick={() => increment(ticket.id)}
                                            disabled={ticket.remaining === 0 || (quantities[ticket.id] ?? 0) >= ticket.remaining}
                                        >
                                            <Plus className="size-3" />
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <Separator />

                    {/* Total */}
                    <div className="flex items-center justify-between text-sm font-semibold">
                        <span>Total</span>
                        <span>{total.toLocaleString("fr-CI")} FCFA</span>
                    </div>

                    <Button
                        className="w-full rounded-full bg-[#fe0000] hover:bg-red-700 text-white font-bold"
                        disabled={total === 0}
                        onClick={() => {
                            const items: CartItem[] = tickets
                                .filter((t) => (quantities[t.id] ?? 0) > 0)
                                .map((t) => ({ ticket: t, quantity: quantities[t.id] }));
                            onProceed?.(items, items[0]?.ticket);
                        }}
                    >
                        Acheter
                    </Button>
                </CardContent>
            </Card>

            {/* ── Organisateur ── */}
            <Card>
                <CardContent className="p-4 flex flex-col gap-3">
                    <p className="text-xs text-muted-foreground text-center">
                        Publié par{" "}
                        <span className="font-bold text-foreground">{event.organizer}</span>
                    </p>

                    {event.organizerDescription && (
                        <p className="text-xs text-muted-foreground leading-relaxed text-center">
                            {event.organizerDescription}
                        </p>
                    )}

                    <Separator />

                    <Button
                        className="w-full rounded-full bg-[#f5a623] hover:bg-[#e09510] text-white font-bold text-xs"
                    >
                        S&apos;ABONNER
                    </Button>
                    <Button
                        variant="outline"
                        className="w-full rounded-full border-[#fe0000] text-[#fe0000] hover:bg-[#fe0000] hover:text-white font-bold text-xs"
                        onClick={() => setContactOpen(true)}
                    >
                        CONTACTER L&apos;ORGANISATEUR
                    </Button>
                </CardContent>
            </Card>

            <ContactOrganizerModal
                open={contactOpen}
                onOpenChange={setContactOpen}
                organizerName={event.organizer}
            />
        </div>
    );
}
