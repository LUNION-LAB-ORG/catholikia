"use client";

import LoadingIndicator from "@/components/common/LoadingIndicator";
import Title from "@/components/primitives/Title";
import { useTopCinqContributeursQuery } from "@/features/contributeurs/queries/contributor-list.query";
import Link from "next/link";

const contributors = [
  {
    name: "Mgr Jean Dupont",
    role: "Archevêque de Lyon",
    image: '/assets/tribunes/contributor2.png',
  },
  {
    name: "Dr. Marie Leblanc",
    role: "Théologienne, Université Catholique",
    image: '/assets/tribunes/contributor1.jpg',
  },
  {
    name: "Père Antoine Martin",
    role: "Curé de Saint-Sulpice",
    image: '/assets/tribunes/contributor2.png',
  },
  {
    name: "Prof. Jean-Luc Rousseau",
    role: "Philosophe, Institut Catholique",
    image: '/assets/tribunes/contributor1.jpg',
  },
];

export default function Contributor() {
  const { data, isLoading, isError, error, refetch } = useTopCinqContributeursQuery();
  const topContributors = data?.data

  if (isLoading) {
    return <LoadingIndicator />;
  }

  if (isError) {
    return <div className="text-red-500">Erreur lors du chargement des contributeurs: {error instanceof Error ? error.message : "Erreur inconnue"}</div>;
  }

  return (
    <section className="py-16 px-6 md:px-12 lg:px-24 text-center">
      {/* Titre */}
      <Title className="text-3xl md:text-4xl lg:text-5xl text-start font-extrabold uppercase font-bebas tracking-wide text-gray-900">
        Nos Contributeurs
      </Title>

      {/* Sous-titre */}
      <p className="mt-4 text-base sm:text-lg text-start md:text-xl text-gray-500">
        Des voix autorisées pour éclairer les grands débats de notre temps
      </p>

      {/* Grille des contributeurs */}
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {topContributors?.map((contributor, idx) => (
          <div key={idx} className="flex flex-col items-center text-center">
            {/* Avatar */}
            <Link
              href={`/contributeurs/${contributor.id}`}
              className="w-28 h-28 md:w-32 md:h-32 rounded-full overflow-hidden shadow-md">
              <img
                src={`https://ui-avatars.com/api/?name=${encodeURIComponent(contributor.name)}&background=random&size=128`}
                alt={contributor.name}
                width={128}
                height={128}
                className="object-cover w-full h-full"
              />
            </Link>

            {/* Nom */}
            <Link href={`/contributeurs/${contributor.id}`} className="mt-4 font-bold text-lg md:text-lg text-gray-800">
              {contributor.name}
            </Link>

            {/* Rôle */}
            <p className="text-sm text-gray-500 uppercase tracking-wide">
              {contributor.role}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
