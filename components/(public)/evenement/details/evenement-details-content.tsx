"use client";
import React from 'react';
import Section from "@/components/primitives/Section";
import Title from "@/components/primitives/Title";
import {useEventQuery} from "@/features/event/queries/event-detail.query";
import {notFound} from "next/navigation";
import LoadingIndicator from "@/components/common/LoadingIndicator";
import {dateFormat} from "@/utils/date-utils";
import Image from "next/image";
import InvolvementSection from "@/components/don/involvement-section";
import MissionSignup from "@/components/don/MissionSignup";

function EvenementDetailsContent({slug}: { slug: string }) {
	const {data: event, isLoading, isError, refetch} = useEventQuery(slug)

	if (isError) {
		return (<div className="custom-container">
			<p className="text-center text-red-500">Une erreur est survenue lors du chargement de l'événement.</p>
			<button
				onClick={() => refetch()}
				className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
			>
				Réessayer
			</button>
		</div>)
	}

	if (!event && !isLoading) {
		return notFound()
	}

	return (
		<Section className="custom-container">
			{(isLoading || !event) ? <LoadingIndicator/> :
				<div className="mt-10">
					<Title className="text-center">
						{event.title}
					</Title>
					<div className="border-4 border-black py-8 w-full max-w-md mx-auto text-center text-5xl font-bebas mt-6">
						{dateFormat(event.published_at)}
					</div>
					<div className='relative w-full h-screen mb-10 rounded-4xl overflow-hidden mt-10 aspect-square'>
						<Image
							src={event.image}
							alt={event.title}
							fill
							className='object-cover w-full h-full rounded-lg'
						/>
					</div>
					<div className="prose max-w-none my-10 "
					     dangerouslySetInnerHTML={{__html: event.contenu}}
					/>
					<MissionSignup/>
				</div>
			}
		</Section>
	);
}

export default EvenementDetailsContent;