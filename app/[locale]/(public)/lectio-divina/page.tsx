import CurrentLectioDivina from "@/components/(public)/lectio-divina/current-lectio-divina";
import LectioDivinaHero from "@/components/(public)/lectio-divina/lectio-divina-hero";
import LectioDivinaIntro from "@/components/(public)/lectio-divina/lectio-divina-intro";
import LectioDivinaSteps from "@/components/(public)/lectio-divina/lectio-divina-steps";
import Publicite from "@/components/(public)/publicites";
import MissionSignup from "@/components/don/MissionSignup";
import Content from "@/components/primitives/Content";
import {Metadata} from "next";

export function generateMetadata(): Metadata {
	return {
		title: "Lectio divina",
		description: "Découvrez la pratique spirituelle de la Lectio Divina, une méthode ancienne de lecture et de méditation des Écritures qui nourrit l'âme et approfondit votre relation avec Dieu.",
		keywords: ['lectio divina', 'vie de foi', 'méditation', 'prière', 'évangile', 'lecture spirituelle'],
		openGraph: {
			title: "Lectio divina",
			description: "Découvrez la pratique spirituelle de la Lectio Divina, une méthode ancienne de lecture et de méditation des Écritures qui nourrit l'âme et approfondit votre relation avec Dieu.",
			url: `https://www.catholikia.com/lectio-divina`,
			siteName: "Catholikia",
			locale: "fr_FR",
			type: "website",
			images: [
				{
					url: "https://www.catholikia.com/og-image.jpg",
					width: 800,
					height: 600,
					alt: "Lectio divina",
				}
			],
		},
	}
}

const LectioDivinaPage = () => {
	return (
		<Content fullWidth className="pt-0">
			<LectioDivinaHero title="Lectio divina"/>
			<LectioDivinaIntro/>
			<LectioDivinaSteps/>
			<CurrentLectioDivina/>
			<Publicite position="ACCUEIL_MIDDLE" orientation="horizontal"/>
			<MissionSignup/>
		</Content>
	);
};

export default LectioDivinaPage;
