import MediaPartnersLogos from "@/components/don/MediaPartnersLogos";
import InvolvementCard from "@/components/don/involvement-section/involvement-card";
import Section from "@/components/primitives/Section";
import Title from "@/components/primitives/Title";

export default function InvolvementSection() {
	return (
		<Section className="custom-container bg-white">
			<Title className="mb-12">
				IMPLIQUEZ-VOUS
			</Title>

			{/* Cards container */}
			<div className="lg:pl-6 grid grid-cols-1 md:grid-cols-2 gap-8">
				<InvolvementCard
					title="Rejoignez un petit groupe"
					imageSrc="/assets/don/improve_image1.png"
					description="Utilisez vos dons pour servir dans des domaines tels que le culte, l'hospitalité et l'évangélisation."
				/>

				<InvolvementCard
					title="Devenez bénévole"
					imageSrc="/assets/don/improve_image2.png"
					description="Engagez-vous activement en tant que bénévole pour soutenir nos initiatives et faire une différence concrète."
				/>
			</div>
			<MediaPartnersLogos />
		</Section>
	);
}
