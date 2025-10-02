import { parseAsInteger } from "nuqs";

export const actualiteFiltersClient = {
    filter: {
        page: parseAsInteger.withDefault(1),
        limit: parseAsInteger.withDefault(6),
    },
    option: {
        clearOnDefault: true,
        throttleMs: 500,
    }
}