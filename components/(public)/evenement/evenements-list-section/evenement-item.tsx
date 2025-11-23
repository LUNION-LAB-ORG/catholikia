import React from 'react';
import Link from "next/link";
import {cn} from "@/lib/utils";
import Image from "next/image";
import {Button} from "@heroui/button";
import {IEvent} from "@/features/event/types/event.type";
import {removeHtmlTags} from "@/utils/html-to-text";

function EvenementItem({event}: { event: IEvent }) {
	const eventUrl = `/evenements/${event.slug}`;
	return (
		<div className="flex flex-col justify-between space-y-2 h-full">
			<Link
				href={eventUrl}
				className="group block h-full"
			>
				<article
					className={cn(
						"grid gap-4 items-stretch h-full transition transform duration-200 grid-cols-1"
					)}
				>
					<div
						className={`relative overflow-hidden rounded-xl aspect-video w-full`}
					>
						<Image
							src={event.image}
							alt={event.title}
							className="h-full w-full group-hover:scale-105 transition-transform duration-300"
							width={250}
							height={200}
						/>
					</div>
					<div className={'mt-2'}>
						<h4
							className={cn("group-hover:underline text-sm text-gray-800 font-semibold group-hover:text-gray-900 transition-colors duration-300 line-clamp-2 mb-2.5")}>
							{event.title}
						</h4>
						<p className="text-sm md:text-base text-[#252628] leading-relaxed line-clamp-2">
							{removeHtmlTags(event.contenu)}
						</p>
					</div>
				</article>
			</Link>
			<div>
				<Button
					as={Link}
					href={eventUrl}
					variant="bordered"
					className={cn("uppercase text-[#1D1D1D] font-bold border rounded-full")}
				>
					Details
				</Button>
			</div>
		</div>
	);
}

export default EvenementItem;