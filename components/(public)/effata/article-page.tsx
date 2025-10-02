"use client";

import ActualiteCard from "./article-card";

import Section from "@/components/primitives/Section";

import { ArticlePagination } from "./article-pagination";

import LoadingIndicator from "@/components/common/LoadingIndicator";
import NoData from "@/components/common/no-data";
import { useEffataList } from "@/features/effata/hooks/useEffataList";
import { Button } from "@heroui/react";
import { Input } from "@/components/ui/input";

export const ArticlesPage = () => {
  const { effatas, meta, isLoading, error, filters, onPaginationChange, onSearchChange } = useEffataList();

  if (isLoading) {
    return <LoadingIndicator />;
  }

  if (error) {
    return <div className="text-red-500">Erreur lors du chargement des articles.</div>;
  }

  if (effatas.length === 0) {
    return (
      <NoData message="Aucun article disponible pour le moment." />
    );
  }

  return (
    <Section className="min-h-screen bg-background py-12 px-4">
      <div className="custom-container">
        {/* Titre principal */}
        <h1 className="text-4xl font-bold text-news-title-dark mb-12 tracking-wide">
          L'ECCLESIA EN MARCHE ...
        </h1>
        {effatas.length > 0 && <div className="flex gap-4 mb-8 items-center">
          <Input
            type="search"
            value={filters.search || ''}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Rechercher un mot-clé"
            className="rounded-full focus:outline-none focus-visible:ring-2 focus-within:ring-primary"
          />
          <Button color="primary" className="px-8 py-3 rounded-full">
            Rechercher
          </Button>
        </div>}
        {/* Grille d'actualités */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {effatas.map((actualite) => (
            <ActualiteCard
              key={actualite.id}
              effata={actualite}
              options={{
                withDescription: true,
                withAuthor: true,
                withShare: true,
                withCategory: true,
                withCountry: true,
                withTags: true,
              }}
            />
          ))}
        </div>

        {/* Pagination */}
        {(meta && meta.last_page > 1) && <ArticlePagination
          currentPage={meta.current_page}
          totalPages={meta.last_page}
          onPageChange={(page) => onPaginationChange(page, meta.per_page)}
        />}
      </div>
    </Section>
  );
};
