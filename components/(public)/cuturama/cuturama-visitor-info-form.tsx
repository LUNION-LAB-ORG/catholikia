"use client";

import { useState } from "react";
import { User, Mail, Phone, Tag, Ticket, ChevronRight } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import type { TicketType } from "./cuturama.types";
import Image from "next/image";

// Logos moyens de paiement (texte stylisé en attendant les vraies images)
const PAYMENT_METHODS = [
    { id: "wave",        label: "/assets/cuturama/mobile/wave.jpg",      },
    { id: "orange",      label: "/assets/cuturama/mobile/orange.png", },
    { id: "mtn",         label: "/assets/cuturama/mobile/mtn.png",    },
    { id: "moov",       label: "/assets/cuturama/mobile/moov.png",      },
    { id: "visa",        label: "/assets/cuturama/mobile/visa.png",        },
    { id: "mastercard",  label: "/assets/cuturama/mobile/master.png",  },
];

export interface PaymentInfo {
    method: string;
    phone: string;
    promo: string;
}

interface VisitorInfoFormProps {
    selectedTicket?: TicketType;
    onNext: (info: PaymentInfo) => void;
    onBack: () => void;
}

export function VisitorInfoForm({ selectedTicket, onNext, onBack }: VisitorInfoFormProps) {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName]   = useState("");
    const [email, setEmail]         = useState("");
    const [phone, setPhone]         = useState("");
    const [promo, setPromo]         = useState("");
    const [paymentMethod, setPaymentMethod] = useState<string | null>(null);
    const [accepted, setAccepted]   = useState(false);

    const buyerComplete = firstName.trim() && lastName.trim() && email.trim();
    const canSubmit = buyerComplete && paymentMethod && accepted;

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

                    <Separator />

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
                        className="w-full rounded-full bg-[#f5a623] hover:bg-[#e09510] text-white font-bold"
                        disabled={!buyerComplete}
                    >
                        ENREGISTRER
                    </Button>
                </div>
            </div>

            {/* ── INFORMATIONS SUR LA RÉSERVATION ── */}
            <div className={cn("rounded-xl overflow-hidden border transition-opacity", !buyerComplete && "opacity-40 pointer-events-none select-none")}>
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
                                    onClick={() => setPaymentMethod(pm.id)}
                                    className={cn(
                                        "rounded-lg py-3 relative px-2 text-[10px]   font-bold whitespace-pre-line text-center transition-all border-2",
                                   
                                        paymentMethod === pm.id
                                            ? "border-[#fe0000] scale-105 shadow-md"
                                            : "border-transparent opacity-80  hover:opacity-100"
                                    )}
                                >
                                    {pm.label.startsWith("/assets/") ? (
                                        <Image src={pm.label} alt={pm.id}  width={200} height={200} className="mx-auto h-full w-full" />
                                    ) : ( 
                                        pm.label
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
                        className="w-full rounded-full bg-[#f5a623] hover:bg-[#e09510] text-white font-bold"
                        disabled={!canSubmit}
                        onClick={() => onNext({ method: paymentMethod!, phone, promo })}
                    >
                        SUIVANT
                    </Button>
                </div>
            </div>
        </div>
    );
}
