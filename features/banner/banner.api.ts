import { api } from "@/lib/api";
import { PaginatedResponse } from "@/types";
import {IBanner} from "@/features/banner/banner.type";

export interface IBannerAPI {
	obtenirToutesBannieres(): Promise<PaginatedResponse<IBanner>>;
}

export const bannerAPI: IBannerAPI = {
	obtenirToutesBannieres(): Promise<PaginatedResponse<IBanner>> {
		return api.request<PaginatedResponse<IBanner>>({
			endpoint: `/banners`,
			method: "GET",
		});
	},
};
