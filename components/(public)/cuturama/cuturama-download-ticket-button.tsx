"use client";

import { useState, useRef, useCallback } from "react";
import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { pdf } from "@react-pdf/renderer";
import { QRCodeCanvas } from "qrcode.react";
import { TicketPDFDocument } from "./cuturama-ticket-pdf";
import type { CartItem, CuturamaEvent } from "./cuturama.types";
import type { PaymentInfo } from "./cuturama-visitor-info-form";

interface DownloadTicketButtonProps {
    event: CuturamaEvent;
    items: CartItem[];
    bookingRef: string;
    paymentInfo?: PaymentInfo;
}

export function DownloadTicketButton({
    event,
    items,
    bookingRef,
    paymentInfo,
}: DownloadTicketButtonProps) {
    const [loading, setLoading] = useState(false);
    // Canvas caché pour extraire le QR code en data-URL
    const qrCanvasRef = useRef<HTMLDivElement>(null);

    const handleDownload = useCallback(async () => {
        setLoading(true);
        try {
            // 1. Extraire le data-URL du canvas QR code
            const canvas = qrCanvasRef.current?.querySelector("canvas");
            const qrDataUrl = canvas ? canvas.toDataURL("image/png") : "";

            // 2. Charger les logos en data-URL
            const toDataUrl = async (path: string) => {
                const res = await fetch(path);
                const blob = await res.blob();
                return new Promise<string>((resolve) => {
                    const reader = new FileReader();
                    reader.onloadend = () => resolve(reader.result as string);
                    reader.readAsDataURL(blob);
                });
            };
            const [logoDataUrl, lunionLabDataUrl] = await Promise.all([
                toDataUrl("/logo/logo.png"),
                toDataUrl("/assets/logo/lunion_lab.png"),
            ]);

            // 3. Générer le blob PDF
            const blob = await pdf(
                <TicketPDFDocument
                    event={event}
                    items={items}
                    bookingRef={bookingRef}
                    paymentInfo={paymentInfo}
                    qrDataUrl={qrDataUrl}
                    logoDataUrl={logoDataUrl}
                    lunionLabDataUrl={lunionLabDataUrl}
                />
            ).toBlob();

            // 3. Déclencher le téléchargement
            const url = URL.createObjectURL(blob);
            const a = document.createElement("a");
            a.href = url;
            a.download = `billet-${bookingRef}.pdf`;
            a.click();
            URL.revokeObjectURL(url);
        } finally {
            setLoading(false);
        }
    }, [event, items, bookingRef, paymentInfo]);

    // QR pointe vers la page de téléchargement (scannable par l'organisateur)
    const qrValue = `${typeof window !== "undefined" ? window.location.origin : "https://catholikia.com"}/cuturama/ticket/${bookingRef}`;

    return (
        <>
            {/* Canvas QR caché – sert uniquement à générer le PNG pour le PDF */}
            <div ref={qrCanvasRef} className="hidden">
                <QRCodeCanvas value={qrValue} size={256} />
            </div>

            <Button
                variant="outline"
                className="rounded-full gap-2 border-[#fe0000] text-[#fe0000] hover:bg-[#fe0000] hover:text-white"
                onClick={handleDownload}
                disabled={loading}
            >
                <Download className="size-4" />
                {loading ? "Génération…" : "Télécharger le billet"}
            </Button>
        </>
    );
}
