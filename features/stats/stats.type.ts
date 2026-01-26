export interface IStats {
	type: StatsType;
	id: string;
	event: "view" | "read" | "click";
}

export enum StatsType {
	TRIBUNE = 'tribune',
	DIOCESE = 'dioces',
	ACTUALITE = 'actualite',
	EFFATA = 'effata',
	TEMOIGNAGE = 'temoignage',
	LECTIO = 'lexio-divina',
	EVENT = 'event',
}