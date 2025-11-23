"use client";
import { DialogTitle, Dialog, DialogContent } from '@/components/ui/dialog';
import { ITemoignage } from '@/features/vie-de-foi/types/vie-de-foi.type';
import { getYouTubeVideoId } from '@/utils/yt-utils';
import Image from 'next/image'
import React, { useState } from 'react'

export default function VideoTestimonialModal({ testimonial }: { testimonial: ITemoignage }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const videoId = testimonial.video_link ? getYouTubeVideoId(testimonial.video_link) : null;
  return (
    <>
      <div className="p-2 flex flex-col items-center sm:flex-row gap-4">
        {/* Miniature vidéo */}
        <div
          onClick={openModal}
          className="w-full sm:w-32 h-32 relative overflow-hidden rounded-lg flex-shrink-0 cursor-pointer"
        >
          <Image
            src={testimonial.photo || "/images/default-avatar.png"}
            alt={testimonial.temoin}
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
          {testimonial.video_description}
        </p>
      </div>
      {isModalOpen && (
        <Dialog open={isModalOpen} onOpenChange={closeModal}>
          <DialogContent className="w-[90vw] max-w-3xl p-0 bg-black rounded-lg overflow-hidden">
            {/* Titre du modal */}
            <DialogTitle className="text-lg font-bold text-white px-4 py-2 bg-primary">
              {testimonial.temoin} — {testimonial.profession}
            </DialogTitle>
            {/* Vidéo */}
            <div className="relative pb-[56.25%]">
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
                title={testimonial.temoin}
                allow="autoplay; encrypted-media"
                allowFullScreen
              />
            </div>
          </DialogContent>
        </Dialog>
      )}
    </>
  )
}
