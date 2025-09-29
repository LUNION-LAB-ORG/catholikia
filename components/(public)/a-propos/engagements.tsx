"use client";

import React from "react";
import Image from "next/image";
import Title from "@/components/primitives/Title";

interface EngagementCard {
  type: "image";
  image: string;
  title: string;
  description: string;
  variant: "light" | "dark" | "accent";
}

const engagements: EngagementCard[] = [
  {
    type: "image",
    image: "/assets/about/engagemen1.jpg",
    title: "FOI VIVANTE",
    description:
      "Nourrissez votre relation avec Dieu à travers la prière, les sacrements et l'écoute de Sa Parole.",
    variant: "light",
  },
  {
    type: "image",
   image: "/assets/about/engagemen2.png",
    title: "CHEMIN DE CROISSANCE SPIRITUELLE",
    description:
      "Progressez dans votre vie chrétienne grâce à la formation et la méditation.",
    variant: "dark",
  },
  {
    type: "image",
     image: "/assets/about/engagemen3.jpg",
    title: "VIE COMMUNAUTAIRE",
    description:
      "Partagez votre chemin de foi aux côtés d'une communauté unie et fraternelle.",
    variant: "dark",
  },
  {
    type: "image",
   image: "/assets/about/engagemen4.png",
    title: "SERVICE ET ENGAGEMENT",
    description:
      "Mettez vos talents au service des autres et participez à la mission de l'Église.",
    variant: "light",
  },
  // ligne 2
  {
    type: "image",
    image: "/assets/about/engagemen5.png",
    title: "SOLIDARITÉ",
    description:
      "Chaque geste de solidarité témoigne de la présence du Christ dans le monde.",
    variant: "light",
  },
  {
    type: "image",
   image: "/assets/about/engagemen6.jpg",
    title: "PARTAGE",
    description:
      "Partagez vos expériences et grandissez ensemble dans l’amour du Christ.",
    variant: "dark",
  },
  {
    type: "image",
   image: "/assets/about/engagemen7.png",
    title: "MISSION",
    description:
      "Annoncez l’Évangile et contribuez à faire rayonner la foi dans le monde.",
    variant: "light",
  },
  {
    type: "image",
    image: "/assets/about/engagemen8.jpg",
    title: "FRATERNITÉ",
    description:
      "Construisons des relations fraternelles solides et durables autour de la foi.",
    variant: "dark",
  },
];

const Engagements = () => {
  return (
    <section className="min-h-screen bg-background px-6 py-16 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <Title className="mb-16 text-4xl font-bold  lg:text-3xl tracking-tight text-start">
          NOS ENGAGEMENTS
        </Title>

        {/* grille 4 colonnes */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {engagements.map((engagement, index) => (
            <div
              key={index}
              className="relative rounded-3xl ring-1 p-8 h-72 flex flex-col justify-end overflow-hidden"
            >
              {/* Image de fond */}
              <Image
                src={engagement.image}
                alt={engagement.title || "Engagement illustration"}
                fill
                className="object-cover"
              />

              {/* Overlay */}
             

              {/* Texte */}
             
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Engagements;
