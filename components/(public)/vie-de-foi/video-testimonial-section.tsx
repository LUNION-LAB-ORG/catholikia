'use client'

import Image from "next/image";
import { useState } from "react";
import { VideoPlayerModal } from "./video-player";
import { VideoTestimonialCard } from "./video-testimonial-card";
import Title from "@/components/primitives/Title";
import TestimonialHeader from "./testimonial-header";
import Section from "@/components/primitives/Section";

interface VideoTestimonial {
  id: string;
  name: string;
  role: string;
  description: string;
  image: string;     // miniature
  videoUrl: string;  // URL de la vidéo
  videoTitle: string;
}

const videoTestimonials: VideoTestimonial[] = [
  {
    id: "aminata-kone",
    name: "Aminata Koné",
    role: "Entreprise & Co.",
    description: "Comprendre la bg depuis mes débutions direction et merlot à l'étude et entre ses stratégies de développement.",
    image: '/assets/foi/contact2.jpg',
    videoUrl: 'https://youtu.be/NAgnQqtNQyU?si=RLvgOjIGy2gH5Cr-',
    videoTitle: "Témoignage de Aminata Koné"
  },
  {
    id: "franklin-tuo",
    name: "Franklin Tuo",
    role: "Piano-Musiq",
    description: "Mes musicaux qui développé ma théorie et pratique mo kid des conseils de mes communités inspirants.",
    image: '/assets/foi/contact2.jpg',
    videoUrl: 'https://youtu.be/E57t_CUjBmk?si=HBcntxOtgw3QlVtb',
    videoTitle: "Témoignage de Franklin Tuo"
  }
];

export const VideoTestimonialsSection = () => {
  const [selectedTestimonial, setSelectedTestimonial] = useState<VideoTestimonial | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCardClick = (testimonial: VideoTestimonial) => {
    setSelectedTestimonial(testimonial);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedTestimonial(null);
  };

  return (
    <Section className="py-16 custom-container">
      {/* Header */}
      <div className="mb-8">
        <div className="mb-2 text-center">
          <TestimonialHeader/>
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

      {/* Video Modal */}
      {selectedTestimonial && (
        <VideoPlayerModal
          testimonial={selectedTestimonial}
          isOpen={isModalOpen}
          onClose={handleCloseModal}
        />
      )}
    </Section>
  );
};
