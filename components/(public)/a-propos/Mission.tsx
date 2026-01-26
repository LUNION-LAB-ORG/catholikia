import Section from "@/components/primitives/Section";
import Title from "@/components/primitives/Title";
import Image from "next/image";
import React from "react";

const Mission = () => {
	return (
		<Section className="px-6 py-12 lg:px-15 flex flex-col">
			{/* Logo + slogan */}
			<div className="flex flex-col items-center mb-8">
				<div className="flex justify-center">
					<Image
						src={"/assets/logo/logo.png"}
						alt="logo"
						width={200}
						height={200}
					/>
				</div>
				<span className="text-center font-bebas text-2xl md:text-3xl lg:text-4xl mt-4">
          CATHOLIKIA, la voix de l’Église catholique en Afrique
        </span>
			</div>

			{/* Bloc Mission */}
			<Title className="uppercase my-8">
				Notre mission
			</Title>
			<p className="text-justify">
				Fournir des actualités catholiques de qualité, pertinentes et engageantes, en ligne et en version magazine, pour
				informer, inspirer et former les catholiques et tous ceux qui cherchent à comprendre la foi catholique.
			</p>

			<Title className="uppercase mt-20 mb-8">
				Notre vision
			</Title>
			<p className="text-justify">
				Promouvoir les valeurs catholiques et favoriser la croissance spirituelle de notre public cible.
				Devenir une référence incontournable dans le domaine des médias catholiques en proposant des contenus riches et
				diversifiés qui répondent aux besoins spirituels et informationnels de notre public cible.
				Nous aspirons à être un outil de formation et d'inspiration pour les catholiques, et à contribuer à la
				construction d'une communauté catholique solidaire et engagée.
			</p>
		</Section>
	);
};

export default Mission;
