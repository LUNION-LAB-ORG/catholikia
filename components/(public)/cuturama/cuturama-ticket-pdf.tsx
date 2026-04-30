"use client";

import {
    Document,
    Page,
    Text,
    View,
    StyleSheet,
    Image as PdfImage,
} from "@react-pdf/renderer";
import type { CartItem, CuturamaEvent } from "./cuturama.types";
import type { PaymentInfo } from "./cuturama-visitor-info-form";

// ─── Constantes ────────────────────────────────────────────────────────────
const RED = "#fe0000";
const GRAY = "#6b7280";
const MUTED = "#9ca3af";

const styles = StyleSheet.create({
    page: {
        backgroundColor: "#ffffff",
        padding: 0,
        fontFamily: "Helvetica",
    },

    // ── En-tête rouge ──
    header: {
        backgroundColor: RED,
        paddingVertical: 12,
        paddingHorizontal: 24,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },

    // ── Bandeau nom événement (sans image) ──
    eventTitleBand: {
        backgroundColor: "#111827",
        paddingHorizontal: 24,
        paddingVertical: 14,
    },

    // ── Corps principal ──
    body: {
        paddingHorizontal: 24,
        paddingVertical: 20,
        backgroundColor: "#ffffff",
        flexDirection: "column",
        gap: 0,
    },

    // ── Séparateurs ──
    divider: {
        borderBottomWidth: 1,
        borderBottomColor: "#e5e7eb",
        borderBottomStyle: "solid",
        marginVertical: 12,
    },

    // ── Rangées tickets ──
    ticketRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingVertical: 4,
    },

    // ── Passe-partout (tear-off) ──
    tearOff: {
        height: 28,
        backgroundColor: "#ffffff",
        flexDirection: "row",
        alignItems: "center",
        overflow: "hidden",
    },
    tearOffLine: {
        flex: 1,
        borderBottomWidth: 2,
        borderBottomColor: "#d1d5db",
        borderBottomStyle: "dashed",
    },
    tearOffCircle: {
        width: 28,
        height: 28,
        borderRadius: 14,
        backgroundColor: "#f3f4f6",
        border: "1 solid #d1d5db",
        marginHorizontal: -14,
        zIndex: 1,
    },

    // ── Stub QR individuel ──
    qrStub: {
        backgroundColor: "#f9fafb",
        paddingHorizontal: 24,
        paddingVertical: 16,
        flexDirection: "row",
        alignItems: "center",
        gap: 20,
    },
    qrImage: {
        width: 80,
        height: 80,
        borderRadius: 8,
        border: "1 solid #e5e7eb",
        backgroundColor: "#ffffff",
        padding: 4,
    },

    // ── Attribution ──
    attribution: {
        backgroundColor: "#f1f5f9",
        paddingHorizontal: 24,
        paddingVertical: 8,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        gap: 8,
        borderTopWidth: 1,
        borderTopColor: "#e2e8f0",
        borderTopStyle: "solid",
    },
});

// ─── Types ─────────────────────────────────────────────────────────────────
interface TicketPDFProps {
    event: CuturamaEvent;
    items: CartItem[];
    bookingRef: string;
    paymentInfo?: PaymentInfo;
    qrDataUrls: string[];   // PNG data-URLs générés par qrcode.react (un par ticket)
    logoDataUrl?: string;
    lunionLabDataUrl?: string;
}

