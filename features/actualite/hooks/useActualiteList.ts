import { useQueryStates } from "nuqs";
import { useActualitesListQuery } from "../queries/actualite-list.query";
import { IActualiteParams } from "../types/actualite.type";
import { actualiteFiltersClient } from "../filters/actualite.filter";
import { useMemo } from "react";

export const useActualiteList = () => {

  const [filters, setFilters] = useQueryStates(actualiteFiltersClient.filter, actualiteFiltersClient.option);

  const defaultSearchParams: IActualiteParams = useMemo(() => {
    return {
      page: filters.page,
      limit: filters.limit,
    };
  }, [filters]);

  const { data, isLoading, error, isError, isFetching } = useActualitesListQuery(defaultSearchParams);

  const onPaginationChange = (page: number, limit: number) => {
    setFilters({
      ...filters,
      page,
      limit,
    });
  };

  return {
    actualites: data?.data || [],
    meta: data?.meta,
    isLoading,
    error,
    filters,
    onPaginationChange,
  };
};