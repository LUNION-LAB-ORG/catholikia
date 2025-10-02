import { ArticlesPage } from '@/components/(public)/effata/article-page';
import { EffataSection } from '@/components/(public)/effata/effata-section';
import Content from '@/components/primitives/Content';
import React from 'react';
import Publicite from "@/components/(public)/publicites";
import MissionSignup from "@/components/don/MissionSignup";
import { prefetchEffataListQuery } from '@/features/effata/queries/effata-list.query';

// export async function generateMetadata({ params, searchParams }: Props): Promise<Metadata> {
//   const data = await obtenirToutesActualitesAction({ page: 1, limit: 3 });
//   const actualites = data.data?.data || [];
//   const images: { url: string; width: number; height: number; alt: string }[] = [];

//   actualites.forEach((actualite) => {
//     if (actualite.image) {
//       images.push({
//         url: actualite.image,
//         width: 800,
//         height: 600,
//         alt: actualite.titre,
//       });
//     }
//   });

//   return {
//     title: "Actualités - Catholikia",
//     description: "Restez informé des dernières nouvelles, événements et articles inspirants de la communauté catholique.",
//     openGraph: {
//       title: "Actualités - Catholikia",
//       description: "Restez informé des dernières nouvelles, événements et articles inspirants de la communauté catholique.",
//       url: "https://www.catholikia.com/actualites",
//       siteName: "Catholikia",
//       locale: "fr_FR",
//       type: "website",
//       images: [
//         {
//           url: "https://www.catholikia.com/og-image.jpg",
//           width: 1200,
//           height: 630,
//           alt: "Actualités - Catholikia",
//         },
//         ...images,
//       ],
//     },
//   }
// }

const EffataPage = () => {
  prefetchEffataListQuery({ page: 1, limit: 9, search: '' });
  return (
    <Content fullWidth className="pt-0 ">
      <EffataSection />
      <ArticlesPage />
      <Publicite position="EFFATA_BOTTOM" />
      <MissionSignup />
    </Content>
  );
}

export default EffataPage;
