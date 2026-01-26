"use client";
import React, {useEffect} from 'react';
import {useBannerStore} from "@/features/banner/banner.store";
import {useBannerListQuery} from "@/features/banner/queries/banner-list";

function DataProvider() {
	const {
		data: bannersList,
		isLoading: bannersLoading,
		isError: bannersIsError,
		error: bannersError,
		isFetching: bannersIsFetching
	} = useBannerListQuery();

	const {setAllBanners, setQueryState: setBannerQueryState} = useBannerStore();

	useEffect(() => {
		setBannerQueryState({
			isLoading: bannersLoading,
			isError: bannersIsError,
			error: bannersError,
			isFetching: bannersIsFetching
		});
	}, [bannersLoading, bannersIsError, bannersError, bannersIsFetching, setBannerQueryState]);

	const banners = React.useMemo(() => bannersList?.data || [], [bannersList]);

	useEffect(() => {
		if (banners.length) setAllBanners(banners);
	}, [banners, setAllBanners]);

	return null;
}

export default DataProvider;