import React from 'react';
import Title from "@/components/primitives/Title";
import Image from "next/image";

type ActualiteContentDescriptionProps = {
	title: string;
	content: string;
	imageUrl: string;
};

function ActualiteContentDescription({title, content, imageUrl}: ActualiteContentDescriptionProps) {
	return (
		<article className="lg:col-span-4">
			<Title as="h2" size="sm" className="font-sans font-bold text-[#151515] uppercase">
				{title}
			</Title>
			<div className="font-medium mt-12 mb-8" dangerouslySetInnerHTML={{__html: content}}/>
			<Image
				className="rounded-2xl"
				src={imageUrl}
				alt={`Image pour ${title}`}
				width={879}
				height={547}
			/>
		</article>
	);
}

export default ActualiteContentDescription;