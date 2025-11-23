"use client";

import Section from "@/components/primitives/Section";
import TemoignagesHeader from "./temoignages-header";
import { TestimonialCard } from "./testimonial-card";
import { TestimonialModal } from "./testimonial-modal";
import { DirectoryPagination } from "@/components/common/directory-pagination";
import { useVieDeFoiList } from "@/features/vie-de-foi/hooks/useVieDeFoiList";
import LoadingIndicator from "@/components/common/LoadingIndicator";

export const TestimonialsSection = () => {
  const {
    temoignages: testimonials,
    meta,
    isLoading,
    error,
    filters,
    onFilterChange,
    handleTestimonialClick,
    actions
  } = useVieDeFoiList();



  return (
    <Section className="custom-container">
      {!isLoading ? (
        <>
          <TemoignagesHeader
            filters={filters}
            onFilterChange={onFilterChange}
            isLoading={isLoading}
            meta={meta}
          />

          {/* Liste des témoignages */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {testimonials.map((testimonial) => (
              <TestimonialCard
                key={testimonial.id}
                testimonial={testimonial}
                onClick={() => handleTestimonialClick(testimonial)}
              />
            ))}
          </div>

          {/* Pagination avec numéros */}

          <div className="flex justify-center items-center gap-2 mt-6 flex-wrap">
            <DirectoryPagination
              currentPage={meta?.current_page || 1}
              totalPages={meta?.last_page || 1}
              onPageChange={(page) => onFilterChange({ page })}
            />
          </div>

          {/* Modal */}
          <TestimonialModal
            testimonial={actions.selectedTestimonial}
            onClose={() => actions.setSelectedTestimonial(null)}
          />
        </>
      ) : <LoadingIndicator />}
    </Section>
  );
};
