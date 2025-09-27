import React from 'react';
import Image from "next/image";
import Link from "next/link";
import {cn} from "@/lib/utils";
import {dateFormat} from "@/utils/date-utils";
import {IActualite} from "@/features/actualite/types/actualite.type";
import ActualiteImageDecoration from "@/components/(public)/actualites/actualite-image-decoration";
import {IconCalendarWeekFilled} from "@tabler/icons-react";
import {Button} from "@heroui/button";
import {Badge} from "@/components/ui/badge";

export type ActualiteCardOptions = {
	withShare?: boolean;
	withTags?: boolean;
	withCountry?: boolean;
	withCategory?: boolean;
	withAuthor?: boolean;
	withDescription?: boolean;
}

type PropsCard = {
	actualite: IActualite;
	orientation?: 'horizontal' | 'vertical';
	options?: ActualiteCardOptions;
	type?: 'actualites' | 'effata',
}

function ArticleCard({actualite, orientation, options, type = 'actualites'}: PropsCard) {
	return (
		<div className="flex flex-col justify-between space-y-2 h-full">
			<Link
				href={`/${type}/${actualite.slug}`}
				className="group block h-full"
			>
				<article className={cn(
				  "grid gap-4 items-stretch h-full transition transform duration-200",
				  orientation === 'horizontal' ? 'grid-cols-[minmax(100px,40%),1fr]' : 'grid-cols-1'
				)}>
					<div
						className={`relative ${orientation === 'vertical' ? 'aspect-video w-full' : 'min-h-[220px]'} overflow-hidden rounded-xl`}
					>
						<Image
							src={actualite.image}
							alt={actualite.title}
							fill
							className="object-cover group-hover:scale-105 transition-transform duration-300"
						/>
						{options && <ActualiteImageDecoration
							options={options}
							actualite={actualite}
						/>}
					</div>
					<div className={cn(orientation === 'vertical' ? 'mt-4' : '', "flex flex-col space-y-2")}>
						<time className="text-[#595959] text-sm font-medium font-barlow flex items-center">
							<span> <IconCalendarWeekFilled color="#0088FF" size={16} className="mr-1"/> </span>
							<span>{dateFormat(actualite.publishedAt)}</span>
						</time>
						<h4
							className={cn("text-gray-800 font-semibold group-hover:text-gray-900 transition-colors duration-300 line-clamp-2 mb-2.5 text-lg")}>
							{actualite.title}
						</h4>
						<div>
							{options?.withDescription && <p className="font-medium text-[#6C7993] text-medium line-clamp-2">
								{actualite.description}
							</p>}
							{options?.withAuthor && <p className="font-bold text-[#6C7993] text-sm mt-2">
								Par {actualite.authorName}
							</p>}
							<ul className="flex items-center space-x-2 mt-2">
								{options?.withTags && actualite.tags.map(tag => (
									<li key={tag}>
										<Badge variant="outline" className="text-primary border-primary rounded-full">
											{tag}
										</Badge>
									</li>
								))}
							</ul>
						</div>
					</div>
				</article>
			</Link>
			<div className="flex justify-end mt-2">
				<Button
					variant="bordered"
					className={cn("uppercase text-[#1D1D1D] font-bold border", options?.withShare ? 'rounded-l-full border-r-0' : 'rounded-full')}
				>
					Details
				</Button>
				{options?.withShare &&
					<Button variant="bordered" className="rounded-r-full uppercase text-[#1D1D1D] font-bold border border-l-0">
						Partager
					</Button>}
			</div>
		</div>
	);
}

export default ArticleCard;