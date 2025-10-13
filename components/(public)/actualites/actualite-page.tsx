"use client";
import Section from "@/components/primitives/Section";
import { useActualiteList } from "@/features/actualite/hooks/useActualiteList";
import ActualiteCard from "./actualite-card";
import { NewsPagination } from "./new-pagination";
import NoData from "@/components/common/no-data";
import CategorieButtonFilter from "@/components/common/filters/categorie-button-filter";

export const ActualitesPage = () => {

  const { actualites, onPaginationChange, meta, categories, filters, onFilterChange } = useActualiteList();
  const totalPages = meta?.last_page || 1;
  const currentPage = meta?.current_page || 1;

  if (actualites.length === 0) {
    return (
      <NoData message="Aucune actualité disponible pour le moment." />
    );
  }

  return (
    <Section className="min-h-screen bg-background custom-container py-12 px-4">
      <div>
        {/* Titre principal */}
        <h1 className="text-4xl font-bold text-news-title-dark mb-12 tracking-wide">
          ACTUALITÉS
        </h1>

        <div className="mb-8">
          <h3 className="text-sm font-bold text-[#595959] mb-4">Catégories</h3>
          <div className="flex flex-wrap items-center gap-2 mb-4">
            {categories.map((category) => (
              <CategorieButtonFilter
                key={category.id}
                category={{
                  id: category.id,
                  nom: category.name
                }}
                onPress={() => onFilterChange({ categorie: category.id })}
                isSelected={filters.categorie == category.id}
              />
            ))}
          </div>
        </div>

        {/* Grille d'actualités */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {actualites.map((actualite) => (
            <ActualiteCard
              key={actualite.id}
              actualite={actualite}
            />
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <NewsPagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={(page) => onPaginationChange(page)}
          />)}
      </div>
    </Section>
  );
};
