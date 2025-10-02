import ActualiteCommentairesSection from "@/components/(public)/actualites/details/actualite-commentaires-section";
import EffataDetailsContent from '@/components/(public)/effata/details';
import Publicite from "@/components/(public)/publicites";
import MissionSignup from "@/components/don/MissionSignup";
import Content from "@/components/primitives/Content";

async function EffataDetailsPage({ params }: { params: Promise<{ slug: string }> }) {
	const slug = (await params).slug;
	return (
		<Content fullWidth className="mt-[4rem]">
			<Publicite position="EFFATA_DETAILS_TOP" />
			<EffataDetailsContent
				slug={slug}
			/>
			<ActualiteCommentairesSection />
			<MissionSignup />
		</Content>
	);
}

export default EffataDetailsPage;