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
    qrCodes: string[];
    qrCodeLoading?: boolean;
    paymentInfo?: PaymentInfo;
}

export function DownloadTicketButton({
    event,
    items,
    bookingRef,
    qrCodes,
    qrCodeLoading = false,
    paymentInfo,
}: DownloadTicketButtonProps) {
    const [loading, setLoading] = useState(false);
    const qrCanvasContainerRef = useRef<HTMLDivElement>(null);

    const handleDownload = useCallback(async () => {
        setLoading(true);
        try {
            // 1. Extraire les data-URLs de tous les canvas QR code
            const canvases = qrCanvasContainerRef.current?.querySelectorAll("canvas");
            const qrDataUrls = canvases
                ? Array.from(canvases).map((c) => c.toDataURL("image/png"))
                : qrCodes.map(() => "");

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
                    qrDataUrls={qrDataUrls}
                    logoDataUrl={logoDataUrl}
                    lunionLabDataUrl={lunionLabDataUrl}
                />
            ).toBlob();

            // 4. Déclencher le téléchargement
            const url = URL.createObjectURL(blob);
            const a = document.createElement("a");
            a.href = url;
            a.download = `billet-${bookingRef}.pdf`;
            a.click();
            URL.revokeObjectURL(url);
        } finally {
            setLoading(false);
        }
    }, [event, items, bookingRef, qrCodes, paymentInfo]);

    return (
        <>
            {/* Canvas QR cachés – un par ticket */}
            <div ref={qrCanvasContainerRef} className="hidden">
                {qrCodes.map((code, i) => (
                    <QRCodeCanvas key={i} value={code} size={256} />
                ))}
            </div>

            <Button
                variant="outline"
                className="rounded-full gap-2 border-[#fe0000] text-[#fe0000] hover:bg-[#fe0000] hover:text-white"
                onClick={handleDownload}
                disabled={loading || qrCodeLoading}
            >
                <Download className="size-4" />
                {qrCodeLoading ? "Chargement du billet…" : loading ? "Génération…" : "Télécharger le billet"}
            </Button>
        </>
    );
}
