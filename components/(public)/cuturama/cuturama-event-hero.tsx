"use client";

import Image from "next/image";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/navigation";
import type { CuturamaEvent } from "./cuturama.types";

interface EventHeroProps {
    event: CuturamaEvent;
}

export function EventHero({ event }: EventHeroProps) {
    return (
        <div className="w-full mt-10">
            {/* ── Barre titre ── */}
            <div className="flex items-center justify-between px-4 sm:px-6 lg:px-8 py-3 bg-white border-b">
                <Button
                    variant="ghost"
                    size="sm"
                    className="gap-1.5 text-muted-foreground hover:text-foreground"
                    asChild
                >
                    <Link href="/cuturama">
                        <ArrowLeft className="size-4" />
                        Retour
                    </Link>
                </Button>

                <h1 className="font-extrabold text-lg sm:text-2xl text-foreground text-right leading-tight">
                    {event.title}
                </h1>
            </div>

            {/* ── Image hero ── */}
            <div className="relative w-full h-56 sm:h-72 md:min-h-screen overflow-hidden">
                <Image
                    src={event.image}
                    alt={event.title}
                    fill
                    priority
                    className="object-cover"
                    sizes="100vw"
                />

                {/* Dégradé bas */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                {/* Bandeau bas : spot publicitaire */}
                <div className="absolute bottom-0 left-0 right-0 flex items-center justify-between px-4 py-3">
                    {event.adSpots.length > 0 ? (() => {
                        const spot = event.adSpots[0];
                        const inner = (
                            <>
                                <span className="text-white font-extrabold text-sm sm:text-lg uppercase tracking-widest">
                                    Spot Publicitaire
                                </span>

                                <div className="relative w-20 sm:w-28 h-12 sm:h-16 rounded overflow-hidden border-2 border-white/60 shrink-0">
                                    <Image
                                        src={spot.image}
                                        alt={spot.title}
                                        fill
                                        className="object-cover opacity-80"
                                        sizes="112px"
                                    />
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="w-6 h-6 rounded-full bg-white/80 flex items-center justify-center">
                                            <svg
                                                className="w-3 h-3 text-[#fe0000] ml-0.5"
                                                fill="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path d="M8 5v14l11-7z" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </>
                        );

                        
                        
                        return spot.linkUrl ? (
                            <Link
                                href={spot.linkUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-between w-full cursor-pointer"
                            >
                                {inner}
                            </Link>
                        ) : (
                            <div className="flex items-center justify-between w-full">
                                {inner}
                            </div>
                        );
                    })() : null}
                </div>
            </div>
        </div>
    );
}
