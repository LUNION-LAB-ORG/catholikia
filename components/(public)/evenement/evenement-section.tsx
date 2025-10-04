import Section from "@/components/primitives/Section";
import EventCard from "./event-card";
import Title from "@/components/primitives/Title";
import {useEventListQuery} from "@/features/event/queries/event-list.query";
import LoadingIndicator from "@/components/common/LoadingIndicator";
import EvenementList from "@/components/(public)/evenement/evenement-list";

const EvenementSection = () => {
	return (
		<Section className="min-h-screen relative font-barlow">
			{/* Background Image with Overlay */}
			<div
				className="absolute inset-0 bg-cover bg-center bg-no-repeat"
				style={{backgroundImage: `url("/assets/accueil/evenement/event_back.jpg")`}}
			>
				<div className="absolute inset-0 bg-black/70"></div>
			</div>

			{/* Content */}
			<div className="relative z-10 px-4 sm:px-6 lg:px-12 py-12 sm:py-16 lg:py-20">
				<div className="max-w-6xl mx-auto">
					{/* Header Section */}
					<div className="text-center mb-10 sm:mb-16">
						<Title className="text-white text-2xl sm:text-3xl lg:text-4xl">
							EVENEMENT À VENIR
						</Title>
						<p className="text-white text-base sm:text-lg lg:text-xl max-w-6xl mx-auto leading-relaxed mt-10">
							Restez informé(e) de l'actualité de l'Église communautaire ! Des veillées
							de culte aux études bibliques, en passant par les programmes
							d'évangélisation et les rassemblements fraternels, il y en a toujours pour
							tous les goûts.
						</p>
					</div>
					<EvenementList/>
				</div>
			</div>
		</Section>
	);
};

export default EvenementSection;
