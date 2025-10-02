import { parseAsInteger, parseAsString } from "nuqs";

export const effataFiltersClient = {
    filter: {
        search: parseAsString.withDefault(""),
        page: parseAsInteger.withDefault(1),
        limit: parseAsInteger.withDefault(9),
    },
    option: {
        clearOnDefault: true,
        throttleMs: 500,
    }
}