"use client";

import { useState } from "react";
import Image from "next/image";
import {
    ArrowUpRight,
    ArrowLeft,
    Ticket,
    CreditCard,
    ShieldCheck,
    Loader2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import type { CartItem } from "./cuturama.types";
import type { PaymentInfo } from "./cuturama-visitor-info-form";

const PAYMENT_LOGOS: Record<string, string> = {
    wave:       "/assets/cuturama/mobile/wave.jpg",
    orange:     "/assets/cuturama/mobile/orange.png",
    mtn:        "/assets/cuturama/mobile/mtn.png",
    moov:       "/assets/cuturama/mobile/moov.png",
    visa:       "/assets/cuturama/mobile/visa.png",
    mastercard: "/assets/cuturama/mobile/master.png",
};

interface PaymentViewProps {
    items: CartItem[];
    paymentInfo?: PaymentInfo;
    onConfirm: () => void;
    onBack: () => void;
}

export function PaymentView({ items, paymentInfo, onConfirm, onBack }: PaymentViewProps) {
    const [loading, setLoading] = useState(false);

    const total = items.reduce((sum, { ticket, quantity }) => sum + ticket.price * quantity, 0);
    const discount = paymentInfo?.promo
        ? Math.round(total * 0.1)
        : 0;
    const finalTotal = total - discount;

    const handlePay = () => {
        setLoading(true);
        // Simule un appel réseau
        setTimeout(() => {
            setLoading(false);
            onConfirm();
        }, 2000);
    };

    return (
        <div className="max-w-3xl mx-auto flex flex-col gap-6">

            {/* ── En-tête ── */}
            <div className="flex items-center gap-3">
                <button
                    onClick={onBack}
                    className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                    <ArrowLeft className="size-4" />
                    Retour
                </button>
                <span className="text-sm text-muted-foreground">/</span>
                <span className="text-sm font-semibold">Confirmation de paiement</span>
            </div>

            {/* ── Récapitulatif commande ── */}
            <div className="rounded-xl overflow-hidden border">
                {/* Header */}
                <div className="flex items-center gap-2 bg-[#fe0000] px-5 py-3">
                    <Ticket className="size-4 text-white" />
                    <h2 className="text-white font-extrabold text-sm uppercase tracking-wide">
                        Récapitulatif de la commande
                    </h2>
                </div>

                {/* Lignes tickets */}
                <div className="divide-y bg-white">
                    {/* Sous-en-têtes colonnes */}
                    <div className="grid grid-cols-3 bg-gray-50 px-5 py-2 text-[11px] font-bold uppercase tracking-widest text-gray-500">
                        <span>Tarif</span>
                        <span className="text-center">Quantité</span>
                        <span className="text-right">Prix</span>
                    </div>

                    {items.map(({ ticket, quantity }) => (
                        <div
                            key={ticket.id}
                            className="grid grid-cols-3 px-5 py-4 items-center"
                        >
                            <span className="font-semibold text-xs uppercase">
                                {ticket.name}
                            </span>
                            <span className="text-center text-xs text-muted-foreground">
                                {quantity}&nbsp;×&nbsp;{ticket.price.toLocaleString("fr-CI")}&nbsp;FCFA
                            </span>
                            <span className="text-right font-bold text-[#fe0000] text-sm">
                                {(ticket.price * quantity).toLocaleString("fr-CI")}&nbsp;FCFA
                            </span>
                        </div>
                    ))}
                </div>

                {/* Sous-total + remise + total */}
                <div className="bg-gray-50 px-5 py-4 flex flex-col gap-2 border-t">
                    <div className="flex justify-between text-sm text-muted-foreground">
                        <span>Sous-total</span>
                        <span>{total.toLocaleString("fr-CI")}&nbsp;FCFA</span>
                    </div>

                    {discount > 0 && (
                        <div className="flex justify-between text-sm text-green-600 font-medium">
                            <span>Code promo appliqué (−10&nbsp;%)</span>
                            <span>−{discount.toLocaleString("fr-CI")}&nbsp;FCFA</span>
                        </div>
                    )}

                    <Separator className="my-1" />

                    <div className="flex justify-between font-extrabold text-base">
                        <span className="uppercase tracking-wider">Total à payer</span>
                        <span className="text-[#fe0000] text-lg">
                            {finalTotal.toLocaleString("fr-CI")}&nbsp;FCFA
                        </span>
                    </div>
                </div>
            </div>

            {/* ── Méthode de paiement sélectionnée ── */}
            {paymentInfo?.method && (
                <div className="rounded-xl border overflow-hidden">
                    <div className="flex items-center gap-2 bg-gray-100 px-5 py-3">
                        <CreditCard className="size-4 text-gray-600" />
                        <h2 className="text-gray-700 font-extrabold text-sm uppercase tracking-wide">
                            Méthode de paiement
                        </h2>
                    </div>

                    <div className="bg-white px-5 py-4 flex items-center gap-4">
                        {/* Logo */}
                        <div className={cn(
                            "w-16 h-10 relative rounded-md overflow-hidden border-2 border-[#fe0000]",
                        )}>
                            <Image
                                src={PAYMENT_LOGOS[paymentInfo.method]}
                                alt={paymentInfo.method}
                                fill
                                className="object-contain"
                            />
                        </div>

                        <div className="flex flex-col">
                            <span className="font-bold text-sm capitalize">{paymentInfo.method}</span>
                            {paymentInfo.phone && (
                                <span className="text-xs text-muted-foreground">{paymentInfo.phone}</span>
                            )}
                        </div>

                        {/* Badge confirmé */}
                        <div className="ml-auto flex items-center gap-1 bg-green-50 text-green-700 text-xs font-semibold px-2.5 py-1 rounded-full">
                            <ShieldCheck className="size-3.5" />
                            Sécurisé
                        </div>
                    </div>
                </div>
            )}

            {/* ── Note de sécurité ── */}
            <p className="text-center text-xs text-muted-foreground">
                Votre paiement est chiffré et sécurisé. En cliquant sur &quot;Payer&quot;, vous
                acceptez les{" "}
                <span className="underline cursor-pointer text-foreground font-medium">
                    conditions générales de vente
                </span>
                .
            </p>

            {/* ── Bouton Payer ── */}
            <div className="flex justify-center pb-4">
                <Button
                    onClick={handlePay}
                    disabled={loading}
                    className="rounded-full bg-[#fe0000] hover:bg-red-700 text-white font-extrabold uppercase tracking-widest px-14 py-6 text-sm gap-2 min-w-[220px]"
                >
                    {loading ? (
                        <>
                            <Loader2 className="size-4 animate-spin" />
                            Traitement en cours…
                        </>
                    ) : (
                        <>
                            Payer {finalTotal.toLocaleString("fr-CI")}&nbsp;FCFA
                            <ArrowUpRight className="size-4" />
                        </>
                    )}
                </Button>
            </div>
        </div>
    );
}