// ─── Document PDF ──────────────────────────────────────────────────────────
export function TicketPDFDocument({
    event,
    items,
    bookingRef,
    paymentInfo,
    qrDataUrls,
    logoDataUrl,
    lunionLabDataUrl,
}: TicketPDFProps) {
    const total = items.reduce((s, { ticket, quantity }) => s + ticket.price * quantity, 0);
    const ticketCount = qrDataUrls.length;

    return (
        <Document
            title={`Billet – ${event.title}`}
            author="Cuturama / Catholikia"
        >
            <Page size="A4" style={styles.page}>

                {/* ── En-tête rouge ── */}
                <View style={styles.header}>
                    {logoDataUrl ? (
                        <View style={{
                            backgroundColor: "#ffffff",
                            borderRadius: 6,
                            paddingHorizontal: 8,
                            paddingVertical: 4,
                        }}>
                            <PdfImage
                                src={logoDataUrl}
                                style={{ width: 100, height: 30, objectFit: "contain" }}
                            />
                        </View>
                    ) : (
                        <Text style={{ color: "#ffffff", fontSize: 18, fontFamily: "Helvetica-Bold", letterSpacing: 2 }}>
                            Catholikia
                        </Text>
                    )}
                    <View style={{ alignItems: "flex-end" }}>
                        <Text style={{ color: "rgba(255,255,255,0.75)", fontSize: 7, letterSpacing: 2, textTransform: "uppercase" }}>
                            Référence
                        </Text>
                        <Text style={{ color: "#ffffff", fontSize: 14, fontFamily: "Helvetica-Bold", letterSpacing: 2 }}>
                            {bookingRef}
                        </Text>
                    </View>
                </View>

                {/* ── Bandeau nom événement (sans image) ── */}
                <View style={styles.eventTitleBand}>
                    <Text style={{ color: "#ffffff", fontSize: 15, fontFamily: "Helvetica-Bold" }}>
                        {event.title}
                    </Text>
                    {(event.date || event.time) && (
                        <Text style={{ color: "rgba(255,255,255,0.7)", fontSize: 9, marginTop: 4 }}>
                            {[event.date, event.time].filter(Boolean).join(" · ")}
                            {(event.location || event.city)
                                ? "  –  " + [event.location, event.city].filter(Boolean).join(", ")
                                : ""}
                        </Text>
                    )}
                </View>

                {/* ── Corps ── */}
                <View style={styles.body}>

                    {/* Lignes tickets */}
                    {items.map(({ ticket, quantity }) => (
                        <View key={ticket.id} style={styles.ticketRow}>
                            <Text style={{ fontSize: 11 }}>
                                {ticket.name}
                                <Text style={{ color: GRAY }}> × {quantity}</Text>
                            </Text>
                            <Text style={{ fontSize: 11, fontFamily: "Helvetica-Bold", color: RED }}>
                                {(ticket.price * quantity).toLocaleString("fr-CI")} FCFA
                            </Text>
                        </View>
                    ))}

                    <View style={styles.divider} />

                    {/* Total */}
                    <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                        <Text style={{ fontSize: 13, fontFamily: "Helvetica-Bold", textTransform: "uppercase", letterSpacing: 1 }}>
                            Total
                        </Text>
                        <Text style={{ fontSize: 15, fontFamily: "Helvetica-Bold", color: RED }}>
                            {total.toLocaleString("fr-CI")} FCFA
                        </Text>
                    </View>

                    {/* Acheteur */}
                    {paymentInfo?.firstName && (
                        <>
                            <View style={styles.divider} />
                            <Text style={{ fontSize: 8, fontFamily: "Helvetica-Bold", color: MUTED, textTransform: "uppercase", letterSpacing: 1.5, marginBottom: 4 }}>
                                Acheteur
                            </Text>
                            <Text style={{ fontSize: 11, fontFamily: "Helvetica-Bold" }}>
                                {paymentInfo.firstName} {paymentInfo.lastName}
                            </Text>
                            {paymentInfo.email ? (
                                <Text style={{ fontSize: 9, color: GRAY, marginTop: 2 }}>{paymentInfo.email}</Text>
                            ) : null}
                        </>
                    )}
                </View>

                {/* ── Un stub par QR code, séparés par un tear-off ── */}
                {qrDataUrls.map((url, i) => (
                    <View key={i}>
                        {/* Tear-off */}
                        <View style={styles.tearOff}>
                            <View style={styles.tearOffCircle} />
                            <View style={styles.tearOffLine} />
                            <View style={styles.tearOffCircle} />
                        </View>

                        {/* Stub QR */}
                        <View style={styles.qrStub}>
                            {url ? (
                                <PdfImage src={url} style={styles.qrImage} />
                            ) : null}
                            <View style={{ flex: 1 }}>
                                <Text style={{ fontSize: 9, fontFamily: "Helvetica-Bold", textTransform: "uppercase", letterSpacing: 1.5, color: "#374151", marginBottom: 4 }}>
                                    {ticketCount > 1 ? `Billet ${i + 1} / ${ticketCount}` : "Votre e-billet"}
                                </Text>
                                <Text style={{ fontSize: 10, fontFamily: "Helvetica-Bold", marginBottom: 2 }}>
                                    {event.title}
                                </Text>
                                <Text style={{ fontSize: 8, color: GRAY }}>
                                    Présentez ce QR code à l&apos;entrée.{"\n"}Il est strictement personnel et non transférable.
                                </Text>
                            </View>
                        </View>
                    </View>
                ))}

                {/* ── Attribution L'Union Lab ── */}
                <View style={styles.attribution}>
                    <Text style={{ fontSize: 7, color: "#64748b" }}>
                        Solution de billetterie développée par
                    </Text>
                    {lunionLabDataUrl ? (
                        <PdfImage src={lunionLabDataUrl} style={{ width: 60, height: 18, objectFit: "contain" }} />
                    ) : (
                        <Text style={{ fontSize: 7, color: "#1e293b", fontFamily: "Helvetica-Bold" }}>L&apos;Union Lab</Text>
                    )}
                    <Text style={{ fontSize: 7, color: "#94a3b8" }}>lunion-lab.com</Text>
                </View>

            </Page>
        </Document>
    );
}
