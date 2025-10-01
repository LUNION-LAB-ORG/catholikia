"use client";

import { actualitesFakeData } from "@/app/api/actualites";
import ActualiteCommentairesSection from "@/components/(public)/actualites/details/actualite-commentaires-section";
import ActualiteContentDescription from "@/components/(public)/actualites/details/actualite-content-description";
import AutresActualites from "@/components/(public)/actualites/details/autres-actualites";
import Publicite from "@/components/(public)/publicites";
import LoadingIndicator from "@/components/common/LoadingIndicator";
import MissionSignup from "@/components/don/MissionSignup";
import Content from "@/components/primitives/Content";
import Section from "@/components/primitives/Section";
import Title from "@/components/primitives/Title";
import { useActualiteQuery } from "@/features/actualite/queries/actualite-detail.query";

export default function ActualiteDetails({ slug }: { slug: string }) {

  const { data: actualite, isLoading, isError } = useActualiteQuery(slug);

  if (isLoading) {
    return (
      <LoadingIndicator />
    )
  }

  if (isError) {
    return (
      <Content fullWidth className="flex flex-col mt-[4rem]">
        <Section className="custom-container bg-white p-8 text-center items-center justify-center">
          <h2 className="text-[#151515] uppercase">
            Erreur de chargement
          </h2>
          <p className="mt-4 text-gray-600">Une erreur est survenue lors du chargement de l'actualité. Veuillez réessayer plus tard.</p>
        </Section>
      </Content>
    );
  }

  if (!actualite) {
    return (
      <Content fullWidth className="mt-[4rem]">
        <Section className="custom-container bg-white p-8">
          <Title as="h2" size="lg" className="text-[#151515] uppercase">
            Actualité non trouvée
          </Title>
          <p className="mt-4 text-gray-600">L'actualité que vous recherchez n'existe pas.</p>
        </Section>
      </Content>
    );
  }

  return (
    <Content fullWidth className="mt-[4rem]">
      <Publicite position="DETAILS_ACTUALITES_TOP" />
      <Section className="custom-container bg-white grid lg:grid-cols-6 gap-6">
        <ActualiteContentDescription
          title={actualite.title}
          content={actualite.content!}
          imageUrl={actualite.image}
        />
        <AutresActualites actualites={actualitesFakeData.slice(0, 3)} />
      </Section>
      <ActualiteCommentairesSection />
      <MissionSignup />
    </Content>
  );
}
