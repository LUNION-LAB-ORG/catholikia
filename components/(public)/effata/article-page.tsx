"use client";

import ActualiteCard from "./article-card";

import Section from "@/components/primitives/Section";

import { ArticlePagination } from "./article-pagination";
import { articlesFakeData } from "@/app/api/article";

import { Input, Select } from "@heroui/react";
import { SelectItem } from "@/components/ui/select";
import { useState } from "react";

export const ArticlesPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(
    "Voyages et événements du Pape"
  );

  const categories = [
    "Le Vatican et le Pape",
    "Actualité des Églises locales",
    "Engagements sociaux et humanitaires",
  ];
  const itemsPerPage = 9;
  const totalPages = Math.ceil(articlesFakeData.length / itemsPerPage);

  // On calcule seulement les éléments de la page actuelle
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = articlesFakeData.slice(startIndex, endIndex);

  const handleDetails = (id: number) => {
    console.log("Voir détails pour l'article:", id);
  };

  return (
    <Section className="min-h-screen bg-background custom-container py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Titre principal */}
        <h1 className="text-4xl font-bold text-news-title-dark mb-12 tracking-wide">
          L'ECCLESIA EN MARCHE ...
        </h1>
        <div className="">
          <div className="max-w-4xl mx-auto  py-8">
            {/* Search Bar */}
            <div className="flex gap-4 mb-8">
              <Input
                type="search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Rechercher un mot-clé"
                className="w-full pl-4 pr-10   border-gray-50 rounded-3xl focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
              />

              <button className="bg-yellow-400 text-black px-8 py-3 rounded-full font-medium hover:bg-yellow-500 transition-colors">
                Rechercher
              </button>
            </div>

            {/* Categories */}

            {/* Dropdown */}
            {/* <div className="mb-8">
              <Select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-80 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
              >
                <SelectItem value="Voyages et événements du Pape">Voyages et événements du Pape</SelectItem>
                <SelectItem value="Actualité des Églises locales">
                  Actualité des Églises locales
                </SelectItem>
                <SelectItem value="Engagements sociaux et humanitaires">
                  Engagements sociaux et humanitaires
                </SelectItem>
              </Select>
            </div> */}
          </div>
        </div>
        {/* Grille d'actualités */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {currentItems.map((actualite) => (
            <ActualiteCard
              key={actualite.id}
              actualite={actualite}
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
        <ArticlePagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      </div>
    </Section>
  );
};
