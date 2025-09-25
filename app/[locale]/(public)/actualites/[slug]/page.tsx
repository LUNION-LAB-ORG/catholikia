import React from 'react';
import Content from "@/components/primitives/Content";
import Publicite from "@/components/(public)/publicites";
import Section from "@/components/primitives/Section";
import Title from "@/components/primitives/Title";
import {actualitesFakeData} from "@/app/api/actualites";
import ActualiteContentDescription from "@/components/(public)/actualites/details/actualite-content-description";
import AutresActualites from "@/components/(public)/actualites/details/autres-actualites";

function ActualiteDetailsPage() {
	const actualite = actualitesFakeData[0]; // Simulating fetching the actual news item based on slug
	if (!actualite) {
		return (
			<Content fullWidth className="mt-[4rem]">
				<Section className="custom-container bg-white p-8 text-center">
					<Title as="h2" size="lg" className="text-[#151515] uppercase">
						Actualité non trouvée
					</Title>
					<p className="mt-4 text-gray-600">L'actualité que vous recherchez n'existe pas.</p>
				</Section>
			</Content>
		);
	}

	return (
		<Content fullWidth className="mt-[4rem]">
			<Publicite position="DETAILS_ACTUALITES_TOP"/>
			<Section className="custom-container bg-white grid lg:grid-cols-6 gap-6">
				<ActualiteContentDescription
					title={actualite.title}
					content={actualite.content!}
					imageUrl={actualite.image}
				/>
				<AutresActualites actualites={actualitesFakeData.slice(0,3)}/>
			</Section>
		</Content>
	);
}

export default ActualiteDetailsPage;