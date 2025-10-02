"use client";

import Title from "@/components/primitives/Title";
import Image from "next/image";

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
        {contributors.map((c, idx) => (
          <div key={idx} className="flex flex-col items-center text-center">
            {/* Avatar */}
            <div className="w-28 h-28 md:w-32 md:h-32 rounded-full overflow-hidden shadow-md">
              <Image
                src={c.image}
                alt={c.name}
                width={128}
                height={128}
                className="object-cover w-full h-full"
              />
            </div>

            {/* Nom */}
            <h3 className="mt-4 font-bold text-lg md:text-xl text-gray-800">
              {c.name}
            </h3>

            {/* Rôle */}
            <p className="text-sm text-gray-500 uppercase tracking-wide">
              {c.role}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
