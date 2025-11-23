import { parseAsInteger, parseAsString } from "nuqs";

export const eventFiltersClient = {
  filter: {
    titre: parseAsString.withDefault(""),
    page: parseAsInteger.withDefault(1),
    size: parseAsInteger.withDefault(6),
  },
  option: {
    clearOnDefault: true,
    throttleMs: 500,
  },
};
