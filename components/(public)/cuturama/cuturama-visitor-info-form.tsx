"use client";

import { useState } from "react";
import { User, Mail, Phone, Tag, Ticket, ChevronRight, Loader2, CheckCircle2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { addToast } from "@heroui/toast";
import type { TicketType, CartItem, CuturamaEvent } from "./cuturama.types";
import Image from "next/image";
import { cuturamaAPI } from "@/features/cuturama/apis/cuturama.api";

// Logos moyens de paiement (texte stylisé en attendant les vraies images)
const PAYMENT_METHODS = [
    { id: "wave",        label: "/assets/cuturama/mobile/wave.jpg",      available: true  },
    { id: "orange",      label: "/assets/cuturama/mobile/orange.png",    available: false },
    { id: "mtn",         label: "/assets/cuturama/mobile/mtn.png",       available: false },
    { id: "moov",        label: "/assets/cuturama/mobile/moov.png",      available: false },
    { id: "visa",        label: "/assets/cuturama/mobile/visa.png",       available: false },
    { id: "mastercard",  label: "/assets/cuturama/mobile/master.png",   available: false },
];

export interface PaymentInfo {
    method: string;
    phone: string;
    promo: string;
    firstName: string;
    lastName: string;
    email: string;
    customer_phone: string;
}

interface VisitorInfoFormProps {
    event: CuturamaEvent;
    eventId: string;
    cartItems: CartItem[];
    selectedTicket?: TicketType;
    onNext: (info: PaymentInfo) => void;
    onBack: () => void;
}

export function VisitorInfoForm({ event, eventId, cartItems, selectedTicket, onNext, onBack }: VisitorInfoFormProps) {
    const [firstName, setFirstName]         = useState("");
    const [lastName, setLastName]           = useState("");
    const [email, setEmail]                 = useState("");
    const [customerPhone, setCustomerPhone] = useState("");
    const [phone, setPhone]                 = useState("");
    const [promo, setPromo]                 = useState("");
    const [paymentMethod, setPaymentMethod] = useState<string | null>(null);
    const [accepted, setAccepted]           = useState(false);
    const [buyerSaved, setBuyerSaved]       = useState(false);
    const [submitting, setSubmitting]       = useState(false);

    const buyerComplete = !!(firstName.trim() && lastName.trim() && email.trim());
    const canSubmit = buyerSaved && !!paymentMethod && accepted;

    /** Validation locale — déverrouille la section réservation */
    const handleEnregistrer = () => {
        if (!buyerComplete) return;
        setBuyerSaved(true);
        addToast({
            title: "Informations enregistrées",
            description: "Choisissez un mode de paiement.",
            color: "success",
        });
        setTimeout(() => {
            document.getElementById("section-reservation")?.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 100);
    };

    /** Crée la commande puis lance le paiement */
    const handleSuivant = async () => {
        if (!canSubmit) return;
        setSubmitting(true);
        try {
            // Étape 1 : créer la commande
            const order = await cuturamaAPI.creerCommande({
                event_id: Number(eventId),
                customer_name: `${firstName.trim()} ${lastName.trim()}`,
                customer_email: email.trim(),
                customer_phone: customerPhone.trim(),
                payment_method: paymentMethod!,
                items: cartItems.map(({ ticket, quantity }) => ({
                    ticket_class_id: ticket.id,
                    quantity,
                })),
                promo_code: promo.trim() || undefined,
            });

            // Étape 2 : lancer le paiement
            const paiement = await cuturamaAPI.lancerPaiement(order.data.id, {
                paymentMethod: paymentMethod!,
                phone: customerPhone.trim() || undefined,
            });

            if (paiement.paymentUrl) {
                // Sauvegarder le billet dans localStorage avant la redirection
                // (Wave ouvre un autre navigateur, le localStorage sera vide au retour)
                const bookingRef = order.data.reference;
                const paymentInfo: PaymentInfo = {
                    method: paymentMethod!,
                    phone,
                    promo,
                    firstName,
                    lastName,
                    email,
                    customer_phone: customerPhone,
                };
                localStorage.setItem(
                    `cuturama_ticket_${bookingRef}`,
                    JSON.stringify({ bookingRef, event, items: cartItems, paymentInfo })
                );
                window.location.href = paiement.paymentUrl;
                return;
            }

            // Méthodes sans redirection : passer à l'étape de confirmation
            onNext({
                method: paymentMethod!,
                phone,
                promo,
                firstName,
                lastName,
                email,
                customer_phone: customerPhone,
            });
        } catch (error) {
            const apiErr = error as { message?: string; status?: number; code?: string; context?: string };
            console.error("[paiement] error:", apiErr);
            const msg = apiErr.message ?? JSON.stringify(error);
            addToast({ title: "Erreur", description: msg, color: "danger" });
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <div className="flex flex-col gap-6 max-w-4xl mx-auto">
            {/* ── INFORMATIONS DE L'ACHETEUR ── */}
            <div className="rounded-xl overflow-hidden border">
                {/* Header rouge */}
                <div className="bg-[#fe0000] flex items-center gap-3 px-5 py-3">
                    <User className="size-5 text-white" />
                    <h2 className="text-white font-extrabold text-sm sm:text-base uppercase tracking-wide">
                        Informations de l&apos;acheteur
                    </h2>
                </div>

                {/* Formulaire */}
                <div className="p-5 flex flex-col gap-4 bg-white">
                    <div className="flex flex-col sm:flex-row gap-4">
                        <div className="relative flex-1">
                            <User className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
                            <Input
                                placeholder="Prénom"
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                                className="pl-9"
                            />
                        </div>
                        <div className="relative flex-1">
                            <User className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
                            <Input
                                placeholder="Nom"
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                                className="pl-9"
                            />
                        </div>
                    </div>

                    <div className="relative">
                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
                        <Input
                            type="email"
                            placeholder="Adresse e-mail"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="pl-9"
                        />
                    </div>

                    <div className="relative">
                        <Phone className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
                        <Input
                            type="tel"
                            placeholder="Numéro de téléphone du client"
                            value={customerPhone}
                            onChange={(e) => setCustomerPhone(e.target.value)}
                            className="pl-9"
                        />
                    </div>

                    <Separator />

                    {/* Récapitulatif du total */}
                    <div className="flex flex-col gap-2 bg-gray-50 rounded-lg px-4 py-3">
                        {cartItems.map(({ ticket, quantity }) => (
                            <div key={ticket.id} className="flex items-center justify-between text-xs text-muted-foreground">
                                <span>{ticket.name} × {quantity}</span>
                                <span>{(ticket.price * quantity).toLocaleString("fr-CI")} FCFA</span>
                            </div>
                        ))}
                        <Separator className="my-1" />
                        <div className="flex items-center justify-between font-extrabold text-sm">
                            <span>Total</span>
                            <span className="text-[#fe0000]">
                                {cartItems.reduce((sum, { ticket, quantity }) => sum + ticket.price * quantity, 0).toLocaleString("fr-CI")} FCFA
                            </span>
                        </div>
                    </div>

                    {/* Ticket sélectionné + navigation */}
                    <div className="flex items-center justify-between">
                        {selectedTicket ? (
                            <div className="flex items-center gap-2 bg-[#fe0000] text-white text-xs font-bold px-3 py-1.5 rounded-full">
                                <Ticket className="size-3.5" />
                                {selectedTicket.name}
                            </div>
                        ) : (
                            <div />
                        )}
                        <Button
                            variant="outline"
                            size="icon"
                            className="rounded-full border-gray-300"
                            disabled={!buyerComplete}
                            type="button"
                            aria-label="Continuer"
                        >
                            <ChevronRight className="size-4" />
                        </Button>
                    </div>

                    <Button
                        className="w-full rounded-full bg-[#f5a623] hover:bg-[#e09510] text-white font-bold gap-2"
                        disabled={!buyerComplete || buyerSaved}
                        onClick={handleEnregistrer}
                        type="button"
                    >
                        {buyerSaved ? (
                            <>
                                <CheckCircle2 className="size-4" />
                                ENREGISTRÉ
                            </>
                        ) : (
                            "ENREGISTRER"
                        )}
                    </Button>
                </div>
            </div>

            {/* ── INFORMATIONS SUR LA RÉSERVATION ── */}
            <div id="section-reservation" className={cn("rounded-xl overflow-hidden border transition-opacity", !buyerSaved && "opacity-40 pointer-events-none select-none")}>
                {/* Header gris */}
                <div className="bg-gray-300 flex items-center justify-center px-5 py-3">
                    <h2 className="text-gray-700 font-extrabold text-sm sm:text-base uppercase tracking-widest">
                        Informations sur la réservation
                    </h2>
                </div>

                <div className="p-5 flex flex-col gap-5 bg-white">
                    {/* Moyen de paiement */}
                    <div className="flex flex-col gap-3">
                        <h3 className="font-semibold text-sm">Moyen De Paiement</h3>
                        <div className="grid grid-cols-3  sm:grid-cols-6 gap-2">
                            {PAYMENT_METHODS.map((pm) => (
                                <div
                                    key={pm.id}
                                    onClick={() => pm.available && setPaymentMethod(pm.id)}
                                    className={cn(
                                        "rounded-lg py-3 relative px-2 text-[10px] font-bold whitespace-pre-line text-center transition-all border-2",
                                        pm.available
                                            ? paymentMethod === pm.id
                                                ? "border-[#fe0000] scale-105 shadow-md cursor-pointer"
                                                : "border-transparent opacity-80 hover:opacity-100 cursor-pointer"
                                            : "border-transparent opacity-30 grayscale cursor-not-allowed"
                                    )}
                                >
                                    {pm.label.startsWith("/assets/") ? (
                                        <Image src={pm.label} alt={pm.id} width={200} height={200} className="mx-auto h-full w-full" />
                                    ) : (
                                        pm.label
                                    )}
                                    {!pm.available && (
                                        <span className="absolute bottom-1 inset-x-0 text-center text-[8px] text-muted-foreground font-normal">
                                            Bientôt
                                        </span>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Numéro de téléphone */}
                    <div className="relative">
                        <Phone className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
                        <Input
                            type="tel"
                            placeholder="Numéro de téléphone"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            className="pl-9"
                        />
                    </div>

                    {/* Code promo */}
                    <div className="relative flex items-center gap-2">
                        <Tag className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground z-10" />
                        <Input
                            placeholder="Saisir un Code Promotionel (Optionnel)"
                            value={promo}
                            onChange={(e) => setPromo(e.target.value)}
                            className="pl-9 pr-12"
                        />
                        <Button
                            size="icon"
                            className="absolute right-0 rounded-r-md rounded-l-none bg-[#fe0000] hover:bg-red-700 text-white h-full"
                        >
                            <ChevronRight className="size-4" />
                        </Button>
                    </div>

                    {/* CGV */}
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <Checkbox
                            id="cgv"
                            checked={accepted}
                            onCheckedChange={(v) => setAccepted(!!v)}
                            className="data-[state=checked]:bg-[#fe0000] data-[state=checked]:border-[#fe0000]"
                        />
                        <label htmlFor="cgv" className="cursor-pointer select-none">
                            J&apos;accepte les{" "}
                            <span className="underline text-foreground font-medium cursor-pointer">
                                conditions générales de vente
                            </span>
                        </label>
                    </div>

                    {/* Bouton Suivant */}
                    <Button
                        className="w-full rounded-full bg-[#f5a623] hover:bg-[#e09510] text-white font-bold gap-2"
                        disabled={!canSubmit || submitting}
                        onClick={handleSuivant}
                        type="button"
                    >
                        {submitting ? (
                            <>
                                <Loader2 className="size-4 animate-spin" />
                                Traitement en cours…
                            </>
                        ) : (
                            "SUIVANT"
                        )}
                    </Button>
                </div>
            </div>
        </div>
    );
}
