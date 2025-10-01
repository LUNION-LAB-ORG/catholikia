"use client";
import React from "react";
import Section from "@/components/primitives/Section";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Title from "@/components/primitives/Title";
import { useActualitesListQuery } from "@/features/actualite/queries/actualite-list.query";
import LoadingIndicator from "@/components/common/LoadingIndicator";
import { dateFormat } from "@/utils/date-utils";

const CarouselActualite = () => {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);

  const {
    data: recentActualitesData,
    isLoading: recentActualitesLoading,
    isError: recentActualitesError,
    error: recentActualitesErrorDetails,
  } = useActualitesListQuery({ page: 1, limit: 3 });

  const actualites = recentActualitesData?.data || [];

  React.useEffect(() => {
    if (!api) return;

    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  if (recentActualitesLoading) {
    return (
      <LoadingIndicator />
    )
  }

  if (actualites.length === 0) {
    return null;
  }

  return (
    <Section className="flex flex-col overflow-hidden">
      <div className="flex flex-col sm:flex-row justify-between items-center mb-4">
        <Title>DERNIÈRES NOUVELLES</Title>
        <div className="flex justify-start sm:justify-end overflow-hidden space-x-2 mt-2 sm:mt-0">
          {Array.from({ length: 3 }).map((_, index) => (
            <button
              key={index}
              onClick={() => api?.scrollTo(index)}
              className={cn(
                "w-2.5 h-2.5 rounded-full cursor-pointer p-1.5 bg-white/50 border",
                {
                  "bg-primary": current === index + 1,
                }
              )}
            />
          ))}
        </div>
      </div>

      <Carousel setApi={setApi} className="w-full">
        <CarouselContent className="gap-4">
          {actualites?.map((actualite, index) => (
            <CarouselItem
              key={index}
              className="relative w-full sm:w-[48%] lg:w-full rounded-2xl overflow-hidden"
            >
              <Image
                src={actualite.image}
                alt="item-image"
                className="w-full h-64 sm:h-72 lg:h-96 xl:h-[550px] overflow-hidden object-cover rounded-2xl"
                width={400}
                height={400}
              />

              <div className="absolute bottom-0 w-full bg-gray-200/90 overflow-hidden bg-opacity-90 px-3 py-2 sm:px-6 sm:py-3 lg:px-6 lg:py-6  rounded-b-2xl">
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-5 items-start sm:items-center">
                  <div className="px-2 py-1 bg-black text-white text-sm sm:text-base rounded">
                    {dateFormat(actualite.date_publication)}
                  </div>
                  <div className="text-sm sm:text-base">
                    {actualite.titre}
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </Section>
  );
};

export default CarouselActualite;
