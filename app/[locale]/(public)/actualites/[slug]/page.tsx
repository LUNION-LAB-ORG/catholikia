import ActualiteDetails from '@/components/(public)/actualites/details';
import { prefetchActualiteQuery } from '@/features/actualite/queries/actualite-detail.query';

async function ActualiteDetailsPage({ params }: { params: Promise<{ slug: string }> }) {
	const slug = (await params).slug;
	await prefetchActualiteQuery(slug);
	return (
		<ActualiteDetails
			slug={slug}
		/>
	);
}

export default ActualiteDetailsPage;