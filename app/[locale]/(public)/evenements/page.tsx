import React from 'react';
import Content from "@/components/primitives/Content";
import TitleBanner from "@/components/common/TitleBanner";
import EvenementListSection from "@/components/(public)/evenement/evenements-list-section";
import {prefetchEventListQuery} from "@/features/event/queries/event-list.query";
import {ItemList, WithContext} from 'schema-dts'
import {obtenirToutesEventsAction} from "@/features/event/actions/event.action";
import {siteConfig} from "@/config/site";
import {Metadata} from "next";

export function generateMetadata(): Metadata {
	return {
		title: "Événements",
		description: "Découvrez les événements à venir, les retraites spirituelles, les conférences et les rassemblements communautaires organisés par Catholikia pour nourrir votre foi et renforcer les liens au sein de la communauté catholique.",
	};
}

async function EvenementsPage() {
	const [,{data: eventsData}] =  await Promise.all([
		prefetchEventListQuery({page: 1, size: 6}),
		obtenirToutesEventsAction({page: 1, size: 6})
	])

	const events = eventsData?.data || [];
	const itemList: ItemList["itemListElement"] = events.map((ev, index) => ({
		"@type": "ListItem",
		url: `${siteConfig.baseUrl}/events/${ev.slug}`,
		name: ev.title,
		position: index + 1,
	}));

	const schemaData: WithContext<ItemList> = {
		"@context": "https://schema.org",
		"@type": "ItemList",
		name: "Liste d'événements Catholikia",
		numberOfItems: itemList.length,
		itemListOrder: "https://schema.org/ItemListOrderAscending",
		itemListElement: itemList,
	};

	return (
		<Content fullWidth className="pt-0">
			<TitleBanner
				backgroundImage={"/assets/evenements/bg.jpg"}
				title="événements"
			/>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{__html: JSON.stringify(schemaData)}}
			/>
			<EvenementListSection/>
		</Content>
	);
}

export default EvenementsPage;