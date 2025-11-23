import {useQueryStates} from "nuqs";
import {useMemo} from "react";
import {eventFiltersClient} from "../filters/event.filter";
import {useEventListQuery} from "../queries/event-list.query";
import {IEventParams} from "../types/event.type";

export const useEventList = () => {
	const [filters, setFilters] = useQueryStates(
		eventFiltersClient.filter,
		eventFiltersClient.option
	);

	const currentSearchParams: IEventParams = useMemo(() => {
		return {
			page: filters.page,
			size: filters.size,
			titre: filters.titre,
		};
	}, [filters]);

	const {data, isLoading, error, isError, isFetching, refetch} =
		useEventListQuery(currentSearchParams);

	const onSearchChange = (search: string) => {
		setFilters({
			...filters,
			titre: search,
			page: 1, // Reset to first page on search change
		});
	};

	const onPaginationChange = (page: number, limit?: number) => {
		setFilters({
			...filters,
			page,
			size: limit || filters.size,
		});
	};

	return {
		events: data?.data || [],
		meta: data?.meta,
		isLoading,
		error,
		isError,
		isFetching,
		filters,
		onPaginationChange,
		onSearchChange,
		refetch
	};
};
