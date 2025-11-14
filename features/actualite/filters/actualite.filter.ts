import { parseAsInteger, parseAsString } from "nuqs";

export const actualiteFiltersClient = {
    filter: {
        page: parseAsInteger.withDefault(1),
        limit: parseAsInteger.withDefault(6),
        category_id: parseAsString.withDefault(''),
    },
    option: {
        clearOnDefault: true,
        throttleMs: 500,
    }
}