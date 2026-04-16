import { createLoader, parseAsInteger, parseAsString } from "nuqs/server";

export const cuturamaFiltersClient = {
    filter: {
        page: parseAsInteger.withDefault(1),
        category: parseAsString.withDefault("Tous"),
        search: parseAsString.withDefault(""),
    },
    option: {
        clearOnDefault: true,
        throttleMs: 500,
    },
};

export const loadCuturamaSearchParams = createLoader(cuturamaFiltersClient.filter);
