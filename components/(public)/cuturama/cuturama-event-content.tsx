"use client";

import { useState } from "react";
import { EventStepper } from "./cuturama-event-stepper";
import { EventDetail } from "./cuturama-event-detail";
import { TicketSelector } from "./cuturama-ticket-selector";
import { VisitorInfoForm } from "./cuturama-visitor-info-form";
import type { PaymentInfo } from "./cuturama-visitor-info-form";
import { PaymentView } from "./cuturama-payment-view";
import { ConfirmationView } from "./cuturama-confirmation-view";
import type { CartItem, CuturamaEvent, TicketType } from "./cuturama.types";

interface EventContentProps {
    event: CuturamaEvent;
}

export function EventContent({ event }: EventContentProps) {
    const [step, setStep] = useState(1);
    const [selectedTicket, setSelectedTicket] = useState<TicketType | undefined>();
    const [cartItems, setCartItems] = useState<CartItem[]>([]);
    const [paymentInfo, setPaymentInfo] = useState<PaymentInfo | undefined>();

    const handleProceedToStep2 = (items: CartItem[], ticket?: TicketType) => {
        setCartItems(items);
        setSelectedTicket(ticket);
        setStep(2);
    };

    const handleProceedToStep3 = (info: PaymentInfo) => {
        setPaymentInfo(info);
        setStep(3);
    };

    return (
        <>
            {/* Stepper */}
            <EventStepper currentStep={step} />

            {/* Contenu selon étape */}
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {step === 1 && (
                    <div className="flex flex-col lg:flex-row gap-8">
                        {/* Gauche : détails + carte */}
                        <div className="flex-1 min-w-0">
                            <EventDetail event={event} />
                        </div>

                        {/* Droite : tickets + organisateur */}
                        <div className="w-full lg:w-80 shrink-0">
                            <TicketSelector
                                event={event}
                                onProceed={handleProceedToStep2}
                            />
                        </div>
                    </div>
                )}

                {step === 2 && (
                    <VisitorInfoForm
                        eventId={event.id}
                        cartItems={cartItems}
                        selectedTicket={selectedTicket}
                        onNext={handleProceedToStep3}
                        onBack={() => setStep(1)}
                    />
                )}

                {step === 3 && (
                    <PaymentView
                        event={event}
                        items={cartItems}
                        paymentInfo={paymentInfo}
                        onConfirm={() => setStep(4)}
                        onBack={() => setStep(2)}
                    />
                )}

                {step === 4 && (
                    <ConfirmationView
                        event={event}
                        items={cartItems}
                        paymentInfo={paymentInfo}
                    />
                )}
            </div>
        </>
    );
}
