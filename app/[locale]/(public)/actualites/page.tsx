import { ActualitesPage } from "@/components/(public)/actualites/actualite-page";
import CarouselActualite from "@/components/(public)/actualites/carousel/index";
import Publicite from "@/components/(public)/publicites";
import TitleBanner from "@/components/common/TitleBanner";
import MissionSignup from "@/components/don/MissionSignup";
import Content from "@/components/primitives/Content";
import { obtenirToutesActualitesAction } from "@/features/actualite/actions/actualite.action";
import { prefetchActualitesListQuery } from "@/features/actualite/queries/actualite-list.query";
import { Metadata } from "next";

type Props = {
  params: Promise<{ slug: string }>
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

export async function generateMetadata({ params, searchParams }: Props): Promise<Metadata> {
  const data = await obtenirToutesActualitesAction({ page: 1, limit: 3 });
  const actualites = data.data?.data || [];
  const images: { url: string; width: number; height: number; alt: string }[] = [];
  
  actualites.forEach((actualite) => {
    if (actualite.image) {
      images.push({
        url: actualite.image,
        width: 800,
        height: 600,
        alt: actualite.titre,
      });
    }
  });

  return {
    title: "Actualités - Catholikia",
    description: "Restez informé des dernières nouvelles, événements et articles inspirants de la communauté catholique.",
    openGraph: {
      title: "Actualités - Catholikia",
      description: "Restez informé des dernières nouvelles, événements et articles inspirants de la communauté catholique.",
      url: "https://www.catholikia.com/actualites",
      siteName: "Catholikia",
      locale: "fr_FR",
      type: "website",
      images: [
        {
          url: "https://www.catholikia.com/og-image.jpg",
          width: 1200,
          height: 630,
          alt: "Actualités - Catholikia",
        },
        ...images,
      ],
    },
  }
}

const Page = async () => {
  await Promise.all([
    prefetchActualitesListQuery({ page: 1, limit: 3 }),
    prefetchActualitesListQuery({ page: 1, limit: 9, skip: 3 }),
  ]);

  return (
    <Content fullWidth className="pt-0">
      <TitleBanner title="actualité" />
      <CarouselActualite />
      <Publicite position="ACCUEIL_MIDDLE" orientation="horizontal" />
      <ActualitesPage />
      <MissionSignup />
    </Content>
  );
};

export default Page;
