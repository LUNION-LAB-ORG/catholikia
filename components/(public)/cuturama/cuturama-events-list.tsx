"use client";

import { useState } from "react";
import { EventCard } from "./cuturama-event-card";
import { EventFilters } from "./cuturama-event-filters";
import { EventPagination } from "./cuturama-event-pagination";
import { useCuturamaList } from "@/features/cuturama/hooks/useCuturamaList";
import type { CuturamaEvent } from "./cuturama.types";

export default function CuturamaEventsList() {
    const [searchInput, setSearchInput] = useState("");

    const {
        events,
        total,
        currentPage,
        totalPages,
        activeCategory,
        categories,
        isLoading,
        onCategoryChange,
        onSearchChange,
        onPageChange,
    } = useCuturamaList();

    const handleSearchSubmit = () => {
        onSearchChange(searchInput);
    };

    return (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            {/* Filtres + Recherche */}
            <EventFilters
                activeCategory={activeCategory}
                categories={categories}
                search={searchInput}
                onCategoryChange={onCategoryChange}
                onSearchChange={setSearchInput}
                onSearchSubmit={handleSearchSubmit}
            />

            {/* Compteur */}
            <h2 className="text-[#fe0000] font-extrabold text-2xl sm:text-3xl uppercase tracking-wide mb-6">
                {total} événement{total > 1 ? "s" : ""} trouvé{total > 1 ? "s" : ""}
            </h2>

            {/* Grille d'événements */}
            {isLoading ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    {Array.from({ length: 6 }).map((_, i) => (
                        <div
                            key={i}
                            className="h-72 rounded-xl bg-muted animate-pulse"
                        />
                    ))}
                </div>
            ) : events.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    {events.map((event: CuturamaEvent) => (
                        <EventCard key={event.id} event={event} />
                    ))}
                </div>
            ) : (
                <p className="text-center text-muted-foreground py-20 text-lg">
                    Aucun événement trouvé.
                </p>
            )}

            {/* Pagination */}
            <EventPagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={onPageChange}
            />
        </section>
    );
}
