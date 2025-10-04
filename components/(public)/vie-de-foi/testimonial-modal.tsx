'use client'

import Title from "@/components/primitives/Title";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { ITemoignage } from "@/features/vie-de-foi/types/vie-de-foi.type";
import { Divider } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";

export interface Achievement {
  icon: JSX.Element;
  text: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  description: string;
  image: string;
  about: string;
  abouttab?: string[];
  achievements: Achievement[];
}

interface TestimonialModalProps {
  testimonial: ITemoignage | null;
  onClose: () => void;
}

export const TestimonialModal = ({ testimonial, onClose }: TestimonialModalProps) => {
  if (!testimonial) return null;

  return (
    <Dialog open={Boolean(testimonial)} onOpenChange={onClose}>
      <DialogContent
        className="p-4 sm:p-6 bg-background border-none shadow-xl max-h-screen overflow-y-auto min-h-screen sm:max-w-2xl lg:max-w-4xl xl:max-w-6xl">
        <div className="flex flex-col items-center space-y-6">
          <div>
            <div className="size-80 rounded-lg overflow-hidden">
              <Image
                src={testimonial.photo || "/images/default-avatar.png"}
                alt={testimonial.temoin || "Photo de témoignage"}
                className="w-full h-full object-cover"
                width={200}
                height={200}
              />
            </div>
            <DialogTitle asChild>
              <Title
                as="h2"
                className="text-2xl py-5 w-full sm:text-3xl text-primary uppercase tracking-wide text-center font-normal"
              >
                {testimonial.temoin}
              </Title>
            </DialogTitle>
          </div>
          <Divider className="w-full" />
          <div className="space-y-6 w-full px-1 sm:px-4 max-w-md sm:max-w-xl md:max-w-2xl lg:max-w-4xl">
            {/* À propos */}
            <div>
              <div className="text-lg sm:text-xl font-bold mb-3">
                <Title as="h3" className="font-bebas font-normal">À propos</Title>
              </div>
              <p className="font-bold leading-relaxed mt-1">
                {testimonial.about}
              </p>
              {/* <ul className="space-y-2 mt-4">
                {testimonial.realisations?.map((achievement, index) => (
                  <li
                    key={index}
                    className="leading-relaxed flex items-start text-[#595959]"
                  >
                    {achievement}
                  </li>
                ))}
              </ul> */}
            </div>

            {/* Réalisations */}
            <div>
              <div className="text-lg sm:text-xl font-bold mb-3">
                <Title className="font-bebas">Réalisations</Title>
              </div>
              {(
                <ul className="list-disc text-start space-y-1 mt-2 pl-4 sm:pl-6 text-[#595959]">
                  {testimonial.realisations?.map((point, idx) => (
                    <li
                      key={idx}
                      className="leading-relaxed"
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              )}
              <div
                className="flex flex-col sm:flex-row justify-start items-start mt-3 lg:items-center space-y-2 sm:space-y-0 sm:space-x-4">
                <div className="h-32 w-full sm:w-48 rounded-2xl relative overflow-hidden aspect-square">
                  <Image
                    src={"/assets/foi/contact2.jpg"}
                    alt="video"
                    fill
                    className="object-cover rounded-2xl"
                  />
                </div>
                <span className="text-sm sm:text-base">
                  Comment la foi guide mes décisions d'affaires et m'aide à créer un impact positif dans la communauté tech ivoirienne.
                </span>
              </div>
            </div>

            <div className="flex justify-center lg:justify-start mt-4">
              <Button
                asChild
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold py-3 px-8 rounded-full uppercase tracking-wide">
                <Link href={testimonial.video_link ?? "#"} target="_blank" rel="noopener noreferrer">
                  Regarder la vidéo
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
