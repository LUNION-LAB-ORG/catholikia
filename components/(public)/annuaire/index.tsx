"use client";
import { contacts, mapMarkers } from "@/app/api/contact";
import { SearchFilters, SearchForm } from "@/styles/search-form";
import { useMemo, useState } from "react";
import { ContactCard } from "./contact-card";
import { DirectoryPagination } from "./directory-pagination";
import MapView from "./map-view";

const ITEMS_PER_PAGE = 6;

const Index = () => {
  const [searchFilters, setSearchFilters] = useState<SearchFilters>({
    department: "",
    name: "",
    phone: "",
    region: "",
  });
  const [currentPage, setCurrentPage] = useState(1);

  const filteredContacts = useMemo(() => {
    return contacts.filter((contact) => {
      const matchesDepartment =
        !searchFilters.department ||
        contact.location
          .toLowerCase()
          .includes(searchFilters.department.toLowerCase()) ||
        contact.diocese
          .toLowerCase()
          .includes(searchFilters.department.toLowerCase());

      const matchesName =
        !searchFilters.name ||
        contact.name.toLowerCase().includes(searchFilters.name.toLowerCase());

      const matchesPhone =
        !searchFilters.phone || contact.phone.includes(searchFilters.phone);

      const matchesRegion =
        !searchFilters.region ||
        searchFilters.region === "all" ||
        contact.region.toLowerCase() === searchFilters.region.toLowerCase();

      return matchesDepartment && matchesName && matchesPhone && matchesRegion;
    });
  }, [searchFilters]);

  const totalPages = Math.ceil(filteredContacts.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedContacts = filteredContacts.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  const handleSearch = (filters: SearchFilters) => {
    setSearchFilters(filters);
    setCurrentPage(1);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-foreground mb-4 max-w-4xl mx-auto leading-relaxed">
            Dans cet annuaire, retrouvez les coordonnées des responsables de
            catéchèse et catéchuménat dans les diocèses ivoiriens.
          </h1>
        </div>

        {/* Search Form */}
        <div className="mb-8">
          <SearchForm onSearch={handleSearch} />
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Map Column */}
          <div className="lg:col-span-1">
            <MapView markers={mapMarkers} />
          </div>

          {/* Contacts Grid */}
          <div className="lg:col-span-2">
            {paginatedContacts.length > 0 ? (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  {paginatedContacts.map((contact) => (
                    <ContactCard key={contact.id} contact={contact} />
                  ))}
                </div>

                {/* Pagination */}
                {totalPages > 1 && (
                  <DirectoryPagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={handlePageChange}
                  />
                )}
              </>
            ) : (
              <div className="text-center py-12">
                <p className="text-muted-foreground text-lg">
                  Aucun résultat trouvé pour votre recherche.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
