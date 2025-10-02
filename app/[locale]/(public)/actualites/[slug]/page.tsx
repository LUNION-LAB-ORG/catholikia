import ActualiteDetails from '@/components/(public)/actualites/details';
import { obtenirActualiteParSlugAction } from '@/features/actualite/actions/actualite.action';
import { prefetchActualiteQuery } from '@/features/actualite/queries/actualite-detail.query';
import { Metadata } from 'next';

type Props = {
  params: Promise<{ slug: string }>
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const slug = (await params).slug;
  const data = await obtenirActualiteParSlugAction(slug);
  const actualite = data.data || null;

  return {
    title: `${actualite ? actualite.titre : 'Actualité'}`,
    description: "Restez informé des dernières nouvelles, événements et articles inspirants de la communauté catholique.",
    openGraph: {
      title: `${actualite ? actualite.titre : 'Actualité'}`,
      description: "Restez informé des dernières nouvelles, événements et articles inspirants de la communauté catholique.",
      url: "https://www.catholikia.com/actualites",
      siteName: "Catholikia",
      locale: "fr_FR",
      type: "website",
      images: [
        {
          url: actualite?.image || "https://www.catholikia.com/og-image.jpg",
          width: 800,
          height: 600,
          alt: actualite?.titre,
        },
        {
          url: "https://www.catholikia.com/og-image.jpg",
          width: 1200,
          height: 630,
          alt: "Actualités - Catholikia",
        }
      ],
    },
  }
}

async function ActualiteDetailsPage({ params }: Props) {
  const slug = (await params).slug;
  await prefetchActualiteQuery(slug);
  return (
    <ActualiteDetails
      slug={slug}
    />
  );
}

export default ActualiteDetailsPage;