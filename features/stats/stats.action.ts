import { handleServerActionError } from "@/utils/handleServerActionError";
import { statsAPI } from "./stats.api";
import { StatsDto } from "@/features/stats/stats.schema";

export const enregistrerStatsAction = async (payload: StatsDto) => {
	try {
		const data = await statsAPI.enregistrerStats(payload);
		return {
			success: true,
			data: data.data,
			message: "Catégories obtenues avec succès",
		};
	} catch (error) {
		return handleServerActionError(error, "Erreur lors de la récupération des catégories");
	}
};
