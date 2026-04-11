import Image from "next/image";
import { AlertCircle } from "lucide-react";
import { cn } from "@/lib/utils";

const STEPS = [
    { id: 1, label: "Panier" },
    { id: 2, label: "Informations Aux Visiteurs" },
    { id: 3, label: "Paiement" },
    { id: 4, label: "Confirmation" },
];

interface EventStepperProps {
    currentStep?: number;
}

export function EventStepper({ currentStep = 1 }: EventStepperProps) {
    return (
        <div className=" border-b bg-white">
            <div className="flex items-stretch ">
                {/* Logo Cuturama */}
                <div className="flex items-center justify-center px-4 py-3 border-r bg-gray-50 shrink-0">
                    <div className="relative w-20 h-20 sm:w-14 sm:h-14">
                        <Image
                            src="/assets/cuturama/aris.png"
                            alt="Culturama"
                            fill
                            className="h-full w-full object-contai"
                            sizes="56px"
                        />
                    </div>
                </div>

                {/* Message + Steps */}
                <div className="flex flex-col flex-1 px-4 py-3 gap-2">
                    {/* Message d'avertissement */}
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <AlertCircle className="size-3.5 shrink-0 text-[#fe0000]" />
                        <span>Veuillez remplir ce champ avec des informations valides</span>
                    </div>

                    {/* Barre de progression */}
                    <div className="relative flex items-center justify-between">
                        {/* Ligne de connexion */}
                        <div className="absolute top-4 left-0 right-0 h-px bg-gray-200 z-0" />

                        {STEPS.map((step) => {
                            const isCompleted = step.id < currentStep;
                            const isActive = step.id === currentStep;

                            return (
                                <div
                                    key={step.id}
                                    className="flex flex-col items-center gap-1 z-10 bg-white px-1"
                                >
                                    <div
                                        className={cn(
                                            "w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold border-2 transition-colors",
                                            isCompleted
                                                ? "bg-[#fe0000] border-[#fe0000] text-white"
                                                : isActive
                                                ? "bg-white border-[#fe0000] text-[#fe0000]"
                                                : "bg-white border-gray-300 text-gray-400"
                                        )}
                                    >
                                        {step.id}
                                    </div>
                                    <span
                                        className={cn(
                                            "text-[9px] sm:text-[10px] text-center leading-tight hidden sm:block whitespace-nowrap",
                                            isActive ? "text-[#fe0000] font-semibold" : "text-gray-400"
                                        )}
                                    >
                                        {step.label}
                                    </span>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}
