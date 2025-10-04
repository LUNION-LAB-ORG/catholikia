import React from 'react';
import Content from "@/components/primitives/Content";
import Publicite from "@/components/(public)/publicites";
import {prefetchEventQuery} from "@/features/event/queries/event-detail.query";
import EvenementDetailsContent from "@/components/(public)/evenement/details/evenement-details-content";

async function EvenementDetailsPage({params}: { params: Promise<{ slug: string }> }) {
	const {slug} = await params;
	prefetchEventQuery(slug)
	return (
		<Content fullWidth className="mt-[4rem]">
			<Publicite position={"EVENEMENT_TOP"}/>
			<EvenementDetailsContent
				slug={slug}
			/>
		</Content>
	);
}

export default EvenementDetailsPage;