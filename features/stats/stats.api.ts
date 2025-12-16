import {api} from "@/lib/api";
import {StatsDto} from "@/features/stats/stats.schema";

export interface IstatsAPI {
	enregistrerStats(payload: StatsDto): Promise<{ data: any }>;
}

export const statsAPI: IstatsAPI = {
	enregistrerStats(payload: StatsDto) {
		const type = payload.type;
		const id = payload.id;
		const category = payload.event;
		return api.request({
			endpoint: `/metrics/${type}/${id}/${category}`,
			method: "POST",
			data: {
				type: payload.type,
				id: payload.id,
				event: payload.event,
			},
		});
	},
};