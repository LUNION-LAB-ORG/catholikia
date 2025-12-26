import {useQueryStates} from "nuqs";
import {tribunesFiltersClient} from "@/features/tribunes/filters/tribunes.filters";
import {useMemo} from "react";
import {ITribunesParams} from "@/features/tribunes/types/tribunes.type";
import {useTribuneListQuery} from "@/features/tribunes/queries/tribune-list.query";

export function useTribunesList() {
	const [filters, setFilters] = useQueryStates(tribunesFiltersClient.filter, tribunesFiltersClient.option);

	const defaultSearchParams: ITribunesParams = useMemo(() => {
		return {
			page: filters.page,
			size: filters.size,
			skip: filters.skip,
		};
	}, [filters]);

	const {data, isLoading, isError} = useTribuneListQuery(defaultSearchParams)

	const onPaginationChange = (page: number) => {
		setFilters({
			...filters,
			page,
			size: filters.size,
			skip: filters.skip,
		});
	};

	return {
		tribunes: data?.data || [],
		meta: data?.meta,
		isLoading,
		isError,
		filters,
		onPaginationChange,
	}
}