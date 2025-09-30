'use client'

import Title from "@/components/primitives/Title";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import Image from "next/image";

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
  testimonial: Testimonial | null;
  isOpen: boolean;
  onClose: () => void;
}

export const TestimonialModal = ({ testimonial, isOpen, onClose }: TestimonialModalProps) => {
  if (!testimonial) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="w-[90vw] sm:w-[80vw] md:w-[70vw] lg:max-w-6xl p-4 sm:p-6 bg-background border-none shadow-xl">
        {/* Ajout du DialogTitle */}
      

        <div className="flex flex-col items-center text-center space-y-6">
          <div className="w-40 h-40 rounded-lg overflow-hidden">
            <Image
              src={testimonial.image}
              alt={testimonial.name}
              className="w-full h-full object-cover"
              width={200}
              height={200}
            />
          </div>
            <DialogTitle asChild>
          <h2 className="text-2xl border-b-1 py-2 w-full sm:text-3xl font-bold text-primary uppercase tracking-wide text-center">
            {testimonial.name}
          </h2>
        </DialogTitle>

          <div className="space-y-6 w-full">
            {/* À propos */}
            <div>
              <div className="text-lg sm:text-xl font-bold mb-3">
                <Title className="font-bebas">À propos</Title>
              </div>
              <p className="text-testimonial-text font-bold leading-relaxed">
                {testimonial.about}
              </p>
              <ul className="space-y-2">
                {testimonial.achievements.map((achievement, index) => (
                  <li
                    key={index}
                    className="text-testimonial-text leading-relaxed flex items-start"
                  >
                    <span className="text-primary mr-2">{achievement.icon}</span>
                    {achievement.text}
                  </li>
                ))}
              </ul>
            </div>

            {/* Réalisations */}
            <div>
              <div className="text-lg sm:text-xl font-bold mb-3">
                <Title className="font-bebas">Réalisations</Title>
              </div>
              {testimonial.abouttab && (
                <ul className="list-disc text-start space-y-1 mt-2 pl-4 sm:pl-6">
                  {testimonial.abouttab.map((point, idx) => (
                    <li
                      key={idx}
                      className="text-testimonial-text leading-relaxed"
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              )}
              <div className="flex flex-col sm:flex-row justify-start items-start mt-3 lg:items-center space-y-2 sm:space-y-0 sm:space-x-4">
                <div className="h-32 w-full sm:w-48 rounded-2xl relative bg-red-600 overflow-hidden">
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
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold py-3 px-8 rounded-full uppercase tracking-wide">
                Regarder la vidéo
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
