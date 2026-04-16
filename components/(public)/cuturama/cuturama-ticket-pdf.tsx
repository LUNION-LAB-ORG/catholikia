"use client";

import {
    Document,
    Page,
    Text,
    View,
    StyleSheet,
    Image as PdfImage,
    Font,
} from "@react-pdf/renderer";
import type { CartItem, CuturamaEvent } from "./cuturama.types";
import type { PaymentInfo } from "./cuturama-visitor-info-form";

// ─── Styles ────────────────────────────────────────────────────────────────
const RED = "#fe0000";
const ORANGE = "#f5a623";
const GRAY = "#6b7280";
const LIGHT = "#f9fafb";

const styles = StyleSheet.create({
    page: {
        backgroundColor: "#ffffff",
        padding: 0,
        fontFamily: "Helvetica",
    },
    // En-tête rouge
    header: {
        backgroundColor: RED,
        paddingVertical: 18,
        paddingHorizontal: 28,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    headerTitle: {
        color: "#ffffff",
        fontSize: 20,
        fontFamily: "Helvetica-Bold",
        letterSpacing: 2,
    },
    headerRef: {
        color: "rgba(255,255,255,0.85)",
        fontSize: 10,
        marginTop: 2,
        letterSpacing: 1,
    },
    // Corps principal
    body: {
        paddingHorizontal: 28,
        paddingVertical: 22,
        flexDirection: "column",
        gap: 16,
    },
    // Bandeau événement
    eventBanner: {
        backgroundColor: LIGHT,
        borderRadius: 8,
        padding: 16,
        flexDirection: "row",
        gap: 14,
        alignItems: "flex-start",
    },
    eventImage: {
        width: 80,
        height: 60,
        borderRadius: 6,
        objectFit: "cover",
    },
    eventTitle: {
        fontSize: 14,
        fontFamily: "Helvetica-Bold",
        marginBottom: 4,
        flexWrap: "wrap",
        maxWidth: 380,
    },
    eventMeta: {
        fontSize: 9,
        color: GRAY,
        marginTop: 2,
    },
    eventMetaRed: {
        fontSize: 9,
        color: RED,
        fontFamily: "Helvetica-Bold",
        marginTop: 2,
    },
    // Séparateur
    divider: {
        borderBottomWidth: 1,
        borderBottomColor: "#e5e7eb",
        borderBottomStyle: "dashed",
        marginVertical: 8,
    },
    // Section titres
    sectionTitle: {
        fontSize: 9,
        fontFamily: "Helvetica-Bold",
        color: GRAY,
        textTransform: "uppercase",
        letterSpacing: 1,
        marginBottom: 6,
    },
    // Lignes tickets
    ticketRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingVertical: 5,
        borderBottomWidth: 1,
        borderBottomColor: "#f3f4f6",
    },
    ticketName: {
        fontSize: 10,
    },
    ticketQty: {
        fontSize: 10,
        color: GRAY,
        marginLeft: 6,
    },
    ticketPrice: {
        fontSize: 10,
        fontFamily: "Helvetica-Bold",
        color: RED,
    },
    // Total
    totalRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 10,
    },
    totalLabel: {
        fontSize: 12,
        fontFamily: "Helvetica-Bold",
        textTransform: "uppercase",
        letterSpacing: 1,
    },
    totalAmount: {
        fontSize: 14,
        fontFamily: "Helvetica-Bold",
        color: RED,
    },
    // Zone QR + pied
    footer: {
        backgroundColor: LIGHT,
        paddingHorizontal: 28,
        paddingVertical: 18,
        flexDirection: "row",
        alignItems: "center",
        gap: 20,
        borderTopWidth: 2,
        borderTopColor: "#e5e7eb",
        borderTopStyle: "dashed",
    },
    qrImage: {
        width: 72,
        height: 72,
    },
    footerText: {
        flex: 1,
    },
    footerTitle: {
        fontSize: 11,
        fontFamily: "Helvetica-Bold",
        marginBottom: 4,
    },
    footerSub: {
        fontSize: 8,
        color: GRAY,
        lineHeight: 1.5,
    },
    badge: {
        backgroundColor: ORANGE,
        borderRadius: 4,
        paddingHorizontal: 6,
        paddingVertical: 2,
        alignSelf: "flex-start",
        marginTop: 2,
    },
    badgeText: {
        color: "#ffffff",
        fontSize: 8,
        fontFamily: "Helvetica-Bold",
    },
});

// ─── Types ─────────────────────────────────────────────────────────────────
interface TicketPDFProps {
    event: CuturamaEvent;
    items: CartItem[];
    bookingRef: string;
    paymentInfo?: PaymentInfo;
    qrDataUrl: string;    // PNG data-URL généré par qrcode.react
    logoDataUrl?: string;      // PNG data-URL du logo Catholikia
    lunionLabDataUrl?: string;  // PNG data-URL du logo L'Union Lab
}

