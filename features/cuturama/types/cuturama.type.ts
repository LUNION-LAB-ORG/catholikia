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
export interface CreateOrderItem {
    ticket_class_id: string;
    quantity: number;
}

export interface CreateOrderRequest {
    event_id: number;
    customer_name: string;
    customer_email: string;
    customer_phone: string;
    payment_method: string;
    items: CreateOrderItem[];
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

export interface OrderTicket {
    id: number;
    order_id: number;
    holder_name: string;
    holder_email: string;
    qr_code: string;
    is_valid: boolean;
    is_scanned: boolean;
}

export interface OrderTicketClass {
    id: number;
    name: string;
    description: string;
    price: string;
    capacity: number;
    remaining_capacity: number;
}

export interface OrderItem {
    id: number;
    order_id: number;
    ticket_class: OrderTicketClass;
    quantity: number;
    unit_price: string;
    subtotal: string;
}

export interface OrderEvent {
    id: number;
    title: string;
    slug: string;
    image: string;
    contenu?: string;
}

export interface GetOrderResponse {
    data: {
        id: number;
        reference: string;
        event: OrderEvent;
        customer_name: string;
        customer_email: string;
        customer_phone: string;
        subtotal: string;
        discount_amount: string;
        total_amount: string;
        status: string;
        payment_method: string;
        promo_code: string | null;
        notes: string | null;
        items: OrderItem[];
        tickets: OrderTicket[];
        created_at: string;
    };
}
