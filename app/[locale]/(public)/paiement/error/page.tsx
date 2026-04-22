import { Metadata } from "next";
import { Link } from "@/i18n/navigation";
import { XCircle, RotateCcw, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import Content from "@/components/primitives/Content";
import Image from "next/image";

export const metadata: Metadata = {
    title: "Paiement échoué – Catholikia",
    description: "Votre paiement Wave n'a pas abouti.",
};

type Props = {
    searchParams: Promise<{ error_code?: string; message?: string; booking_ref?: string }>;
};

const ERROR_MESSAGES: Record<string, string> = {
    cancelled: "Le paiement a été annulé.",
    insufficient_funds: "Solde insuffisant sur votre compte Wave.",
    expired: "La session de paiement a expiré.",
    failed: "Le paiement a échoué. Veuillez réessayer.",
};

export default async function PaiementErrorPage({ searchParams }: Props) {
    const { error_code, message, booking_ref } = await searchParams;

    const errorMessage =
        message ||
        (error_code ? ERROR_MESSAGES[error_code] : null) ||
        "Une erreur est survenue lors du paiement. Veuillez réessayer.";

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

                {/* Icône erreur */}
                <div className="relative">
                    <div className="w-24 h-24 rounded-full bg-red-100 flex items-center justify-center">
                        <XCircle className="size-12 text-[#fe0000] stroke-[1.5]" />
                    </div>
                </div>

                {/* Titre */}
                <div className="flex flex-col gap-2">
                    <h1 className="text-3xl font-extrabold tracking-tight text-gray-900">
                        Paiement non abouti
                    </h1>
                    <p className="text-muted-foreground text-sm max-w-sm">
                        {errorMessage}
                    </p>
                </div>

                {/* Détails erreur */}
                {error_code && (
                    <div className="w-full rounded-xl border border-red-100 bg-red-50 text-left">
                        <div className="flex justify-between items-center px-5 py-3 text-sm">
                            <span className="text-red-600 font-medium">Code d&apos;erreur</span>
                            <span className="font-mono font-semibold text-xs text-red-700">
                                {error_code}
                            </span>
                        </div>
                    </div>
                )}

                {/* Actions */}
                <div className="flex flex-col sm:flex-row gap-3 w-full">
                    <Button
                        asChild
                        className="flex-1 rounded-full bg-[#fe0000] hover:bg-red-700 text-white font-bold gap-2"
                    >
                        <Link href="/cuturama">
                            <RotateCcw className="size-4" />
                            Réessayer
                        </Link>
                    </Button>
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

                <p className="text-xs text-muted-foreground">
                    Besoin d&apos;aide ?{" "}
                    <Link href="/a-propos" className="underline text-foreground font-medium">
                        Contactez-nous
                    </Link>
                </p>
            </div>
        </Content>
    );
}
