import { useQueryStates } from "nuqs";
import { useMemo, useState } from "react";
import { vieDeFoiFiltersClient } from "../filters/vie-de-foi.filter";
import { ITemoignage, ITemoignageParams } from "../types/vie-de-foi.type";
import { useTemoignageListQuery } from "../queries/vie-de-foi-list.query";

export const useVieDeFoiList = () => {

  const [filters, setFilters] = useQueryStates(vieDeFoiFiltersClient.filter, vieDeFoiFiltersClient.option);
  const [selectedTestimonial, setSelectedTestimonial] = useState<ITemoignage | null>(null);

  const defaultSearchParams: ITemoignageParams = useMemo(() => {
    return {
      page: filters.page,
      size: filters.size,
      skip: filters.skip,
      category: filters.category,
      temoin: filters.temoin,
      lieu: filters.lieu,
      inspirant: filters.inspirant,
      profession: filters.profession,
    };
  }, [filters]);

  const { data, isLoading, error } = useTemoignageListQuery(defaultSearchParams);

  const onFilterChange = (updatedFilters: Partial<typeof filters>) => {
    setFilters({
      ...filters,
      ...updatedFilters,
      page: updatedFilters.category || updatedFilters.lieu ? 1 : (updatedFilters.page ?? filters.page),
      size: updatedFilters.size ?? filters.size,
    });
  };

  const handleTestimonialClick = (testimonial: ITemoignage) => {
    setSelectedTestimonial(testimonial);
  }

  return {
    temoignages: data?.data || [],
    meta: data?.meta,
    isLoading,
    error,
    filters,
    onFilterChange,
    handleTestimonialClick,
    actions: {
      selectedTestimonial,
      setSelectedTestimonial,
      setFilters,
    }
  };
};