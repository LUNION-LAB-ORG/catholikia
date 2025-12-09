import {useQueryStates} from "nuqs";
import {useMemo} from "react";
import {dioceseFiltersClient} from "../filters/diocese.filter";
import {IDioceseParams} from "../types/diocese.type";
import {useDioceseListQuery} from "../queries/diocese-list.query";

export const useDioceseList = () => {

  const [filters, setFilters] = useQueryStates(dioceseFiltersClient.filter, dioceseFiltersClient.option);

  const defaultSearchParams: IDioceseParams = useMemo(() => {
    return {
      search: filters.search,
      page: filters.page,
      size: filters.size,
    };
  }, [filters]);

  const { data, isLoading, error } = useDioceseListQuery(defaultSearchParams);

  const onFilterChange = (updatedFilters: Partial<typeof filters>) => {
    setFilters({
      ...filters,
      ...updatedFilters,
      page: updatedFilters.page ?? filters.page,
      size: updatedFilters.size ?? filters.size,
    });
  };

  const handleSearch = (query:string) => {
    onFilterChange({
      search: query,
      page: 1,
    });
  }

  return {
    dioceses: data?.data || [],
    meta: data?.meta,
    isLoading,
    error,
    filters,
    onFilterChange,
    handleSearch
  };
};