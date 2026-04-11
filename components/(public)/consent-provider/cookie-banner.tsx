"use client";
import React from 'react';
import {Button, Card, CardBody, CardFooter, CardHeader, Divider} from "@heroui/react";
import {useConsent} from "@/components/(public)/consent-provider/index";

function CookieBanner() {
	const {consent, accept, decline} = useConsent();

	if (consent !== null) return null

	return (
		<div className="fixed bottom-6 right-6 z-50 w-[420px] max-w-[calc(100vw-3rem)] animate-in slide-in-from-bottom-4 fade-in duration-500">
			<Card
				shadow="lg"
				className="border border-default-200 bg-background/95 backdrop-blur-md backdrop-saturate-150"
			>
				<CardHeader className="flex gap-3 pb-3">
					<div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
						<svg
							className="h-5 w-5 text-primary"
							fill="none"
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
						</svg>
					</div>
					<div className="flex flex-col">
						<h4 className="text-lg font-semibold">Gestion des cookies</h4>
						<p className="text-xs text-default-500">Votre confidentialité nous tient à cœur</p>
					</div>
				</CardHeader>
				<Divider />
				<CardBody className="gap-3 py-4">
					<p className="text-sm text-default-700 leading-relaxed">
						Nous utilisons des cookies et technologies similaires pour analyser l'utilisation de l'application,
						améliorer nos services et mesurer l'audience.
					</p>
					<p className="text-xs text-default-500 leading-relaxed">
						Vous pouvez accepter ou refuser ces cookies. Votre choix n'affectera pas votre accès aux fonctionnalités
						essentielles.
					</p>
				</CardBody>
				<Divider />
				<CardFooter className="flex gap-3 pt-3">
					<Button
						variant="flat"
						color="default"
						className="flex-1"
						onPress={decline}
					>
						Refuser
					</Button>

					<Button
						color="primary"
						className="flex-1"
						onPress={accept}
					>
						Accepter
					</Button>
				</CardFooter>
			</Card>
		</div>
	);
}

export default CookieBanner;