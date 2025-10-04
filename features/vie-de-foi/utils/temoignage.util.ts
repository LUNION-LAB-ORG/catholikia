import { ITemoignage } from "../types/vie-de-foi.type";

export const normalizeTemoignage = (raw: ITemoignage): ITemoignage => {
    const inspirant = raw.inspirant;
    let inspirantBool: boolean | string | undefined = undefined;

    if (typeof inspirant === "boolean") inspirantBool = inspirant;
    else if (typeof inspirant === "string") {
        const v = inspirant.toLowerCase();
        if (v === "true" || v === "1") inspirantBool = true;
        else if (v === "false" || v === "0") inspirantBool = false;
        else inspirantBool = inspirant; // keep original string if unexpected
    }

    return {
        ...raw,
        inspirant: inspirantBool,
    };
};
