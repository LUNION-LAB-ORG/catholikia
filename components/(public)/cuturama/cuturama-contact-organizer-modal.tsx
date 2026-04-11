"use client";

import { useState } from "react";
import { User, Mail, MessageSquare } from "lucide-react";
import {
    Dialog,
    DialogContent,
    DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

interface ContactOrganizerModalProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    organizerName?: string;
}

export function ContactOrganizerModal({
    open,
    onOpenChange,
    organizerName,
}: ContactOrganizerModalProps) {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName]   = useState("");
    const [email, setEmail]         = useState("");
    const [message, setMessage]     = useState("");

    const canSubmit = firstName.trim() && lastName.trim() && email.trim() && message.trim();

    const handleSubmit = () => {
        if (!canSubmit) return;
        // TODO: brancher sur l'API
        onOpenChange(false);
        setFirstName(""); setLastName(""); setEmail(""); setMessage("");
    };

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="sm:max-w-lg p-0 overflow-hidden rounded-2xl">
                {/* Header noir */}
                <div className="bg-black px-6 py-5 flex items-center justify-between">
                    <DialogTitle className="text-white font-extrabold text-xl sm:text-2xl uppercase tracking-wide">
                        Contacter l&apos;organisateur
                    </DialogTitle>
                </div>

                {/* Formulaire */}
                <div className="px-6 py-6 flex flex-col gap-5 bg-white">
                    {/* Prénom + Nom */}
                    <div className="flex flex-col sm:flex-row gap-4">
                        <div className="flex-1 flex flex-col gap-1.5">
                            <label className="text-xs font-semibold text-gray-700">Prénom</label>
                            <div className="relative">
                                <Input
                                    placeholder="votre Prénom"
                                    value={firstName}
                                    onChange={(e) => setFirstName(e.target.value)}
                                    className="bg-gray-100 border-0 placeholder:text-gray-400 rounded-full pl-4"
                                />
                            </div>
                        </div>
                        <div className="flex-1 flex flex-col gap-1.5">
                            <label className="text-xs font-semibold text-gray-700">Nom</label>
                            <div className="relative">
                                <Input
                                    placeholder="votre Nom"
                                    value={lastName}
                                    onChange={(e) => setLastName(e.target.value)}
                                    className="bg-gray-100 border-0 placeholder:text-gray-400 rounded-full pl-4"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Email */}
                    <div className="flex flex-col gap-1.5">
                        <label className="text-xs font-semibold text-gray-700">Adresse électronique</label>
                        <Input
                            type="email"
                            placeholder="Votre adresse électronique"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="bg-gray-100 border-0 placeholder:text-gray-400 rounded-full pl-4"
                        />
                    </div>

                    {/* Message */}
                    <div className="flex flex-col gap-1.5">
                        <label className="text-xs font-semibold text-gray-700">Contenu du message</label>
                        <Textarea
                            placeholder="Votre message"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            rows={4}
                            className="bg-gray-100 border-0 placeholder:text-gray-400 rounded-2xl pl-4 resize-none"
                        />
                    </div>

                    {/* Bouton envoyer */}
                    <div className="flex justify-end">
                        <Button
                            onClick={handleSubmit}
                            disabled={!canSubmit}
                            className="bg-[#f5a623] hover:bg-[#e09510] text-white font-bold uppercase tracking-widest px-8 rounded-full"
                        >
                            Envoyer
                        </Button>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
}
