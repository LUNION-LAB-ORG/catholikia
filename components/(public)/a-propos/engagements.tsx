"use client";

import React from "react";
import Image from "next/image";
import Title from "@/components/primitives/Title";
import Section from "@/components/primitives/Section";

type Engagements = {
	title?: string;
	image?: string;
	description?: string;
}

const engagements: Engagements[] = [
	{
		image: "/assets/about/verite.jpg",
	},
	{
		title: "Respect",
		description: "Nous respectons la diversité des opinions et des croyances."
	},
	{
		image: "/assets/about/qualite.jpg",
	},
	{
		title: "Spiritualité",
		description: "Nous visons à inspirer et à former spirituellement notre public cible."
	},
	{
		title: "Vérité",
		description: "Nous nous engageons à diffuser des informations exactes et fiables."
	},
	{
		image: "/assets/about/respect.jpg",
	},
	{
		title: "Qualité",
		description: "Nous nous efforçons de proposer des contenus de haute qualité et pertinents."
	},
	{
		image: "/assets/about/spiritualite.jpg",
	},
];

const Engagements = () => {
	return (
		<Section className=" bg-background px-6 py-16 lg:px-16">
			<div className="mx-auto">
				<Title className="mb-16 text-4xl font-bold  lg:text-3xl tracking-tight text-start">
					NOS ENGAGEMENTS
				</Title>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
					{engagements.map((engagement, index) => (
						<div
							key={index}
							className="relative rounded-3xl ring-1 p-8 h-72 flex flex-col overflow-hidden bg-gray-200"
						>
							{
								engagement.title && (<>
									<h3 className="text-2xl font-semibold mb-4 z-10 relative">
										{engagement.title}
									</h3>
									<p className="z-10 relative text-lg">
										{engagement.description}
									</p>
								</>)
							}
							{engagement.image && <Image
								src={engagement.image}
								alt={engagement.title || "Engagement illustration"}
								fill
								className="object-cover"
							/>}
						</div>
					))}
				</div>
			</div>
		</Section>
	);
};

export default Engagements;
