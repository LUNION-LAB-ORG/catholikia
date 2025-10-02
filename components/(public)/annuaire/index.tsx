"use client";
import { mapMarkers } from "@/app/api/contact";
import { SearchForm } from "@/components/ui/search-form";
// import { ContactCard } from "./contact-card";
import { DirectoryPagination } from "./directory-pagination";
import MapView from "./map-view";
import { useDioceseList } from "@/features/diocese/hooks/useDiocesesList";
import Section from "@/components/primitives/Section";

const ITEMS_PER_PAGE = 6;

const AnnuaireDioceses = () => {
  const { dioceses, meta, isLoading, error, filters, onPaginationChange, onSearchChange } = useDioceseList();

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
        <SearchForm onSearch={() => console.log("Search triggered")} />

        {/* Main Content */}
        <Section className="grid grid-cols-1 lg:grid-cols-3 gap-8 custom-container">
          {/* Map Column */}
          <div className="lg:col-span-1">
            <MapView markers={mapMarkers} />
          </div>

          {/* Contacts Grid */}
          <div className="lg:col-span-2">
            {dioceses.length > 0 ? (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  {/* {dioceses.map((diocese) => (
                    <ContactCard key={diocese.id} contact={diocese} />
                  ))} */}
                </div>

                {/* Pagination */}
                {meta && meta.last_page > 1 && (
                  <DirectoryPagination
                    currentPage={meta.current_page}
                    totalPages={meta.last_page}
                    onPageChange={onPaginationChange}
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
        </Section>
      </div>
    </div>
  );
};

export default AnnuaireDioceses;
