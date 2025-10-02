import React from 'react';
import { ActualiteCardOptions } from "@/components/(public)/actualites/actualite-card";
import { IActualite } from "@/features/actualite/types/actualite.type";
import ActualiteCategoryBadge from "@/components/(public)/actualites/actualite-category-badge";
import ActualiteCountryBadge from "@/components/(public)/actualites/actualite-country-badge";

function ActualiteImageDecoration({ actualite, options }: { actualite: IActualite, options: ActualiteCardOptions }) {
	console.log('options', options, actualite);

	return (
		<>
			{options?.withCategory && <ActualiteCategoryBadge
				category={actualite.categorie?.nom || 'Général'}
				className="absolute top-2 left-2"
			/>}

			{(options?.withCountry && actualite.country) && <ActualiteCountryBadge
				country={actualite.country}
				className="absolute bottom-2 left-2"
			/>}
		</>
	);
}

export default ActualiteImageDecoration;