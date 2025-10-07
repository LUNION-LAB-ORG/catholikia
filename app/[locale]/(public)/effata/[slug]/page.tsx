import EffataDetailsContent from '@/components/(public)/effata/details';
import Publicite from "@/components/(public)/publicites";
import CommentairesSection from "@/components/common/commentaires";
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
			<CommentairesSection
				entityId={slug}
				entityType="effata"
			/>
			<MissionSignup />
		</Content>
	);
}

export default EffataDetailsPage;