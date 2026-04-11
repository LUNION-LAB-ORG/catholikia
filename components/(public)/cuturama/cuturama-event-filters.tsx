"use client";

import Image from "next/image";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { CATEGORIES } from "./cuturama.data";
import type { Category } from "./cuturama.types";

interface EventFiltersProps {
    activeCategory: Category;
    search: string;
    onCategoryChange: (category: Category) => void;
    onSearchChange: (value: string) => void;
    onSearchSubmit: () => void;
}

export function EventFilters({
    activeCategory,
    search,
    onCategoryChange,
    onSearchChange,
    onSearchSubmit,
}: EventFiltersProps) {
    return (
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
            {/* Onglets catégories */}
            <div className="flex items-center  p-5  gap-2 flex-wrap">
                {CATEGORIES.map(({ label, image }) => (
                    <Button
                        key={label}
                        variant={activeCategory === label ? "default" : "outline"}
                        size="sm"
                        onClick={() => onCategoryChange(label)}
                        className={cn(
                            "rounded-full gap-2",
                            activeCategory === label
                                ? "bg-[#fe0000] cursor-pointer hover:bg-red-700 border-[#fe0000] text-white"
                                : "hover:border-[#fe0000]  py-2 cursor-pointer hover:text-[#fe0000]"
                        )}
                    >
                        {image && (
                            <div className="relative size-5 rounded-full overflow-hidden shrink-0">
                                <Image
                                    src={image}
                                    alt={label}
                                    fill
                                    className="object-cover"
                                    sizes="20px"
                                />
                            </div>
                        )}
                        {label}
                    </Button>
                ))}
            </div>

            {/* Barre de recherche */}
            <div className="flex items-center gap-2 w-full sm:w-auto">
                <Input
                    type="text"
                    value={search}
                    onChange={(e) => onSearchChange(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && onSearchSubmit()}
                    placeholder="Rechercher un mot-clé"
                    className="rounded-full sm:w-64 focus-visible:ring-[#fe0000]/30 focus-visible:border-[#fe0000]"
                />
                <Button
                    onClick={onSearchSubmit}
                    className="rounded-full bg-[#fe0000] hover:bg-red-700 text-white shrink-0"
                >
                    <Search className="size-4" />
                    Rechercher
                </Button>
            </div>
        </div>
    );
}
