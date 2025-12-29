"use client";
import React from 'react';
import {EventCardSkeleton} from "@/components/(public)/evenement/event-card";
import {useEventListQuery} from "@/features/event/queries/event-list.query";
import {Button} from "@heroui/react";
import dynamic from "next/dynamic";

const EventCard = dynamic(
	() => import('@/components/(public)/evenement/event-card'),
	{ssr: false}
);

function EvenementList() {
	const {data, isLoading, isError, error, refetch} = useEventListQuery({page: 1, size: 3});
	const events = data?.data || [];

	if (isError) {
		return (<div className="text-center text-red-500">
				<p>Erreur lors du chargement des événements : {error?.message}</p>
				<Button
					onPress={() => refetch()}
				>
					Réessayer
				</Button>
			</div>
		);
	}
	return (
		<div className="space-y-6 sm:space-y-8">
			{isLoading && Array.from({length: 3}).map((_, index) => (
				<EventCardSkeleton key={index}/>
			))}
			{!isLoading && events.map((event, index) => (
				<EventCard
					key={index}
					event={event}
				/>
			))}
		</div>
	);
}

export default EvenementList;