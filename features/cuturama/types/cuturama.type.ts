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

// ── Create Order (/api/v2/orders) ───────────────────────────────────────────
export interface OrderItem {
    ticket_class_id: string;
    quantity: number;
}

export interface CreateOrderRequest {
    event_id: number;
    customer_name: string;
    customer_email: string;
    customer_phone: string;
    payment_method: string;
    items: OrderItem[];
    promo_code?: string;
    payment_reference?: string;
    notes?: string;
}

export interface CreateOrderResponse {
    data: {
        id: number;
        reference: string;
        status: string;
        payment_method: string;
        customer_name: string;
        customer_email: string;
        customer_phone: string;
        subtotal: string;
        total_amount: string;
    };
}

export interface LancerPaiementRequest {
    paymentMethod: string;
    phone?: string;
}

export interface LancerPaiementResponse {
    paymentUrl: string;
    sessionId: string;
    status: string;
}

export interface WaveVerifyResponse {
    orderId: string;
    status: string;
    checkoutStatus: string;
    paymentStatus: string;
}
