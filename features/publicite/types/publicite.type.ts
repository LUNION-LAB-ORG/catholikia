export interface IPublicite {
	id: number;
	title: string;
	imageUrl: string;
	linkUrl: string;
	position: PUBLICITE_POSITIONS;
}

export type PUBLICITE_POSITIONS =
	| 'ACCUEIL_MIDDLE'
	| 'DON_MIDDLE'
	| 'ACTUALITES_MIDDLE'
	| 'DETAILS_ACTUALITES_TOP'
	| 'EFFATA_BOTTOM'
	| 'EFFATA_DETAILS_TOP'
	| 'TRIBUNES_DETAILS_TOP'
	| 'EVENEMENT_TOP'