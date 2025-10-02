import { parseAsInteger, parseAsString } from "nuqs";

export const dioceseFiltersClient = {
    filter: {
        titre: parseAsString.withDefault(""),
        page: parseAsInteger.withDefault(1),
        size: parseAsInteger.withDefault(6),
        region: parseAsString.withDefault("")
    },
    option: {
        clearOnDefault: true,
        throttleMs: 500,
    }
}