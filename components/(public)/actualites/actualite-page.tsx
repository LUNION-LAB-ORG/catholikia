"use client";
import { useState } from "react";
import { actualitesFakeData } from "@/app/api/actualites";
import ActualiteCard from "./actualite-card";
import { NewsPagination } from "./new-pagination";
import Section from "@/components/primitives/Section";

export const ActualitesPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;
  const totalPages = Math.ceil(actualitesFakeData.length / itemsPerPage);

  // On calcule seulement les éléments de la page actuelle
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = actualitesFakeData.slice(startIndex, endIndex);

  const handleDetails = (id: number) => {
    console.log("Voir détails pour l'article:", id);
  };

  return (
    <Section className="min-h-screen bg-background custom-container py-12 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Titre principal */}
        <h1 className="text-4xl font-bold text-news-title-dark mb-12 tracking-wide">
          ACTUALITÉS
        </h1>

        {/* Grille d'actualités */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {currentItems.map((actualite) => (
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
          onPageChange={setCurrentPage}
        />
      </div>
    </Section>
  );
};
