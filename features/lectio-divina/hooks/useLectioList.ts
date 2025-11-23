import { useQueryStates } from "nuqs";
import { useMemo } from "react";
import { lectioFiltersClient } from "../filters/lectio.filter";
import { useLectioListQuery } from "../queries/lectio-list.query";
import { ILectioSearchParams } from "../types/lectio.type";

export const useLectioList = () => {

  const [filters, setFilters] = useQueryStates(lectioFiltersClient.filter, lectioFiltersClient.option);

  const defaultSearchParams: ILectioSearchParams = useMemo(() => {
    return {
      page: filters.page,
      size: filters.size,
      reference_text: filters.reference_text,
      lithurgy_time: filters.lithurgy_time,
      contributor: filters.contributor,
      published_at: filters.published_at,
    };
  }, [filters]);

  const { data, isLoading, error, isError, isFetching } = useLectioListQuery(defaultSearchParams);

  const onDayChange = (day: string) => {
    setFilters({
      ...filters,
      published_at: day,
      page: 1, // Reset to first page on filter change
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
    lectios: data?.data,
    meta: data?.meta,
    isError,
    isFetching,
    isLoading,
    error,
    filters,
    onPaginationChange,
  };
};