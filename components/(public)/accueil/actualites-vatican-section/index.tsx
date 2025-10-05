import React from 'react';
import Section from "@/components/primitives/Section";
import { Button } from "@heroui/button";
import Image from "next/image";
import { Link } from '@heroui/link';

function ActualitesVaticanSection() {
	return (
		<Section padding="none" spacing="none" className="relative text-white min-h-50 md:min-h-100">
			<div
				className="flex flex-col justify-center max-md:items-center md:pl-20 absolute inset-0 z-10 bg-gradient-to-r from-black to-[#666666]/1 from-60%">
				<h2 className="text-2xl md:text-[50px] lg:text-[65px] py-4 px-2 font-bebas">
					L'actualité du Vatican
				</h2>
				<Button
					as={Link}
					variant="bordered"
					className="text-white rounded-full w-fit"
					href='/effata?categorie=vatican'
				>
					Découvrir
				</Button>
			</div>
			<div className="relative w-2/5 min-h-50 md:min-h-100 ml-auto">
				<Image
					src="/assets/accueil/vatican.jpg"
					className="object-cover w-full h-full"
					fill
					alt="image du vatican"
				/>
			</div>
		</Section>
	);
}

export default ActualitesVaticanSection;