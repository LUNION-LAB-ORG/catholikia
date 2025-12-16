export type BannerPosition =
| 'HEADER'
| 'HOMEPAGE_TOP'
| 'HOMEPAGE_MIDDLE'
| 'HOMEPAGE_BOTTOM'
| 'SIDEBAR_LEFT'
| 'SIDEBAR_RIGHT'
| 'FOOTER'
| 'POPUP'
| 'MOBILE_TOP'
| 'MOBILE_BOTTOM';

export interface IBanner {
	id: number;
	image_path: string;
	position: BannerPosition;
	link: string;
	status: string;
	created_at: string;
	updated_at: string;
	deleted_at: string | null;
	created_by: number;
}

export interface IBannerParams {
	position:string;
}