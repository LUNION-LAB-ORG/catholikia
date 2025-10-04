import { parseAsInteger, parseAsString, parseAsBoolean } from "nuqs";
import { ITemoignageParams } from "../types/vie-de-foi.type";

// Type pour s'assurer que toutes les clés correspondent à ITemoignageParams
type VieDeFoiFilters = {
    [K in keyof Required<ITemoignageParams>]: any;
};

export const vieDeFoiFiltersClient: {
    filter: VieDeFoiFilters;
    option: {
        clearOnDefault: boolean;
        throttleMs: number;
    };
} = {
    filter: {
        category: parseAsString.withDefault(""),
        lieu: parseAsString.withDefault(""),
        inspirant: parseAsBoolean.withDefault(false),
        page: parseAsInteger.withDefault(1),
        size: parseAsInteger.withDefault(9),
        skip: parseAsInteger.withDefault(0),
        profession: parseAsString.withDefault(""),
    },
    option: {
        clearOnDefault: true,
        throttleMs: 500,
    }
}