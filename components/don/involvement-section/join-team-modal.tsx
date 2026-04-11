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
	Textarea,
	Divider,
} from "@heroui/react";
import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import emailjs from "@emailjs/browser";
import { Heart, Mail, Phone, User, MessageSquare, Send, CheckCircle2 } from "lucide-react";

const schema = z.object({
	firstName: z.string().min(2, "Le prénom est requis"),
	lastName: z.string().min(2, "Le nom est requis"),
	phone: z
		.string()
		.min(8, "Numéro invalide")
		.regex(/^[+\d\s\-()]+$/, "Format invalide"),
	email: z.string().email("Email invalide"),
	message: z.string().min(20, "Veuillez écrire au moins 20 caractères pour motiver votre demande"),
});

type FormValues = z.infer<typeof schema>;

type Props = {
	isOpen: boolean;
	onOpenChange: (open: boolean) => void;
};

export default function JoinTeamModal({ isOpen, onOpenChange }: Props) {
	const [isSuccess, setIsSuccess] = useState(false);
	const [isLoading, setIsLoading] = useState(false);
	const [submitError, setSubmitError] = useState<string | null>(null);

	const {
		control,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm<FormValues>({
		resolver: zodResolver(schema),
		defaultValues: {
			firstName: "",
			lastName: "",
			phone: "",
			email: "",
			message: "",
		},
	});

	const onSubmit = async (data: FormValues) => {
		setIsLoading(true);
		setSubmitError(null);
		try {
			await emailjs.send(
				process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
				process.env.NEXT_PUBLIC_EMAILJS_BENEVOLE_TEMPLATE_ID!,
				{
					from_firstname: data.firstName,
					from_lastname: data.lastName,
					from_phone: data.phone,
					from_email: data.email,
					message: data.message,
				},
				{
					publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
				}
			);
			setIsSuccess(true);
		} catch {
			setSubmitError("Une erreur est survenue. Veuillez réessayer.");
		} finally {
			setIsLoading(false);
		}
	};

	const handleClose = (open: boolean) => {
		if (!open) {
			reset();
			setIsSuccess(false);
			setSubmitError(null);
		}
		onOpenChange(open);
	};

	return (
		<Modal
			isOpen={isOpen}
			onOpenChange={handleClose}
			size="2xl"
			scrollBehavior="inside"
			classNames={{
				backdrop: "bg-gradient-to-t from-secondary/30 to-secondary/10 backdrop-blur-sm",
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
								<div className="p-2 rounded-xl bg-secondary/10">
									<Heart className="text-secondary" size={22} />
								</div>
								<div>
									<h2 className="text-xl font-bold text-gray-900">Devenez bénévole</h2>
									<p className="text-sm font-normal text-gray-500">
										Remplissez ce formulaire et nous vous contacterons
									</p>
								</div>
							</div>
						</ModalHeader>

						<ModalBody className="px-6 py-4">
							{isSuccess ? (
								<div className="flex flex-col items-center justify-center py-10 gap-4 text-center">
									<div className="p-4 rounded-full bg-success/10">
										<CheckCircle2 className="text-success" size={48} />
									</div>
									<h3 className="text-xl font-bold text-gray-900">Demande envoyée !</h3>
									<p className="text-gray-500 max-w-sm">
										Merci pour votre intérêt. Notre équipe examinera votre demande et vous
										contactera dans les plus brefs délais.
									</p>
									<Button
										color="secondary"
										variant="flat"
										onPress={() => {
											reset();
											setIsSuccess(false);
											onClose();
										}}
									>
										Fermer
									</Button>
								</div>
							) : (
								<form
									id="benevole-form"
									onSubmit={handleSubmit(onSubmit)}
									className="flex flex-col gap-5"
								>
									{/* Nom & Prénom */}
									<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
										<Controller
											name="firstName"
											control={control}
											render={({ field }) => (
												<Input
													{...field}
													label="Prénom"
													placeholder="Jean"
													isRequired
													startContent={
														<User size={16} className="text-default-400 shrink-0" />
													}
													isInvalid={!!errors.firstName}
													errorMessage={errors.firstName?.message}
													classNames={{ label: "font-medium" }}
												/>
											)}
										/>
										<Controller
											name="lastName"
											control={control}
											render={({ field }) => (
												<Input
													{...field}
													label="Nom"
													placeholder="Kouadio"
													isRequired
													startContent={
														<User size={16} className="text-default-400 shrink-0" />
													}
													isInvalid={!!errors.lastName}
													errorMessage={errors.lastName?.message}
													classNames={{ label: "font-medium" }}
												/>
											)}
										/>
									</div>

									<Divider className="opacity-50" />

									{/* Téléphone & Email */}
									<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
										<Controller
											name="phone"
											control={control}
											render={({ field }) => (
												<Input
													{...field}
													label="Numéro de téléphone"
													placeholder="+225 07 00 00 00 00"
													isRequired
													startContent={
														<Phone size={16} className="text-default-400 shrink-0" />
													}
													isInvalid={!!errors.phone}
													errorMessage={errors.phone?.message}
													classNames={{ label: "font-medium" }}
												/>
											)}
										/>
										<Controller
											name="email"
											control={control}
											render={({ field }) => (
												<Input
													{...field}
													label="Adresse email"
													placeholder="kouadio@exemple.com"
													type="email"
													isRequired
													startContent={
														<Mail size={16} className="text-default-400 shrink-0" />
													}
													isInvalid={!!errors.email}
													errorMessage={errors.email?.message}
													classNames={{ label: "font-medium" }}
												/>
											)}
										/>
									</div>

									<Divider className="opacity-50" />

									{/* Message de motivation */}
									<Controller
										name="message"
										control={control}
										render={({ field }) => (
											<Textarea
												{...field}
												label="Message de motivation"
												placeholder="Expliquez en quelques mots pourquoi vous souhaitez rejoindre notre équipe de bénévoles…"
												isRequired
												minRows={4}
												maxRows={6}
												startContent={
													<MessageSquare
														size={16}
														className="text-default-400 shrink-0 mt-1"
													/>
												}
												isInvalid={!!errors.message}
												errorMessage={errors.message?.message}
												classNames={{
													label: "font-medium",
													input: "resize-none",
												}}
											/>
										)}
									/>

									{submitError && (
										<p className="text-sm text-danger text-center">{submitError}</p>
									)}
								</form>
							)}
						</ModalBody>

						{!isSuccess && (
							<ModalFooter className="px-6 pb-6 flex items-center gap-3">
								<Button variant="flat" color="default" onPress={onClose} className="flex-1">
									Annuler
								</Button>
								<Button
									type="submit"
									form="benevole-form"
									color="primary"
									isLoading={isLoading}
									endContent={!isLoading && <Send size={16} />}
									className="flex-1 font-semibold"
								>
									Envoyer ma demande
								</Button>
							</ModalFooter>
						)}
					</>
				)}
			</ModalContent>
		</Modal>
	);
}