// ─── Document PDF ──────────────────────────────────────────────────────────
export function TicketPDFDocument({
    event,
    items,
    bookingRef,
    paymentInfo,
    qrDataUrl,
    logoDataUrl,
    lunionLabDataUrl,
}: TicketPDFProps) {
    const total = items.reduce((s, { ticket, quantity }) => s + ticket.price * quantity, 0);

    return (
        <Document
            title={`Billet – ${event.title}`}
            author="Cuturama / Catholikia"
        >
            <Page size="A4" style={styles.page}>
                {/* ── En-tête ── */}
                <View style={styles.header}>
                    <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
                        {logoDataUrl && (
                            <View style={{
                                backgroundColor: "#ffffff",
                                borderRadius: 6,
                                paddingHorizontal: 8,
                                paddingVertical: 4,
                            }}>
                                <PdfImage
                                    src={logoDataUrl}
                                    style={{ width: 100, height: 34, objectFit: "contain" }}
                                />
                            </View>
                        )}
                        {!logoDataUrl && (
                            <Text style={styles.headerTitle}>Catholikia</Text>
                        )}
                    </View>
                    <View style={{ alignItems: "flex-end" }}>
                        <Text style={{ color: "rgba(255,255,255,0.7)", fontSize: 8, letterSpacing: 1 }}>
                            RÉFÉRENCE
                        </Text>
                        <Text style={{ color: "#ffffff", fontSize: 16, fontFamily: "Helvetica-Bold", letterSpacing: 2 }}>
                            {bookingRef}
                        </Text>
                    </View>
                </View>

                {/* ── Corps ── */}
                <View style={styles.body}>
                    {/* Bandeau événement */}
                    <View style={styles.eventBanner}>
                        <PdfImage src={event.image} style={styles.eventImage} />
                        <View style={{ flex: 1 }}>
                            <Text style={styles.eventTitle}>{event.title}</Text>
                            <Text style={styles.eventMetaRed}>
                                {event.date}  ·  {event.time}
                            </Text>
                            <Text style={styles.eventMeta}>
                                {event.location}{event.city ? `, ${event.city}` : ""}
                            </Text>
                            <Text style={styles.eventMeta}>
                                Organisateur : {event.organizer}
                            </Text>
                        </View>
                    </View>

                    <View style={styles.divider} />

                    {/* Tickets */}
                    <Text style={styles.sectionTitle}>Détail des billets</Text>
                    {items.map(({ ticket, quantity }) => (
                        <View key={ticket.id} style={styles.ticketRow}>
                            <View style={{ flexDirection: "row", alignItems: "center" }}>
                                <Text style={styles.ticketName}>{ticket.name}</Text>
                                <Text style={styles.ticketQty}>× {quantity}</Text>
                            </View>
                            <Text style={styles.ticketPrice}>
                                {(ticket.price * quantity).toLocaleString("fr-CI")} FCFA
                            </Text>
                        </View>
                    ))}

                    {/* Total */}
                    <View style={styles.totalRow}>
                        <Text style={styles.totalLabel}>Total payé</Text>
                        <Text style={styles.totalAmount}>
                            {total.toLocaleString("fr-CI")} FCFA
                        </Text>
                    </View>

                    {/* Paiement */}
                    {paymentInfo?.method && (
                        <Text style={{ fontSize: 9, color: GRAY, marginTop: 4 }}>
                            Payé via {paymentInfo.method}
                            {paymentInfo.phone ? ` · ${paymentInfo.phone}` : ""}
                        </Text>
                    )}

                    <View style={styles.divider} />

                    {/* Informations acheteur */}
                    {paymentInfo?.firstName && (
                        <View>
                            <Text style={styles.sectionTitle}>Informations acheteur</Text>
                            <Text style={{ fontSize: 11, fontFamily: "Helvetica-Bold", marginBottom: 2 }}>
                                {paymentInfo.firstName} {paymentInfo.lastName}
                            </Text>
                            {paymentInfo.email && (
                                <Text style={{ fontSize: 9, color: GRAY }}>{paymentInfo.email}</Text>
                            )}
                            {paymentInfo.phone && (
                                <Text style={{ fontSize: 9, color: GRAY, marginTop: 1 }}>{paymentInfo.phone}</Text>
                            )}
                        </View>
                    )}
                </View>

                {/* ── Pied QR ── */}
                <View style={styles.footer}>
                    <PdfImage src={qrDataUrl} style={styles.qrImage} />
                    <View style={styles.footerText}>
                        <Text style={styles.footerTitle}>Votre e-billet</Text>
                        <Text style={styles.footerSub}>
                            Présentez ce QR code à l&apos;entrée de l&apos;événement.{"\n"}
                            Il est strictement personnel et non transférable.
                        </Text>
                        <View style={styles.badge}>
                            <Text style={styles.badgeText}>VALABLE 1 ENTRÉE</Text>
                        </View>
                    </View>
                </View>

                {/* ── Attribution L'Union Lab ── */}
                <View style={{ backgroundColor: "#f1f5f9", paddingHorizontal: 28, paddingVertical: 8, flexDirection: "row", alignItems: "center", justifyContent: "center", gap: 8, borderTopWidth: 1, borderTopColor: "#e2e8f0", borderTopStyle: "solid" }}>
                    <Text style={{ fontSize: 7, color: "#64748b" }}>
                        Solution de billetterie développée par
                    </Text>
                    {lunionLabDataUrl ? (
                        <PdfImage src={lunionLabDataUrl} style={{ width: 60, height: 20, objectFit: "contain" }} />
                    ) : (
                        <Text style={{ fontSize: 7, color: "#1e293b", fontFamily: "Helvetica-Bold" }}>L'Union Lab</Text>
                    )}
                    <Text style={{ fontSize: 7, color: "#94a3b8" }}>lunion-lab.com</Text>
                </View>
            </Page>
        </Document>
    );
}
