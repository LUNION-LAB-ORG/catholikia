import { parseAsInteger, parseAsString } from "nuqs";

export const effataFiltersClient = {
    filter: {
        titre: parseAsString.withDefault(""),
        page: parseAsInteger.withDefault(1),
        size: parseAsInteger.withDefault(9),
        categorie_id: parseAsString.withDefault(""),
    },
    option: {
        clearOnDefault: true,
        throttleMs: 500,
    }
}