import AnnuaireDioceses from '@/components/(public)/annuaire';
import TitleBanner from '@/components/common/TitleBanner';
import Content from '@/components/primitives/Content';
import React from 'react';
import {Metadata} from "next";

export function generateMetadata(): Metadata {
	return {
		title: "Annuaire des Diocèses de Côte d'Ivoire",
		description: "Découvrez l'annuaire complet des diocèses de Côte d'Ivoire, incluant les informations de contact, les adresses et les détails importants pour chaque diocèse.",
	};
}

const AnnuairePage = () => {
	return (
		<Content fullWidth className="pt-0">
			<TitleBanner backgroundImage={"/assets/annuaire/bg.jpg"} title="ANNUAIRE DES DIOCESES DE COTE D'IVOIRE"/>
			<AnnuaireDioceses/>
		</Content>
	);
}

export default AnnuairePage;
