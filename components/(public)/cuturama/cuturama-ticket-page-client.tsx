"use client";

import { useEffect, useState } from "react";
import { QRCodeSVG } from "qrcode.react";
import { CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import Image from "next/image";
import { DownloadTicketButton } from "@/components/(public)/cuturama/cuturama-download-ticket-button";
import type { CartItem, CuturamaEvent } from "@/components/(public)/cuturama/cuturama.types";
import type { PaymentInfo } from "@/components/(public)/cuturama/cuturama-visitor-info-form";
import { Separator } from "@/components/ui/separator";
import { Link } from "@/i18n/navigation";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";
import { cuturamaAPI } from "@/features/cuturama/apis/cuturama.api";
import type { GetOrderResponse } from "@/features/cuturama/types/cuturama.type";

interface SavedTicketData {
    bookingRef: string;
    qrCode?: string;
    event: CuturamaEvent;
    items: CartItem[];
    paymentInfo?: PaymentInfo;
}

interface TicketPageClientProps {
    bookingRef: string;
}

/** Convertit la réponse API en format compatible avec les composants existants */
function orderToTicketData(order: GetOrderResponse["data"]): SavedTicketData {
    const event: CuturamaEvent = {
        id: String(order.event.id),
        slug: order.event.slug,
        title: order.event.title,
        image: order.event.image,
        category: "Concerts", // valeur par défaut
        location: "",
        city: "",
        date: new Date(order.created_at).toLocaleDateString("fr-FR"),
        time: "",
        organizer: "",
        organizerDescription: null,
        price: order.total_amount,
        description: "",
        mapEmbedUrl: null,
        adSpots: [],
        ticketTypes: [],
    };
    const items: CartItem[] = order.items.map((item) => ({
        ticket: {
            id: String(item.ticket_class.id),
            name: item.ticket_class.name,
            price: parseFloat(item.unit_price),
            capacity: item.ticket_class.capacity,
            sold: item.ticket_class.capacity - item.ticket_class.remaining_capacity,
            remaining: item.ticket_class.remaining_capacity,
        },
        quantity: item.quantity,
    }));
    const paymentInfo: PaymentInfo = {
        method: order.payment_method,
        phone: order.customer_phone,
        promo: order.promo_code ?? "",
        firstName: order.customer_name.split(" ")[0] ?? "",
        lastName: order.customer_name.split(" ").slice(1).join(" ") ?? "",
        email: order.customer_email,
        customer_phone: order.customer_phone,
    };
    return { bookingRef: order.reference, qrCode: order.tickets[0]?.qr_code, event, items, paymentInfo };
}

export function TicketPageClient({ bookingRef }: TicketPageClientProps) {
    const [data, setData] = useState<SavedTicketData | null>(null);
    const [apiOrder, setApiOrder] = useState<GetOrderResponse["data"] | null>(null);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        // 1. Essai localStorage
        const raw = localStorage.getItem(`cuturama_ticket_${bookingRef}`);
        if (raw) {
            try {
                setData(JSON.parse(raw));
                setLoaded(true);
                // Charger quand même l'API pour avoir les QR codes individuels
                cuturamaAPI.obtenirCommande(bookingRef)
                    .then((res) => setApiOrder(res.data))
                    .catch(() => null);
                return;
            } catch { /* données corrompues, on continue */ }
        }
        // 2. Fallback : charger depuis l'API
        cuturamaAPI.obtenirCommande(bookingRef)
            .then((res) => {
                setApiOrder(res.data);
                setData(orderToTicketData(res.data));
            })
            .catch(() => setData(null))
            .finally(() => setLoaded(true));
    }, [bookingRef]);

    if (!loaded) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <Loader2 className="w-10 h-10 animate-spin text-muted-foreground" />
            </div>
        );
    }

    if (!data) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center gap-4 px-4 text-center">
                <AlertCircle className="size-12 text-muted-foreground" />
                <h1 className="text-xl font-bold">Billet introuvable</h1>
                <p className="text-sm text-muted-foreground max-w-xs">
                    Ce billet n&apos;est pas disponible sur cet appareil. Veuillez utiliser
                    l&apos;appareil sur lequel l&apos;achat a été effectué pour télécharger votre billet.
                </p>
                <Link href="/cuturama">
                    <Button className="rounded-full bg-[#f5a623] hover:bg-[#e09510] text-white font-bold gap-2">
                        <Home className="size-4" />
                        Retour aux événements
                    </Button>
                </Link>
            </div>
        );
    }

    const { event, items, paymentInfo } = data;
    const total = items.reduce((s, { ticket, quantity }) => s + ticket.price * quantity, 0);
    const qrUrl = `${window.location.origin}/cuturama/ticket/${bookingRef}`;

    return (
        <div className="min-h-screen bg-background py-10 px-4">
            <div className="max-w-2xl mx-auto flex flex-col gap-8">
                {/* Succès */}
                <div className="flex flex-col items-center gap-2 text-center">
                    <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center">
                        <CheckCircle2 className="size-8 text-green-600" />
                    </div>
                    <h1 className="text-2xl font-extrabold tracking-tight">Votre billet</h1>
                    <p className="text-sm text-muted-foreground">Référence : <span className="font-bold text-foreground">{bookingRef}</span></p>
                </div>

                {/* Carte billet */}
                <div className="w-full rounded-2xl border overflow-hidden shadow-sm">
                    {/* En-tête */}
                    <div className="bg-[#fe0000] px-6 py-4 flex items-center justify-between">
                        <div className="relative w-28 h-10 shrink-0">
                            <Image src="/logo/logo.png" alt="Catholikia" fill className="object-contain brightness-0 invert" />
                        </div>
                        <div className="text-center flex-1 px-4">
                            <p className="text-white/80 text-[10px] uppercase tracking-widest font-semibold">Référence</p>
                            <p className="text-white font-extrabold text-lg tracking-widest">{bookingRef}</p>
                        </div>
                    </div>

                    {/* Image événement */}
                    <div className="relative h-36 w-full">
                        <Image src={event.image} alt={event.title} fill className="object-cover" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                        <div className="absolute bottom-3 left-5 right-5">
                            <p className="text-white font-extrabold text-base leading-tight">{event.title}</p>
                        </div>
                    </div>

                    {/* Détails */}
                    <div className="bg-white px-6 py-5 flex flex-col gap-4">
                        <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                            <span className="font-medium text-foreground">{event.date} · {event.time}</span>
                            <span>{event.location}{event.city ? `, ${event.city}` : ""}</span>
                        </div>

                        <Separator />

                        {/* Tickets */}
                        {items.map(({ ticket, quantity }) => (
                            <div key={ticket.id} className="flex items-center justify-between text-sm">
                                <span className="font-medium">{ticket.name} × {quantity}</span>
                                <span className="font-bold text-[#fe0000]">
                                    {(ticket.price * quantity).toLocaleString("fr-CI")} FCFA
                                </span>
                            </div>
                        ))}

                        <Separator />

                        <div className="flex items-center justify-between font-extrabold">
                            <span className="uppercase tracking-wider text-sm">Total</span>
                            <span className="text-[#fe0000]">{total.toLocaleString("fr-CI")} FCFA</span>
                        </div>

                        {/* Infos acheteur */}
                        {paymentInfo?.firstName && (
                            <>
                                <Separator />
                                <div className="flex flex-col gap-0.5">
                                    <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Acheteur</p>
                                    <p className="text-sm font-semibold">{paymentInfo.firstName} {paymentInfo.lastName}</p>
                                    <p className="text-xs text-muted-foreground">{paymentInfo.email}</p>
                                </div>
                            </>
                        )}
                    </div>

                    {/* Pied dashed */}
                    <div className="relative h-8 bg-white">
                        <div className="absolute inset-x-0 top-0 flex items-center">
                            <div className="w-6 h-6 rounded-full bg-gray-100 border -ml-3 shrink-0" />
                            <div className="flex-1 border-t-2 border-dashed border-gray-200" />
                            <div className="w-6 h-6 rounded-full bg-gray-100 border -mr-3 shrink-0" />
                        </div>
                    </div>

                    {/* QR pied — un QR par ticket issu de l'API */}
                    {apiOrder?.tickets && apiOrder.tickets.length > 0 ? (
                        <div className="bg-gray-50 px-6 py-5 flex flex-col gap-4 border-t border-dashed">
                            <p className="text-xs font-bold uppercase tracking-wide text-center">
                                {apiOrder.tickets.length > 1 ? `${apiOrder.tickets.length} billets` : "Votre e-billet"}
                            </p>
                            <div className="flex flex-wrap justify-center gap-6">
                                {apiOrder.tickets.map((ticket, i) => (
                                    <div key={ticket.id} className="flex flex-col items-center gap-2">
                                        <div className="w-20 h-20 shrink-0 rounded-lg overflow-hidden border bg-white p-1">
                                            <QRCodeSVG value={ticket.qr_code} size={80} bgColor="#ffffff" fgColor="#111111" className="w-full h-full" />
                                        </div>
                                        <p className="text-[10px] text-muted-foreground">Billet {i + 1}</p>
                                    </div>
                                ))}
                            </div>
                            <p className="text-[11px] text-muted-foreground text-center leading-snug">
                                Présentez ce QR code à l&apos;entrée. Il est strictement personnel.
                            </p>
                        </div>
                    ) : (
                        <div className="bg-gray-50 px-6 py-5 flex items-center gap-5 border-t border-dashed">
                            <div className="w-16 h-16 shrink-0 rounded-lg overflow-hidden border bg-white p-1">
                                <QRCodeSVG value={bookingRef} size={64} bgColor="#ffffff" fgColor="#111111" className="w-full h-full" />
                            </div>
                            <div className="flex flex-col gap-0.5">
                                <p className="text-xs font-bold uppercase tracking-wide">Votre e-billet</p>
                                <p className="text-[11px] text-muted-foreground leading-snug">
                                    Présentez ce QR code à l&apos;entrée. Il est strictement personnel.
                                </p>
                            </div>
                        </div>
                    )}
                </div>

                {/* Actions */}
                <div className="flex flex-wrap gap-3 justify-center">
                    <DownloadTicketButton
                        event={event}
                        items={items}
                        bookingRef={data.bookingRef}
                        qrCodes={
                            apiOrder?.tickets && apiOrder.tickets.length > 0
                                ? apiOrder.tickets.map((t) => t.qr_code)
                                : [data.qrCode ?? data.bookingRef]
                        }
                        paymentInfo={paymentInfo}
                    />
                    <Link href="/cuturama">
                        <Button className="rounded-full bg-[#f5a623] hover:bg-[#e09510] text-white font-bold gap-2">
                            <Home className="size-4" />
                            Retour aux événements
                        </Button>
                    </Link>
                </div>

                {/* ── Attribution L'Union Lab ── */}
                <a
                    href="https://www.lunion-lab.com/fr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-6 py-4 flex flex-col items-center gap-2 hover:bg-slate-100 transition-colors"
                >
                    <p className="text-xs text-slate-500 text-center">
                        Solution de billetterie développée par
                    </p>
                    <div className="relative h-10 w-40">
                        <Image
                            src="/assets/logo/lunion_lab.png"
                            alt="L'Union Lab"
                            fill
                            className="object-contain"
                        />
                    </div>
                    <span className="text-xs text-slate-400">lunion-lab.com</span>
                </a>
            </div>
        </div>
    );
}
