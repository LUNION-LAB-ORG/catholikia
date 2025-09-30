import React from 'react';
import Content from "@/components/primitives/Content";
import Publicite from "@/components/(public)/publicites";
import Section from "@/components/primitives/Section";
import {Badge} from "@/components/ui/badge";
import Title from "@/components/primitives/Title";
import Image from "next/image";
import {detailsEffataText} from "@/app/[locale]/(public)/effata/[slug]/constants";
import {Button} from "@heroui/button";
import {SquareArrowOutUpRight} from "lucide-react";
import EffataAuthorCard from "@/components/(public)/effata/details/effata-author-card";
import AutresActualites from "@/components/(public)/actualites/details/autres-actualites";
import {actualitesFakeData} from "@/app/api/actualites";
import ActualiteCommentairesSection from "@/components/(public)/actualites/details/actualite-commentaires-section";
import MissionSignup from "@/components/don/MissionSignup";

function EffataDetailsPage() {
	return (
		<Content fullWidth className="mt-[4rem]">
			<Publicite position="EFFATA_DETAILS_TOP"/>
			<div className="mt-11 custom-container bg-white grid lg:grid-cols-12 gap-10">
				<Section padding="none" className="col-span-8 space-y-10">
					{/* Catégorie */}
					<Badge className="bg-[#EEEEEE] text-[#333333] px-3 py-1 rounded-full text-sm font-bold">
						Voyages et événements du Pape
					</Badge>
					{/* Titre de l'article */}
					<Title className="text-[#0088FF] text-3xl font-bold uppercase">
						Visite au patriarche suprême des bouddhistes
					</Title>
					<p className="font-semibold text-lg">
						Salutation du Saint-Père au Patriarche bouddhiste le jeudi 21 novembre 2019 au Temple Wat Ratchabophit
						Sathit Maha Simaram (Bangkok).
					</p>
					<Image
						src="/assets/effata/articles/article1.png"
						alt="Article Image"
						width={1035}
						height={643}
						className="rounded-lg"
					/>
					<div className="text-justify" dangerouslySetInnerHTML={{__html: detailsEffataText}}/>
					<div className="flex items-center w-full space-x-6">
						<Button variant="bordered" className="rounded-full uppercase text-[#1D1D1D] font-bold border">
							Partager
						</Button>
						<Button variant="bordered" className="rounded-full uppercase text-[#1D1D1D] font-bold border">
							<SquareArrowOutUpRight className="size-4"/>
							<span>
								Visiter le site du vatican
							</span>
						</Button>
					</div>
				</Section>
				<div className="col-span-4">
					<EffataAuthorCard/>
					<AutresActualites
						actualites={actualitesFakeData.slice(2, 4)}
					/>
				</div>
			</div>
			<ActualiteCommentairesSection/>
			<MissionSignup/>
		</Content>
	);
}

export default EffataDetailsPage;