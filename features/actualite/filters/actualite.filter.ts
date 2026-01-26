import {createLoader, parseAsInteger, parseAsString} from "nuqs/server";

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

export const loadActualiteSearchParams = createLoader(actualiteFiltersClient.filter)
