"use client";
import Section from "@/components/primitives/Section";
import { useActualiteList } from "@/features/actualite/hooks/useActualiteList";
import ActualiteCard from "./actualite-card";
import { NewsPagination } from "./new-pagination";
import NoData from "@/components/common/no-data";

export const ActualitesPage = () => {

  const { actualites, onPaginationChange, meta } = useActualiteList();
  const totalPages = meta?.totalPages || 1;
  const currentPage = meta?.page || 1;

  if (actualites.length === 0) {
    return (
      <NoData message="Aucune actualité disponible pour le moment." />
    );
  }

  return (
    <Section className="min-h-screen bg-background custom-container py-12 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Titre principal */}
        <h1 className="text-4xl font-bold text-news-title-dark mb-12 tracking-wide">
          ACTUALITÉS
        </h1>

        {/* Grille d'actualités */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {actualites.map((actualite) => (
            <ActualiteCard
              key={actualite.id}
              actualite={actualite}
              options={{ withDescription: true, withAuthor: true }}
            />
          ))}
        </div>

        {/* Pagination */}
        <NewsPagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={(page) => onPaginationChange(page, 9)}
        />
      </div>
    </Section>
  );
};
