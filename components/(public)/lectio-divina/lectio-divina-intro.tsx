"use client";

import Title from "@/components/primitives/Title";

export default function LectioDivinaIntro() {
  return (
    <section className="text-center px-4 md:px-8 lg:px-16 py-12 font-sans">
      {/* Titre principal */}
      <Title className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold uppercase tracking-wide text-gray-900 font-bebas">
        Plongez dans la Parole avec la Lectio Divina
      </Title>

      {/* Sous-titre */}
      <p className="mt-2 text-base sm:text-lg md:text-xl lg:text-2xl font-semibold text-gray-500 max-w-4xl mx-auto">
        Un chemin spirituel de lecture, méditation et prière pour approfondir votre relation avec Dieu
      </p>

      {/* Citation biblique */}
      <blockquote className="mt-5">
        <p className="italic text-lg md:text-xl text-gray-600">
          « Ta parole est une lampe pour mes pas, une lumière sur ma route. »
        </p>
        <footer className="mt-3 text-sm md:text-base text-gray-400 font-semibold">
          — Psaume 119, 105
        </footer>
      </blockquote>
    </section>
  );
}
