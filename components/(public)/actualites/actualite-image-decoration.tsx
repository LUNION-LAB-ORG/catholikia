import React from 'react';
import { IActualite } from "@/features/actualite/types/actualite.type";
import ActualiteCategoryBadge from "@/components/(public)/actualites/actualite-category-badge";
import ActualiteCountryBadge from "@/components/(public)/actualites/actualite-country-badge";
import { ActualiteCardOptions } from '../effata/article-card';

function ActualiteImageDecoration({ actualite, options }: { actualite: IActualite, options: ActualiteCardOptions }) {

	return (
		<>
			{options?.withCategory && <ActualiteCategoryBadge
				category={actualite.categorie?.name || 'Général'}
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