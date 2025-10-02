'use client'

import { Card } from "@/components/ui/card";
import Image from "next/image";
import { useState } from "react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";

interface VideoTestimonial {
  id: string;
  name: string;
  role: string;
  description: string;
  image: string;     // miniature header
  videoUrl: string;  // URL YouTube
}

interface VideoTestimonialCardProps {
  testimonial: VideoTestimonial;
}

export const VideoTestimonialCard = ({ testimonial }: VideoTestimonialCardProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Extraire l'ID YouTube pour la miniature
  const videoId = testimonial.videoUrl.split("/").pop()?.split("?")[0];
  const thumbnailUrl = videoId
    ? `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`
    : testimonial.image;

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-testimonial-bg border-border/50 p-0">
        {/* Header Image */}
        <div className="relative w-full h-64 sm:h-64 overflow-hidden">
          <Image 
            src={testimonial.image} 
            alt={testimonial.name}
            className="w-full h-full object-cover"
            width={400}
            height={400}
          />
          <div className="absolute bottom-2 left-2 text-white px-2 py-1 rounded text-sm ">
            <div className="font-bold">{testimonial.name}</div>
            <div className="text-xs opacity-90">{testimonial.role}</div>
          </div>
        </div>

        {/* Description + Miniature cliquable */}
        <div className="p-2 flex flex-col items-center sm:flex-row gap-4">
          {/* Miniature vidéo */}
          <div 
            onClick={openModal} 
            className="w-full sm:w-32 h-32 relative overflow-hidden rounded-lg flex-shrink-0 cursor-pointer"
          >
            <Image 
              src={thumbnailUrl} 
              alt={testimonial.name}
              className="w-full h-full rounded-lg object-cover"
              width={200}
              height={200}
            />
            
            <div className="absolute inset-0 flex items-center justify-center">
              {/* Icône Play */}
              <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center">
                ▶
              </div>
             
            </div>
               
          </div>

          {/* Texte */}
          <p className="text-testimonial-text text-sm leading-relaxed w-full">
            {testimonial.description}
          </p>
        </div>
       
      </Card>

      {/* Modal vidéo */}
      {isModalOpen && (
        <Dialog open={isModalOpen} onOpenChange={closeModal}>
          <DialogContent className="w-[90vw] max-w-3xl p-0 bg-black rounded-lg overflow-hidden">
            
            {/* Titre du modal */}
            <DialogTitle className="text-lg font-bold text-white px-4 py-2 bg-primary">
              {testimonial.name} — {testimonial.role}
            </DialogTitle>

            {/* Vidéo */}
            <div className="relative pb-[56.25%]">
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
                title={testimonial.name}
                allow="autoplay; encrypted-media"
                allowFullScreen
              />
            </div>
           
          </DialogContent>
        </Dialog>
      )}
    </>
  );
};
