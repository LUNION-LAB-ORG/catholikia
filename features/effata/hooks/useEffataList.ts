import { useQueryStates } from "nuqs";
import { useEffataListQuery } from "../queries/effata-list.query";
import { IEffataParams } from "../types/effata.type";
import { effataFiltersClient } from "../filters/effata.filter";
import { useMemo } from "react";

export const useEffataList = () => {

  const [filters, setFilters] = useQueryStates(effataFiltersClient.filter, effataFiltersClient.option);

  const defaultSearchParams: IEffataParams = useMemo(() => {
    return {
      page: filters.page,
      size: filters.size,
      titre: filters.titre,
    };
  }, [filters]);

  const { data, isLoading, error, isError, isFetching } = useEffataListQuery(defaultSearchParams);

  const onSearchChange = (search: string) => {
    setFilters({
      ...filters,
      titre: search,
      page: 1, // Reset to first page on search change
    });
  }

  const onPaginationChange = (page: number, limit: number) => {
    setFilters({
      ...filters,
      page,
      size: limit,
    });
  };

  return {
    effatas: data?.data || [],
    meta: data?.meta,
    isLoading,
    error,
    filters,
    onPaginationChange,
    onSearchChange,
  };
};