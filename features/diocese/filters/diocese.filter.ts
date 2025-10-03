import { parseAsInteger, parseAsString } from "nuqs";

export const dioceseFiltersClient = {
    filter: {
        nom: parseAsString.withDefault(""),
        region: parseAsString.withDefault(""),
        ville: parseAsString.withDefault(""),
        page: parseAsInteger.withDefault(1),
        size: parseAsInteger.withDefault(6),
    },
    option: {
        clearOnDefault: true,
        throttleMs: 500,
    }
}