import { useQueryStates } from "nuqs";
import { useMemo } from "react";
import { cuturamaFiltersClient } from "../filters/cuturama.filter";
import { useCuturamaEventsListQuery } from "../queries/cuturama-list.query";
import type { ICuturamaEventsParams } from "../types/cuturama.type";

export const useCuturamaList = () => {
    const [filters, setFilters] = useQueryStates(
        cuturamaFiltersClient.filter,
        cuturamaFiltersClient.option
    );

    const params: ICuturamaEventsParams = useMemo(
        () => ({
            page: filters.page,
            category: filters.category || undefined,
            search: filters.search || undefined,
        }),
        [filters]
    );

    const { data, isLoading, error } = useCuturamaEventsListQuery(params);

    const onCategoryChange = (category: string) => {
        setFilters({ ...filters, category, page: 1 });
    };

    const onSearchChange = (search: string) => {
        setFilters({ ...filters, search, page: 1 });
    };

    const onPageChange = (page: number) => {
        setFilters({ ...filters, page });
    };

    const totalPages = data
        ? Math.ceil(data.total / data.itemsPerPage)
        : 0;

    return {
        events: data?.data ?? [],
        total: data?.total ?? 0,
        currentPage: filters.page,
        totalPages,
        activeCategory: filters.category || "Tous",
        search: filters.search || "",
        isLoading,
        error,
        onCategoryChange,
        onSearchChange,
        onPageChange,
    };
};
