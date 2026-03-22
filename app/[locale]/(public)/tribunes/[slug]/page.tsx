import Publicite from '@/components/(public)/publicites';
import Content from '@/components/primitives/Content';
import {Metadata} from "next";
import {obtenirToutesLesTribunesAction, obtenirTribuneParSlugAction} from "@/features/tribunes/actions/tribune.action";
import {Badge} from "@/components/ui/badge";
import {Calendar} from "lucide-react";
import {dateFormat} from "@/utils/date-utils";
import Title from "@/components/primitives/Title";
import Image from "next/image";
import Section from "@/components/primitives/Section";
import React from "react";
import {notFound} from "next/navigation";

type Props = {
	params: Promise<{ slug: string }>
}

export const revalidate = 3600;

export async function generateStaticParams() {
	const tribunes = await obtenirToutesLesTribunesAction({page: 1, size: 100});

	return tribunes.data?.data.map(tribune => ({
		slug: tribune.slug,
	})) || [];
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
	const {slug} = await params;
	const {data: tribune} = await obtenirTribuneParSlugAction(slug);

	if (!tribune) {
		return notFound();
	}

	return (
		<Content fullWidth className='mt-[4rem]'>
			<Publicite position='TRIBUNES_DETAILS_TOP' orientation='horizontal'/>
			<Section className='mt-10 custom-container'>
				<div className="flex items-center text-sm mb-10">
					<Badge className="rounded-full text-sm bg-[#BEFFFF] px-4 mr-2 text-wrap">{tribune.theme || "theme"}</Badge>
					<span className="ml-2 text-[#6B7280] inline-flex items-center text-sm tracking-normal">
					<Calendar className='size-4 mr-2'/>
						{dateFormat(tribune.published_at)}
				</span>
				</div>
				<Title className='font-normal mb-5'>
					{tribune.titre}
				</Title>
				{/*<div className='flex items-center mb-5'>*/}
				{/*	<Avatar className='mr-5 size-24'>*/}
				{/*		<AvatarImage src={tribune.author} />*/}
				{/*		<AvatarFallback>*/}
				{/*			{tribune.author}*/}
				{/*		</AvatarFallback>*/}
				{/*	</Avatar>*/}
				{/*	<div>*/}
				{/*		<p className='font-bold text-2xl text-[#151515]'>{tribune.author}</p>*/}
				{/*		<p className='text-base text-[#595959] font-bold'>Archevêque de Saint-Michel</p>*/}
				{/*	</div>*/}
				{/*</div>*/}
				<div className='relative w-full h-screen mb-10 rounded-4xl overflow-hidden'>
					<Image
						src={tribune.image}
						alt={tribune.titre}
						width={1920}
						height={1080}
						className='object-cover w-full h-full rounded-lg'
					/>
				</div>
				<div className="prose max-w-none text-justify" dangerouslySetInnerHTML={{__html: tribune.contenu}}/>
			</Section>
			{/*<TribuneDetailsContent*/}
			{/*	slug={slug}*/}
			{/*/>*/}
		</Content>
	)
}
