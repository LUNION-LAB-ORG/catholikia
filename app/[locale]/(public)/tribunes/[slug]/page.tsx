import Publicite from '@/components/(public)/publicites';
import Content from '@/components/primitives/Content';
import {Metadata} from "next";
import {obtenirTribuneParSlugAction} from "@/features/tribunes/actions/tribune.action";
import React from "react";
import TribuneDetailsContent from '@/components/(public)/tribunes/details/tribune-details-content';
import {prefetchTribuneQuery} from '@/features/tribunes/queries/tribune-detail.query';


type Props = {
	params: Promise<{ slug: string }>
}

export async function generateMetadata({params}: Props): Promise<Metadata> {
	const slug = (await params).slug;
	const data = await obtenirTribuneParSlugAction(slug);
	const tribune = data.data || null;

	return {
		title: `${tribune ? tribune.titre : 'Actualité'}`,
		description: "Découvrez les tribunes d'opinion, les analyses et les réflexions de la communauté catholique sur des sujets d'actualité, de foi et de société.",
		openGraph: {
			title: `${tribune ? tribune.titre : 'Actualité'}`,
			description: "Découvrez les tribunes d'opinion, les analyses et les réflexions de la communauté catholique sur des sujets d'actualité, de foi et de société.",
			url: `https://www.catholikia.com/tribunes/${slug}`,
			siteName: "Catholikia",
			locale: "fr_FR",
			type: "website",
			images: [
				{
					url: tribune?.image || "https://www.catholikia.com/og-image.jpg",
					width: 800,
					height: 600,
					alt: tribune?.titre,
				}
			],
		},
	}
}

export default async function TribuneDetailPage({params}: Props) {
	const { slug } = await params;
	await prefetchTribuneQuery(slug);
	return (
		<Content fullWidth className='mt-[4rem]'>
			<Publicite position='TRIBUNES_DETAILS_TOP' orientation='horizontal' />
			<TribuneDetailsContent
				slug={slug}
			/>
		</Content>
	)
}
