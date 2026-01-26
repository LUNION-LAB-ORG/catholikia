import {BannerPosition} from "@/features/banner/banner.type";

type Orientation = 'horizontal' | 'vertical';

function positionToOrientation(position: BannerPosition): Orientation {
	switch (position) {
		case 'HEADER':
		case 'HOMEPAGE_TOP':
		case 'HOMEPAGE_BOTTOM':
			return 'horizontal';

		case 'HOMEPAGE_MIDDLE':
		case 'SIDEBAR_LEFT':
		case 'SIDEBAR_RIGHT':
		case 'FOOTER':
		case 'POPUP':
		case 'MOBILE_TOP':
		case 'MOBILE_BOTTOM':
			return 'vertical';

		default:
			// TypeScript s'assure que tous les cas sont couverts
			return position;
	}
}

export {
	positionToOrientation
}