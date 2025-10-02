import React from 'react';
import Content from "@/components/primitives/Content";
import Publicite from "@/components/(public)/publicites";
import Section from "@/components/primitives/Section";
import { Badge } from "@/components/ui/badge";
import Title from "@/components/primitives/Title";
import Image from "next/image";
import { detailsEffataText } from "@/app/[locale]/(public)/effata/[slug]/constants";
import { Button } from "@heroui/button";
import { SquareArrowOutUpRight } from "lucide-react";
import EffataAuthorCard from "@/components/(public)/effata/details/effata-author-card";
import AutresActualites from "@/components/(public)/actualites/details/autres-actualites";
import { actualitesFakeData } from "@/app/api/actualites";
import ActualiteCommentairesSection from "@/components/(public)/actualites/details/actualite-commentaires-section";
import MissionSignup from "@/components/don/MissionSignup";
import { useEffataQuery } from '@/features/effata/queries/effata-detail.query';
import LoadingIndicator from '@/components/common/LoadingIndicator';
import NoData from '@/components/common/no-data';

export default function EffataDetailsContent({ slug }: { slug: string }) {
  const { data, isLoading, error } = useEffataQuery(slug);

  if (isLoading) {
    return <LoadingIndicator />;
  }

  if (error) {
    return <div className="text-red-500">Erreur lors du chargement de l'effata.</div>;
  }

  if (!data) {
    return <NoData message="Aucune donnée disponible." />;
  }

  return (
    <Content fullWidth className="mt-[4rem]">
      <Publicite position="EFFATA_DETAILS_TOP" />
      <div className="mt-11 custom-container bg-white grid lg:grid-cols-12 gap-10">
        <Section padding="none" className="col-span-8 space-y-10">
          {/* Catégorie */}
          <Badge className="bg-[#EEEEEE] text-[#333333] px-3 py-1 rounded-full text-sm font-bold">
            {data.category || 'Catégorie non définie'}
          </Badge>
          {/* Titre de l'article */}
          <Title className="text-[#0088FF] text-3xl font-bold uppercase">
            {data.title || 'Titre non défini'}
          </Title>
          <p className="font-semibold text-lg">
            {data.description || 'Description non définie'}
          </p>
          <Image
            src={data.image || "/assets/effata/articles/article1.png"}
            alt={data.title || "Article Image"}
            width={1035}
            height={643}
            className="rounded-lg"
          />
          <div className="text-justify" dangerouslySetInnerHTML={{ __html: data.content || "Contenu non défini" }} />
          <div className="flex items-center w-full space-x-6">
            <Button variant="bordered" className="rounded-full uppercase text-[#1D1D1D] font-bold border">
              Partager
            </Button>
            <Button variant="bordered" className="rounded-full uppercase text-[#1D1D1D] font-bold border">
              <SquareArrowOutUpRight className="size-4" />
              <span>
                Visiter le site du vatican
              </span>
            </Button>
          </div>
        </Section>
        <div className="col-span-4">
          <EffataAuthorCard />
          <AutresActualites
            actualites={actualitesFakeData.slice(2, 4)}
          />
        </div>
      </div>
      <ActualiteCommentairesSection />
      <MissionSignup />
    </Content>
  )
}
