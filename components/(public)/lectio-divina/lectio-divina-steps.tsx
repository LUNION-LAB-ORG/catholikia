"use client";

import Section from "@/components/primitives/Section";
import Title from "@/components/primitives/Title";
import Image from "next/image";
import LectioDivinaStepCard from "./lectio-divina-step-card";
import { lectioDivinaSteps } from "./constants";

export default function LectioDivinaSteps() {
  return (
    <Section className="text-white font-sans custom-container">
      {/* Titre */}
      <div className="text-center text-black mb-6">
        <Title as="h2" className="text-2xl md:text-3xl lg:text-4xl font-bold uppercase tracking-wider">
          Les 4 Étapes de la Lectio Divina
        </Title>
      </div>

      {/* Image principale avec overlay */}
      <div className="relative h-[50vh] md:h-[65vh] lg:h-[80vh] w-full rounded-2xl overflow-hidden shadow-2xl mb-10">
        <Image
          src="/assets/lectio/lectio_etape.jpg"
          alt="Livre ouvert"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/10" />
        <div className="absolute bottom-0 w-full bg-black/60 text-start px-4 py-4">
          <p className="text-sm md:text-lg lg:text-xl font-semibold leading-relaxed px-8">
            Un cheminement progressif qui nous mène de la lecture à la contemplation,
            dans une rencontre transformante avec la Parole de Dieu.
          </p>
        </div>
      </div>

      {/* Grille des 4 étapes */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {lectioDivinaSteps.map((step, index) => (
          <LectioDivinaStepCard
            key={index}
            title={step.title}
            subtitle={step.subtitle}
            description={step.description}
            iconName={step.iconName}
            color={step.color}
            tag={step.tag}
          />
        ))}
      </div>
    </Section>
  );
}
