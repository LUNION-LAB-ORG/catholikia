import React from 'react';
import Title from "@/components/primitives/Title";
import ActualiteCard from "@/components/(public)/actualites/actualite-card";
import {IActualite} from "@/features/actualite/types/actualite.type";

type AutresActualitesProps = {
	actualites: IActualite[]
}

function AutresActualites({actualites}: AutresActualitesProps) {
	return (
		<div className="lg:col-span-2">
			<Title size="lg" as="h2" className="text-[#151515] uppercase mt-24 my-8 font-bebas">
				Autres nouvelles
			</Title>
			<ul className="space-y-4 grid grid-rows-4">
				{actualites.map((actualite) => (
					<li key={actualite.id}>
						<ActualiteCard orientation="horizontal" actualite={actualite}/>
					</li>
				))}
			</ul>
		</div>
	);
}

export default AutresActualites;