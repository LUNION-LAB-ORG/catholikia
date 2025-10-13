'use client'

import Section from "@/components/primitives/Section";
import Title from "@/components/primitives/Title";
import { useTemoignageListQuery } from "@/features/vie-de-foi/queries/vie-de-foi-list.query";
import TestimonialHeader from "./testimonial-header";
import { VideoTestimonialCard } from "./video-testimonial-card";

export const VideoTestimonialsSection = () => {
  const {
    data,
    isLoading,
    isError
  } = useTemoignageListQuery({ page: 1, size: 2, inspirant: true });

  if (isLoading || isError || !data || data.data.length === 0) {
    return null;
  }

  const videoTestimonials = data.data;

  return (
    <Section className="py-16 custom-container">
      {/* Header */}
      <div className="mb-8">
        <div className="mb-2 text-center">
          <TestimonialHeader />
        </div>
        <Title className="text-4xl font-bold mb-4 uppercase font-bebas tracking-wide">
          TÉMOIGNAGES INSPIRANTS
        </Title>
        <p className="text-muted-foreground">
          Des parcours exceptionnels où tout et chacune guide professionnelle de développement
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {videoTestimonials.map((testimonial) => (
          <VideoTestimonialCard
            key={testimonial.id}
            testimonial={testimonial}
          />
        ))}
      </div>
    </Section>
  );
};
