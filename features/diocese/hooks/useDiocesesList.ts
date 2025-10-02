import { useQueryStates } from "nuqs";
import { useMemo } from "react";
import { dioceseFiltersClient } from "../filters/diocese.filter";
import { IDioceseParams } from "../types/diocese.type";
import { useDioceseListQuery } from "../queries/diocese-list.query";

export const useDioceseList = () => {

  const [filters, setFilters] = useQueryStates(dioceseFiltersClient.filter, dioceseFiltersClient.option);

  const defaultSearchParams: IDioceseParams = useMemo(() => {
    return {
      page: filters.page,
      size: filters.size,
      titre: filters.titre,
      region: filters.region,
    };
  }, [filters]);

  const { data, isLoading, error, isError, isFetching } = useDioceseListQuery(defaultSearchParams);

  const onSearchChange = (search: string) => {
    setFilters({
      ...filters,
      titre: search,
      page: 1, // Reset to first page on search change
    });
  }

  const onPaginationChange = (page: number) => {
    setFilters({
      ...filters,
      page,
      size: filters.size,
    });
  };

  return {
    dioceses: data?.data || [],
    meta: data?.meta,
    isLoading,
    error,
    filters,
    onPaginationChange,
    onSearchChange,
  };
};