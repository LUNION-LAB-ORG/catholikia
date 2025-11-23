import { useQueryStates } from "nuqs";
import { useActualitesListQuery } from "../queries/actualite-list.query";
import { IActualiteParams } from "../types/actualite.type";
import { actualiteFiltersClient } from "../filters/actualite.filter";
import { useMemo } from "react";
import { useActualiteCategoriesQuery } from "../queries/actualite-categorie-list";

export const useActualiteList = () => {

  const [filters, setFilters] = useQueryStates(actualiteFiltersClient.filter, actualiteFiltersClient.option);

  const defaultSearchParams: IActualiteParams = useMemo(() => {
    return {
      page: filters.page,
      limit: filters.limit,
      category_id: filters.category_id,
    };
  }, [filters]);

  const { data, isLoading, error } = useActualitesListQuery(defaultSearchParams);

  const { data: categories, isLoading: isLoadingCategories } = useActualiteCategoriesQuery();

  const onFilterChange = (newFilters: Partial<IActualiteParams>) => {
    setFilters({
      ...filters,
      ...newFilters,
      page: 1, // Réinitialiser à la première page lors du changement de filtre
    });
  };

  const onPaginationChange = (page: number) => {
    setFilters({
      ...filters,
      page,
      limit: filters.limit,
    });
  };


  return {
    actualites: data?.data || [],
    categories: categories || [],
    meta: data?.meta,
    isLoading,
    isLoadingCategories,
    error,
    filters,
    onPaginationChange,
    onFilterChange,
  };
};