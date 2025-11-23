import { parseAsInteger, parseAsString } from "nuqs";

export const lectioFiltersClient = {
    filter: {
        reference_text: parseAsString.withDefault(""),
        lithurgy_time: parseAsString.withDefault(""),
        contributor: parseAsString.withDefault(""),
        published_at: parseAsString.withDefault(""),
        page: parseAsInteger.withDefault(1),
        size: parseAsInteger.withDefault(9),
    },
    option: {
        clearOnDefault: true,
        throttleMs: 500,
    }
}