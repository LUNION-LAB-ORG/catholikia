import { parseAsInteger, parseAsString } from "nuqs";

export const eventFiltersClient = {
  filter: {
    titre: parseAsString.withDefault(""),
    page: parseAsInteger.withDefault(1),
    size: parseAsInteger.withDefault(9),
  },
  option: {
    clearOnDefault: true,
    throttleMs: 500,
  },
};
