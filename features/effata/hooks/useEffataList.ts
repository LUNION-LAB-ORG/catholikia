import { useQueryStates } from "nuqs";
import { useEffataListQuery } from "../queries/effata-list.query";
import { IEffataParams } from "../types/effata.type";
import { effataFiltersClient } from "../filters/effata.filter";
import { useMemo } from "react";
import { useEffataCategoriesQuery } from "../queries/effata-categories-list";
import { se } from "date-fns/locale";

export const useEffataList = () => {

  const [filters, setFilters] = useQueryStates(effataFiltersClient.filter, effataFiltersClient.option);

  const defaultSearchParams: IEffataParams = useMemo(() => {
    return {
      page: filters.page,
      size: filters.size,
      titre: filters.titre,
      categorie_id: filters.categorie_id
    };
  }, [filters]);

  const { data, isLoading, error } = useEffataListQuery(defaultSearchParams);
  const { data: categories, isLoading: isLoadingCategorie, error: errorCategorie } = useEffataCategoriesQuery();

  const onFilterChange = (key: string, value: string | number) => {
    setFilters({
      ...filters,
      [key]: value,
      page: 1, // Reset to first page on filter change
    });
  }

  const selectedCategory = useMemo(() => {
    // First try to find direct match (could be parent or child)
    const directMatch = categories?.find(cat => cat.id === filters.categorie_id);
    console.log("direct match", directMatch, categories);

    // If not found or if categories not loaded yet, return undefined
    if (!categories) return undefined


    // Check if the selected category is a sub-category (child)
    const parentCategory = categories.find(cat =>
      cat.enfants?.some(subCat => subCat.id === filters.categorie_id)
    );

    console.log("parentCategory", parentCategory);

    // If it's a sub-category, return the parent category, otherwise return direct match
    return parentCategory || directMatch;
  }, [categories, filters.categorie_id]);

  const subCategories = selectedCategory?.enfants || [];

  const onSubCategoryChange = (subCategoryId: string) => {
    setFilters({
      ...filters,
      categorie_id: subCategoryId,
      page: 1,
    });
  };

  const onPaginationChange = (page: number, limit: number) => {
    setFilters({
      ...filters,
      page,
      size: limit,
    });
  };

  return {
    effatas: data?.data || [],
    categories: categories || [],
    meta: data?.meta,
    isLoading,
    error,
    filters,
    onPaginationChange,
    onFilterChange,
    onSubCategoryChange,
    subCategories,
    selectedCategory,
  };
};