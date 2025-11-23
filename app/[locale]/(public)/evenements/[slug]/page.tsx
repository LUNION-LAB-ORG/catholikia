import React from 'react';
import Content from "@/components/primitives/Content";
import Publicite from "@/components/(public)/publicites";
import {prefetchEventQuery} from "@/features/event/queries/event-detail.query";
import EvenementDetailsContent from "@/components/(public)/evenement/details/evenement-details-content";
import {obtenirEventParSlugAction} from "@/features/event/actions/event.action";
import {Event, WithContext} from 'schema-dts'
import {notFound} from "next/navigation";
import {siteConfig} from "@/config/site";
import {removeHtmlTags} from "@/utils/html-to-text";
import {Metadata} from "next";

type EventPageProps = {
	params: Promise<{ slug: string }>
};

export async function generateMetadata({params}: EventPageProps): Promise<Metadata> {
	const {slug} = await params;
	const {data:event} = await obtenirEventParSlugAction(slug);

	if (!event) {
		return {
			title: "Événement non trouvé",
			description: "L'événement que vous recherchez n'existe pas.",
		};
	}

	const description = removeHtmlTags(event.contenu).slice(0, 160);
	const url = `${siteConfig.baseUrl}/evenements/${event.slug}`;

	return {
		title: event.title,
		description,
		openGraph: {
			title: event.title,
			description,
			url,
			images: [
				{
					url: event.image,
					alt: event.title,
				},
			],
		},
		twitter: {
			card: "summary_large_image",
			title: event.title,
			description,
			images: [event.image],
		},
	};
}

async function EvenementDetailsPage({params}: EventPageProps) {
	const {slug} = await params;
	const [, {data: event}] = await Promise.all([
		prefetchEventQuery(slug),
		obtenirEventParSlugAction(slug)
	])

	if (!event) {
		return notFound();
	}

	const schemaData: WithContext<Event> = {
		"@context": "https://schema.org",
		"@type": "Event",
		name: event.title,
		description: removeHtmlTags(event.contenu), // Supprime les balises HTML
		url: `${siteConfig.baseUrl}/evenements/${event.slug}`,
		image: event.image,
		startDate: event.published_at
	};

	return (
		<Content fullWidth className="mt-[4rem]">
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{__html: JSON.stringify(schemaData)}}
			/>
			<Publicite position={"EVENEMENT_TOP"}/>
			<EvenementDetailsContent
				slug={slug}
			/>
		</Content>
	);
}

export default EvenementDetailsPage;