"use client";
import Section from "@/components/primitives/Section";
import { useActualiteList } from "@/features/actualite/hooks/useActualiteList";
import ActualiteCard from "./actualite-card";
import { NewsPagination } from "./new-pagination";
import NoData from "@/components/common/no-data";
import CategorieButtonFilter from "@/components/common/filters/categorie-button-filter";

export const ActualitesList = () => {

  const { actualites, onPaginationChange, meta, categories, filters, onFilterChange } = useActualiteList();
  const totalPages = meta?.last_page || 1;
  const currentPage = meta?.current_page || 1;

  return (
    <Section className="min-h-screen bg-background custom-container py-12 px-4">
      <div>
        {/* Titre principal */}
        <h1 className="text-4xl font-bold text-news-title-dark mb-12 tracking-wide">
          Les informations les plus récentes du moment...
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
                onPress={() => {
                  if (filters.category_id === category.id) {
                    onFilterChange({ category_id: undefined });
                  } else {
                    onFilterChange({ category_id: category.id });
                  }
                }}
                isSelected={filters.category_id == category.id}
              />
            ))}
          </div>
        </div>

        {actualites.length === 0 && <NoData message="Aucune actualité disponible pour le moment."/>}
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
