import EffataDetailsContent from '@/components/(public)/effata/details';
import Publicite from "@/components/(public)/publicites";
import CommentairesSection from "@/components/common/commentaires";
import MissionSignup from "@/components/don/MissionSignup";
import Content from "@/components/primitives/Content";
import {Metadata} from "next";
import {obtenirEffataParSlugAction} from "@/features/effata/actions/effata.action";

type Props = {
	params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
	const slug = (await params).slug;
	const data = await obtenirEffataParSlugAction(slug);
	const effata = data.data || null;

	return {
		title: `${effata ? effata.titre : 'Effata'}`,
		description: "Restez informé des dernières nouvelles, événements et articles inspirants de la communauté catholique.",
		openGraph: {
			title: `${effata ? effata.titre : 'Effata'}`,
			description: "Restez informé des dernières nouvelles, événements et articles inspirants de la communauté catholique.",
			url: `https://www.catholikia.com/effata/${slug}`,
			siteName: "Catholikia",
			locale: "fr_FR",
			type: "website",
			images: [
				{
					url: effata?.image || "https://www.catholikia.com/og-image.jpg",
					width: 800,
					height: 600,
					alt: effata?.titre,
				}
			],
		},
	}
}

async function EffataDetailsPage({ params }: Props) {
	const slug = (await params).slug;
	return (
		<Content fullWidth className="mt-[4rem]">
			<Publicite position="EFFATA_DETAILS_TOP" />
			<EffataDetailsContent
				slug={slug}
			/>
			<CommentairesSection
				entityId={slug}
				entityType="effata"
			/>
			<MissionSignup />
		</Content>
	);
}

export default EffataDetailsPage;