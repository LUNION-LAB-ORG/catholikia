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

    // ── Image événement (bannière pleine largeur) ──
    eventImageWrapper: {
        position: "relative",
        height: 120,
    },
    eventImage: {
        width: "100%",
        height: 120,
        objectFit: "cover",
    },
    eventImageOverlay: {
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        top: 0,
        backgroundColor: "rgba(0,0,0,0.45)",
        justifyContent: "flex-end",
        paddingHorizontal: 20,
        paddingBottom: 12,
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
        borderBottomColor: "#e5e7eb",
        borderBottomStyle: "dashed",
    },
    tearOffCircle: {
        width: 28,
        height: 28,
        borderRadius: 14,
        backgroundColor: "#f3f4f6",
        border: "1 solid #e5e7eb",
        marginHorizontal: -14,
        zIndex: 1,
    },

    // ── Pied QR ──
    qrFooter: {
        backgroundColor: "#f9fafb",
        paddingHorizontal: 24,
        paddingVertical: 20,
        flexDirection: "column",
        alignItems: "center",
        gap: 12,
        borderTopWidth: 2,
        borderTopColor: "#e5e7eb",
        borderTopStyle: "dashed",
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

                {/* ── Image événement pleine largeur ── */}
                <View style={styles.eventImageWrapper}>
                    <PdfImage src={event.image} style={styles.eventImage} />
                    <View style={styles.eventImageOverlay}>
                        <Text style={{ color: "#ffffff", fontSize: 14, fontFamily: "Helvetica-Bold" }}>
                            {event.title}
                        </Text>
                    </View>
                </View>

                {/* ── Corps ── */}
                <View style={styles.body}>

                    {/* Date / lieu */}
                    <Text style={{ fontSize: 10, color: MUTED }}>
                        {[event.date, event.time].filter(Boolean).join(" · ")}
                        {(event.location || event.city)
                            ? "   " + [event.location, event.city].filter(Boolean).join(", ")
                            : ""}
                    </Text>

                    <View style={styles.divider} />

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

                {/* ── Tear-off ── */}
                <View style={styles.tearOff}>
                    <View style={styles.tearOffCircle} />
                    <View style={styles.tearOffLine} />
                    <View style={styles.tearOffCircle} />
                </View>

                {/* ── Pied QR ── */}
                <View style={styles.qrFooter}>
                    <Text style={{ fontSize: 9, fontFamily: "Helvetica-Bold", textTransform: "uppercase", letterSpacing: 1.5, color: "#374151" }}>
                        {ticketCount > 1 ? `${ticketCount} billets` : "Votre e-billet"}
                    </Text>

                    <View style={{ flexDirection: "row", flexWrap: "wrap", justifyContent: "center", gap: 16 }}>
                        {qrDataUrls.map((url, i) => (
                            <View key={i} style={{ alignItems: "center", gap: 6 }}>
                                {url ? (
                                    <PdfImage src={url} style={styles.qrImage} />
                                ) : null}
                                {ticketCount > 1 && (
                                    <Text style={{ fontSize: 8, color: GRAY }}>Billet {i + 1}</Text>
                                )}
                            </View>
                        ))}
                    </View>

                    <Text style={{ fontSize: 9, color: GRAY, textAlign: "center" }}>
                        Présentez ce QR code à l&apos;entrée. Il est strictement personnel.
                    </Text>
                </View>

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
