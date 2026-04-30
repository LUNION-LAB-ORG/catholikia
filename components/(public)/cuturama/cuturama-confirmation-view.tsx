"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import {
    CheckCircle2,
    CalendarDays,
    MapPin,
    Ticket,
    Share2,
    Home,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { Link } from "@/i18n/navigation";
import { QRCodeSVG } from "qrcode.react";
import { cuturamaAPI } from "@/features/cuturama/apis/cuturama.api";
import { DownloadTicketButton } from "./cuturama-download-ticket-button";
import type { CartItem, CuturamaEvent } from "./cuturama.types";
import type { PaymentInfo } from "./cuturama-visitor-info-form";

interface ConfirmationViewProps {
    event: CuturamaEvent;
    items: CartItem[];
    paymentInfo?: PaymentInfo;
    bookingRef: string;
}

/** Génère un numéro de réservation lisible */
// supprimé : le bookingRef vient désormais du backend (qr_code du ticket)

export function ConfirmationView({ event, items, paymentInfo, bookingRef }: ConfirmationViewProps) {
    const total = items.reduce((sum, { ticket, quantity }) => sum + ticket.price * quantity, 0);
    const [qrCodes, setQrCodes] = useState<string[]>([bookingRef]);
    const [qrCodeLoading, setQrCodeLoading] = useState(true);

    // Fetch tous les qr_code depuis l'API (le backend les génère après la commande)
    useEffect(() => {
        setQrCodeLoading(true);
        cuturamaAPI.obtenirCommande(bookingRef)
            .then((res) => {
                const codes = res.data.tickets?.map((t) => t.qr_code).filter(Boolean);
                if (codes && codes.length > 0) setQrCodes(codes);
            })
            .catch(() => null)
            .finally(() => setQrCodeLoading(false));
    }, [bookingRef]);

    // Sauvegarde en localStorage pour permettre le re-téléchargement via scan QR
    useEffect(() => {
        const data = { bookingRef, qrCodes, event, items, paymentInfo };
        localStorage.setItem(`cuturama_ticket_${bookingRef}`, JSON.stringify(data));
    }, [bookingRef, qrCodes]); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <div className="max-w-2xl mx-auto flex flex-col items-center gap-8 py-6">

            {/* ── Icône succès ── */}
            <div className="flex flex-col items-center gap-3 text-center">
                <div className="relative">
                    <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center">
                        <CheckCircle2 className="size-10 text-green-600 stroke-[1.5]" />
                    </div>
                    {/* Cercle pulsé */}
                    <span className="absolute inset-0 rounded-full bg-green-100 animate-ping opacity-30" />
                </div>
                <h1 className="text-2xl font-extrabold tracking-tight">Paiement confirmé !</h1>
                <p className="text-muted-foreground text-sm max-w-xs">
                    Votre réservation a bien été enregistrée. Un e-mail de confirmation vous a été envoyé.
                </p>
            </div>

            {/* ── Billet ── */}
            <div className="w-full rounded-2xl border overflow-hidden shadow-sm">
                {/* En-tête billet */}
                <div className="bg-[#fe0000] px-6 py-4 flex items-center justify-between">
                    <div className="relative w-28 h-10 shrink-0">
                        <Image
                            src="/logo/logo.png"
                            alt="Catholikia"
                            fill
                            className="object-contain brightness-0 invert"
                        />
                    </div>
                    <div className="text-center flex-1 px-4">
                        <p className="text-white/80 text-[10px] uppercase tracking-widest font-semibold">
                            Référence de réservation
                        </p>
                        <p className="text-white font-extrabold text-lg tracking-widest">
                            {bookingRef}
                        </p>
                    </div>
                    <Ticket className="size-6 text-white/60 shrink-0" />
                </div>

                {/* Image + titre événement */}
                <div className="relative h-36 w-full">
                    <Image
                        src={event.image}
                        alt={event.title}
                        fill
                        className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                    <div className="absolute bottom-3 left-5 right-5">
                        <p className="text-white font-extrabold text-base leading-tight line-clamp-2">
                            {event.title}
                        </p>
                    </div>
                </div>

                {/* Infos détail */}
                <div className="bg-white px-6 py-5 flex flex-col gap-4">
                    <div className="flex flex-wrap gap-4 text-sm">
                        <div className="flex items-center gap-2 text-muted-foreground">
                            <CalendarDays className="size-4 shrink-0 text-[#fe0000]" />
                            <span className="font-medium text-foreground">{event.date}</span>
                            {event.time && (
                                <span className="text-muted-foreground">· {event.time}</span>
                            )}
                        </div>
                        <div className="flex items-center gap-2 text-muted-foreground">
                            <MapPin className="size-4 shrink-0 text-[#fe0000]" />
                            <span className="font-medium text-foreground">
                                {event.location}
                                {event.city ? `, ${event.city}` : ""}
                            </span>
                        </div>
                    </div>

                    <Separator />

                    {/* Lignes tickets */}
                    <div className="flex flex-col gap-2">
                        {items.map(({ ticket, quantity }) => (
                            <div key={ticket.id} className="flex items-center justify-between text-sm">
                                <div className="flex items-center gap-2">
                                    <span
                                        className={cn(
                                            "w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold text-white",
                                            "bg-[#fe0000]"
                                        )}
                                    >
                                        {quantity}
                                    </span>
                                    <span className="font-medium">{ticket.name}</span>
                                </div>
                                <span className="font-bold text-[#fe0000]">
                                    {(ticket.price * quantity).toLocaleString("fr-CI")}&nbsp;FCFA
                                </span>
                            </div>
                        ))}
                    </div>

                    <Separator />

                    {/* Montant total */}
                    <div className="flex items-center justify-between font-extrabold">
                        <span className="uppercase tracking-wider text-sm">Total payé</span>
                        <span className="text-[#fe0000] text-lg">
                            {total.toLocaleString("fr-CI")}&nbsp;FCFA
                        </span>
                    </div>

                    {/* Méthode de paiement */}
                    {paymentInfo?.method && (
                        <div className="flex items-center justify-between text-xs text-muted-foreground">
                            <span>Payé via</span>
                            <span className="font-semibold capitalize text-foreground">
                                {paymentInfo.method}
                                {paymentInfo.phone ? ` · ${paymentInfo.phone}` : ""}
                            </span>
                        </div>
                    )}

                    {/* Infos acheteur */}
                    {paymentInfo?.firstName && (
                        <>
                            <Separator />
                            <div className="flex flex-col gap-1">
                                <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Acheteur</p>
                                <p className="text-sm font-semibold">
                                    {paymentInfo.firstName} {paymentInfo.lastName}
                                </p>
                                <p className="text-xs text-muted-foreground">{paymentInfo.email}</p>
                                {paymentInfo.phone && (
                                    <p className="text-xs text-muted-foreground">{paymentInfo.phone}</p>
                                )}
                            </div>
                        </>
                    )}
                </div>

                {/* Pied billet – tiret coupé */}
                <div className="relative h-8 bg-white">
                    <div className="absolute inset-x-0 top-0 flex items-center">
                        <div className="w-6 h-6 rounded-full bg-gray-100 border -ml-3 shrink-0" />
                        <div className="flex-1 border-t-2 border-dashed border-gray-200" />
                        <div className="w-6 h-6 rounded-full bg-gray-100 border -mr-3 shrink-0" />
                    </div>
                </div>

                {/* QR codes – un par ticket */}
                <div className="bg-gray-50 px-6 py-5 flex flex-col gap-4 border-t border-dashed">
                    <p className="text-xs font-bold uppercase tracking-wide text-center">
                        {qrCodes.length > 1 ? `${qrCodes.length} billets` : "Votre e-billet"}
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        {qrCodes.map((code, i) => (
                            <div key={i} className="flex flex-col items-center gap-1">
                                <div className="w-16 h-16 shrink-0 rounded-lg overflow-hidden border bg-white p-1">
                                    <QRCodeSVG value={code} size={64} bgColor="#ffffff" fgColor="#111111" className="w-full h-full" />
                                </div>
                                {qrCodes.length > 1 && <p className="text-[10px] text-muted-foreground">Billet {i + 1}</p>}
                            </div>
                        ))}
                    </div>
                    <p className="text-[11px] text-muted-foreground text-center leading-snug">
                        Présentez ce QR code à l&apos;entrée. Il est strictement personnel et non transférable.
                    </p>
                </div>
            </div>

            {/* ── Actions ── */}
            <div className="flex flex-wrap gap-3 justify-center w-full">
                <DownloadTicketButton
                    event={event}
                    items={items}
                    bookingRef={bookingRef}
                    qrCodes={qrCodes}
                    qrCodeLoading={qrCodeLoading}
                    paymentInfo={paymentInfo}
                />

                <Button
                    variant="outline"
                    className="rounded-full gap-2"
                    onClick={() => {
                        if (navigator.share) {
                            navigator.share({ title: event.title, url: window.location.href });
                        }
                    }}
                >
                    <Share2 className="size-4" />
                    Partager
                </Button>

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
                className="w-full rounded-xl border border-slate-200 bg-slate-50 px-6 py-4 flex flex-col items-center gap-2 mt-2 hover:bg-slate-100 transition-colors"
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
    );
}
