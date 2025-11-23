"use client";
import LoadingIndicator from "@/components/common/LoadingIndicator";
import NoData from "@/components/common/no-data";
import Section from "@/components/primitives/Section";
import Title from "@/components/primitives/Title";
import { useTribuneListQuery } from "@/features/tribunes/queries/tribune-list.query";
import { TribuneCard } from "./tribune-card";

export const LatestContributions = () => {
  const { data, isLoading, isError } = useTribuneListQuery({
    page: 1,
    size: 6,
    skip: 1,
  })
  if (isLoading) {
    return <LoadingIndicator />;
  }

  if (data?.data.length === 0 && !isLoading) {
    return <NoData
      message="Aucun article trouvé"
    />;
  }

  const tribunes = data?.data || [];

  return (
    <Section className="">
      <div className="text-2xl font-bold text-foreground mb-8 tracking-tight">
        <Title> Dernières contributions</Title>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tribunes.map((tribune) => (
          <TribuneCard
            key={tribune.id}
            tribune={tribune}
          />
        ))}
      </div>
    </Section>
  );
};
