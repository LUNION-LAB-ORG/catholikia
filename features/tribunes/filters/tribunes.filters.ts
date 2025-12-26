import {parseAsInteger} from "nuqs";

export const tribunesFiltersClient = {
	filter: {
		page: parseAsInteger.withDefault(1),
		size: parseAsInteger.withDefault(6),
		skip: parseAsInteger.withDefault(1),
	},
	option: {
		clearOnDefault: true,
		throttleMs: 500,
	}
}