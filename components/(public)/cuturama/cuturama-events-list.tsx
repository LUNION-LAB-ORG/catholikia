"use client";

import { useState } from "react";
import { EventCard } from "./cuturama-event-card";
import { EventFilters } from "./cuturama-event-filters";
import { EventPagination } from "./cuturama-event-pagination";
import { FAKE_EVENTS, ITEMS_PER_PAGE } from "./cuturama.data";
import type { Category } from "./cuturama.types";

export default function CuturamaEventsList() {
    const [activeCategory, setActiveCategory] = useState<Category>("Tous");
    const [search, setSearch] = useState("");
    const [query, setQuery] = useState("");
    const [currentPage, setCurrentPage] = useState(1);

    const filtered = FAKE_EVENTS.filter((e) => {
        const matchCategory = activeCategory === "Tous" || e.category === activeCategory;
        const matchSearch =
            query === "" ||
            e.title.toLowerCase().includes(query.toLowerCase()) ||
            e.organizer.toLowerCase().includes(query.toLowerCase());
        return matchCategory && matchSearch;
    });

    const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE);
    const paginated = filtered.slice(
        (currentPage - 1) * ITEMS_PER_PAGE,
        currentPage * ITEMS_PER_PAGE
    );

    const handleSearch = () => {
        setQuery(search);
        setCurrentPage(1);
    };

    const handleCategoryChange = (cat: Category) => {
        setActiveCategory(cat);
        setCurrentPage(1);
    };

    return (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            {/* Filtres + Recherche */}
            <EventFilters
                activeCategory={activeCategory}
                search={search}
                onCategoryChange={handleCategoryChange}
                onSearchChange={setSearch}
                onSearchSubmit={handleSearch}
            />

            {/* Compteur */}
            <h2 className="text-[#fe0000] font-extrabold text-2xl sm:text-3xl uppercase tracking-wide mb-6">
                {filtered.length} événement{filtered.length > 1 ? "s" : ""} trouvé{filtered.length > 1 ? "s" : ""}
            </h2>

            {/* Grille d'événements */}
            {paginated.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    {paginated.map((event) => (
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
                onPageChange={setCurrentPage}
            />
        </section>
    );
}
