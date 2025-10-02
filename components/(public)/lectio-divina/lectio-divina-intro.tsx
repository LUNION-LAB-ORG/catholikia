"use client";

import Section from "@/components/primitives/Section";
import Title from "@/components/primitives/Title";
import { fontSatisfy } from "@/config/fonts";
import { cn } from "@/lib/utils";

export default function LectioDivinaIntro() {
  return (
    <Section size="sm" className={cn("font-sans custom-container space-y-8", fontSatisfy.variable)}>
      {/* Titre principal */}
      <Title className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl uppercase tracking-wide text-[#151515]">
        Plongez dans la Parole avec la Lectio Divina
      </Title>

      {/* Sous-titre */}
      <p className="mt-2 text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-[#818C98] text-center">
        Un chemin spirituel de lecture, méditation et prière pour approfondir votre relation avec Dieu
      </p>

      {/* Citation biblique */}
      <blockquote className="text-center">
        <p className="text-lg md:text-xl text-gray-600 font-[--font-satisfy]">
          « Ta parole est une lampe pour mes pas, une lumière sur ma route. »
        </p>
      </blockquote>
      <cite className="text-sm md:text-base text-gray-400 font-semibold mt-4 text-center block">
        — Psaume 119, 105
      </cite>
    </Section>
  );
}
