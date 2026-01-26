import {z} from "zod";
import {StatsType} from "@/features/stats/stats.type";


export const StatsSchema = z.object({
	type: z.enum(StatsType),
	id: z.coerce.string(),
	event: z.enum(["view", "read"]),
});

export type Stats = z.infer<typeof StatsSchema>;
export type StatsDto = z.infer<typeof StatsSchema>;