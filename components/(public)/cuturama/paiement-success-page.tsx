"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { Link } from "@/i18n/navigation";
import { CheckCircle2, XCircle, Loader2, Ticket, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import Content from "@/components/primitives/Content";
import Image from "next/image";
import { cuturamaAPI } from "@/features/cuturama/apis/cuturama.api";
import type { WaveVerifyResponse } from "@/features/cuturama/types/cuturama.type";

type VerifyState =
    | { status: "loading" }
    | { status: "success"; data: WaveVerifyResponse }
    | { status: "error"; message: string }
    | { status: "no-order" };

export default function PaiementSuccessPage() {
    const searchParams = useSearchParams();
    const orderId = searchParams.get("order_id");
    const transactionId = searchParams.get("transaction_id");

    const [state, setState] = useState<VerifyState>(
        orderId ? { status: "loading" } : { status: "no-order" }
    );

    useEffect(() => {
        if (!orderId) return;

        cuturamaAPI
            .verifierPaiementWave(orderId)
            .then((data) => setState({ status: "success", data }))
            .catch((err: { message?: string }) =>
                setState({ status: "error", message: err.message ?? "Erreur de vérification" })
            );
    }, [orderId]);

    const isConfirmed =
        state.status === "success" && state.data.paymentStatus === "succeeded";

    return (
        <Content>
            <div className="max-w-lg mx-auto flex flex-col items-center gap-8 py-16 text-center">

                {/* Logo */}
                <div className="relative w-32 h-12">
                    <Image
                        src="/logo/logo.png"
                        alt="Catholikia"
                        fill
                        className="object-contain"
                    />
                </div>

                {/* Icône */}
                {state.status === "loading" ? (
                    <div className="w-24 h-24 rounded-full bg-gray-100 flex items-center justify-center">
                        <Loader2 className="size-12 text-gray-400 animate-spin" />
                    </div>
                ) : state.status === "error" ? (
                    <div className="w-24 h-24 rounded-full bg-red-100 flex items-center justify-center">
                        <XCircle className="size-12 text-red-600 stroke-[1.5]" />
                    </div>
                ) : isConfirmed ? (
                    <div className="relative">
                        <div className="w-24 h-24 rounded-full bg-green-100 flex items-center justify-center">
                            <CheckCircle2 className="size-12 text-green-600 stroke-[1.5]" />
                        </div>
                        <span className="absolute inset-0 rounded-full bg-green-100 animate-ping opacity-25" />
                    </div>
                ) : (
                    <div className="w-24 h-24 rounded-full bg-yellow-100 flex items-center justify-center">
                        <Loader2 className="size-12 text-yellow-500 stroke-[1.5]" />
                    </div>
                )}

                {/* Titre */}
                <div className="flex flex-col gap-2">
                    {state.status === "loading" && (
                        <>
                            <h1 className="text-3xl font-extrabold tracking-tight text-gray-900">
                                Vérification en cours…
                            </h1>
                            <p className="text-muted-foreground text-sm max-w-sm">
                                Nous confirmons votre paiement auprès de Wave.
                            </p>
                        </>
                    )}
                    {state.status === "error" && (
                        <>
                            <h1 className="text-3xl font-extrabold tracking-tight text-gray-900">
                                Vérification échouée
                            </h1>
                            <p className="text-muted-foreground text-sm max-w-sm">
                                {state.message}
                            </p>
                        </>
                    )}
                    {state.status === "success" && isConfirmed && (
                        <>
                            <h1 className="text-3xl font-extrabold tracking-tight text-gray-900">
                                Paiement confirmé&nbsp;!
                            </h1>
                            <p className="text-muted-foreground text-sm max-w-sm">
                                Votre paiement Wave a bien été reçu. Un e-mail de confirmation
                                vous a été envoyé avec vos billets.
                            </p>
                        </>
                    )}
                    {state.status === "success" && !isConfirmed && (
                        <>
                            <h1 className="text-3xl font-extrabold tracking-tight text-gray-900">
                                Paiement en attente
                            </h1>
                            <p className="text-muted-foreground text-sm max-w-sm">
                                Votre paiement est en cours de traitement (statut&nbsp;: {state.data.paymentStatus}).
                            </p>
                        </>
                    )}
                    {state.status === "no-order" && (
                        <>
                            <h1 className="text-3xl font-extrabold tracking-tight text-gray-900">
                                Paiement effectué
                            </h1>
                            <p className="text-muted-foreground text-sm max-w-sm">
                                Votre paiement Wave a été traité.
                            </p>
                        </>
                    )}
                </div>

                {/* Détails */}
                {(state.status === "success" || transactionId || orderId) && (
                    <div className="w-full rounded-xl border bg-gray-50 divide-y text-left">
                        {orderId && (
                            <div className="flex justify-between items-center px-5 py-3 text-sm">
                                <span className="text-muted-foreground font-medium">Numéro de commande</span>
                                <span className="font-mono font-semibold text-xs text-gray-700">#{orderId}</span>
                            </div>
                        )}
                        {transactionId && (
                            <div className="flex justify-between items-center px-5 py-3 text-sm">
                                <span className="text-muted-foreground font-medium">ID de transaction</span>
                                <span className="font-mono font-semibold text-xs text-gray-700 break-all">
                                    {transactionId}
                                </span>
                            </div>
                        )}
                        {state.status === "success" && (
                            <div className="flex justify-between items-center px-5 py-3 text-sm">
                                <span className="text-muted-foreground font-medium">Statut paiement</span>
                                <span className={`font-mono font-bold text-xs ${isConfirmed ? "text-green-600" : "text-yellow-600"}`}>
                                    {state.data.paymentStatus}
                                </span>
                            </div>
                        )}
                    </div>
                )}

                {/* Actions */}
                {state.status !== "loading" && (
                    <div className="flex flex-col sm:flex-row gap-3 w-full">
                        {isConfirmed && orderId && (
                            <Button
                                asChild
                                className="flex-1 rounded-full bg-[#fe0000] hover:bg-red-700 text-white font-bold gap-2"
                            >
                                <Link href={`/cuturama`}>
                                    <Ticket className="size-4" />
                                    Voir les événements
                                </Link>
                            </Button>
                        )}
                        <Button
                            asChild
                            variant="outline"
                            className="flex-1 rounded-full font-bold gap-2"
                        >
                            <Link href="/">
                                <Home className="size-4" />
                                Retour à l&apos;accueil
                            </Link>
                        </Button>
                    </div>
                )}

                <p className="text-xs text-muted-foreground">
                    Un problème ?{" "}
                    <Link href="/a-propos" className="underline text-foreground font-medium">
                        Contactez-nous
                    </Link>
                </p>
            </div>
        </Content>
    );
}
