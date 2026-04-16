import type { CuturamaEvent } from "@/components/(public)/cuturama/cuturama.types";

// ── Params ─────────────────────────────────────────────────────────────────
export interface ICuturamaEventsParams {
    category?: string;
    page?: number;
    search?: string;
}

// ── Responses ──────────────────────────────────────────────────────────────
export interface CuturamaEventsResponse {
    data: CuturamaEvent[];
    total: number;
    page: number;
    itemsPerPage: number;
}

export type { CuturamaEvent };
