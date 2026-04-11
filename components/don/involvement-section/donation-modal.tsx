"use client";
import React, { useState } from "react";
import {
	Modal,
	ModalContent,
	ModalHeader,
	ModalBody,
	ModalFooter,
	Button,
	Input,
	Chip,
} from "@heroui/react";
import { HandCoins, Phone, Wallet } from "lucide-react";

type Props = {
	isOpen: boolean;
	onOpenChange: (open: boolean) => void;
};

const PRESET_AMOUNTS = [1000, 2500, 5000, 10000, 25000, 50000];

export default function DonationModal({ isOpen, onOpenChange }: Props) {
	const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
	const [customAmount, setCustomAmount] = useState("");
	const [phone, setPhone] = useState("");
	const [phoneError, setPhoneError] = useState("");
	const [amountError, setAmountError] = useState("");

	const finalAmount = customAmount ? Number(customAmount) : selectedAmount;

	const handleSelectPreset = (amount: number) => {
		setSelectedAmount(amount);
		setCustomAmount("");
		setAmountError("");
	};

	const handleCustomAmountChange = (val: string) => {
		setCustomAmount(val.replace(/\D/g, ""));
		setSelectedAmount(null);
		setAmountError("");
	};

	const handleClose = (open: boolean) => {
		if (!open) {
			setSelectedAmount(null);
			setCustomAmount("");
			setPhone("");
			setPhoneError("");
			setAmountError("");
		}
		onOpenChange(open);
	};

	const handleSubmit = () => {
		let valid = true;
		if (!finalAmount || finalAmount <= 0) {
			setAmountError("Veuillez sélectionner ou saisir un montant");
			valid = false;
		}
		if (!phone || phone.length < 8) {
			setPhoneError("Veuillez entrer un numéro valide");
			valid = false;
		}
		if (!valid) return;
		// TODO: intégration API paiement
		console.log({ amount: finalAmount, phone });
	};

	return (
		<Modal
			isOpen={isOpen}
			onOpenChange={handleClose}
			size="lg"
			classNames={{
				backdrop: "bg-gradient-to-t from-primary/20 to-primary/5 backdrop-blur-sm",
				base: "border-none shadow-2xl",
				header: "border-b border-default-100 pb-4",
				footer: "border-t border-default-100 pt-4",
			}}
		>
			<ModalContent>
				{(onClose) => (
					<>
						<ModalHeader className="flex flex-col gap-1 pt-6 px-6">
							<div className="flex items-center gap-3">
								<div className="p-2 rounded-xl bg-primary/10">
									<HandCoins className="text-primary" size={22} />
								</div>
								<div>
									<h2 className="text-xl font-bold text-gray-900">Nous soutenir</h2>
									<p className="text-sm font-normal text-gray-500">
										Votre générosité fait la différence
									</p>
								</div>
							</div>
						</ModalHeader>

						<ModalBody className="px-6 py-5 flex flex-col gap-6">
							{/* Montants prédéfinis */}
							<div className="flex flex-col gap-3">
								<p className="text-sm font-semibold text-gray-700">Choisissez un montant</p>
								<div className="grid grid-cols-3 gap-2">
									{PRESET_AMOUNTS.map((amount) => (
										<button
											key={amount}
											type="button"
											onClick={() => handleSelectPreset(amount)}
											className={`
												rounded-xl py-3 px-2 text-sm font-semibold border-2 transition-all duration-200
												${
													selectedAmount === amount
														? "border-primary bg-primary text-white shadow-md scale-[1.03]"
														: "border-default-200 bg-default-50 text-gray-700 hover:border-primary/50 hover:bg-primary/5"
												}
											`}
										>
											{amount.toLocaleString("fr-FR")} F
										</button>
									))}
								</div>
								{amountError && !customAmount && (
									<p className="text-xs text-danger">{amountError}</p>
								)}
							</div>

							{/* Montant personnalisé */}
							<div className="flex flex-col gap-2">
								<p className="text-sm font-semibold text-gray-700">Ou entrez un montant</p>
								<Input
									placeholder="Ex : 15 000"
									value={customAmount}
									onValueChange={handleCustomAmountChange}
									type="text"
									inputMode="numeric"
									isInvalid={!!amountError && !!customAmount}
									errorMessage={amountError}
									startContent={<Wallet size={16} className="text-default-400 shrink-0" />}
									endContent={
										<span className="text-default-400 text-sm shrink-0">FCFA</span>
									}
									classNames={{ label: "font-medium" }}
								/>
							</div>

							{/* Récapitulatif montant */}
							{finalAmount && finalAmount > 0 ? (
								<div className="flex items-center justify-between rounded-xl bg-primary/5 border border-primary/20 px-4 py-3">
									<span className="text-sm text-gray-600">Montant sélectionné</span>
									<Chip color="primary" variant="flat" size="sm" className="font-bold text-base px-3">
										{finalAmount.toLocaleString("fr-FR")} FCFA
									</Chip>
								</div>
							) : null}

							{/* Téléphone */}
							<div className="flex flex-col gap-2">
								<p className="text-sm font-semibold text-gray-700">Numéro Mobile Money</p>
								<Input
									placeholder="+225 07 00 00 00 00"
									value={phone}
									onValueChange={(val) => {
										setPhone(val);
										setPhoneError("");
									}}
									type="tel"
									isRequired
									isInvalid={!!phoneError}
									errorMessage={phoneError}
									startContent={<Phone size={16} className="text-default-400 shrink-0" />}
									classNames={{ label: "font-medium" }}
								/>
								<p className="text-xs text-gray-400">
									Orange Money, MTN MoMo, Wave — numéro associé à votre compte
								</p>
							</div>
						</ModalBody>

						<ModalFooter className="px-6 pb-6 flex items-center gap-3">
							<Button variant="flat" color="default" onPress={onClose} className="flex-1">
								Annuler
							</Button>
							<Button
								color="primary"
								onPress={handleSubmit}
								endContent={<HandCoins size={16} />}
								className="flex-1 font-semibold"
							>
								Confirmer le don
							</Button>
						</ModalFooter>
					</>
				)}
			</ModalContent>
		</Modal>
	);
}

