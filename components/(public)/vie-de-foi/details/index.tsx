"use client";
import {useStats} from "@/features/stats/hooks/use-stats";
import {StatsType} from "@/features/stats/stats.type";
import {ITemoignage} from "@/features/vie-de-foi/types/vie-de-foi.type";

function VieDeFoiDetails({temoignage}: { temoignage?: ITemoignage | null }) {
	useStats({
		id: temoignage?.id,
		type: StatsType.TEMOIGNAGE,
	})
	return null;
}

export default VieDeFoiDetails;