"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import Title from "@/components/primitives/Title";
import { LaravelPaginationMeta } from "@/types/api.type";

type TemoignagesHeaderProps = {
  filters: any;
  onFilterChange: (updatedFilters: Partial<any>) => void;
  isLoading: boolean;
  meta?: LaravelPaginationMeta;
};

export default function TemoignagesHeader({
  filters,
  onFilterChange,
  isLoading,
  meta
}: TemoignagesHeaderProps) {

  return (
    <div className="py-5">
      {/* Titre principal */}
      <Title>
        DÉCOUVREZ PLUS DE TÉMOIGNAGES
      </Title>
      <p className="mt-3 text-[#767168] font-semibold text-sm sm:text-base md:text-lg leading-relaxed">
        Une communauté diverse de leaders qui intègrent foi et excellence professionnelle
      </p>

      {/* Recherche + Filtres */}
      <div className="mt-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        {/* Champ de recherche */}
        <div className="w-full md:w-1/2">
          <Input
            type="text"
            value={filters.profession}
            onChange={(e) => onFilterChange({ profession: e.target.value, page: 1 })}
            placeholder="Rechercher par profession..."
            className="w-full rounded-full border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-black"
          />
        </div>

        {/* Filtres */}
        {/* <div className="flex flex-wrap items-center gap-2 sm:gap-3">
          {filters.map((filter:any) => (
            <button
              key={filter}
              onClick={() => onFilterChange({ category: filter })}
              className={`px-3 py-1.5 rounded-full text-xs sm:text-sm font-medium border transition-all duration-200 ${filters.category === filter
                  ? "bg-primary cursor-pointer text-black border-yellow-400"
                  : "bg-white text-black cursor-pointer  border-gray-300 hover:bg-gray-100"
                }`}
            >
              {filter}
            </button>
          ))}
        </div> */}
      </div>

      {/* Nombre de témoignages */}
      <p className="mt-6 text-xs sm:text-sm font-medium text-gray-700 uppercase">
        {meta?.total || 0} témoignage{(meta?.total || 0) > 1 ? 's' : ''} trouvé{(meta?.total || 0) > 1 ? 's' : ''}
      </p>
    </div>
  );
}
