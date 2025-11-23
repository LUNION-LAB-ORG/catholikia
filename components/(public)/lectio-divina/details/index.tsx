"use client";
import LoadingIndicator from '@/components/common/LoadingIndicator';
import NoData from '@/components/common/no-data';
import Section from "@/components/primitives/Section";
import Title from "@/components/primitives/Title";
import { Badge } from "@/components/ui/badge";
import { useLectioDetailQuery } from "@/features/lectio-divina/queries/lectio-detail.query";
import { dateFormat } from "@/utils/date-utils";
import { Button } from "@heroui/button";
import Image from "next/image";

export default function LectioDetailsContent({ id: slug }: { id: string }) {
  const { data, isLoading, error } = useLectioDetailQuery(slug);

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
    <div className="grid grid-cols-3 mt-11 custom-container bg-white gap-10">
      <Section padding="none" className="space-y-10 col-span-2">
        {/* Catégorie */}
        <Badge className="bg-[#EEEEEE] text-[#333333] px-3 py-1 rounded-full text-sm font-bold">
          {data.lithurgy_time}
        </Badge>
        {/* Titre de l'article */}
        <Title className="text-[#0088FF] text-3xl font-bold uppercase">
          {dateFormat(data.published_at)}
        </Title>
        <Image
          src={'/images-examples/actualites/3.jpg'}
          alt={"Lectio divina Image"}
          width={1035}
          height={643}
          className="rounded-lg"
        />
        <div className="text-justify" dangerouslySetInnerHTML={{ __html: data.lecture }} />
        <div className="flex items-center w-full space-x-6">
          <Button variant="bordered" className="rounded-full uppercase text-[#1D1D1D] font-bold border">
            Partager
          </Button>
        </div>
      </Section>
      <div className="col-span-1">
        <div className="sticky top-8 self-start border bg-[#F5F5F5] rounded-lg p-4">
          <div dangerouslySetInnerHTML={{ __html: data.homelie }} />
          <div className="font-bold mt-4 text-right">
            Commenté par {data.contributor.title} {data.contributor.name}
          </div>
        </div>
      </div>
    </div>
  )
}
