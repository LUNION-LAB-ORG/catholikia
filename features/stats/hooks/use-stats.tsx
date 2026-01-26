import {StatsDto} from "@/features/stats/stats.schema";
import {useEnregistrerStatsMutation} from "@/features/stats/queries/stats.mutation";
import React from "react";

type UseStatsProps = {
	type: StatsDto["type"];
	id?: StatsDto["id"];
};

export function useStats(props: UseStatsProps) {
	const {
		mutate: enregistrerStats,
	} = useEnregistrerStatsMutation();

	React.useEffect(() => {
		if (props.id) {
			enregistrerStats({
				type: props.type,
				id: props.id,
				event: "view",
			});
		}
	}, [props.id]);

	React.useEffect(() => {
		if (!props.id) return;

		const storageKey = `stats-read-${props.type}-${props.id}`;

		if (localStorage.getItem(storageKey)) return;

		const handleScroll = () => {
			const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
			const scrolled = window.scrollY;
			const scrollPercentage = (scrolled / scrollHeight) * 100;

			if (scrollPercentage >= 30 && !localStorage.getItem(storageKey) && props.id) {
				localStorage.setItem(storageKey, "true");
				enregistrerStats({
					type: props.type,
					id: props.id,
					event: "read",
				});
				window.removeEventListener("scroll", handleScroll);
			}
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, [props.id, props.type]);

}