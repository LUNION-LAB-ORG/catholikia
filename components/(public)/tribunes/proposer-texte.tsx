"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import Title from "@/components/primitives/Title";
import Section from "@/components/primitives/Section";

export default function ProposerTexte() {
  return (
    <Section className="relative bg-black text-white py-12 px-4 sm:py-16 sm:px-8 md:px-12 lg:px-24 overflow-hidden">
      {/* Image décorative uniquement sur desktop */}
      <div className="hidden lg:block absolute bottom-0 left-32 w-72 h-80 z-20">
        <Image
          src="/assets/tribunes/tribune_pray.png"
          alt="Femme en prière"
          fill
          className="object-cover object-top"
          priority
        />
      </div>

      <div className="max-w-6xl mx-auto lg:mb-10 relative">
        {/* Header */}
        <Title className="text-2xl sm:text-3xl text-white md:text-4xl font-bold mb-4 uppercase text-center lg:text-left">
          PROPOSER UN TEXTE
        </Title>
        <p className="text-gray-300 font-medium max-w-3xl mb-12 sm:mb-16 text-center  lg:text-left mx-auto lg:mx-0">
          Nous accueillons les contributions originales de chercheurs, prêtres,
          laïcs ou fidèles engagés qui souhaitent partager leur réflexion sur
          les enjeux contemporains.
        </p>

        {/* Card */}
        <div className="rounded-xl bg-[#212121] p-6 sm:p-8 flex flex-col lg:flex-row lg:justify-end relative gap-6">
          {/* Texte + CTA */}
          <div className="flex flex-col w-full lg:w-[60%] space-y-4 sm:space-y-6 text-center lg:text-left">
            <h3 className="text-lg sm:text-xl font-bold">
              Critères de Publication
            </h3>
            <Button
              variant="default"
              className="bg-primary w-full sm:w-auto self-center lg:self-start hover:bg-yellow-500 text-black font-semibold px-6 py-3 rounded-full"
            >
              ENVOYER UN TEXTE
            </Button>
            <p className="text-sm text-gray-400">
              tribune@notre-site.fr · Réponse sous 15 jours ouvrés
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}
